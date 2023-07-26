<template>
  <header class="header">
    <div class="header-container" style="display: flex; justify-content: space-between">
      <div class="header__action-mobile">
        <a href="" class="pts__action">Получить ЭПТС</a>
        <a href="tel:79869322789" class="phone__action">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1408 1408" color="white"><path fill="currentColor" d="M1408 1112q0 27-10 70.5t-21 68.5q-21 50-122 106q-94 51-186 51q-27 0-53-3.5t-57.5-12.5t-47-14.5T856 1357t-49-18q-98-35-175-83q-127-79-264-216T152 776q-48-77-83-175q-3-9-18-49t-20.5-55.5t-14.5-47T3.5 392T0 339q0-92 51-186Q107 52 157 31q25-11 68.5-21T296 0q14 0 21 3q18 6 53 76q11 19 30 54t35 63.5t31 53.5q3 4 17.5 25t21.5 35.5t7 28.5q0 20-28.5 50t-62 55t-62 53t-28.5 46q0 9 5 22.5t8.5 20.5t14 24t11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14t20.5 8.5t22.5 5q18 0 46-28.5t53-62t55-62t50-28.5q14 0 28.5 7t35.5 21.5t25 17.5q25 15 53.5 31t63.5 35t54 30q70 35 76 53q3 7 3 21z"/></svg>
        </a>
        <button id="burger" class="header__burger-button btn" type="">
          <div class="burger">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
            <span class="close"><svg xmlns="http://www.w3.org/2000/svg" height="1.7em" viewBox="0 0 384 512" style="fill: white"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg></span>
          </div>
        </button>
      </div>

      <div id="menu" class="burger__menu">
        <ul class="burger__list ul-reset">
          <li class="burger__item">
            <a href="https://gospts.ru/" class="link">Главная</a>
          </li>
          <li class="burger__item burger__service-link">
              <span>Услуги</span>
              <svg style="margin-left: 0.6em" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
              <ul class="burger__service-list">
                <li><a class="service--list-item" href="https://gospts.ru/%d0%bf%d0%be%d0%bb%d1%83%d1%87%d0%b5%d0%bd%d0%b8%d0%b5-%d1%81%d0%b1%d0%ba%d1%82%d1%81/" target="_blank">Получить СБКТС</a></li>
                <li><a class="service--list-item" href="https://gospts.ru/%d0%bf%d0%b5%d1%80%d0%b5%d1%85%d0%be%d0%b4-%d1%81-%d0%b1%d1%83%d0%bc%d0%b0%d0%b6%d0%bd%d0%be%d0%b3%d0%be-%d0%bf%d1%82%d1%81-%d0%bd%d0%b0-%d1%8d%d0%bf%d1%82%d1%81/" target="_blank">Замена ПТС на ЭПТС</a></li>
                <li><a class="service--list-item" href="https://gospts.ru/%d0%ba%d1%83%d0%bf%d0%b8%d1%82%d1%8c-%d0%b0%d0%b2%d1%82%d0%be%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d1%8c-%d0%b8%d0%b7-eac/" target="_blank">Купить авто из ЕАЭС</a></li>
                <li><a class="service--list-item" href="https://gospts.ru/na-uchet/" target="_blank">Постановка на учет</a></li>
                <li><a class="service--list-item" href="https://gospts.ru/era-glonass/" target="_blank">ЭРА-ГЛОНАСС</a></li>
                <li><a class="service--list-item" href="https://gospts.ru/to/" target="_blank">Техосмотр</a></li>
                <li><a class="service--list-item" href="https://gospts.ru/to-kom/" target="_blank">Техосмотр (коммерческий)</a></li>
                <li><a class="service--list-item" href="https://gospts.ru/%d1%80%d1%83%d1%81%d1%81%d0%b8%d1%84%d0%b8%d0%ba%d0%b0%d1%86%d0%b8%d1%8f-%d0%b0%d0%b2%d1%82%d0%be%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d0%b5%d0%b9/" target="_blank">Руссификация авто</a></li>
                <li><a class="service--list-item" href="https://gospts.ru/reggibdd/" target="_blank">Регистрация изменений ТС</a></li>
              </ul>
          </li>
          <li class="burger__item">
            <a href="https://gospts.ru/affiliate/" class="link">Сотрудничество</a>
          </li>
          <li class="burger__item">
            <a href="https://gospts.ru/contacts/" class="link" target="_blank">Контакты</a>
          </li>
        </ul>
      </div>
      <div style="display:inline-flex;">
        <a href="https://gospts.ru/" class="header__logo link">
          <img class="" src="img/logo.png" alt="">
        </a>
        <nav class="heder__nav nav">
          <ul class="nav__list">
            <li class="nav__item">
              <a href="https://gospts.ru/" class="link link--nav" target="_blank">Главная</a>
            </li>
            <li class="nav__item">
              <a href="#" class="link link--nav service--link" style="display: flex; align-items: center">
                <span>Услуги</span>
                <svg style="margin-left: 0.6em" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
                <ul class="service--list">
                  <li><a class="service--list-item" href="https://gospts.ru/%d0%bf%d0%be%d0%bb%d1%83%d1%87%d0%b5%d0%bd%d0%b8%d0%b5-%d1%81%d0%b1%d0%ba%d1%82%d1%81/" target="_blank">Получить СБКТС</a></li>
                  <li><a class="service--list-item" href="https://gospts.ru/%d0%bf%d0%b5%d1%80%d0%b5%d1%85%d0%be%d0%b4-%d1%81-%d0%b1%d1%83%d0%bc%d0%b0%d0%b6%d0%bd%d0%be%d0%b3%d0%be-%d0%bf%d1%82%d1%81-%d0%bd%d0%b0-%d1%8d%d0%bf%d1%82%d1%81/">Замена ПТС на ЭПТС</a></li>
                  <li><a class="service--list-item" href="https://gospts.ru/%d0%ba%d1%83%d0%bf%d0%b8%d1%82%d1%8c-%d0%b0%d0%b2%d1%82%d0%be%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d1%8c-%d0%b8%d0%b7-eac/" target="_blank">Купить авто из ЕАЭС</a></li>
                  <li><a class="service--list-item" href="https://gospts.ru/na-uchet/" target="_blank">Постановка на учет</a></li>
                  <li><a class="service--list-item" href="https://gospts.ru/era-glonass/" target="_blank">ЭРА-ГЛОНАСС</a></li>
                  <li><a class="service--list-item" href="https://gospts.ru/to/" target="_blank">Техосмотр</a></li>
                  <li><a class="service--list-item" href="https://gospts.ru/to-kom/" target="_blank">Техосмотр (коммерческий)</a></li>
                  <li><a class="service--list-item" href="https://gospts.ru/%d1%80%d1%83%d1%81%d1%81%d0%b8%d1%84%d0%b8%d0%ba%d0%b0%d1%86%d0%b8%d1%8f-%d0%b0%d0%b2%d1%82%d0%be%d0%bc%d0%be%d0%b1%d0%b8%d0%bb%d0%b5%d0%b9/" target="_blank">Руссификация авто</a></li>
                  <li><a class="service--list-item" href="https://gospts.ru/reggibdd/" target="_blank">Регистрация изменений ТС</a></li>
                </ul>
              </a>
            </li>
            <li class="nav__item">
              <a href="https://gospts.ru/affiliate/" class="link link--nav" target="_blank">Сотрудничество</a>
            </li>
            <li class="nav__item">
              <a href="https://gospts.ru/contacts/" class="link link--nav" target="_blank">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>

      <a href="#" class="header__epts link link--epts"> <a href="tel:79869322789" class="header__phone link">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 1408 1408"><path fill="currentColor" d="M1408 1112q0 27-10 70.5t-21 68.5q-21 50-122 106q-94 51-186 51q-27 0-53-3.5t-57.5-12.5t-47-14.5T856 1357t-49-18q-98-35-175-83q-127-79-264-216T152 776q-48-77-83-175q-3-9-18-49t-20.5-55.5t-14.5-47T3.5 392T0 339q0-92 51-186Q107 52 157 31q25-11 68.5-21T296 0q14 0 21 3q18 6 53 76q11 19 30 54t35 63.5t31 53.5q3 4 17.5 25t21.5 35.5t7 28.5q0 20-28.5 50t-62 55t-62 53t-28.5 46q0 9 5 22.5t8.5 20.5t14 24t11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14t20.5 8.5t22.5 5q18 0 46-28.5t53-62t55-62t50-28.5q14 0 28.5 7t35.5 21.5t25 17.5q25 15 53.5 31t63.5 35t54 30q70 35 76 53q3 7 3 21z"/></svg>
        +7(986)932-27-89</a></a>
    </div>

  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>