# etocy.info — хроники «К20»

Статический сайт на [Astro](https://astro.build), который клуб настольных ролевых игр «К20» использует для кампании **«Последствия Чумы Заклинаний»**. Проект собирает карточки персонажей, архив игровых сессий и справочные материалы в Markdown/MDX, а затем публикует их как быстрые статические страницы.

## Содержание

- [Функциональность](#функциональность)
- [Стек](#стек)
- [Структура проекта](#структура-проекта)
- [Рабочий процесс](#рабочий-процесс)
- [Настройка тем оформления](#настройка-тем-оформления)
- [Деплой на GitHub Pages](#деплой-на-github-pages)
- [Полезные ссылки](#полезные-ссылки)

## Функциональность

- Каталог персонажей кампании с отдельными страницами и метаданными (уровень, класс, теги).
- Архив сессий с датой, участниками, кратким описанием и подробными заметками.
- Раздел «О компании» для описания клуба и кампании; блоки собираются из Markdown-файлов.
- Светлая и тёмная тема на основе палитры Dracula с «книжными» акцентами, вдохновлёнными официальными правилами D&D 5e.
- Все данные лежат в репозитории в Markdown: удобно редактировать и версионировать.
- Дневник Ласм — творческие заметки и эмоциональные отклики после сессий.
- Адаптивная верстка: меню с мобильным бургером и оптимизированными карточками под маленькие экраны.

## Стек

- [Astro 5](https://docs.astro.build) — генератор статических сайтов.
- Контентные коллекции Astro (`src/content`) с типизацией через Zod.
- [TypeScript](https://www.typescriptlang.org/) и встроенный JSX-рендер Astro.
- [Roboto](https://fonts.google.com/specimen/Roboto) как основной шрифт интерфейса.

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

## Настройка тем оформления

Тема хранится в `localStorage` под ключом `etocy-theme`. Если ключ не задан, сайт использует системное предпочтение (`prefers-color-scheme`). Палитры задаются CSS-переменными в `src/layouts/Layout.astro`. При необходимости можно поправить цвета или добавить дополнительные оттенки, не затрагивая остальной код.

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
