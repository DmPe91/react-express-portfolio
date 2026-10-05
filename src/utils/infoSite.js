export const infoSite = [
  {
    img: "/siteImg/food.png",
    name: "React FastFood",
    category: "fullstack", // Исправлено с fullstack, так как бэкенда здесь нет
    description:
      "SPA интернет-магазина доставки еды. Реализованы каталог с фильтрацией и сортировкой, корзина с персистентным хранением состояния (localStorage), оформление заказа.",
    stack: "React, TypeScript, Redux Toolkit, React Router, Axios, SCSS",
    site: "https://dmpe91.github.io/hot_dog/",
    frontend: "https://github.com/DmPe91/hot_dog",
  },
  {
    img: "/siteImg/quote.png",
    name: "MERN Quote",
    category: "fullstack",
    description:
      "Fullstack CRUD-приложение с генерацией случайных цитат. Настроен REST API, валидация данных на сервере и клиенте, подключение к NoSQL базе данных.",
    stack: "React, Node.js, Express, MongoDB, Mongoose, Styled-components",
    site: "https://randomquote-frontend.vercel.app/",
    frontend: "https://github.com/DmPe91/randomquote_frontend",
    backend: "https://github.com/DmPe91/randomquote_backend",
  },
  {
    img: "/siteImg/blog.png",
    name: "MERN Text Blog",
    category: "fullstack",
    description:
      "Блог-платформа: JWT-авторизация, загрузка изображений (Multer), WYSIWYG редактор, рендеринг Markdown и полнотекстовый поиск по тегам.",
    stack: "React, Redux Toolkit, Node.js, Express, MongoDB, JWT, Multer",
    site: "https://text-blog-frontend.vercel.app/",
    frontend: "https://github.com/DmPe91/text_blog-frontend",
    backend: "https://github.com/DmPe91/text_blog",
  },
  {
    img: "/siteImg/tg.png",
    name: "Telegram-Bot",
    category: "fullstack",
    description:
      "Бот для конвертации и получения актуальных курсов валют. Интеграция с внешним XML API ЦБ РФ, парсинг и кэширование данных для снижения нагрузки.",
    stack: "Node.js, Telegraf.js, Axios, XML-parsing",
    site: "https://t.me/exchangeRates2_bot",
    backend: "https://github.com/DmPe91/telegramBot_Money",
  },
  {
    img: "/siteImg/lavarel_vue.png",
    name: "Scooter43 (Laravel + Vue)",
    category: "fullstack",
    description:
      "Интернет-магазин электротранспорта. REST API на Laravel, SPA на Vue 3. Каталог с фильтрацией, корзина, уведомления. Бэкенд задеплоен на Render, БД на Neon (PostgreSQL), фронт на Vercel.",
    stack: "Laravel 13, PHP 8.3, PostgreSQL, Vue 3, Pinia, Vue Router, Axios",
    site: "https://scooter-vue-client.vercel.app/",
    frontend: "https://github.com/DmPe91/scooter-vue-client",
    backend: "https://github.com/DmPe91/scooter-laravel-api",
  },
  {
    img: "/siteImg/woo_vue2.png",
    name: "Headless WooCommerce (WordPress + Vue)",
    category: "fullstack",
    description:
      "Headless-магазин на Vue 3 с WooCommerce в качестве бэкенда. Каталог товаров, фильтрация по категориям и меткам, корзина через Store API. Фронтенд общается с WordPress через REST API.",
    stack: "WordPress, WooCommerce, Vue 3, Pinia, Vue Router, Store API",
    frontend: "https://github.com/DmPe91/woocommerce-vue-shop",
    backend: "https://github.com/DmPe91/wp-vue-shop",
  },
  {
    category: "commercial",
    img: "/siteImg/nadhod.png",
    name: "Надежный ход",
    description:
      "Кастомный модуль на PHP для динамического расчёта стоимости ворот. Интеграция системы отзывов с премодерацией.",
    stack: "Drupal 10, PHP, jQuery, Less",
    site: "https://xn----7sbmbdgv1aem0f7c.xn--p1ai/",
  },
  {
    category: "commercial",
    img: "/siteImg/tymenpro.png",
    name: "Ремонт Про 72",
    description:
      "Разработка интерактивного квиза (Webform + JS) для генерации лидов. Создание архитектуры переиспользуемых компонентов для 30+ посадочных страниц.",
    stack: "Drupal 10, Webform, jQuery, Less",
    site: "https://tyumen-remo-pro72.ru/",
  },
  {
    category: "commercial",
    img: "/siteImg/biktagirov.png",
    name: "Biktagirov Art",
    description:
      "Интеграция форм обратной связи с Telegram Bot API. Реализация сложных scroll и hover анимаций для портфолио.",
    stack: "Drupal 10, PHP, Telegram Bot API, JS",
    site: "https://biktagirov-art.ru/",
  },
  {
    category: "commercial",
    img: "/siteImg/polyana.png",
    name: "Polyana Glamping",
    description:
      "Кастомизация стороннего виджета бронирования. Сложная адаптивная вёрстка с использованием CSS Grid/Flexbox и scroll-анимаций.",
    stack: "Drupal 10, JavaScript, Less, REST API",
    site: "https://polyanaglamping.ru/",
  },
  {
    category: "commercial",
    img: "/siteImg/ultra_cargo.png",
    name: "Ultra Cargo",
    description:
      "Реализация умного поиска аэропортов/городов (парсинг и кэширование данных клиента). Оптимизация шаблонизатора для 250+ страниц.",
    stack: "Drupal 10, PHP, JSON, jQuery",
    site: "https://ultra-cargo.ru/",
  },
  {
    category: "commercial",
    img: "/siteImg/rmk.png",
    name: "RMK Orenburg",
    description:
      "Кастомный поиск с транслитерацией запросов (EN→RU) и учетом опечаток. Анимированный каталог продукции.",
    stack: "Drupal 10, JavaScript, AJAX, jQuery",
    site: "https://rmk-orenburg.ru/",
  },
  {
    category: "commercial",
    img: "/siteImg/feofilakt.png",
    name: "Феофилакт Строй",
    description:
      "Многоуровневая AJAX-фильтрация каталога (Drupal Views + кастомные хуки). Оптимизация запросов к БД.",
    stack: "Drupal 10, Views, PHP, jQuery",
    site: "https://xn--80ajjfeeterjkbrc.xn--p1ai/",
  },
  {
    category: "commercial",
    img: "/siteImg/site_design.png",
    name: "Дизайн который продает",
    description:
      "Кастомная тема на WordPress. Интеграция ACF (Advanced Custom Fields), сборка фронтенда на Vite.",
    stack: "WordPress, PHP, ACF, JS, SCSS, Vite",
    frontend: "https://github.com/DmPe91/designer-site",
  },
  {
    category: "fullstack",
    img: "/siteImg/green-api.png",
    name: "MAX Chat (GREEN-API)",
    description:
      "Веб-клиент для отправки и получения сообщений через GREEN-API (MAX). Авторизация по idInstance и apiTokenInstance, создание чата по номеру, отправка текста, опрос очереди входящих уведомлений, фильтрация по чату. Тёмная тема в стиле MAX.",
    stack: "React 19, Vite, SCSS, Axios, GREEN-API (HTTP API)",
    site: "https://chat-max-api.vercel.app/",
    frontend: "https://github.com/DmPe91/chat-max-api",
  },
];
