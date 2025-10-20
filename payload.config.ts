import path from 'path';
import { buildConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { postgresAdapter } from '@payloadcms/db-postgres';

// --- БЛОКИ ДЛЯ КОНТЕНТА КЕЙСОВ И БЛОГА ---
const contentBlocks = [
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
];

// --- КОНФИГУРАЦИЯ ---
export default buildConfig({
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
    migrationDir: path.resolve(__dirname, 'migrations'), // Исправлено ранее
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

    // 4. ПОРТФОЛИО (КЕЙСЫ)
    {
      slug: 'cases',
      labels: { singular: 'Кейс', plural: 'Портфолио (кейсы)' },
      fields: [
        { name: 'title', label: 'Название', type: 'text', required: true },
        { name: 'slug', label: 'Слаг', type: 'text', unique: true, required: true, admin: { position: 'sidebar' } },
        {
          name: 'description',
          label: 'Описание',
          type: 'richText',
          required: true,
          editor: lexicalEditor(),
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
        { name: 'views', label: 'Просмотры', type: 'text', admin: { position: 'sidebar' } },
        {
          name: 'content',
          label: 'Содержание / Блоки',
          type: 'blocks',
          minRows: 1,
          blocks: contentBlocks,
        },
      ],
    },

    // 5. БЛОГ
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
          blocks: contentBlocks,
        },
      ],
    },

    // 6. УСЛУГИ
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
    },

    // 7. FAQ
    {
      slug: 'faqs',
      labels: { singular: 'Вопрос-Ответ', plural: 'FAQ' },
      fields: [
        { name: 'question', label: 'Вопрос', type: 'text', required: true },
        { name: 'answer', label: 'Ответ', type: 'richText', required: true, editor: lexicalEditor() },
        { name: 'order', label: 'Порядок вывода', type: 'number', admin: { position: 'sidebar' } },
      ],
    },

    // 8. ЗАЯВКИ С САЙТА
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
    },
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
      label: 'Блог (Новости)',
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
    // Портфолио
    {
      slug: 'portfolio',
      label: 'Страница Портфолио',
      fields: [
        {
          name: 'title',
          label: 'Заголовок страницы (H1)',
          type: 'text',
          required: true,
        },
        {
          name: 'introContent',
          label: 'Вступительное описание (Rich Text)',
          type: 'richText',
          editor: lexicalEditor(),
        },
        // Список всех проектов (ссылается на коллекцию 'cases')
        {
          name: 'projectsList',
          label: 'Список проектов для отображения',
          type: 'relationship',
          relationTo: 'cases',
          hasMany: true,
        },
        // Поле для "Технологический стек" (пример структуры)
        {
          name: 'technologyStack',
          label: 'Технологический стек',
          type: 'array',
          fields: [
            { name: 'techName', label: 'Название технологии (TC1)', type: 'text' },
          ],
        },
        // Дополнительный Rich Text блок, например, для секции "О нас (опыт, технологии, подход)"
        {
          name: 'aboutSection',
          label: 'Секция "О нас/Подход" (Rich Text)',
          type: 'richText',
          editor: lexicalEditor(),
        },
      ],
    },
    // О КОМПАНИИ
    {
      slug: 'about-us',
      label: 'О компании',
      fields: [
        {
          name: 'mainContent',
          label: 'Основное содержание страницы',
          type: 'richText',
          required: true,
          editor: lexicalEditor(),
        },
      ],
    },
  ],
});