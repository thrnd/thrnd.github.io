---
name: Coinduck
desc: информационный сайт по криптовалютам
year: 18
tags: [html-css, adaptive]
link: coinduck
repo: coinduck

title:  Coinduck '18
slug:   coinduck

pages:
    - name: Главная
      link: index.html
      img:  index.jpg
    - name: Фид новостей / видео
      link: feed.html
      img:  feed.jpg
    - name: Страница новости / статьи / события
      link: article_page.html
      img:  detail.jpg
    - name: Список событий (с попап-формой)
      link: calendar.html
      img:  events.jpg
    - name: Контакты
      link: contacts.html
      img:  contacts.jpg
    - name: О проекте
      link: about.html
      img:  about.jpg
---

Верстка сайта с нуля для последних версий браузеров. На момент начала 2020, сайт (coinduck.ru) закрылся, посмотреть можно только статику.

Плюсы верстки:
- вынос всего общего в миксы (про БЭМ на момент верстки знал довольно мало)
- первый проект, где начал использовать сборщик для склеивания html-страничек

Минусы верстки:
- в некоторых местах избыточное кол-во тегов, можно было сверстать гораздо проще
- полный файл bootstrap вместо bootstrap-grid (использовал только сетку)
- jquery и зависимый от него flexslider
