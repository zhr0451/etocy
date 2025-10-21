# etocy.info — хроники «К20»

Статический сайт на [Astro](https://astro.build), который клуб настольных ролевых игр «К20» использует для кампании **«Последствия Чумы Заклинаний»**. Проект собирает карточки персонажей, архив игровых сессий и справочные материалы в Markdown/MDX, а затем публикует их как быстрые статические страницы.

## Содержание

- [Функциональность](#функциональность)
- [Стек](#стек)
- [Структура проекта](#структура-проекта)
- [Рабочий процесс](#рабочий-процесс)
- [Документация](#документация)
- [Настройка тем оформления](#настройка-тем-оформления)
- [Деплой на GitHub Pages](#деплой-на-github-pages)
- [Полезные ссылки](#полезные-ссылки)

## Функциональность

- Каталог персонажей кампании с отдельными страницами, метаданными (уровень, класс, роль `player/dm`, теги) и подробными описаниями.
- Архив сессий с номером, датой, местом проведения, составом игроков, тегами и кратким summary перед основным текстом.
- Раздел «О компании» для описания клуба «К20» и кампании «Последствия Чумы Заклинаний»; блоки собираются из Markdown-файлов.
- Светлая и тёмная тема на основе палитры Dracula с акцентами для заголовков, меню и тегов; переключатель сохраняет выбор пользователя.
- Все данные лежат в репозитории в Markdown: удобно редактировать и версионировать.
- Дневник Ласм — творческие заметки и эмоциональные отклики после сессий.
- Адаптивная верстка: меню с мобильным бургером, карточки под маленькие экраны и подсветка активного пункта навигации.

## Стек

- [Astro 5](https://docs.astro.build) — генератор статических сайтов.
- Контентные коллекции Astro (`src/content`) с типизацией через Zod.
- [TypeScript](https://www.typescriptlang.org/) и встроенный JSX-рендер Astro.
- [Roboto](https://fonts.google.com/specimen/Roboto) и [Roboto Slab](https://fonts.google.com/specimen/Roboto+Slab) как основные шрифты интерфейса и заголовков.

## Структура проекта

```
/
├── src/
│   ├── content/            # Markdown/MDX с персонажами, сессиями и инфо-блоками
│   │   ├── company/        # О клубе и кампании
│   │   ├── players/        # Персонажи кампании
│   │   └── sessions/       # Отчёты о сессиях
│   │   └── diary/          # Дневники (сейчас доступен раздел Ласм)
│   ├── layouts/            # Общие шаблоны (Layout.astro)
│   └── pages/              # Маршруты Astro (index, players, sessions и т.д.)
├── docs/                   # Документация по редактированию (контент, страницы, темы)
├── public/                 # Статические файлы (favicon и др.)
├── dist/                   # Сборка (`npm run build`)
├── astro.config.mjs        # Конфигурация Astro
└── README.md
```

Коллекции и схемы описаны в `src/content/config.ts`. Добавление нового Markdown-файла в нужную папку автоматически попадает в сайт после сборки.

## Рабочий процесс

1. Установите зависимости:
   ```sh
   npm install
   ```
2. Запустите локальную разработку:
   ```sh
   npm run dev
   ```
   Сайт будет доступен на `http://localhost:4321`.
3. Добавляйте или редактируйте Markdown-файлы в `src/content/**`.
4. Соберите проект перед публикацией:
   ```sh
   npm run build
   ```
5. (Опционально) Проверьте production-сборку локально:
   ```sh
   npm run preview
   ```

## Документация

- `docs/content.md` — правила для фронтматтера и структуры коллекций (`company`, `players`, `sessions`, `diary`).
- `docs/pages.md` — описание маршрутов и советы по добавлению новых страниц.
- `docs/layouts.md` — как устроен базовый лейаут и навигация.
- `docs/theme.md` — подробная палитра и рекомендации по темизации.
- `docs/workflow.md` — чек-лист по редактированию контента и сборке проекта.

## Настройка тем оформления

Тема хранится в `localStorage` под ключом `etocy-theme`. Если ключ не задан, сайт использует системное предпочтение (`prefers-color-scheme`). Палитры задаются CSS-переменными в `src/layouts/Layout.astro` (`:root` — тёмная, `:root[data-theme='light']` — светлая). Ключевые переменные:

- `--color-heading` / `--color-heading-soft` — акценты заголовков;
- `--color-link` / `--color-link-active` — ссылки и кнопки;
- `--color-nav-hover`, `--color-tag-bg`, `--color-button-bg` — состояния навигации, теги и CTA;
- `--bg-gradient`, `--color-surface`, `--color-border` — фон и карточки.

Подробное описание палитры и рекомендаций по настройке — в `docs/theme.md`.

## Деплой на GitHub Pages

1. Создайте репозиторий в GitHub и включите GitHub Pages (ветка `gh-pages` или `/docs` в `main`).
2. Добавьте workflow (примерная структура):
   ```yaml
   name: Deploy Astro site

   on:
     push:
       branches: [main]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 20
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-pages-artifact@v3
           with:
             path: dist

     deploy:
       needs: build
       runs-on: ubuntu-latest
       permissions:
         pages: write
         id-token: write
       steps:
         - uses: actions/deploy-pages@v4
   ```
3. Укажите в настройках Pages путь `dist` как артефакт развертывания (workflow выше делает это автоматически).

## Полезные ссылки

- [Документация Astro](https://docs.astro.build)
- [Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [MDX в Astro](https://docs.astro.build/en/guides/integrations-guide/mdx/) — если понадобится смешивать Markdown и JSX-компоненты.
- [Repository Guidelines](AGENTS.md) — краткое руководство для контрибьюторов (EN).
