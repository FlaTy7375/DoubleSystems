import path from 'path';
import { buildConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { postgresAdapter } from '@payloadcms/db-postgres';
import type { Block, Field } from 'payload';
import { s3Storage } from '@payloadcms/storage-s3';
import { fileURLToPath } from 'url';

// -----------------------------------------------------------------------------
// HELPER FOR ESM
// -----------------------------------------------------------------------------
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// -----------------------------------------------------------------------------
// BLOCKS AND FIELDS DEFINITIONS
// -----------------------------------------------------------------------------
const seoFields: Field[] = [
    {
        name: 'seo',
        label: 'SEO Мета-теги',
        type: 'group',
        fields: [
            {
                name: 'title',
                label: 'Мета-заголовок (Title)',
                type: 'text',
                maxLength: 60,
                localized: true,
                admin: { description: 'Заголовок страницы для поисковиков (до 60 символов)' }
            },
            {
                name: 'description',
                label: 'Мета-описание (Description)',
                type: 'textarea',
                maxLength: 160,
                localized: true,
                admin: { description: 'Краткое описание страницы для поисковиков (до 160 символов)' }
            },
            {
                name: 'keywords',
                label: 'Ключевые слова (Keywords)',
                type: 'text',
                localized: true,
                admin: { description: 'Ключевые слова через запятую' }
            },
        ],
        admin: { position: 'sidebar' }
    },
];

const caseBlocks: Block[] = [
    {
        slug: 'heroSection',
        labels: { singular: 'Главная секция', plural: 'Главные секции' },
        fields: [
            { name: 'blockId', label: 'ID блока (для якорных ссылок, латиница)', type: 'text', required: true, defaultValue: 'hero' },
            { name: 'subtitle', label: 'Заголовок', type: 'text', required: true },
            { name: 'description', label: 'Описание', type: 'textarea', required: true },
            { name: 'stamps', label: 'Метки', type: 'array', fields: [{ name: 'text', label: 'Текст метки', type: 'text', required: true }] },
            { name: 'backgroundImage', label: 'Фоновое изображение (для контейнера)', type: 'upload', relationTo: 'media', required: true },
            { name: 'image', label: 'Изображение для моб версии (не фоновое)', type: 'upload', relationTo: 'media', required: true },
            { name: 'buttonText', label: 'Текст кнопки', type: 'text', defaultValue: 'Рассказываем о проекте' },
        ],
    },
    {
        slug: 'textSection',
        labels: { singular: 'Текстовая секция', plural: 'Текстовые секции' },
        fields: [
            { name: 'blockId', label: 'ID блока (для якорных ссылок, латиница)', type: 'text', required: true, defaultValue: 'hero' },
            { name: 'subtitle', label: 'Заголовок', type: 'text', required: true },
            { name: 'description', label: 'Описание', type: 'textarea', required: true },
        ],
    },
    {
        slug: 'aboutProjectSection',
        labels: { singular: 'О проекте', plural: 'Секции "О проекте"' },
        fields: [
            { name: 'blockId', label: 'ID блока (для якорных ссылок, латиница)', type: 'text', required: true, defaultValue: 'about-project' },
            { name: 'projectTitle', label: 'Заголовок "О проекте"', type: 'text', required: true },
            { name: 'projectDescription', label: 'Описание проекта', type: 'textarea', required: true },
            { name: 'client', label: 'Клиент', type: 'text', required: true },
            { name: 'status', label: 'Статус', type: 'text', required: true },
            { name: 'caseTitle', label: 'Заголовок кейса', type: 'text', required: true },
            { name: 'caseDescription', label: 'Описание кейса', type: 'textarea', required: true },
        ],
    },
    {
        slug: 'clientSection',
        labels: { singular: 'О клиенте и содержание', plural: 'Секции "О клиенте"' },
        fields: [
            { name: 'blockId', label: 'ID блока (для якорных ссылок, латиница)', type: 'text', required: true, defaultValue: 'client' },
            { name: 'contentTitle', label: 'Заголовок содержания', type: 'text', required: true },
            { name: 'contentItems', label: 'Пункты содержания (якорные ссылки)', type: 'array', fields: [
                { name: 'text', label: 'Текст пункта', type: 'text', required: true },
                { name: 'anchorId', label: 'ID якоря (латиница, без пробелов)', type: 'text', required: true },
            ]},
            { name: 'clientImage', label: 'Изображение клиента', type: 'upload', relationTo: 'media', required: true },
            { name: 'clientImageDescription', label: 'Описание под изображением клиента', type: 'text', required: true, defaultValue: 'Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий.' },
            { name: 'clientTitle', label: 'Заголовок о клиенте', type: 'text', required: true },
            { name: 'clientSubtitle', label: 'Подзаголовок клиента', type: 'text', required: true },
            { name: 'clientDescription', label: 'Описание клиента', type: 'textarea', required: true },
            { name: 'layoutImage', label: 'Изображение макета', type: 'upload', relationTo: 'media', required: true },
            { name: 'layoutImageDescription', label: 'Описание под изображением макета', type: 'text', required: true, defaultValue: 'Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий.' },
        ],
    },
    {
        slug: 'strategySection',
        labels: { singular: 'Стратегические решения', plural: 'Стратегические решения' },
        fields: [
            { name: 'blockId', label: 'ID блока (для якорных ссылок, латиница)', type: 'text', required: true, defaultValue: 'strategy' },
            { name: 'title', label: 'Заголовок', type: 'text', required: true },
            { name: 'description', label: 'Описание', type: 'textarea', required: true },
            { name: 'strategyTitle', label: 'Заголовок стратегии (Наша стратегия базируется на...)', type: 'text', required: true, defaultValue: 'Наша стратегия базируется на трех китах:' },
            { name: 'strategyItems', label: 'Стратегические пункты', type: 'array', fields: [
                { name: 'title', label: 'Заголовок стратегии', type: 'text', required: true },
                { name: 'description', label: 'Описание стратегии', type: 'textarea', required: true },
            ]},
            { name: 'conclusion', label: 'Заключение', type: 'textarea', required: true },
            { name: 'strategyImage', label: 'Изображение стратегии', type: 'upload', relationTo: 'media', required: true },
            { name: 'imageDescription', label: 'Описание под изображением', type: 'text', required: true, defaultValue: 'Веб-платформа и мобильное приложение, объединяющие пользователей и специалистов в сфере медицины, образования и технологий.' },
            { name: 'processTitle', label: 'Заголовок процесса реализации', type: 'text', required: true, defaultValue: 'Процесс реализации' },
            { name: 'processDescription', label: 'Описание процесса реализации', type: 'textarea', required: true },
        ],
    },
    {
        slug: 'goalsSection',
        labels: { singular: 'Секция целей', plural: 'Секции целей' },
        fields: [
            { name: 'blockId', label: 'ID блока (для якорных ссылок, латиница)', type: 'text', required: true, defaultValue: 'goals' },
            { name: 'title', label: 'Заголовок', type: 'text', required: true },
            { name: 'description', label: 'Описание', type: 'textarea', required: true },
            { name: 'goals', label: 'Цели', type: 'array', fields: [
                { name: 'title', label: 'Заголовок цели', type: 'text', required: true },
                { name: 'description', label: 'Описание цели', type: 'textarea', required: true },
                { name: 'isLight', label: 'Светлая карточка', type: 'checkbox', defaultValue: false },
            ]},
        ],
    },
    {
        slug: 'businessSection',
        labels: { singular: 'Бизнес-секция', plural: 'Бизнес-секции' },
        fields: [
            { name: 'blockId', label: 'ID блока (для якорных ссылок, латиница)', type: 'text', required: true, defaultValue: 'business' },
            { name: 'title', label: 'Заголовок', type: 'text', required: true },
            { name: 'subtitle', label: 'Подзаголовок', type: 'text', required: true },
            { name: 'tasks', label: 'Бизнес-задачи', type: 'array', fields: [
                { name: 'text', label: 'Текст задачи', type: 'text', required: true },
                { name: 'isLight', label: 'Светлая карточка', type: 'checkbox', defaultValue: false },
            ]},
        ],
    },
    {
        slug: 'authorSection',
        labels: { singular: 'Секция автора', plural: 'Секции автора' },
        fields: [
            { name: 'blockId', label: 'ID блока (для якорных ссылок, латиница)', type: 'text', required: true, defaultValue: 'author' },
            { name: 'authorImage', label: 'Фото автора', type: 'upload', relationTo: 'media', required: true },
            { name: 'authorName', label: 'Имя автора', type: 'text', required: true },
            { name: 'authorRole', label: 'Должность автора', type: 'text', required: true },
            { name: 'authorDescription', label: 'Описание автора', type: 'array', fields: [{ name: 'text', label: 'Текст описания', type: 'text', required: true }] },
            { name: 'buttonText', label: 'Текст кнопки', type: 'text', defaultValue: 'Написать' },
        ],
    },
];

// -----------------------------------------------------------------------------
// PAYLOAD CONFIG
// -----------------------------------------------------------------------------
export default buildConfig({
    db: postgresAdapter({
        pool: {
            connectionString: process.env.DATABASE_URI || 'postgresql://postgres:postgres@localhost:5432/postgres',
            // Убрана опция SSL в DEV, т.к. она может быть причиной ошибок подключения к локальной БД
            ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
        },
        migrationDir: path.resolve(__dirname, 'migrations'),
    }),

    serverURL: process.env.SITE_URL || 'http://localhost:3000',
    secret: process.env.PAYLOAD_SECRET || 'SOME_DEFAULT_SECRET_FOR_BUILD',

    admin: {
        user: 'users',
        meta: { titleSuffix: ' - Double Systems CMS' },
    },

    graphQL: { disable: true },

    plugins: [
        ...(process.env.SUPABASE_ENDPOINT &&
        process.env.SUPABASE_BUCKET_NAME &&
        process.env.SUPABASE_ACCESS_KEY_ID &&
        process.env.SUPABASE_SECRET_ACCESS_KEY
            ? [
                  s3Storage({
                      collections: {
                          media: {
                              // Отключаем хранение в локальной файловой системе
                              disableLocalStorage: true, 
                              prefix: 'media',
                          },
                      },
                      bucket: process.env.SUPABASE_BUCKET_NAME,
                      config: {
                          endpoint: process.env.SUPABASE_ENDPOINT,
                          // 👇 ИСПРАВЛЕНИЕ: forcePathStyle: true для совместимости с Supabase/MinIO
                          forcePathStyle: true, 
                          region: process.env.SUPABASE_REGION || 'eu-north-1',
                          credentials: {
                              accessKeyId: process.env.SUPABASE_ACCESS_KEY_ID,
                              secretAccessKey: process.env.SUPABASE_SECRET_ACCESS_KEY,
                          },
                      },
                  }),
              ]
            : []),
    ],

    collections: [
        {
            slug: 'users',
            auth: true,
            fields: [{ name: 'name', type: 'text', label: 'Имя пользователя', required: true }],
        },
        {
            slug: 'media',
            upload: {
                // 👇 ИСПРАВЛЕНИЕ: Убираем disableLocalStorage и staticDir отсюда, 
                // т.к. они уже указаны в плагине s3Storage.
                // Если плагин не активен, Payload будет использовать стандартное локальное хранение.
                // staticDir: path.resolve(__dirname, '../../public/media'), 
            },
            access: { read: () => true },
            fields: [{ name: 'alt', label: 'Альтернативный текст', type: 'text', required: true }],
        },
        {
            slug: 'tags',
            labels: { singular: 'Тег', plural: 'Теги' },
            fields: [{ name: 'title', label: 'Название тега', type: 'text', required: true, unique: true }],
        },
        {
            slug: 'pages',
            labels: { singular: 'Страница', plural: 'Страницы' },
            fields: [
                ...seoFields,
                { name: 'title', label: 'Название страницы', type: 'text', required: true },
                { name: 'slug', label: 'URL слаг', type: 'text', unique: true, required: true, admin: { position: 'sidebar', description: 'Должен совпадать с названием папки в app/(site) (например: about-us, prices, portfolio, services/web-dev и т.д.)' } },
                { name: 'sections', label: 'Секции страницы', type: 'blocks', blocks: caseBlocks },
                { name: 'showPortfolio', label: 'Показывать секцию портфолио в конце', type: 'checkbox', defaultValue: false, admin: { position: 'sidebar' } },
            ],
        },
        {
            slug: 'cases',
            labels: { singular: 'Кейс', plural: 'Портфолио (кейсы)' },
            access: {
              read: () => true,
            },
            fields: [
                ...seoFields,
                { name: 'title', label: 'Название кейса (внутри)', type: 'text', required: true },
                
                { name: 'previewTitle', label: 'Заголовок для превью (по умолчанию)', type: 'text', required: true, admin: { description: 'Используется в списках, если не переопределено на главной.' } },
                { name: 'previewImage', label: 'Изображение для превью (по умолчанию)', type: 'upload', relationTo: 'media', required: true },
                { name: 'previewViews', label: 'Количество просмотров (по умолчанию)', type: 'number', defaultValue: 85, admin: { position: 'sidebar' } },
                { name: 'previewDate', label: 'Дата публикации (по умолчанию)', type: 'date', required: true, admin: { position: 'sidebar', date: { pickerAppearance: 'dayAndTime' } } },
                { name: 'previewThemes', label: 'Темы для превью (по умолчанию)', type: 'array', fields: [{ name: 'theme', label: 'Тема', type: 'text', required: true }] },
                
                { name: 'path', label: 'Путь (cases/name)', type: 'text', required: true },
                { name: 'slug', label: 'Слаг', type: 'text', unique: true, required: true, admin: { position: 'sidebar' } },
                { name: 'tags', label: 'Теги', type: 'relationship', relationTo: 'tags', hasMany: true, admin: { position: 'sidebar' } },
                { name: 'sections', label: 'Секции кейса', type: 'blocks', blocks: caseBlocks },
                { name: 'showPortfolio', label: 'Показывать секцию портфолио', type: 'checkbox', defaultValue: true, admin: { position: 'sidebar' } },
            ],
        },
        {
            slug: 'posts',
            labels: { singular: 'Запись блога', plural: 'Блог' },
            fields: [
                ...seoFields,
                { name: 'title', label: 'Название (внутри)', type: 'text', required: true },
                { name: 'previewTitle', label: 'Заголовок для списка блога', type: 'text', required: true, admin: { description: 'Отображается на странице /blog' } },
                { name: 'previewDescription', label: 'Краткое описание для списка', type: 'textarea', required: true, admin: { description: 'Отображается на странице /blog' } },
                { name: 'previewImage', label: 'Изображение для списка блога', type: 'upload', relationTo: 'media', required: true },
                { name: 'previewViews', label: 'Количество просмотров (по умолчанию)', type: 'number', defaultValue: 85, admin: { position: 'sidebar' } },
                { name: 'previewDate', label: 'Дата публикации (для списка)', type: 'date', required: true, admin: { position: 'sidebar', date: { pickerAppearance: 'dayAndTime' } } },
                { name: 'previewThemes', label: 'Темы для списка', type: 'array', fields: [{ name: 'theme', label: 'Тема', type: 'text', required: true }] },
                { name: 'slug', label: 'Слаг', type: 'text', unique: true, required: true, admin: { position: 'sidebar' } },
                { name: 'tags', label: 'Теги', type: 'relationship', relationTo: 'tags', hasMany: true, admin: { position: 'sidebar' } },
                { name: 'date', label: 'Дата публикации (внутри)', type: 'date', required: true, admin: { position: 'sidebar', date: { pickerAppearance: 'dayAndTime' } } },
                { name: 'author', label: 'Автор (опционально)', type: 'relationship', relationTo: 'users', admin: { position: 'sidebar' } },
                { name: 'sections', label: 'Секции блога', type: 'blocks', blocks: caseBlocks },
            ],
        },
        {
            slug: 'services',
            labels: { singular: 'Услуга', plural: 'Услуги (Deprecated)' },
            fields: [
                { name: 'title', label: 'Название услуги', type: 'text', required: true },
                { name: 'description', label: 'Описание', type: 'richText', required: true, editor: lexicalEditor() },
                { name: 'slug', label: 'URL-слаг', type: 'text', unique: true, admin: { position: 'sidebar' } },
                { name: 'featuredImage', label: 'Главное изображение', type: 'upload', relationTo: 'media', required: true },
            ],
        },
        {
            slug: 'faqs',
            labels: { singular: 'Вопрос-Ответ', plural: 'FAQ' },
            fields: [
                { name: 'question', label: 'Вопрос', type: 'text', required: true },
                { name: 'answer', label: 'Ответ', type: 'richText', required: true, editor: lexicalEditor() },
                { name: 'order', label: 'Порядок вывода', type: 'number', admin: { position: 'sidebar' } },
            ],
        },
        {
            slug: 'applications',
            labels: { singular: 'Заявка', plural: 'Заявки с сайта' },
            admin: { defaultColumns: ['name', 'email', 'createdAt', 'status'] },
            access: { create: () => true, read: ({ req }) => !!req.user },
            fields: [
                { name: 'name', label: 'Имя', type: 'text', required: true },
                { name: 'email', label: 'Email', type: 'email', required: true },
                { name: 'message', label: 'Сообщение', type: 'textarea' },
                { name: 'status', label: 'Статус заявки', type: 'select', options: ['Новая', 'В работе', 'Закрыта'], defaultValue: 'Новая' },
            ],
        },
    ],

    globals: [
        {
            slug: 'home',
            label: 'Главная страница',
            fields: [
                { name: 'title', label: 'Заголовок страницы', type: 'text' },
                
                { name: 'portfolioTitle', label: 'Заголовок секции Портфолио (Общий)', type: 'text', defaultValue: 'Наши кейсы' },
                { name: 'portfolioDescription', label: 'Описание секции Портфолио (Общий)', type: 'textarea' },
                { name: 'showDefaultCases', label: 'Показывать статические/дефолтные кейсы (если нет динамических)', type: 'checkbox', defaultValue: true, admin: { description: 'Если нет ни одного кейса в коллекции, будут отображены заглушки.' } },
                { name: 'showStaticCasesWithDynamic', label: '💡 Добавлять статические кейсы к динамическим', type: 'checkbox', defaultValue: false, admin: { description: 'Если включено, статические кейсы будут отображены после всех динамических.' } },

                { name: 'featuredCases', label: 'Кейсы для другой секции (выбор из коллекции)', type: 'array', minRows: 1, fields: [{ name: 'case', label: 'Кейс', type: 'relationship', relationTo: 'cases', required: true }] },
                { name: 'aboutCompanySection', label: 'Секция "О компании" (на главной)', type: 'textarea' },
                { 
                    name: 'weCreateItems', 
                    label: 'Мы создаём (порядок вывода)', 
                    type: 'array', 
                    minRows: 1, 
                    fields: [
                        { name: 'title', type: 'text', required: true },
                        { name: 'description', type: 'text', required: true },
                        { 
                            name: 'advantages', 
                            label: 'Преимущества (отдельные ссылки)',
                            type: 'array', 
                            fields: [
                                { name: 'text', label: 'Текст преимущества', type: 'text' },
                                { name: 'url', label: 'URL преимущества', type: 'text', required: false },
                            ]
                        },
                        { name: 'number', type: 'text' },
                        { name: 'gradient', type: 'select', options: ['blue-gradient', 'green-gradient', 'red-gradient'] },
                        { name: 'light', type: 'checkbox' },
                    ]
                },
                { 
                    name: 'portfolioItems', 
                    label: 'Секция Портфолио (Список проектов)', 
                    type: 'array', 
                    fields: [
                        { name: 'title', type: 'text', required: true },
                        { 
                            name: 'links', 
                            label: 'Проекты', 
                            type: 'array', 
                            fields: [
                                { name: 'text', label: 'Название проекта', type: 'text', required: true },
                                { 
                                    name: 'url', 
                                    label: 'URL/Слаг кейса (например, /cases/my-project)', 
                                    type: 'text', 
                                    required: false, 
                                    admin: { description: 'Если оставить пустым, будет использована #ссылка-заглушка.' } 
                                },
                            ] 
                        }
                    ] 
                },
                { name: 'portfolioThemes', type: 'array', fields: [{ name: 'text', type: 'text' }] },
                { name: 'mobileAppItems', label: 'Моб. Приложения (галерея)', type: 'array', fields: [
                    { name: 'title', type: 'text', required: true },
                    { name: 'image', label: 'Изображение', type: 'upload', relationTo: 'media' },
                    { name: 'imageAlt', type: 'text' },
                ]},
                { name: 'technologies', label: 'Секция "Технологии"', type: 'array', minRows: 1, fields: [
                    { name: 'type', label: 'Тип (backend/frontend/design...)', type: 'text', required: true },
                    { name: 'list', label: 'Список технологий с порядком', type: 'array', minRows: 1, fields: [
                        { name: 'techName', label: 'Технология', type: 'text', required: true },
                        { name: 'logo', label: 'Логотип', type: 'upload', relationTo: 'media' },
                    ]},
                ]},
            ],
        },
        {
            slug: 'faq',
            label: 'Часто задаваемые вопросы',
            fields: [
                { name: 'title', label: 'Заголовок секции', type: 'text' },
                { name: 'description', label: 'Описание секции', type: 'textarea' },
                { name: 'items', label: 'Вопросы и ответы', type: 'array', minRows: 1, fields: [
                    { name: 'question', label: 'Вопрос', type: 'text', required: true },
                    { name: 'answer', label: 'Ответ', type: 'richText', editor: lexicalEditor(), required: true },
                ]},
            ],
        },
        {
            slug: 'blog',
            label: 'Блог (Общая страница)',
            fields: [
                { name: 'title', label: 'Главный заголовок страницы', type: 'text', defaultValue: 'Новости компании' },
                { name: 'themesList', label: 'Список тем для фильтрации', type: 'array', minRows: 1, fields: [{ name: 'themeName', label: 'Название темы', type: 'text', required: true }] },
                { name: 'showDefaultPosts', label: 'Показывать статические/дефолтные посты (если нет динамических)', type: 'checkbox', defaultValue: true, admin: { description: 'Если нет ни одного поста в коллекции, будут отображены заглушки.' } },
                { name: 'showStaticPostsWithDynamic', label: '💡 Добавлять статические посты к динамическим', type: 'checkbox', defaultValue: false, admin: { description: 'Если включено, статические посты будут отображены после всех динамических.' } },
            ],
        },
        {
    slug: 'header',
    label: 'Шапка сайта (Header)',
    fields: [
        // =======================================================
        // НОВОЕ ПОЛЕ: Дефолтная структура выпадающего меню (Услуги/Сервисы)
        // Использует ту же структуру, что и linkList, для рендеринга.
        // =======================================================
        {
            name: 'defaultDropdownContent',
            label: 'Дефолтное выпадающее меню (Услуги)',
            type: 'array',
            localized: true,
            admin: {
                description: 'Содержимое, которое отображается при открытии меню, или при наведении на "Услуги" (если у этого пункта нет собственного переопределения).',
            },
            fields: [
                {
                    name: 'title',
                    label: 'Заголовок списка (например, Сервисы:, Сайты и порталы:)',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'links',
                    label: 'Ссылки',
                    type: 'array',
                    minRows: 1,
                    fields: [
                        { name: 'text', label: 'Текст ссылки', type: 'text', localized: true },
                        { name: 'url', label: 'URL', type: 'text', required: true },
                    ],
                },
            ],
        },
        
        {
            name: 'nav',
            label: 'Пункты меню',
            type: 'array',
            minRows: 1,
            defaultValue: [
                { title: 'Цены', href: '/prices' },
                { title: 'О нас', href: '/about-us' },
                { title: 'Портфолио', href: '/portfolio' },
                { title: 'Услуги', href: '/services' },
                { title: 'Блог', href: '/blog' },
                { title: 'Связаться', href: '/contacts' },
                { title: 'Что мы делаем', href: '/what-we-do' },
            ],
            fields: [
                {
                    name: 'title',
                    label: 'Текст пункта меню',
                    type: 'text',
                    required: true,
                    localized: true,
                },
                {
                    name: 'href',
                    label: 'URL/Ссылка',
                    type: 'text',
                    required: true,
                    admin: { description: 'Например: /about-us, /portfolio, https://external.link' },
                },
                {
                    // Поле, которое может переопределить defaultDropdownContent
                    name: 'dropdownContent',
                    label: 'Содержимое выпадающего меню (для переопределения)',
                    type: 'blocks',
                    localized: true,
                    blocks: [
                        {
                            slug: 'linkList',
                            labels: {
                                singular: 'Список ссылок',
                                plural: 'Списки ссылок',
                            },
                            fields: [
                                {
                                    name: 'title',
                                    label: 'Заголовок списка',
                                    type: 'text',
                                    localized: true,
                                },
                                {
                                    name: 'links',
                                    label: 'Ссылки',
                                    type: 'array',
                                    fields: [
                                        { name: 'text', label: 'Текст ссылки', type: 'text', localized: true },
                                        { name: 'url', label: 'URL', type: 'text' },
                                    ],
                                },
                            ],
                        },
                    ],
                    admin: {
                        description: 'Оставьте пустым, чтобы использовать "Дефолтное выпадающее меню". Если заполнить, это переопределит дефолт.',
                    },
                },
            ],
        },
        {
            name: 'phoneNumber',
            label: 'Номер телефона',
            type: 'text',
            defaultValue: '8 800 543 22 44',
        },
        {
            name: 'whatsappLink',
            label: 'Ссылка на WhatsApp',
            type: 'text',
            required: true,
            defaultValue: '#whatsapp', 
            admin: { description: 'Полный URL (например, https://wa.me/79001234567)' },
        },
        {
            name: 'telegramLink',
            label: 'Ссылка на Telegram',
            type: 'text',
            required: true,
            defaultValue: '#telegram', 
            admin: { description: 'Полный URL (например, https://t.me/yourusername)' },
        },
        {
            name: 'ctaText',
            label: 'Текст кнопки "Напишите нам!"',
            type: 'text',
            defaultValue: 'Напишите нам!',
            localized: true,
        },
    ],
}
    ],
});