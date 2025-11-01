import path from 'path';
import { buildConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { postgresAdapter } from '@payloadcms/db-postgres';
import type { Block, CollectionConfig } from 'payload';

// --- БЛОКИ ДЛЯ КОНТЕНТА КЕЙСОВ И СТРАНИЦ ---
const caseBlocks: Block[] = [
  {
    slug: 'heroSection',
    labels: {
      singular: 'Главная секция',
      plural: 'Главные секции',
    },
    fields: [
      {
        name: 'blockId',
        label: 'ID блока (для якорных ссылок, латиница)',
        type: 'text',
        required: true,
        defaultValue: 'hero'
      },
      {
        name: 'title',
        label: 'Заголовок',
        type: 'text',
        required: true,
      },
      {
        name: 'subtitle',
        label: 'Подзаголовок',
        type: 'text',
        required: true,
      },
      {
        name: 'description',
        label: 'Описание',
        type: 'textarea',
        required: true,
      },
      {
        name: 'stamps',
        label: 'Метки',
        type: 'array',
        fields: [
          {
            name: 'text',
            label: 'Текст метки',
            type: 'text',
            required: true,
          },
        ],
      },
      {
        name: 'image',
        label: 'Изображение',
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
      {
        name: 'buttonText',
        label: 'Текст кнопки',
        type: 'text',
        defaultValue: 'Рассказываем о проекте',
      },
    ],
  },
  {
    slug: 'aboutProjectSection',
    labels: {
      singular: 'О проекте',
      plural: 'Секции "О проекте"',
    },
    fields: [
      {
        name: 'blockId',
        label: 'ID блока (для якорных ссылок, латиница)',
        type: 'text',
        required: true,
        defaultValue: 'about-project'
      },
      {
        name: 'projectTitle',
        label: 'Заголовок "О проекте"',
        type: 'text',
        required: true,
      },
      {
        name: 'projectDescription',
        label: 'Описание проекта',
        type: 'textarea',
        required: true,
      },
      {
        name: 'client',
        label: 'Клиент',
        type: 'text',
        required: true,
      },
      {
        name: 'status',
        label: 'Статус',
        type: 'text',
        required: true,
      },
      {
        name: 'caseTitle',
        label: 'Заголовок кейса',
        type: 'text',
        required: true,
      },
      {
        name: 'caseDescription',
        label: 'Описание кейса',
        type: 'textarea',
        required: true,
      },
    ],
  },
  {
    slug: 'clientSection',
    labels: {
      singular: 'О клиенте и содержание',
      plural: 'Секции "О клиенте"',
    },
    fields: [
      {
        name: 'blockId',
        label: 'ID блока (для якорных ссылок, латиница)',
        type: 'text',
        required: true,
        defaultValue: 'client'
      },
      {
        name: 'contentTitle',
        label: 'Заголовок содержания',
        type: 'text',
        required: true,
      },
      {
        name: 'contentItems',
        label: 'Пункты содержания (якорные ссылки)',
        type: 'array',
        fields: [
          {
            name: 'text',
            label: 'Текст пункта',
            type: 'text',
            required: true,
          },
          {
            name: 'anchorId',
            label: 'ID якоря (латиница, без пробелов)',
            type: 'text',
            required: true,
          },
        ],
      },
      {
        name: 'clientImage',
        label: 'Изображение клиента',
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
      {
        name: 'clientImageDescription',
        label: 'Описание под изображением клиента',
        type: 'text',
        required: true,
        defaultValue: 'Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий.'
      },
      {
        name: 'clientTitle',
        label: 'Заголовок о клиенте',
        type: 'text',
        required: true,
      },
      {
        name: 'clientSubtitle',
        label: 'Подзаголовок клиента',
        type: 'text',
        required: true,
      },
      {
        name: 'clientDescription',
        label: 'Описание клиента',
        type: 'textarea',
        required: true,
      },
      {
        name: 'layoutImage',
        label: 'Изображение макета',
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
      {
        name: 'layoutImageDescription',
        label: 'Описание под изображением макета',
        type: 'text',
        required: true,
        defaultValue: 'Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий.'
      },
    ],
  },
  {
    slug: 'strategySection',
    labels: {
      singular: 'Стратегические решения',
      plural: 'Стратегические решения',
    },
    fields: [
      {
        name: 'blockId',
        label: 'ID блока (для якорных ссылок, латиница)',
        type: 'text',
        required: true,
        defaultValue: 'strategy'
      },
      {
        name: 'title',
        label: 'Заголовок',
        type: 'text',
        required: true,
      },
      {
        name: 'description',
        label: 'Описание',
        type: 'textarea',
        required: true,
      },
      {
        name: 'strategyTitle',
        label: 'Заголовок стратегии (Наша стратегия базируется на...)',
        type: 'text',
        required: true,
        defaultValue: 'Наша стратегия базируется на трех китах:'
      },
      {
        name: 'strategyItems',
        label: 'Стратегические пункты',
        type: 'array',
        fields: [
          {
            name: 'title',
            label: 'Заголовок стратегии',
            type: 'text',
            required: true,
          },
          {
            name: 'description',
            label: 'Описание стратегии',
            type: 'textarea',
            required: true,
          },
        ],
      },
      {
        name: 'conclusion',
        label: 'Заключение',
        type: 'textarea',
        required: true,
      },
      {
        name: 'strategyImage',
        label: 'Изображение стратегии',
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
      {
        name: 'imageDescription',
        label: 'Описание под изображением',
        type: 'text',
        required: true,
        defaultValue: 'Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий.'
      },
      {
        name: 'processTitle',
        label: 'Заголовок процесса реализации',
        type: 'text',
        required: true,
        defaultValue: 'Процесс реализации'
      },
      {
        name: 'processDescription',
        label: 'Описание процесса реализации',
        type: 'textarea',
        required: true,
      },
    ],
  },
  {
    slug: 'goalsSection',
    labels: {
      singular: 'Секция целей',
      plural: 'Секции целей',
    },
    fields: [
      {
        name: 'blockId',
        label: 'ID блока (для якорных ссылок, латиница)',
        type: 'text',
        required: true,
        defaultValue: 'goals'
      },
      {
        name: 'title',
        label: 'Заголовок',
        type: 'text',
        required: true,
      },
      {
        name: 'description',
        label: 'Описание',
        type: 'textarea',
        required: true,
      },
      {
        name: 'goals',
        label: 'Цели',
        type: 'array',
        fields: [
          {
            name: 'title',
            label: 'Заголовок цели',
            type: 'text',
            required: true,
          },
          {
            name: 'description',
            label: 'Описание цели',
            type: 'textarea',
            required: true,
          },
          {
            name: 'isLight',
            label: 'Светлая карточка',
            type: 'checkbox',
            defaultValue: false,
          },
        ],
      },
    ],
  },
  {
    slug: 'businessSection',
    labels: {
      singular: 'Бизнес-секция',
      plural: 'Бизнес-секции',
    },
    fields: [
      {
        name: 'blockId',
        label: 'ID блока (для якорных ссылок, латиница)',
        type: 'text',
        required: true,
        defaultValue: 'business'
      },
      {
        name: 'title',
        label: 'Заголовок',
        type: 'text',
        required: true,
      },
      {
        name: 'subtitle',
        label: 'Подзаголовок',
        type: 'text',
        required: true,
      },
      {
        name: 'tasks',
        label: 'Бизнес-задачи',
        type: 'array',
        fields: [
          {
            name: 'text',
            label: 'Текст задачи',
            type: 'text',
            required: true,
          },
          {
            name: 'isLight',
            label: 'Светлая карточка',
            type: 'checkbox',
            defaultValue: false,
          },
        ],
      },
    ],
  },
  {
    slug: 'authorSection',
    labels: {
      singular: 'Секция автора',
      plural: 'Секции автора',
    },
    fields: [
      {
        name: 'blockId',
        label: 'ID блока (для якорных ссылок, латиница)',
        type: 'text',
        required: true,
        defaultValue: 'author'
      },
      {
        name: 'authorImage',
        label: 'Фото автора',
        type: 'upload',
        relationTo: 'media',
        required: true,
      },
      {
        name: 'authorName',
        label: 'Имя автора',
        type: 'text',
        required: true,
      },
      {
        name: 'authorRole',
        label: 'Должность автора',
        type: 'text',
        required: true,
      },
      {
        name: 'authorDescription',
        label: 'Описание автора',
        type: 'array',
        fields: [
          {
            name: 'text',
            label: 'Текст описания',
            type: 'text',
            required: true,
          },
        ],
      },
      {
        name: 'buttonText',
        label: 'Текст кнопки',
        type: 'text',
        defaultValue: 'Написать',
      },
    ],
  },
];

// --- КОНФИГУРАЦИЯ ---
export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || 'postgresql://postgres:postgres@localhost:5432/postgres',
      ssl: process.env.NODE_ENV !== 'production' ? { rejectUnauthorized: false } : undefined,
    },
    migrationDir: path.resolve(__dirname, 'migrations'),
  }),
  
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || 'http://localhost:3000',
  secret: process.env.PAYLOAD_SECRET || 'SOME_DEFAULT_SECRET_FOR_BUILD',
  admin: {
    user: 'users',
    meta: {
      titleSuffix: ' - Double Systems CMS',
    },
  },

  graphQL: { disable: true },

  collections: [
    // 1. Пользователи (USERS)
    {
      slug: 'users',
      auth: true,
      fields: [{ name: 'name', type: 'text', label: 'Имя пользователя', required: true }],
    },

    // 2. Медиа
    {
      slug: 'media',
      upload: true,
      access: { read: () => true },
      fields: [
        { name: 'alt', label: 'Альтернативный текст', type: 'text', required: true },
      ],
    },

    // 3. Теги
    {
      slug: 'tags',
      labels: { singular: 'Тег', plural: 'Теги' },
      fields: [
        { name: 'title', label: 'Название тега', type: 'text', required: true, unique: true },
      ],
    },

    // 4. СТРАНИЦЫ (НОВАЯ КОЛЛЕКЦИЯ)
    {
      slug: 'pages',
      labels: { singular: 'Страница', plural: 'Страницы' },
      fields: [
        { 
          name: 'title', 
          label: 'Название страницы', 
          type: 'text', 
          required: true 
        },
        { 
          name: 'slug', 
          label: 'URL слаг', 
          type: 'text', 
          unique: true, 
          required: true,
          admin: { 
            position: 'sidebar',
            description: 'Должен совпадать с названием папки в app/(site) (например: about-us, prices, portfolio и т.д.)'
          } 
        },
        {
          name: 'description',
          label: 'Мета-описание',
          type: 'textarea',
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'sections',
          label: 'Секции страницы',
          type: 'blocks',
          blocks: caseBlocks,
        },
        {
          name: 'showPortfolio',
          label: 'Показывать секцию портфолио в конце',
          type: 'checkbox',
          defaultValue: false,
          admin: {
            position: 'sidebar',
          },
        },
      ],
    } as CollectionConfig,

    // 5. ПОРТФОЛИО (КЕЙСЫ)
    {
      slug: 'cases',
      labels: { singular: 'Кейс', plural: 'Портфолио (кейсы)' },
      fields: [
        { name: 'title', label: 'Название', type: 'text', required: true },
        { name: 'slug', label: 'Слаг', type: 'text', unique: true, required: true, admin: { position: 'sidebar' } },
        {
          name: 'description',
          label: 'Краткое описание',
          type: 'textarea',
          required: true,
        },
        {
          name: 'tags',
          label: 'Теги',
          type: 'relationship',
          relationTo: 'tags',
          hasMany: true,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'featuredImage',
          label: 'Главное изображение',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'sections',
          label: 'Секции кейса',
          type: 'blocks',
          blocks: caseBlocks,
        },
        {
          name: 'showPortfolio',
          label: 'Показывать секцию портфолио',
          type: 'checkbox',
          defaultValue: true,
          admin: {
            position: 'sidebar',
          },
        },
      ],
    } as CollectionConfig,

    // 6. БЛОГ
    {
      slug: 'posts',
      labels: { singular: 'Запись блога', plural: 'Блог' },
      fields: [
        { name: 'title', label: 'Название', type: 'text', required: true },
        { name: 'slug', label: 'Слаг', type: 'text', unique: true, required: true, admin: { position: 'sidebar' } },
        {
          name: 'tags',
          label: 'Теги',
          type: 'relationship',
          relationTo: 'tags',
          hasMany: true,
          admin: {
            position: 'sidebar',
          },
        },
        {
          name: 'featuredImage',
          label: 'Главное изображение',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'content',
          label: 'Содержание / Блоки',
          type: 'blocks',
          minRows: 1,
          blocks: [
            {
              slug: 'textContent',
              labels: {
                singular: 'Текстовый блок',
                plural: 'Текстовые блоки',
              },
              fields: [
                {
                  name: 'text',
                  label: 'Текст',
                  type: 'richText',
                  editor: lexicalEditor(),
                },
              ],
            },
            {
              slug: 'imageContent',
              labels: {
                singular: 'Изображение',
                plural: 'Изображения',
              },
              fields: [
                {
                  name: 'image',
                  label: 'Изображение',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'caption',
                  label: 'Подпись',
                  type: 'text',
                },
              ],
            },
          ],
        },
      ],
    } as CollectionConfig,

    // 7. УСЛУГИ
    {
      slug: 'services',
      labels: { singular: 'Услуга', plural: 'Услуги' },
      fields: [
        { name: 'title', label: 'Название услуги', type: 'text', required: true },
        { name: 'description', label: 'Описание', type: 'richText', required: true, editor: lexicalEditor() },
        { name: 'slug', label: 'URL-слаг', type: 'text', unique: true, admin: { position: 'sidebar' } },
        {
          name: 'featuredImage',
          label: 'Главное изображение',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    } as CollectionConfig,

    // 8. FAQ
    {
      slug: 'faqs',
      labels: { singular: 'Вопрос-Ответ', plural: 'FAQ' },
      fields: [
        { name: 'question', label: 'Вопрос', type: 'text', required: true },
        { name: 'answer', label: 'Ответ', type: 'richText', required: true, editor: lexicalEditor() },
        { name: 'order', label: 'Порядок вывода', type: 'number', admin: { position: 'sidebar' } },
      ],
    } as CollectionConfig,

    // 9. ЗАЯВКИ С САЙТА
    {
      slug: 'applications',
      labels: { singular: 'Заявка', plural: 'Заявки с сайта' },
      admin: { defaultColumns: ['name', 'email', 'createdAt', 'status'] },
      access: { create: () => true, read: ({ req }) => !!req.user },
      fields: [
        { name: 'name', label: 'Имя', type: 'text', required: true },
        { name: 'email', label: 'Email', type: 'email', required: true },
        { name: 'message', label: 'Сообщение', type: 'textarea' },
        {
          name: 'status',
          label: 'Статус заявки',
          type: 'select',
          options: ['Новая', 'В работе', 'Закрыта'],
          defaultValue: 'Новая',
        },
      ],
    } as CollectionConfig,
  ],

  globals: [
    // Главная
    {
      slug: 'home',
      label: 'Главная страница',
      fields: [
        { name: 'title', label: 'Заголовок страницы', type: 'text' },
        {
          name: 'featuredCases',
          label: 'Кейсы для другой секции (выбор из коллекции)',
          type: 'array',
          minRows: 1,
          fields: [
            { name: 'case', label: 'Кейс', type: 'relationship', relationTo: 'cases', required: true },
          ],
        },
        { name: 'aboutCompanySection', label: 'Секция "О компании" (на главной)', type: 'textarea' },
        {
          name: 'weCreateItems',
          label: 'Мы создаём (порядок вывода)',
          type: 'array',
          minRows: 1,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'text', required: true },
            { name: 'advantages', type: 'array', fields: [{ name: 'text', type: 'text' }] },
            { name: 'number', type: 'text' },
            { name: 'gradient', type: 'select', options: ['blue-gradient', 'green-gradient', 'red-gradient'] },
            { name: 'light', type: 'checkbox' },
          ],
        },
        {
          name: 'portfolioItems',
          type: 'array',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'links', type: 'array', fields: [{ name: 'text', type: 'text' }] },
          ],
        },
        {
          name: 'portfolioThemes',
          type: 'array',
          fields: [{ name: 'text', type: 'text' }],
        },
        {
          name: 'mobileAppItems',
          label: 'Моб. Приложения (галерея)',
          type: 'array',
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'image', label: 'Изображение', type: 'upload', relationTo: 'media' },
            { name: 'imageAlt', type: 'text' },
          ],
        },
        {
          name: 'highlightedCases',
          label: 'Кейсы для секции "Наши кейсы" (полная настройка)',
          type: 'array',
          minRows: 1,
          fields: [
            { name: 'title', label: 'Заголовок кейса', type: 'text', required: true },
            { name: 'description', label: 'Описание', type: 'textarea' },
            {
              name: 'image',
              label: 'Изображение',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            { name: 'date', label: 'Дата', type: 'date', required: true },
            {
              name: 'themes',
              label: 'Темы',
              type: 'array',
              fields: [{ name: 'theme', label: 'Тема', type: 'text' }],
            },
            { name: 'views', label: 'Просмотры', type: 'number', defaultValue: 85 },
          ],
        },
        {
          name: 'technologies',
          label: 'Секция "Технологии"',
          type: 'array',
          minRows: 1,
          fields: [
            { name: 'type', label: 'Тип (backend/frontend/design...)', type: 'text', required: true },
            {
              name: 'list',
              label: 'Список технологий с порядком',
              type: 'array',
              minRows: 1,
              fields: [
                { name: 'techName', label: 'Технология', type: 'text', required: true },
                { name: 'logo', label: 'Логотип', type: 'upload', relationTo: 'media' },
              ],
            },
          ],
        },
      ],
    },
    // Часто задаваемые вопросы
    {
      slug: 'faq',
      label: 'Часто задаваемые вопросы',
      fields: [
        {
          name: 'title',
          label: 'Заголовок секции',
          type: 'text',
        },
        {
          name: 'description',
          label: 'Описание секции',
          type: 'textarea',
        },
        {
          name: 'items',
          label: 'Вопросы и ответы',
          type: 'array',
          minRows: 1,
          fields: [
            {
              name: 'question',
              label: 'Вопрос',
              type: 'text',
              required: true,
            },
            {
              name: 'answer',
              label: 'Ответ',
              type: 'richText',
              editor: lexicalEditor(),
              required: true,
            },
          ],
        },
      ],
    },
    // Блог
    {
      slug: 'blog',
      label: 'Блог (Новости) общая страница',
      fields: [
        {
          name: 'title',
          label: 'Главный заголовок страницы',
          type: 'text',
          defaultValue: 'Новости компании',
        },
        {
          name: 'themesList',
          label: 'Список тем для фильтрации',
          type: 'array',
          minRows: 1,
          fields: [
            { name: 'themeName', label: 'Название темы', type: 'text', required: true },
          ],
        },
        {
          name: 'posts',
          label: 'Список новостных постов',
          type: 'array',
          minRows: 1,
          fields: [
            { name: 'title', label: 'Заголовок поста', type: 'text', required: true },
            { name: 'description', label: 'Краткое описание', type: 'textarea', required: true },
            {
              name: 'image',
              label: 'Изображение для превью',
              type: 'upload',
              relationTo: 'media',
              required: true,
            },
            {
              name: 'date',
              label: 'Дата публикации',
              type: 'date',
              required: true,
              admin: { date: { pickerAppearance: 'dayAndTime' } },
            },
            { name: 'views', label: 'Просмотры', type: 'number', defaultValue: 85 },
            {
              name: 'themes',
              label: 'Темы',
              type: 'array',
              fields: [{ name: 'theme', label: 'Тема', type: 'text' }],
            },
          ],
        },
      ],
    },
  ],
});