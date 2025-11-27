// src/app/api/search/route.js
import { NextResponse } from 'next/server';
import { query } from '@/lib/db-search';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const userQuery = searchParams.get('q');

  console.log('🎯 UNIVERSAL SEARCH for:', userQuery);

  if (!userQuery || userQuery.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const searchTerm = `%${userQuery}%`;

  try {
    let allResults = [];

    // ВСЕ КОЛЛЕКЦИИ ДЛЯ ПОИСКА
    const collections = [
      { 
        table: 'pages', 
        type: 'Страница', 
        urlPrefix: '', 
        titleField: 'title', 
        slugField: 'slug',
        searchFields: ['title', 'slug', 'sections_content', 'description'],
        hasPreview: false
      },
      { 
        table: 'cases', 
        type: 'Кейс', 
        urlPrefix: '/portfolio', 
        titleField: 'title', 
        slugField: 'slug',
        searchFields: ['title', 'slug', 'sections_content', 'preview_title'],
        hasPreview: true,
        previewFields: ['preview_title']
      },
      { 
        table: 'posts', 
        type: 'Блог', 
        urlPrefix: '/blog', 
        titleField: 'title', 
        slugField: 'slug',
        searchFields: ['title', 'slug', 'sections_content', 'preview_title', 'preview_description'],
        hasPreview: true,
        previewFields: ['preview_title', 'preview_description']
      },
      { 
        table: 'services', 
        type: 'Услуга', 
        urlPrefix: '/services', 
        titleField: 'title', 
        slugField: 'slug',
        searchFields: ['title', 'slug', 'sections_content', 'description'],
        hasPreview: false
      },
      { 
        table: 'faqs', 
        type: 'FAQ', 
        urlPrefix: '/faq', 
        titleField: 'question', 
        slugField: 'id::text',
        searchFields: ['question', 'sections_content'],
        hasPreview: false
      }
    ];

    // 1. ПОИСК В ОСНОВНЫХ КОЛЛЕКЦИЯХ
    console.log('🔍 Phase 1: Main collections search...');
    for (const { table, type, urlPrefix, titleField, slugField, searchFields, hasPreview, previewFields } of collections) {
      try {
        const conditions = searchFields.map(field => 
          `${field} ILIKE $1`
        ).join(' OR ');

        let sqlQuery = `
          SELECT 
            id::text, 
            ${titleField} as title,
            ${slugField} as url_slug,
            sections_content,
            LENGTH(sections_content) as content_length,
            $2 as type,
            CASE 
              WHEN ${titleField} ILIKE $1 THEN 1.0
              WHEN sections_content ILIKE $1 THEN 0.9
              WHEN ${slugField} ILIKE $1 THEN 0.8
              ELSE 0.5
            END as rank,
            CASE 
              WHEN ${titleField} ILIKE $1 THEN 'title'
              WHEN sections_content ILIKE $1 THEN 'content'
              WHEN ${slugField} ILIKE $1 THEN 'slug'
              ELSE 'other'
            END as match_field
        `;

        if (hasPreview && previewFields) {
          sqlQuery += `, ${previewFields.join(', ')}`;
          
          sqlQuery = `
            SELECT 
              id::text, 
              ${titleField} as title,
              ${slugField} as url_slug,
              sections_content,
              LENGTH(sections_content) as content_length,
              $2 as type,
              CASE 
                WHEN ${titleField} ILIKE $1 THEN 1.0
                ${previewFields.includes('preview_title') ? 'WHEN preview_title ILIKE $1 THEN 0.95' : ''}
                WHEN sections_content ILIKE $1 THEN 0.9
                ${previewFields.includes('preview_description') ? 'WHEN preview_description ILIKE $1 THEN 0.85' : ''}
                WHEN ${slugField} ILIKE $1 THEN 0.8
                ELSE 0.5
              END as rank,
              CASE 
                WHEN ${titleField} ILIKE $1 THEN 'title'
                ${previewFields.includes('preview_title') ? 'WHEN preview_title ILIKE $1 THEN \'preview_title\'' : ''}
                WHEN sections_content ILIKE $1 THEN 'content'
                ${previewFields.includes('preview_description') ? 'WHEN preview_description ILIKE $1 THEN \'preview_description\'' : ''}
                WHEN ${slugField} ILIKE $1 THEN 'slug'
                ELSE 'other'
              END as match_field,
              ${previewFields.join(', ')}
          `;
        }

        sqlQuery += `
          FROM ${table} 
          WHERE (${conditions})
          ORDER BY rank DESC, content_length DESC
          LIMIT 10
        `;

        const results = await query(sqlQuery, [searchTerm, type]);

        results.forEach(item => {
          let snippetText = item.sections_content || item.title;
          
          if (hasPreview) {
            if (item.match_field === 'preview_title' && item.preview_title) {
              snippetText = item.preview_title;
            } else if (item.match_field === 'preview_description' && item.preview_description) {
              snippetText = item.preview_description;
            }
          }
          
          const snippet = extractSnippetWithHighlight(snippetText, userQuery);
          
          allResults.push({
            id: item.id,
            title: item.title,
            url: urlPrefix ? `${urlPrefix}/${item.url_slug}` : `/${item.url_slug}`,
            type: item.type,
            rank: item.rank,
            snippet: snippet,
            source: 'main',
            matchType: item.match_field
          });
        });

        console.log(`   ✅ ${table}: ${results.length} items`);

      } catch (error) {
        console.log(`   ⚠️ Search in ${table} failed:`, error.message);
      }
    }

    // 2. ПОИСК В БЛОКАХ ВСЕХ КОЛЛЕКЦИЙ
    if (allResults.length < 15) {
      console.log('🔍 Phase 2: Block tables search...');
      
      const blockConfigs = [
        { 
          prefix: 'pages_blocks', 
          collection: 'pages', 
          type: 'Страница', 
          urlPrefix: '', 
          titleField: 'title', 
          slugField: 'slug',
          joinCondition: 'b._parent_id::integer = c.id' // ИСПРАВЛЕНИЕ ДЛЯ PAGES
        },
        { 
          prefix: 'cases_blocks', 
          collection: 'cases', 
          type: 'Кейс', 
          urlPrefix: '/portfolio', 
          titleField: 'title', 
          slugField: 'slug',
          joinCondition: 'b._parent_id = c.id' // ИСПРАВЛЕНИЕ ДЛЯ CASES
        },
        { 
          prefix: 'posts_blocks', 
          collection: 'posts', 
          type: 'Блог', 
          urlPrefix: '/blog', 
          titleField: 'title', 
          slugField: 'slug',
          joinCondition: 'b._parent_id = c.id::text' // ДЛЯ POSTS
        }
      ];

      const blockTypes = [
        { table: 'hero_section', fields: ['subtitle', 'description', 'button_text'] },
        { table: 'text_section', fields: ['subtitle', 'description'] },
        { table: 'about_project_section', fields: ['project_title', 'project_description', 'client', 'case_title', 'case_description'] },
        { table: 'client_section', fields: ['content_title', 'client_title', 'client_subtitle', 'client_description'] },
        { table: 'strategy_section', fields: ['title', 'description', 'strategy_title', 'conclusion'] },
        { table: 'goals_section', fields: ['title', 'description'] },
        { table: 'business_section', fields: ['title', 'subtitle'] },
        { table: 'author_section', fields: ['author_name', 'author_role', 'button_text'] }
      ];

      for (const { prefix, collection, type, urlPrefix, titleField, slugField, joinCondition } of blockConfigs) {
        for (const { table, fields } of blockTypes) {
          const fullTableName = `${prefix}_${table}`;
          
          try {
            const tableExists = await query(
              `SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = $1)`,
              [fullTableName]
            );

            if (!tableExists[0]?.exists) continue;

            // Проверяем есть ли данные в таблице
            const hasData = await query(
              `SELECT EXISTS (SELECT 1 FROM ${fullTableName} LIMIT 1) as has_data`
            );

            if (!hasData[0]?.has_data) {
              console.log(`   ⚠️ Table ${fullTableName} exists but is EMPTY`);
              continue;
            }

            const conditions = fields.map(field => `b.${field} ILIKE $1`).join(' OR ');

            const blockResults = await query(
              `SELECT DISTINCT
                c.id::text,
                c.${titleField} as title,
                c.${slugField} as slug,
                $2 as type,
                0.7 as rank,
                ${fields.map(field => `b.${field}`).join(', ')}
              FROM ${fullTableName} b
              JOIN ${collection} c ON ${joinCondition}
              WHERE (${conditions})
              LIMIT 5`,
              [searchTerm, type]
            );

            blockResults.forEach(item => {
              const allText = fields.map(field => item[field]).filter(Boolean).join(' ');
              const snippet = extractSnippetWithHighlight(allText, userQuery);
              
              const existingIndex = allResults.findIndex(r => 
                r.id === item.id && r.type === type
              );
              
              if (existingIndex === -1) {
                allResults.push({
                  id: item.id,
                  title: item.title,
                  url: urlPrefix ? `${urlPrefix}/${item.slug}` : `/${item.slug}`,
                  type: type,
                  rank: 0.7,
                  snippet: snippet,
                  source: `${collection}_block`,
                  matchType: 'block_content'
                });
              }
            });

            console.log(`   ✅ ${fullTableName}: ${blockResults.length} items`);

          } catch (error) {
            if (!error.message.includes('does not exist')) {
              console.log(`   ⚠️ Search in ${fullTableName} failed:`, error.message);
            }
          }
        }
      }
    }

    // 3. ПОИСК В ДОЧЕРНИХ ТАБЛИЦАХ (ВКЛЮЧАЯ ЦЕЛИ)
    if (allResults.length < 10) {
      console.log('🔍 Phase 3: Child tables search (including goals)...');
      
      const childConfigs = [
        { 
          prefix: 'pages_blocks', 
          collection: 'pages', 
          type: 'Страница', 
          urlPrefix: '', 
          titleField: 'title', 
          slugField: 'slug',
          joinCondition: 's._parent_id::integer = p.id' // ИСПРАВЛЕНИЕ ДЛЯ PAGES
        },
        { 
          prefix: 'cases_blocks', 
          collection: 'cases', 
          type: 'Кейс', 
          urlPrefix: '/portfolio', 
          titleField: 'title', 
          slugField: 'slug',
          joinCondition: 's._parent_id = c.id::text' // ДЛЯ CASES
        },
        { 
          prefix: 'posts_blocks', 
          collection: 'posts', 
          type: 'Блог', 
          urlPrefix: '/blog', 
          titleField: 'title', 
          slugField: 'slug',
          joinCondition: 's._parent_id = c.id::text' // ДЛЯ POSTS
        }
      ];

      const childTables = [
        { table: 'hero_section_stamps', field: 'text', parent: 'hero_section' },
        { table: 'client_section_content_items', field: 'text', parent: 'client_section' },
        { table: 'strategy_section_strategy_items', fields: ['title', 'description'], parent: 'strategy_section' },
        { table: 'goals_section_goals', fields: ['title', 'description'], parent: 'goals_section' }, // КАРТОЧКИ ЦЕЛЕЙ
        { table: 'business_section_tasks', field: 'text', parent: 'business_section' },
        { table: 'author_section_author_description', field: 'text', parent: 'author_section' }
      ];

      for (const { prefix, collection, type, urlPrefix, titleField, slugField, joinCondition } of childConfigs) {
        for (const { table, field, fields, parent } of childTables) {
          const fullTableName = `${prefix}_${table}`;
          
          try {
            const tableExists = await query(
              `SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = $1)`,
              [fullTableName]
            );

            if (!tableExists[0]?.exists) continue;

            // Проверяем есть ли данные в таблице
            const hasData = await query(
              `SELECT EXISTS (SELECT 1 FROM ${fullTableName} LIMIT 1) as has_data`
            );

            if (!hasData[0]?.has_data) {
              console.log(`   ⚠️ Table ${fullTableName} exists but is EMPTY`);
              continue;
            }

            console.log(`   🔍 Searching in ${fullTableName}...`);

            const searchFields = fields || [field];
            const conditions = searchFields.map(f => `g.${f} ILIKE $1`).join(' OR ');

            // ИСПРАВЛЕННЫЙ JOIN ДЛЯ ЦЕЛЕЙ И ДРУГИХ ДОЧЕРНИХ ТАБЛИЦ
            const childResults = await query(
              `SELECT DISTINCT
                p.id::text,
                p.${titleField} as title,
                p.${slugField} as slug,
                $2 as type,
                0.6 as rank,
                ${searchFields.map(f => `g.${f}`).join(', ')}
              FROM ${fullTableName} g
              JOIN ${prefix}_${parent} s ON g._parent_id = s.id
              JOIN ${collection} p ON ${joinCondition.replace('c.', 'p.').replace('s._parent_id', 's._parent_id')}
              WHERE (${conditions})
              LIMIT 5`,
              [searchTerm, type]
            );

            console.log(`   ✅ Found in ${fullTableName}: ${childResults.length} items`);
            
            childResults.forEach(item => {
              const allText = searchFields.map(f => item[f]).filter(Boolean).join(' ');
              const snippet = extractSnippetWithHighlight(allText, userQuery);
              
              const existingIndex = allResults.findIndex(r => 
                r.id === item.id && r.type === type
              );
              
              if (existingIndex === -1) {
                allResults.push({
                  id: item.id,
                  title: item.title,
                  url: urlPrefix ? `${urlPrefix}/${item.slug}` : `/${item.slug}`,
                  type: type,
                  rank: 0.6,
                  snippet: snippet,
                  source: `${collection}_${parent}_child`,
                  matchType: `${parent}_item`
                });
              }
            });

            if (childResults.length > 0 && table.includes('goal')) {
              console.log(`   🎯 GOALS FOUND in ${fullTableName}: ${childResults.length} items`);
            }

          } catch (error) {
            console.log(`   ⚠️ Search in ${fullTableName} failed:`, error.message);
            
            // Дополнительная диагностика для целей
            if (table.includes('goal')) {
              console.log(`   🔧 Debug goals in ${fullTableName}:`, {
                prefix,
                collection,
                parent,
                joinCondition
              });
            }
          }
        }
      }
    }

    // 4. ПОИСК В ГЛОБАЛЬНЫХ ТАБЛИЦАХ
    console.log('🔍 Phase 4: Global tables search...');
    
    const globals = [
      { table: 'home', type: 'Главная', url: '/', searchFields: ['title', 'portfolioTitle', 'portfolioDescription', 'aboutCompanySection'] },
      { table: 'header', type: 'Шапка', url: '/', searchFields: ['phoneNumber', 'ctaText'] },
      { table: 'blog', type: 'Блог', url: '/blog', searchFields: ['title'] },
      { table: 'faq', type: 'FAQ', url: '/faq', searchFields: ['title', 'description'] }
    ];

    for (const { table, type, url, searchFields } of globals) {
      try {
        const tableExists = await query(
          `SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = $1)`,
          [table]
        );

        if (!tableExists[0]?.exists) continue;

        const conditions = searchFields.map(field => 
          `json_data->>'${field}' ILIKE $1`
        ).join(' OR ');

        const globalResults = await query(
          `SELECT 
            'global' as id,
            $2 as title,
            $3 as url,
            $2 as type,
            0.8 as rank,
            'global' as source,
            json_data::text as content
          FROM ${table} 
          WHERE 
            jsonb_typeof(json_data) IS NOT NULL AND
            (${conditions})
          LIMIT 3`,
          [searchTerm, type, url]
        );

        globalResults.forEach(item => {
          const snippet = extractSnippetWithHighlight(item.content, userQuery);
          
          allResults.push({
            id: item.id + '-' + table,
            title: item.title,
            url: item.url,
            type: item.type,
            rank: item.rank,
            snippet: snippet,
            source: 'global',
            matchType: 'global_content'
          });
        });

        console.log(`   ✅ ${table}: ${globalResults.length} items`);

      } catch (error) {
        console.log(`   ⚠️ Search in global ${table} failed:`, error.message);
      }
    }

    // 5. ПОИСК В JSON СТРУКТУРАХ ГЛОБАЛОВ
    console.log('🔍 Phase 5: Deep global JSON search...');
    
    const globalDeepSearch = [
      { 
        table: 'home', 
        type: 'Главная', 
        url: '/',
        arrays: [
          { path: 'weCreateItems', fields: ['title', 'description'] },
          { path: 'portfolioItems', fields: ['title'] },
          { path: 'mobileAppItems', fields: ['title'] },
          { path: 'technologies', fields: ['type'] }
        ]
      },
      { 
        table: 'header', 
        type: 'Шапка', 
        url: '/',
        arrays: [
          { path: 'nav', fields: ['title'] },
          { path: 'defaultDropdownContent', fields: ['title'] }
        ]
      },
      { 
        table: 'faq', 
        type: 'FAQ', 
        url: '/faq',
        arrays: [
          { path: 'items', fields: ['question'] }
        ]
      }
    ];

    for (const { table, type, url, arrays } of globalDeepSearch) {
      try {
        const tableExists = await query(
          `SELECT EXISTS (SELECT FROM information_schema.tables WHERE table_schema = 'public' AND table_name = $1)`,
          [table]
        );

        if (!tableExists[0]?.exists) continue;

        for (const { path, fields } of arrays) {
          const conditions = fields.map(field => 
            `EXISTS (
              SELECT 1 FROM jsonb_array_elements(json_data->'${path}') AS item
              WHERE item->>'${field}' ILIKE $1
            )`
          ).join(' OR ');

          const deepResults = await query(
            `SELECT 
              'global' as id,
              $2 as title,
              $3 as url,
              $2 as type,
              0.7 as rank,
              'global_deep' as source,
              json_data::text as content
            FROM ${table} 
            WHERE 
              jsonb_typeof(json_data) IS NOT NULL AND
              json_data ? '${path}' AND
              (${conditions})
            LIMIT 2`,
            [searchTerm, `${type} (${path})`, url]
          );

          deepResults.forEach(item => {
            const snippet = extractSnippetWithHighlight(item.content, userQuery);
            
            allResults.push({
              id: item.id + '-' + table + '-' + path,
              title: item.title,
              url: item.url,
              type: item.type,
              rank: item.rank,
              snippet: snippet,
              source: 'global_deep',
              matchType: `global_${path}`
            });
          });
        }

      } catch (error) {
        console.log(`   ⚠️ Deep search in global ${table} failed:`, error.message);
      }
    }

    // ФИНАЛЬНАЯ ОБРАБОТКА
    const uniqueResults = allResults
      .filter((item, index, self) => 
        index === self.findIndex(t => t.id === item.id && t.type === item.type)
      )
      .sort((a, b) => b.rank - a.rank)
      .slice(0, 25);

    console.log(`🎯 FINAL: ${uniqueResults.length} results`);
    console.log('📊 Sources:', 
      uniqueResults.reduce((acc, item) => {
        acc[item.source] = (acc[item.source] || 0) + 1;
        return acc;
      }, {})
    );

    return NextResponse.json({ 
      results: uniqueResults,
      stats: {
        query: userQuery,
        total: uniqueResults.length,
        sources: uniqueResults.reduce((acc, item) => {
          acc[item.source] = (acc[item.source] || 0) + 1;
          return acc;
        }, {})
      }
    });

  } catch (error) {
    console.error('❌ Universal search error:', error);
    return NextResponse.json({ results: [] });
  }
}

// Функция для сниппетов с подсветкой
function extractSnippetWithHighlight(content, query, maxLength = 120) {
  if (!content) return null;
  
  const words = query.toLowerCase().split(' ').filter(word => word.length > 1);
  
  let bestMatch = { index: -1, word: '' };
  
  for (const word of words) {
    const index = content.toLowerCase().indexOf(word);
    if (index !== -1 && (bestMatch.index === -1 || index < bestMatch.index)) {
      bestMatch = { index, word };
    }
  }
  
  if (bestMatch.index !== -1) {
    const start = Math.max(0, bestMatch.index - 30);
    const end = Math.min(content.length, bestMatch.index + bestMatch.word.length + 90);
    let snippet = content.substring(start, end);
    
    const regex = new RegExp(`(${words.join('|')})`, 'gi');
    snippet = snippet.replace(regex, '**$1**');
    
    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';
    
    return snippet;
  }
  
  return content.substring(0, maxLength) + '...';
}