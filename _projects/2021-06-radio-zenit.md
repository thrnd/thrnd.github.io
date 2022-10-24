---
name: Радио Зенит
desc: разработка сайта после полного редизайна
year: 21
tags: [html-css, adaptive, bem, js]
link: radio-zenit
repo: gpm_radiozenit

title:      Радио Зенит '20
slug:       radio-zenit
siteLink:   https://www.radiozenit.ru/

pages:
    - name: Главная
      link: index.html
      img:  index.jpg
    - name: Программы
      link: podcasts.html
      img:  programs.jpg
    - name: Страница программы
      link: podcast-article.html
      img:  program.jpg
    - name: Трансляции
      link: live.html
      img:  live.jpg
    - name: Видео
      link: videos.html
      img:  video.jpg
    - name: Новости
      link: news.html
      img:  news.jpg
    - name: Статья новости
      link: news-article.html
      img:  news-article.jpg
    - name: История эфира
      link: onair-history.html
      img:  history.jpg
    - name: Поиск
      link: search.html
      img:  search.jpg
    - name: Акции
      link: actions.html
      img:  actions.jpg
    - name: Контакты
      link: contacts.html
      img:  contacts.jpg
    - name: «О нас»
      link: about.html
      img:  about.jpg
---

Верстка сайта с нуля для последних версий браузеров.

Плюсы верстки:
- БЭМ-методология, разбитие макета на компоненты
- снимаю ненужные обработчики <code>resize</code> для избежания утечки памяти (переход между страницами осуществляется через ajax внутренней библиотекой, контроль обработчиков не предусматривает)

Минусы верстки:
- в некоторых местах возможно было сверстать чуть проще и менее мудрено с точки зрения БЭМ-модификаторов
- весь js в одном файле
- можно сократить количество обработчиков <code>click</code> на <code>document</code>, которые вызывают <code>event.target.closest(...)</code>, написав вспомогательный интерфейс