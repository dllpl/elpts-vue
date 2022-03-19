<template>
  <div>
    <Header/>
    <main class="container">
      <section class="step">
        <h1 class="step__title title title--big">Как пройдут следующие 15&nbsp;минут?</h1>
        <ul class="step__list">
          <li class="step__item">
            <button class="btn btn--step" :class="{'btn--step-active': step ===0}">Ознакомление</button>
          </li>
          <li class="step__item">
            <button class="btn btn--step" :class="{'btn--step-active': step ===1}">Шаг 1</button>
          </li>
          <li class="step__item">
            <button class="btn btn--step" :class="{'btn--step-active': step ===2}">Шаг 2</button>
          </li>
          <li class="step__item">
            <button class="btn btn--step" :class="{'btn--step-active': step ===3}">Шаг 3</button>
          </li>
          <li class="step__item">
            <button class="btn btn--step" :class="{'btn--step-active': step ===4}">Шаг 4</button>
          </li>
          <li class="step__item">
            <button class="btn btn--step" :class="{'btn--step-active': step ===5}">Шаг 5</button>
          </li>
        </ul>
      </section>

      <section class="application" v-if="step === 0">
        <div class="form">
          <div class="form__center">
            <ul class="form__left">
              <li class="application-left__item one">
                <h3 class="application-left__title title ">Заполнение сведений о&nbsp;заявителе</h3>
                <p class="text">На&nbsp;данном этапе необходимо заполнить персональные
                  данные собственника&nbsp;ТС</p>
              </li>
              <li class="application-left__item two">
                <h3 class="application-left__title title ">Заполнение сведений о&nbsp;ТС</h3>
                <p class="text">На&nbsp;данном этапе вам необходимо внести данные вашего
                  транспортного средства</p>
              </li>
              <li class="application-left__item three">
                <h3 class="application-left__title title ">Загрузка фотографий</h3>
                <p class="text">На&nbsp;данном этапе вам необходимо загрузить изображения
                  вашего&nbsp;ТС в&nbsp;соответствии с&nbsp;требованиями</p>
              </li>
              <li class="application-left__item four">
                <h3 class="application-left__title title ">Оплата и&nbsp;отправка заявки</h3>
                <p class="text">Стоимость услуги составляет 5&nbsp;000&nbsp;рублей.
                  Оплатить можно банковской картой, Apple Pay, Google Pay</p>
              </li>
              <li class="application-left__item five">
                <h3 class="application-left__title title ">Получение ЭПТС</h3>
                <p class="text">Сроки оформления ЭПТС составляют 1-3&nbsp;дня.
                  ЭПТС будет отправлен, на&nbsp;указанную вами в&nbsp;заявке&nbsp;эл. почту</p>
              </li>
            </ul>

            <div class="form__right">
              <h3 class="application-right__title title title--wranning">Вы&nbsp;не сможете получить ЭПТС,
                если:</h3>
              <ul class="application-right__list">
                <li class="application-right__item text">Вы&nbsp;не&nbsp;являетесь
                  гражданином&nbsp;РФ
                </li>
                <li class="application-right__item text">У&nbsp;вас нет автомобиля</li>
                <li class="application-right__item text">У&nbsp;вас уже есть ЭПТС</li>
              </ul>
              <a href="#" class="link link--question">Ответы на&nbsp;частые вопросы</a>
            </div>
          </div>

          <button class="btn btn--big" @click="step = step+1">Начать заполнение заявки</button>

        </div>
      </section>

      <form @submit.prevent="submit">


        <section class="step-one" v-if="step === 1">
          <validation-observer
              ref="observer"
              v-slot="{ invalid }"
          >
            <div class="form">
              <h2 class="form__title title title--green">Сведения о&nbsp;заявителе</h2>

              <div class="form__top">
                <div class="form__item">
                  <h3 class="form__name title">Собственник ТС</h3>
                  <validation-provider
                      v-slot="{ errors }"
                      name="radio"
                      rules="required"
                  >
                    <input type="radio" value="" :checked="type_owner===1" @change="type_owner=1">Физическое
                    лицо
                  </validation-provider>
                  <validation-provider
                      v-slot="{ errors }"
                      name="radio"
                      rules="required"
                  >
                    <input type="radio" value="" :checked="type_owner===2" @change="type_owner=2">Юридическое
                    лицо
                  </validation-provider>
                </div>
              </div>
              <div class="form__fiz face-fiz" :class="{'face-active':type_owner===1}"
                   v-if="type_owner===1">
                <div class="form__center">

                  <div class="form__left">
                    <div class="form__item">
                      <h3 class="form__name title">ФИО собственника</h3>
                      <div class="form__input">
                        <validation-provider
                            v-slot="{ errors }"
                            name="Фамилия"
                            rules="required"
                        >
                          <input class="input" type="text" name="family" placeholder="Фамилия"

                                 v-model="last_name">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="Имя"
                            rules="required"
                        >
                          <input class="input" type="text" name="name" placeholder="Имя"
                                 v-model="first_name">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="Отчество"
                            rules="required"
                        >
                          <input class="input" type="text" placeholder="Отчество"
                                 v-model="patronymic">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                      </div>
                    </div>

                    <div class="form__item">
                      <h3 class="form__name title">Адрес регистрации</h3>
                      <div class="form__input">
                        <validation-provider
                            v-slot="{ errors }"
                            name="Город"
                            rules="required"
                        >
                          <input class="input" type="text" name="city"
                                 placeholder="Населенный пункт" v-model="city">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="Улица"
                            rules="required"
                        >
                          <input class="input" type="text" name="street" placeholder="Улица"
                                 v-model="street">
                          <p style="color:red">{{ errors[0] }}</p>

                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="Дом"
                            rules="required"
                        >
                          <input class="input" type="text" name="house" placeholder="Дом"
                                 v-model="home">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="Квартира"
                            rules="required"
                        >
                          <input class="input" type="text" name="flat" placeholder="Квартира"
                                 v-model="flat">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>

                      </div>
                    </div>
                  </div>
                  <div class="form__right">
                    <div class="form__item">
                      <h3 class="form__name title">Паспортные данные</h3>
                      <div class="form__input">
                        <validation-provider
                            v-slot="{ errors }"
                            name="Cерия"
                            rules="required"
                        >
                          <input class="input" type="text" name="series" placeholder="Серия"
                                 v-model="pass_serial">
                          <p style="color:red">{{ errors[0] }}</p>

                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="Номер"
                            rules="required"
                        >
                          <input class="input" type="text" name="number" placeholder="Номер"
                                 v-model="pass_number">
                          <p style="color:red">{{ errors[0] }}</p>

                        </validation-provider>
                      </div>
                    </div>


                    <div class="form__item">
                      <h3 class="form__name title">ИНН и СНИЛС</h3>
                      <div class="form__input">
                        <validation-provider
                            v-slot="{ errors }"
                            name="ИНН"
                            rules="required"
                        >
                          <input class="input" type="text" name="inn" placeholder="ИНН"
                                 v-model="inn">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="СНИЛС"
                            rules="required"
                        >
                          <input class="input" type="text" name="snils" placeholder="СНИЛС"
                                 v-model="snils">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                      </div>
                    </div>

                    <div class="form__item">
                      <h3 class="form__name title">Контактная информация</h3>
                      <div class="form__input">
                        <validation-provider
                            v-slot="{ errors }"
                            name="Телефон"
                            rules="required"
                        >
                          <input class="input" type="text" name="phone" placeholder="Телефон"
                                 v-model="phone">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="Эл. почта"
                            rules="required|email"
                        >
                          <input class="input" type="text" name="mail" placeholder="Эл. почта"
                                 v-model="email">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                      </div>
                    </div>
                    <div style="display: flex;">
                      <validation-provider
                          v-slot="{ errors}"
                          name="Согласие"
                          rules="required"
                      >
                        <div style="display: flex" class="form-group">
                          <input type="checkbox" id="checkbox1" v-model="checkbox">

                          <label for="checkbox1">Даю согласие на&nbsp;обработку персональных данных, соглашаюсь с <a
                              href="#"
                              target="_blank">
                            политикой&nbsp;конфиденциальности</a></label>
                        </div>
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                    </div>
                  </div>
                </div>
              </div>

              <div class="form__jur face-jur" :class="{'face-active':type_owner===2}"
                   v-if="type_owner===2">
                <div class="form__center">

                  <div class="form__left">
                    <div class="form__item">
                      <h3 class="form__name title">Название организации</h3>
                      <div class="">
                        <validation-provider
                            v-slot="{ errors }"
                            name="Название организации"
                            rules="required"
                        >
                          <input class="input" type="text" name="name"
                                 placeholder="Название организации"
                                 v-model="org_name">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                      </div>
                    </div>

                    <div class="form__item">
                      <h3 class="form__name title">Юридический адрес организации</h3>
                      <div class="form__input">
                        <validation-provider
                            v-slot="{ errors }"
                            name="Город"
                            rules="required"
                        >
                          <input class="input" type="text" name="city"
                                 placeholder="Населенный пункт" v-model="city">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="Город"
                            rules="required"
                        >
                          <input class="input " type="text" name="street" placeholder="Улица"
                                 v-model="street">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="Дом"
                            rules="required"
                        >
                          <input class="input " type="text" name="house" placeholder="Дом"
                                 v-model="home">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="Квартира"
                            rules="required"
                        >
                          <input class="input" type="text" name="flat" placeholder="Квартира"
                                 v-model="flat">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                      </div>
                    </div>

                    <div class="form__item">
                      <h3 class="form__name title">Контактная информация</h3>
                      <div class="form__input">
                        <validation-provider
                            v-slot="{ errors }"
                            name="Телефон"
                            rules="required|phone"
                        >
                          <input class="input" type="text" name="phone" placeholder="Телефон"
                                 v-model="phone">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="Телефон"
                            rules="required|email"
                        >
                          <input class="input" type="text" name="mail" placeholder="Эл. почта"
                                 v-model="email">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                      </div>
                    </div>
                  </div>
                  <div class="form__right">
                    <div class="form__item">
                      <h3 class="form__name title">Документы</h3>
                      <div class="">
                        <validation-provider
                            v-slot="{ errors }"
                            name="ИНН"
                            rules="required"
                        >
                          <input class="input" type="text" name="inn" placeholder="ИНН"
                                 v-model="inn">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="КПП"
                            rules="required"
                        >
                          <input class="input" type="text" name="kpp" placeholder="КПП"
                                 v-model="kpp">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                        <validation-provider
                            v-slot="{ errors }"
                            name="ОГРН"
                            rules="required"
                        >
                          <input class="input" type="text" name="ogrn" placeholder="ОГРН"
                                 v-model="ogrn">
                          <p style="color:red">{{ errors[0] }}</p>
                        </validation-provider>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <validation-provider
                      v-slot="{ errors }"
                      name="Согласие"
                      rules="required"
                  >
                    <div style="display: flex" class="form-group">
                      <input type="checkbox" id="checkbox" v-model="checkbox" @click="checkbox===true">

                      <label for="checkbox">Даю согласие на&nbsp;обработку персональных данных, соглашаюсь с <a
                          href="#"
                          target="_blank">
                        политикой&nbsp;конфиденциальности</a></label>
                    </div>
                    <p style="color:red">{{ errors[0] }}</p>
                  </validation-provider>
                </div>
              </div>
            </div>
            <section v-if="step>0 && step<5">
              <div class="form__bottom ">
                <button class="btn btn--back" @click="stepPrev">‹ Назад</button>
                <button class="btn btn--next" @click="stepNext" :disabled="invalid"
                        :class="{'disabled':invalid}">Далее
                  ›
                </button>
              </div>
            </section>
          </validation-observer>
        </section>


        <section class="step-two" v-if="step === 2">
          <validation-observer
              ref="observer"
              v-slot="{ invalid }"
          >
            <div class="form">
              <h2 class="form__title title title--green">Сведения о&nbsp;транспортном средстве</h2>

              <div class="form__top">
                <div class="form__item">
                  <h3 class="form__name title">Марка и модификация</h3>
                  <div class="form__input">
                    <validation-provider
                        v-slot="{ errors }"
                        name="Марка и модификация ТС"
                        rules="required"
                        class="input--l"
                    >
                      <input class="input" type="text" name="brand"
                             placeholder="Марка и модификация ТС"
                             v-model="car_mark">
                      <p style="color:red">{{ errors[0] }}</p>

                    </validation-provider>
                    <a href="#" class="link link--form">Инструкция по заполнению › </a>
                  </div>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Коммерческое наименование</h3>
                  <div class="form__input">
                    <validation-provider
                        v-slot="{ errors }"
                        name="Марка и модификация ТС"
                        rules="required"
                        style="width: 100%"
                    >
                      <input class="input" type="text" name="Commerс-name"
                             placeholder="Коммерческое наименование" v-model="commercial_name">
                      <p style="color:red">{{ errors[0] }}</p>
                    </validation-provider>
                  </div>
                </div>
              </div>
              <div class="form__center">
                <div class="form__left">
                  <div class="form__item">
                    <h3 class="form__name title">Тип</h3>
                    <div>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Тип ТС"
                          rules="required"
                          style="width: 100%"
                      >
                        <input class="input" type="text" name="type" placeholder="Тип"
                               v-model="car_type">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                    </div>
                  </div>

                  <div class="form__item">
                    <h3 class="form__name title">Идентификационный номер</h3>
                    <div>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Идентификационный номер"
                          rules="required"
                          style="width: 100%"
                      >
                        <input class="input" type="text" name="id-number"
                               placeholder="Идентификационный номер"
                               v-model="car_id">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                    </div>
                  </div>

                  <div class="form__item">
                    <h3 class="form__name title">Модель и номер двигателя</h3>
                    <div class="form__input">
                      <validation-provider
                          v-slot="{ errors }"
                          name="Модель двигателя"
                          rules="required"
                          class="input--s"
                      >
                        <input class="input " type="text" name="model" placeholder="Модель"
                               v-model="engine_model">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Номер двигателя"
                          rules="required"
                          class="input--s"
                      >
                        <input class="input " type="text" name="engine-number"
                               placeholder="Номер двигателя" v-model="engine_number">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                    </div>
                  </div>
                </div>


                <div class="form__right">
                  <div class="form__item">
                    <h3 class="form__name title">Цвет кузова</h3>
                    <div class="">
                      <validation-provider
                          v-slot="{ errors }"
                          name="Цвет кузова"
                          rules="required"
                          class=""
                      >
                        <input class="input" type="text" name="color" placeholder="Цвет кузова"
                               v-model="car_color">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                    </div>
                  </div>

                  <div class="form__item">
                    <h3 class="form__name title">Привод ТС</h3>
                    <div class="">
                      <validation-provider
                          v-slot="{ errors }"
                          name="Привод ТС"
                          rules="required"
                          class=""
                      >
                        <input class="input" type="text" name="vehicle" placeholder="Привод ТС"
                               v-model="drive_ts">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                    </div>
                  </div>

                  <div class="form__item">
                    <h3 class="form__name title">Мощность и&nbsp;объем двигателя, вид топлива</h3>
                    <div class="form__input">
                      <validation-provider
                          v-slot="{ errors }"
                          name="Мощность"
                          rules="required"
                          class="input--xs"
                      >
                        <input class="input " type="text" name="power" placeholder="Мощность"
                               v-model="engine_power">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Мощность"
                          rules="required"
                          class="input--xs"
                      >
                        <input class="input" type="text" name="volume" placeholder="Объем"
                               v-model="engine_volume">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Мощность"
                          rules="required"
                          class="input--xs"
                      >
                        <input class="input" type="text" name="fuel" placeholder="Топливо"
                               v-model="fuel">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section v-if="step>0 && step<5">
              <div class="form__bottom ">
                <button class="btn btn--back" @click="stepPrev">‹ Назад</button>
                <button class="btn btn--next" @click="stepNext" :disabled="invalid"
                        :class="{'disabled':invalid}">Далее
                  ›
                </button>
              </div>
            </section>
          </validation-observer>
        </section>

        <section class="step-three" v-if="step === 3">
          <div class="form">
            <h2 class="form__title title title--green">Загрузка изображений</h2>

            <div class="form__top request">
              <div class="request__info">
                <h3 class="request__title title title--request">Требования к изображениям</h3>
                <ul class="request__list">
                  <li class="text text--request">Поддерживаемые форматы: .jpg, .png, .jpeg, .pdf
                  </li>
                  <li class="text text--request">Изображения не&nbsp;должны превышать 5&nbsp;мб</li>
                </ul>
              </div>
              <div class="request__help">
                <a href="#" class="link link--request">Инструкция по загрузке › </a>
              </div>
            </div>
            <div class="form__center">

              <div class="form__left">
                <div class="form__item">
                  <h3 class="form__name title">Фото СТС (лицевая)</h3>
                  <div class="">
                    <div class="input__wrapper">
                      <input type="file" class="input__file" id="input__file1" v-on:change="sts_frontUpload" ref="file">
                      <label class="input__file-button" for="input__file1">
                        <div class="input__file-icon-wrapper">
                          <img class="input__file-icon" src="/img/file.svg"
                               alt="Выбрать файл">
                        </div>
                        <p class="text input__file-button-text"
                           :class="{'text--done':!sts_front}">
                          Загрузить<br>
                          <span class="text text--grey">(.jpg, .png, .jpeg, .pdf)</span>
                        </p>
                        <p class="text input__file-button-text"
                           :class="{'text--done':sts_front}">
                          Загружено</p>

                        <div class="input__file-icon-wrapper done"
                             :class="{'done--active':sts_front}">
                          <img class="input__file-icon" src="/img/icon/done.svg"
                               alt="Выбрать файл">
                        </div>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото СТС (обратная)</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <input type="file" class="input__file"  id="input__file2" v-on:change="sts_backUpload" ref="file">
                      <label class="input__file-button" for="input__file2">
                        <div class="input__file-icon-wrapper">
                          <img class="input__file-icon" src="/img/file.svg"
                               alt="Выбрать файл">
                        </div>
                        <p class="text input__file-button-text text--done"
                           :class="{'text--done':!sts_back}">Загрузить<br>
                          <span class="text text--grey">(.jpg, .png, .jpeg, .pdf)</span>
                        </p>
                        <p class="text input__file-button-text"
                           :class="{'text--done':sts_back}">
                          Загружено</p>

                        <div class="input__file-icon-wrapper done"
                             :class="{'done--active':sts_back}">
                          <img class="input__file-icon" src="/img/icon/done.svg"
                               alt="Выбрать файл">
                        </div>
                      </label>
                    </div>
                  </form>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото ТС (спереди)</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <input type="file" class="input__file" id="input__file3" v-on:change="ts_frontUpload" ref="file">
                      <label class="input__file-button" for="input__file3">
                        <div class="input__file-icon-wrapper">
                          <img class="input__file-icon" src="/img/file.svg"
                               alt="Выбрать файл">
                        </div>
                        <p class="text input__file-button-text ">Загрузить<br>
                          <span class="text text--grey">(.jpg, .png, .jpeg, .pdf)</span>
                        </p>
                        <p class="text input__file-button-text text--done">Загружено</p>

                        <div class="input__file-icon-wrapper done done--active">
                          <img class="input__file-icon" src="/img/icon/done.svg"
                               alt="Выбрать файл">
                        </div>
                      </label>
                    </div>
                  </form>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото ТС (сзади)</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <input type="file" class="input__file" id="input__file4" v-on:change="ts_backUpload" ref="file">
                      <label class="input__file-button" for="input__file4">
                        <div class="input__file-icon-wrapper">
                          <img class="input__file-icon" src="/img/file.svg"
                               alt="Выбрать файл">
                        </div>
                        <p class="text input__file-button-text">Загрузить<br>
                          <span class="text text--grey">(.jpg, .png, .jpeg, .pdf)</span>
                        </p>
                        <p class="text input__file-button-text text--done">Загружено</p>

                        <div class="input__file-icon-wrapper done done--active">
                          <img class="input__file-icon" src="/img/icon/done.svg"
                               alt="Выбрать файл">
                        </div>
                      </label>
                    </div>
                  </form>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото ТС (справа)</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <input type="file" class="input__file" id="input__file5" v-on:change="ts_rightUpload" ref="file">
                      <label class="input__file-button" for="input__file5">
                        <div class="input__file-icon-wrapper">
                          <img class="input__file-icon" src="/img/file.svg"
                               alt="Выбрать файл">
                        </div>
                        <p class="text input__file-button-text text--done">Загрузить<br>
                          <span class="text text--grey">(.jpg, .png, .jpeg, .pdf)</span>
                        </p>
                        <p class="text input__file-button-text">Загружено</p>

                        <div class="input__file-icon-wrapper done">
                          <img class="input__file-icon" src="/img/icon/done.svg"
                               alt="Выбрать файл">
                        </div>
                      </label>
                    </div>
                  </form>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото ТС (слева)</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <input type="file" class="input__file" id="input__file6" v-on:change="ts_leftUpload" ref="file">
                      <label class="input__file-button" for="input__file6">
                        <div class="input__file-icon-wrapper">
                          <img class="input__file-icon" src="/img/file.svg"
                               alt="Выбрать файл">
                        </div>
                        <p class="text input__file-button-text text--done">Загрузить<br>
                          <span class="text text--grey">(.jpg, .png, .jpeg, .pdf)</span>
                        </p>
                        <p class="text input__file-button-text">Загружено</p>

                        <div class="input__file-icon-wrapper done">
                          <img class="input__file-icon" src="/img/icon/done.svg"
                               alt="Выбрать файл">
                        </div>
                      </label>
                    </div>
                  </form>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото VIN-таблички у водительской двери</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <input type="file" class="input__file" id="input__file7" v-on:change="vin_doorUpload" ref="file">
                      <label class="input__file-button" for="input__file7">
                        <div class="input__file-icon-wrapper">
                          <img class="input__file-icon" src="/img/file.svg"
                               alt="Выбрать файл">
                        </div>
                        <p class="text input__file-button-text text--done">Загрузить<br>
                          <span class="text text--grey">(.jpg, .png, .jpeg, .pdf)</span>
                        </p>
                        <p class="text input__file-button-text">Загружено</p>

                        <div class="input__file-icon-wrapper done">
                          <img class="input__file-icon" src="/img/icon/done.svg"
                               alt="Выбрать файл">
                        </div>
                      </label>
                    </div>
                  </form>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото VIN-таблички на лобовом стекле</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <input type="file" class="input__file" id="input__file8" v-on:change="vin_glassUpload" ref="file">
                      <label class="input__file-button" for="input__file8">
                        <div class="input__file-icon-wrapper">
                          <img class="input__file-icon" src="/img/file.svg"
                               alt="Выбрать файл">
                        </div>
                        <p class="text input__file-button-text text--done">Загрузить<br>
                          <span class="text text--grey">(.jpg, .png, .jpeg, .pdf)</span>
                        </p>
                        <p class="text input__file-button-text">Загружено</p>

                        <div class="input__file-icon-wrapper done">
                          <img class="input__file-icon" src="/img/icon/done.svg"
                               alt="Выбрать файл">
                        </div>
                      </label>
                    </div>
                  </form>
                </div>
              </div>
              <div class="form__right">
                <div class="form__item photo">
                  <h3 class="photo__name title">Примеры фото</h3>
                  <ul class="photo__list">
                    <li class="photo__item item-sts">
                      <div class="photo__wrapper">
                        <img class="photo__img" src="img/sts.png" alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="white"/>
                        </svg>
                      </div>
                      <div class="photo__wrapper">
                        <img class="photo__img" src="img/sts.png" alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="white"/>
                        </svg>
                      </div>
                    </li>
                    <li class="photo__item item-car">
                      <div class="photo__wrapper">
                        <img class="photo__img" src="img/car-front.png" alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="white"/>
                        </svg>
                      </div>
                      <div class="photo__wrapper">
                        <img class="photo__img" src="img/car-back.png" alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="white"/>
                        </svg>
                      </div>
                      <div class="photo__wrapper">
                        <img class="photo__img" src="img/car-left.png" alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="white"/>
                        </svg>
                      </div>
                      <div class="photo__wrapper">
                        <img class="photo__img" src="img/car-right.png" alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="white"/>
                        </svg>
                      </div>
                    </li>
                    <li class="photo__item ">
                      <div class="photo__wrapper">
                        <img class="photo__img" src="" alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="black"/>
                        </svg>
                      </div>
                      <div class="photo__wrapper">
                        <img class="photo__img" src="" alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="black"/>
                        </svg>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- <div class="form__bottom ">
                <button class="btn btn--back">Назад</button>
                <button class="btn btn--next">Далее ›</button>
            </div>
            -->

          </div>
        </section>

        <section class="step-four" v-if="step === 4">
          <div class="form">
            <h2 class="form__title title title--green">Оплата и&nbsp;отправка заявки</h2>
            <div class="form__sum sum">
              <h3 class="sum__title title">Стоимость услуги</h3>
              <span class="sum__price price">5 000 рублей</span>
              <input type="checkbox" checked>
              Прошу произвести оформление ЭПТС на транспортное средство
            </div>

            <div class="form__pay pay">
              <h3 class="pay__title title">Выберите способ оплаты</h3>
              <ul class="pay__list">
                <li class="pay__item"><input type="radio" name="face" value="" checked>Банковской картой
                </li>
                <li class="pay__item"><input type="radio" name="face" value="">Apple Pay</li>
                <li class="pay__item"><input type="radio" name="face" value="">Google Pay</li>
                <li class="pay__item"><input type="radio" name="face" value="">Банковский перевод</li>
              </ul>
            </div>

          </div>
        </section>
      </form>

      <section class="step-five" v-if="step === 5">
        <div class="form">
          <h2 class="form__title title title--green">Оплата и&nbsp;отправка заявки</h2>
          <svg width="53" height="35" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 11L11 20L29 2" stroke="#79B285" stroke-width="3" stroke-linecap="round"
                  stroke-linejoin="round"/>
          </svg>
          <p class="text__finish">Оплата прошла успешно!<br>
            Оформление ЭПТС длится от&nbsp;1&nbsp;до&nbsp;3&nbsp;дней.<br>
            ЭПТС будет отправлен на&nbsp;эл. почту, указанную при оформлении заявки.</p>
          <div class="home">
            <a href="#" class="link link--home">Вернуться на Главную ›</a>
          </div>
        </div>
      </section>
    </main>

    <Footer/>
  </div>
</template>

<script>
import {required, digits, email, max, regex} from 'vee-validate/dist/rules'
import {extend, ValidationObserver, ValidationProvider, setInteractionMode} from 'vee-validate'
import Header from "./Header";
import Footer from "./Footer";

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',
})

extend('required', {
  ...required,
  message: 'Заполните поле "{_field_}"',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
})

extend('email', {
  ...email,
  message: 'Не валидная почта',
})

export default {
  name: "Order",
  components: {
    Footer,
    Header,
    ValidationProvider,
    ValidationObserver,
  },

  data() {
    return {
      step: 3,

      type_owner: 1,

      last_name: '',
      first_name: '',
      patronymic: '',

      org_name: '',
      kpp: '',
      ogrn: '',

      city: '',
      street: '',
      home: null,
      flat: null,

      pass_serial: null,
      pass_number: null,

      inn: null,
      snils: null,

      phone: '',
      email: '',

      car_mark: '',
      commercial_name: '',
      car_type: '',
      car_id: null,
      car_color: '',
      drive_ts: '',

      engine_model: '',
      engine_number: '',
      engine_power: '',
      engine_volume: '',
      fuel: '',

      sts_front: '',
      sts_back: '',
      ts_front: '',
      ts_back: '',
      ts_right: '',
      ts_left: '',
      vin_door: '',
      vin_glass: '',

      price: null,
      pay_method: '',
      pay_success: false,

      checkbox: true,
    }
  },

  methods: {
    stepNext() {
      this.step++
      window.scrollTo(0, 0)
    },
    stepPrev() {
      this.step--
      window.scrollTo(0, 0)
    },
    submit() {
      console.log('submit')
    },


    sts_frontUpload(){
      this.sts_front = this.$refs.file.files[0];
    },
    sts_backUpload(){
      this.sts_back = this.$refs.file.files[0];
    },
    ts_frontUpload(){
      this.ts_front = this.$refs.file.files[0];
    },
    ts_backUpload(){
      this.ts_back = this.$refs.file.files[0];
    },
    ts_rightUpload(){
      this.ts_right = this.$refs.file.files[0];
    },
    ts_leftUpload(){
      this.ts_left = this.$refs.file.files[0];
    },
    vin_doorUpload(){
      this.vin_door = this.$refs.file.files[0];
    },
    vin_glassUpload(){
      this.vin_glass = this.$refs.file.files[0];
    },
  }

}
</script>

<style scoped>

</style>