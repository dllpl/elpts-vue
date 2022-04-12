<template>
  <div>

    <section class="step">
      <h1 class="step__title title title--big" v-if="form.step===0">Как пройдут следующие 15&nbsp;минут?</h1>
      <ul class="step__list">
        <li class="step__item">
          <button class="btn btn--step" :class="{'btn--step-active': form.step ===0}">Ознакомление</button>
        </li>
        <li class="step__item">
          <button class="btn btn--step" :class="{'btn--step-active': form.step ===1}">Шаг 1</button>
        </li>
        <li class="step__item">
          <button class="btn btn--step" :class="{'btn--step-active': form.step ===2}">Шаг 2</button>
        </li>
        <li class="step__item">
          <button class="btn btn--step" :class="{'btn--step-active': form.step ===3}">Шаг 3</button>
        </li>
        <li class="step__item">
          <button class="btn btn--step" :class="{'btn--step-active': form.step ===4}">Шаг 4</button>
        </li>
        <li class="step__item">
          <button class="btn btn--step" :class="{'btn--step-active': form.step ===5}">Шаг 5</button>
        </li>
      </ul>
    </section>

    <section class="application" v-if="form.step === 0">
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
                Оплатить можно банковской картой или банковским переводом</p>
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
            <a href="https://gospts.ru/about/" class="link link--question">Ответы на&nbsp;частые вопросы</a>
          </div>
        </div>

        <button class="btn btn--big" @click="stepNext">Начать заполнение заявки</button>

      </div>
    </section>




      <section class="step-one" v-if="form.step === 1">
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
                <input type="radio" value="" :checked="form.type_owner===1" @change="form.type_owner=1"
                       id="type_fiz"><label
                  for="type_fiz" style="margin-right: 20px">Физическое
                лицо</label>
              </validation-provider>
              <validation-provider
                  v-slot="{ errors }"
                  name="radio"
                  rules="required"
              >
                <input type="radio" value="" :checked="form.type_owner===2" @change="form.type_owner=2"
                       id="type_yur"><label
                  for="type_yur">Юридическое
                лицо</label>
              </validation-provider>
            </div>
          </div>
          <validation-observer
              ref="observer"
              v-slot="{ invalid, valid }"
          >
            <div class="form__fiz face-fiz" :class="{'face-active':form.type_owner===1}"
                 v-if="form.type_owner===1">
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

                               v-model="form.last_name">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Имя"
                          rules="required"
                      >
                        <input class="input" type="text" name="name" placeholder="Имя"
                               v-model="form.first_name">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Отчество"
                          rules="required"
                      >
                        <input class="input" type="text" placeholder="Отчество"
                               v-model="form.patronymic">
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
                               placeholder="Населенный пункт" v-model="form.city">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Улица"
                          rules="required"
                      >
                        <input class="input" type="text" name="street" placeholder="Улица"
                               v-model="form.street">
                        <p style="color:red">{{ errors[0] }}</p>

                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Дом"
                          rules="required"
                      >
                        <input class="input" type="text" name="house" placeholder="Дом"
                               v-model="form.home">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Квартира"
                          rules="required"
                      >
                        <input class="input" type="text" name="flat" placeholder="Квартира"
                               v-model="form.flat">
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
                          name="Серия"
                          rules="required"
                      >
                        <input v-mask="['####']" class="input" type="text" name="series" placeholder="Серия"
                               v-model="form.pass_serial">
                        <p style="color:red">{{ errors[0] }}</p>

                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Номер"
                          rules="required"
                      >
                        <input v-mask="['######']" class="input" type="text" name="number" placeholder="Номер"
                               v-model="form.pass_number">
                        <p style="color:red">{{ errors[0] }}</p>

                      </validation-provider>
                    </div>
                    <ValidationProvider
                        v-slot="{ errors, validate, valid }"
                        :rules="{
                          ext: ['jpg','png','jpeg',' '],
                          size: 5120,
                          required: true
                        }">
                      <input type="file" class="input__file" id="input__file__pass" @input="pass_upload"
                             @change="validate"
                             ref="file">

                      <label class="input__file-button" for="input__file__pass">
                        <div class="input__file-icon-wrapper">
                          <img class="input__file-icon" :src="(valid?form.pass_photo_url:'/img/file.svg')" width="42"
                               height="42"
                               alt="Выбрать файл">
                        </div>
                        <p class="text input__file-button-text"
                           :class="{'text--done':!valid}">
                          Фото главной страницы паспорта<br>
                          <span class="text text--grey">(.jpg, .png, .jpeg  )</span>
                        </p>
                        <p class="text input__file-button-text"
                           :class="{'text--done':valid}">
                          Загружено</p>

                        <div class="input__file-icon-wrapper done"
                             :class="{'done--active':valid}">
                          <img class="input__file-icon" src="/img/icon/done.svg"
                               alt="Выбрать файл">
                        </div>
                      </label>
                      <span style="color:red">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="form__item">
                    <h3 class="form__name title">СНИЛС</h3>
                    <div class="form__input">
                      <validation-provider
                          v-slot="{ errors }"
                          name="СНИЛС"
                          rules="required"
                          style="width: 100%"
                      >
                        <input v-mask="['###-###-### ##']" class="input" type="text" name="snils" placeholder="СНИЛС"
                               v-model="form.snils">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                    </div>
                    <ValidationProvider
                        v-slot="{ errors, validate, valid }"
                        :rules="{
                          ext: ['jpg','png','jpeg',' '],
                          size: 5120,
                          required: true
                        }">
                      <input type="file" class="input__file" id="input__file__snils" @input="snils_upload"
                             @change="validate"
                             ref="file">

                      <label class="input__file-button" for="input__file__snils">
                        <div class="input__file-icon-wrapper">
                          <img class="input__file-icon" :src="(valid?form.snils_photo_url:'/img/file.svg')" width="42"
                               height="42"
                               alt="Выбрать файл">
                        </div>
                        <p class="text input__file-button-text"
                           :class="{'text--done':!valid}">
                          Фото СНИЛС<br>
                          <span class="text text--grey">(.jpg, .png, .jpeg  )</span>
                        </p>
                        <p class="text input__file-button-text"
                           :class="{'text--done':valid}">
                          Загружено</p>

                        <div class="input__file-icon-wrapper done"
                             :class="{'done--active':valid}">
                          <img class="input__file-icon" src="/img/icon/done.svg"
                               alt="Выбрать файл">
                        </div>
                      </label>
                      <span style="color:red">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>

                  <div class="form__item">
                    <h3 class="form__name title">Контактная информация</h3>
                    <div class="form__input">
                      <validation-provider
                          v-slot="{ errors }"
                          name="Телефон"
                          rules="required"
                      >
                        <input v-mask="['+7(###)###-##-##']" class="input" type="text" name="phone"
                               placeholder="+7(___)___-__-__"
                               v-model="form.phone">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Эл. почта"
                          rules="required|email"
                      >
                        <input class="input" type="text" name="mail" placeholder="Эл. почта"
                               v-model="form.email">
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
              <section v-if="form.step>0 && form.step<5">
                <div class="form__bottom ">
                  <button class="btn btn--back" @click="stepPrev">‹ Назад</button>
                  <button class="btn btn--next" @click="stepNext" :disabled="invalid"
                          :class="{'disabled':invalid}">Далее
                    ›
                  </button>
                </div>
              </section>
            </div>
          </validation-observer>

          <div class="form__jur face-jur" :class="{'face-active':form.type_owner===2}"
               v-if="form.type_owner===2">
            <validation-observer
                ref="observer"
                v-slot="{ invalid, valid }"
            >
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
                        <input class="input" type="text" name="name_org"
                               placeholder="Название организации"
                               v-model="form.org_name">
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
                               placeholder="Населенный пункт" v-model="form.city">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Город"
                          rules="required"
                      >
                        <input class="input " type="text" name="street" placeholder="Улица"
                               v-model="form.street">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Дом"
                          rules="required"
                      >
                        <input class="input " type="text" name="house" placeholder="Дом"
                               v-model="form.home">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Квартира"
                          rules="required"
                      >
                        <input class="input" type="text" name="flat" placeholder="Квартира"
                               v-model="form.flat">
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
                        <input v-mask="['+7(###)###-##-##']" class="input" type="text" name="phone_yur"
                               placeholder="+7(___)___-__-__"
                               v-model="form.phone">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="Почта"
                          rules="required|email"
                      >
                        <input class="input" type="text" name="mail" placeholder="Эл. почта"
                               v-model="form.email">
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
                        <input class="input" type="text" name="inn" placeholder="ИНН" v-mask="['##########']"
                               v-model="form.inn">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="КПП"
                          rules="required"
                      >
                        <input class="input" type="text" name="kpp" placeholder="КПП" v-mask="['#########']"
                               v-model="form.kpp">
                        <p style="color:red">{{ errors[0] }}</p>
                      </validation-provider>
                      <validation-provider
                          v-slot="{ errors }"
                          name="ОГРН"
                          rules="required"
                      >
                        <input class="input" type="text" name="ogrn" placeholder="ОГРН" v-mask="['#############']"
                               v-model="form.ogrn">
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
              <section v-if="form.step>0 && form.step<5">
                <div class="form__bottom ">
                  <button class="btn btn--back" @click="stepPrev">‹ Назад</button>
                  <button class="btn btn--next" @click="stepNext" :disabled="invalid"
                          :class="{'disabled':invalid}">Далее
                    ›
                  </button>
                </div>
              </section>
            </validation-observer>
          </div>
        </div>

      </section>


      <section class="step-two" v-if="form.step === 2">
        <validation-observer
            ref="observer"
            v-slot="{ invalid, valid }"
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
                           v-model="form.car_mark">
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
                           placeholder="Коммерческое наименование" v-model="form.commercial_name">
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
                        rules="required|excluded:0"
                        style="width: 100%"
                    >
                      <select class="input"
                              v-model="form.car_type">
                        <option value="0">Выберите тип</option>
                        <option value="Легковой">Легковой</option>
                        <option value="Грузовой">Грузовой</option>
                        <option value="Мотоцикл">Мотоцикл</option>
                        <option value="Багги">Багги</option>
                        <option value="Вездеход-амфибия">Вездеход-амфибия</option>
                        <option value="Картинг">Картинг</option>
                        <option value="Мотовездеход">Мотовездеход</option>
                        <option value="Сидельный тягач">Сидельный тягач</option>
                        <option value="Скутер">Скутер</option>
                        <option value="Снегоход">Снегоход</option>

                      </select>
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
                        :rules="{
                            required: true,
                            length: 17
                          }"
                        style="width: 100%"
                    >
                      <input class="input" type="text" name="id-number"
                             placeholder="Идентификационный номер"
                             v-model="form.car_id">
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
                             v-model="form.engine_model">
                      <p style="color:red">{{ errors[0] }}</p>
                    </validation-provider>
                    <validation-provider
                        v-slot="{ errors }"
                        name="Номер двигателя"
                        rules="required"
                        class="input--s"
                    >
                      <input class="input " type="text" name="engine-number"
                             placeholder="Номер двигателя" v-model="form.engine_number">
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
                             v-model="form.car_color">
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
                        rules="required|excluded:0"
                    >
                      <select class="input"
                              v-model="form.drive_ts">
                        <option value="0">Выберите тип</option>
                        <option value="Передний">Передний</option>
                        <option value="Задний">Задний</option>
                        <option value="Полный">Полный</option>
                      </select>

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
                      <input class="input" type="text" name="power" placeholder="Мощность, л.с."
                             v-mask="['###', '##', '####']"
                             v-model="form.engine_power">
                      <p style="color:red">{{ errors[0] }}</p>
                    </validation-provider>
                    <validation-provider
                        v-slot="{ errors }"
                        name="Объем"
                        rules="required"
                        class="input--xs"
                    >
                      <input class="input" type="text" name="volume" placeholder="Объем, см3"
                             v-mask="['###', '##', '####']"
                             v-model="form.engine_volume">
                      <p style="color:red">{{ errors[0] }}</p>
                    </validation-provider>
                    <validation-provider
                        v-slot="{ errors }"
                        name="Топливо"
                        rules="required|excluded:0"
                        class="input--xs"
                    >
                      <select class="input"
                              v-model="form.fuel">
                        <option value="0">Выберите тип</option>
                        <option value="Бензин" selected>Бензин</option>
                        <option value="Дизель">Дизель</option>

                      </select>
                      <p style="color:red">{{ errors[0] }}</p>
                    </validation-provider>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section v-if="form.step>0 && form.step<5">
            <p style="color: red; margin: 5px 5px" v-if="!valid">Пожалуйста, заполните все поля</p>
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

      <section class="step-three" v-show="form.step === 3">
        <validation-observer
            ref="observer"
            v-slot="{valid}"
        >
          <div class="form">
            <h2 class="form__title title title--green">Загрузка изображений</h2>

            <div class="form__top request">
              <div class="request__info">
                <h3 class="request__title title title--request">Требования к изображениям</h3>
                <ul class="request__list">
                  <li class="text text--request">Поддерживаемые форматы: .jpg, .png, .jpeg, .
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
                      <ValidationProvider
                          v-slot="{ errors, validate, valid }"
                          :rules="{
                          ext: ['jpg','png','jpeg',' '],
                          size: 5120,
                          required: true
                        }">
                        <input type="file" class="input__file" id="input__file1" @input="sts_frontUpload"
                               @change="validate"
                               ref="file">

                        <label class="input__file-button" for="input__file1">
                          <div class="input__file-icon-wrapper">
                            <img class="input__file-icon" :src="(valid?form.sts_front_url:'/img/file.svg')" width="42"
                                 height="42"
                                 alt="Выбрать файл">
                          </div>
                          <p class="text input__file-button-text"
                             :class="{'text--done':!valid}">
                            Загрузить<br>
                            <span class="text text--grey">(.jpg, .png, .jpeg  )</span>
                          </p>
                          <p class="text input__file-button-text"
                             :class="{'text--done':valid}">
                            Загружено</p>

                          <div class="input__file-icon-wrapper done"
                               :class="{'done--active':valid}">
                            <img class="input__file-icon" src="/img/icon/done.svg"
                                 alt="Выбрать файл">
                          </div>
                        </label>
                        <span style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото CТС (обратная)</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <ValidationProvider
                          v-slot="{ errors, validate, valid }"
                          :rules="{
                          ext: ['jpg','png','jpeg',' '],
                          size: 5120,
                          required: true
                        }">
                        <input type="file" class="input__file" id="input__file2" v-on:change="sts_backUpload"
                               @change="validate"
                               ref="file">
                        <label class="input__file-button" for="input__file2">
                          <div class="input__file-icon-wrapper">
                            <img class="input__file-icon" :src="valid?form.sts_back_url:'/img/file.svg'" width="42"
                                 height="42"
                                 alt="Выбрать файл">
                          </div>
                          <p class="text input__file-button-text"
                             :class="{'text--done':!valid}">Загрузить<br>
                            <span class="text text--grey">(.jpg, .png, .jpeg  )</span>
                          </p>
                          <p class="text input__file-button-text"
                             :class="{'text--done':valid}">
                            Загружено</p>

                          <div class="input__file-icon-wrapper done"
                               :class="{'done--active':valid}">
                            <img class="input__file-icon" src="/img/icon/done.svg"
                                 alt="Выбрать файл">
                          </div>
                        </label>
                        <span style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </form>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото ПТС (лицевая)</h3>
                  <div class="">
                    <div class="input__wrapper">
                      <ValidationProvider
                          v-slot="{ errors, validate, valid }"
                          :rules="{
                          ext: ['jpg','png','jpeg',' '],
                          size: 5120,
                          required: true
                        }">
                        <input type="file" class="input__file" id="input__file1_1" @input="pts_frontUpload"
                               @change="validate"
                               ref="file">

                        <label class="input__file-button" for="input__file1_1">
                          <div class="input__file-icon-wrapper">
                            <img class="input__file-icon" :src="(valid?form.pts_front_url:'/img/file.svg')" width="42"
                                 height="42"
                                 alt="Выбрать файл">
                          </div>
                          <p class="text input__file-button-text"
                             :class="{'text--done':!valid}">
                            Загрузить<br>
                            <span class="text text--grey">(.jpg, .png, .jpeg  )</span>
                          </p>
                          <p class="text input__file-button-text"
                             :class="{'text--done':valid}">
                            Загружено</p>

                          <div class="input__file-icon-wrapper done"
                               :class="{'done--active':valid}">
                            <img class="input__file-icon" src="/img/icon/done.svg"
                                 alt="Выбрать файл">
                          </div>
                        </label>
                        <span style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото ПТС (обратная)</h3>
                  <div class="">
                    <div class="input__wrapper">
                      <ValidationProvider
                          v-slot="{ errors, validate, valid }"
                          :rules="{
                          ext: ['jpg','png','jpeg',' '],
                          size: 5120,
                          required: true
                        }">
                        <input type="file" class="input__file" id="input__file1_2" @input="pts_backUpload"
                               @change="validate"
                               ref="file">

                        <label class="input__file-button" for="input__file1_2">
                          <div class="input__file-icon-wrapper">
                            <img class="input__file-icon" :src="(valid?form.pts_back_url:'/img/file.svg')" width="42"
                                 height="42"
                                 alt="Выбрать файл">
                          </div>
                          <p class="text input__file-button-text"
                             :class="{'text--done':!valid}">
                            Загрузить<br>
                            <span class="text text--grey">(.jpg, .png, .jpeg  )</span>
                          </p>
                          <p class="text input__file-button-text"
                             :class="{'text--done':valid}">
                            Загружено</p>

                          <div class="input__file-icon-wrapper done"
                               :class="{'done--active':valid}">
                            <img class="input__file-icon" src="/img/icon/done.svg"
                                 alt="Выбрать файл">
                          </div>
                        </label>
                        <span style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </div>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото ТС (по диагонали 1/4)</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <ValidationProvider
                          v-slot="{ errors, validate, valid }"
                          :rules="{
                          ext: ['jpg','png','jpeg',' '],
                          size: 5120,
                          required: true
                        }">
                        <input type="file" class="input__file" id="input__file3" v-on:change="ts_frontUpload"
                               @change="validate"
                               ref="file">
                        <label class="input__file-button" for="input__file3">
                          <div class="input__file-icon-wrapper">
                            <img class="input__file-icon" :src="valid?form.ts_front_url:'/img/file.svg'" width="42"
                                 height="42"
                                 alt="Выбрать файл">
                          </div>
                          <p class="text input__file-button-text "
                             :class="{'text--done':!valid}">Загрузить<br>
                            <span class="text text--grey">(.jpg, .png, .jpeg  )</span>
                          </p>
                          <p class="text input__file-button-text"
                             :class="{'text--done':valid}">Загружено</p>

                          <div class="input__file-icon-wrapper done"
                               :class="{'done--active':valid}"
                          >
                            <img class="input__file-icon" src="/img/icon/done.svg"
                                 alt="Выбрать файл">
                          </div>
                        </label>
                        <span style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </form>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото ТС (по диагонали 2/4)</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <ValidationProvider
                          v-slot="{ errors, validate, valid }"
                          :rules="{
                          ext: ['jpg','png','jpeg',' '],
                          size: 5120,
                          required: true
                        }">
                        <input type="file" class="input__file" id="input__file4" v-on:change="ts_backUpload"
                               ref="file" @change="validate">
                        <label class="input__file-button" for="input__file4">
                          <div class="input__file-icon-wrapper">
                            <img class="input__file-icon" :src="valid?form.ts_back_url:'/img/file.svg'" width="42"
                                 height="42"
                                 alt="Выбрать файл">
                          </div>
                          <p class="text input__file-button-text"
                             :class="{'text--done':!valid}"
                          >Загрузить<br>
                            <span class="text text--grey">(.jpg, .png, .jpeg  )</span>
                          </p>
                          <p class="text input__file-button-text"
                             :class="{'text--done':valid}"
                          >Загружено</p>

                          <div class="input__file-icon-wrapper done"
                               :class="{'done--active':valid}">
                            <img class="input__file-icon" src="/img/icon/done.svg"
                                 alt="Выбрать файл">
                          </div>
                        </label>
                        <span style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </form>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото ТС (по диагонали 3/4)</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <ValidationProvider
                          v-slot="{ errors, validate, valid }"
                          :rules="{
                          ext: ['jpg','png','jpeg',' '],
                          size: 5120,
                          required: true
                        }">
                        <input type="file" class="input__file" id="input__file5" v-on:change="ts_rightUpload"
                               @change="validate"
                               ref="file">
                        <label class="input__file-button" for="input__file5">
                          <div class="input__file-icon-wrapper">
                            <img class="input__file-icon" :src="valid?form.ts_right_url:'/img/file.svg'" width="42"
                                 height="42"
                                 alt="Выбрать файл">
                          </div>
                          <p class="text input__file-button-text"
                             :class="{'text--done':!valid}"
                          >Загрузить<br>
                            <span class="text text--grey">(.jpg, .png, .jpeg  )</span>
                          </p>
                          <p class="text input__file-button-text"
                             :class="{'text--done':valid}"
                          >Загружено</p>

                          <div class="input__file-icon-wrapper done"
                               :class="{'done--active':valid}"
                          >
                            <img class="input__file-icon" src="/img/icon/done.svg"
                                 alt="Выбрать файл">
                          </div>
                        </label>
                        <span style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </form>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото ТС (по диагонали 4/4)</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <ValidationProvider
                          v-slot="{ errors, validate, valid }"
                          :rules="{
                          ext: ['jpg','png','jpeg',' '],
                          size: 5120,
                          required: true
                        }">
                        <input type="file" class="input__file" id="input__file6" v-on:change="ts_leftUpload"
                               ref="file" @change="validate">
                        <label class="input__file-button" for="input__file6">
                          <div class="input__file-icon-wrapper">
                            <img class="input__file-icon" :src="valid?form.ts_left_url:'/img/file.svg'" width="42"
                                 height="42"
                                 alt="Выбрать файл">
                          </div>
                          <p class="text input__file-button-text"
                             :class="{'text--done':!valid}"
                          >Загрузить<br>
                            <span class="text text--grey">(.jpg, .png, .jpeg  )</span>
                          </p>
                          <p class="text input__file-button-text"
                             :class="{'text--done':valid}"
                          >Загружено</p>

                          <div class="input__file-icon-wrapper done"
                               :class="{'done--active':valid}"
                          >
                            <img class="input__file-icon" src="/img/icon/done.svg"
                                 alt="Выбрать файл">
                          </div>
                        </label>
                        <span style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </form>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото VIN-таблички у водительской двери</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <ValidationProvider
                          v-slot="{ errors, validate, valid }"
                          :rules="{
                          ext: ['jpg','png','jpeg',' '],
                          size: 5120,
                          required: true
                        }">
                        <input type="file" class="input__file" id="input__file7" v-on:change="vin_doorUpload"
                               @change="validate"
                               ref="file">
                        <label class="input__file-button" for="input__file7">
                          <div class="input__file-icon-wrapper"
                          >
                            <img class="input__file-icon" :src="valid?form.vin_door_url:'/img/file.svg'" width="42"
                                 height="42"
                                 alt="Выбрать файл">
                          </div>
                          <p class="text input__file-button-text"
                             :class="{'text--done':!valid}"
                          >Загрузить<br>
                            <span class="text text--grey">(.jpg, .png, .jpeg  )</span>
                          </p>
                          <p class="text input__file-button-text"
                             :class="{'text--done':valid}"
                          >Загружено</p>

                          <div class="input__file-icon-wrapper done"
                               :class="{'done--active':valid}"
                          >
                            <img class="input__file-icon" src="/img/icon/done.svg"
                                 alt="Выбрать файл">
                          </div>
                        </label>
                        <span style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </form>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото VIN-таблички на лобовом стекле</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <ValidationProvider
                          v-slot="{ errors, validate, valid }"
                          :rules="{
                          ext: ['jpg','png','jpeg',' '],
                          size: 5120,
                          required: true
                        }">
                        <input type="file" class="input__file" id="input__file8" v-on:change="vin_glassUpload"
                               @change="validate"
                               ref="file">
                        <label class="input__file-button" for="input__file8">
                          <div class="input__file-icon-wrapper">
                            <img class="input__file-icon" :src="valid?form.vin_glass_url:'/img/file.svg'" width="42"
                                 height="42"
                                 alt="Выбрать файл">
                          </div>
                          <p class="text input__file-button-text"
                             :class="{'text--done':!valid}"
                          >Загрузить<br>
                            <span class="text text--grey">(.jpg, .png, .jpeg  )</span>
                          </p>
                          <p class="text input__file-button-text"
                             :class="{'text--done':valid}"
                          >Загружено</p>

                          <div class="input__file-icon-wrapper done"
                               :class="{'done--active':valid}"
                          >
                            <img class="input__file-icon" src="/img/icon/done.svg"
                                 alt="Выбрать файл">
                          </div>
                        </label>
                        <span style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </form>
                </div>

                <div class="form__item">
                  <h3 class="form__name title">Фото размерности шины</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <ValidationProvider
                          v-slot="{ errors, validate, valid }"
                          :rules="{
                          ext: ['jpg','png','jpeg',' '],
                          size: 5120,
                          required: true
                        }">
                        <input type="file" class="input__file" id="input__file9" v-on:change="tire_Upload"
                               @change="validate"
                               ref="file">
                        <label class="input__file-button" for="input__file9">
                          <div class="input__file-icon-wrapper">
                            <img class="input__file-icon" :src="valid?form.tire_url:'/img/file.svg'" width="42"
                                 height="42"
                                 alt="Выбрать файл">
                          </div>
                          <p class="text input__file-button-text"
                             :class="{'text--done':!valid}"
                          >Загрузить<br>
                            <span class="text text--grey">(.jpg, .png, .jpeg  )</span>
                          </p>
                          <p class="text input__file-button-text"
                             :class="{'text--done':valid}"
                          >Загружено</p>

                          <div class="input__file-icon-wrapper done"
                               :class="{'done--active':valid}"
                          >
                            <img class="input__file-icon" src="/img/icon/done.svg"
                                 alt="Выбрать файл">
                          </div>
                        </label>
                        <span style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </form>
                </div>
                <div class="form__item">
                  <h3 class="form__name title">Фото таблички размерности шин у водительской двери</h3>
                  <form class="">
                    <div class="input__wrapper">
                      <ValidationProvider
                          v-slot="{ errors, validate, valid }"
                          :rules="{
                          ext: ['jpg','png','jpeg',' '],
                          size: 5120,
                          required: true
                        }">
                        <input type="file" class="input__file" id="input__file10" v-on:change="tire_tableUpload"
                               @change="validate"
                               ref="file">
                        <label class="input__file-button" for="input__file10">
                          <div class="input__file-icon-wrapper">
                            <img class="input__file-icon" :src="valid?form.tire_table_url:'/img/file.svg'" width="42"
                                 height="42"
                                 alt="Выбрать файл">
                          </div>
                          <p class="text input__file-button-text"
                             :class="{'text--done':!valid}"
                          >Загрузить<br>
                            <span class="text text--grey">(.jpg, .png, .jpeg  )</span>
                          </p>
                          <p class="text input__file-button-text"
                             :class="{'text--done':valid}"
                          >Загружено</p>

                          <div class="input__file-icon-wrapper done"
                               :class="{'done--active':valid}"
                          >
                            <img class="input__file-icon" src="/img/icon/done.svg"
                                 alt="Выбрать файл">
                          </div>
                        </label>
                        <span style="color:red">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </div>
                  </form>
                </div>
              </div>
              <div class="form__right">
                <div class="form__item photo">
                  <h3 class="photo__name title">Примеры фото</h3>
                  <ul class="photo__list">
                    <li class="photo__item item-sts">
                      <div class="photo__wrapper" @click="$modal.show('modal1')">
                        <img class="photo__img" src="img/sts.png" alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="white"/>
                        </svg>
                        <modal name="modal1"
                               :width="768"
                               :height="500"
                               :adaptive="true"
                        >
                          <img src="img/example/ctc.jpg" alt="" width="768" height="500">
                        </modal>
                      </div>
                      <div class="photo__wrapper" @click="$modal.show('modal2')">
                        <img class="photo__img" src="img/sts.png" alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="white"/>
                        </svg>
                        <modal name="modal2"
                               :width="768"
                               :height="500"
                               :adaptive="true"
                        >
                          <img src="img/example/ctc.jpg" alt="" width="768" height="500">
                        </modal>
                      </div>
                    </li>
                    <li class="photo__item " style="border-bottom: 1px solid var(--bay-leaf);">
                      <div class="photo__wrapper"  @click="$modal.show('modal3')">
                        <img class="photo__img" src="img/example/pts1.jpg"  alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="black"/>
                        </svg>
                          <modal name="modal3"
                                 :width="768"
                                 :height="500"
                                 :adaptive="true"
                          >
                              <img src="img/example/pts1.jpg" alt="" width="768" height="500">
                          </modal>
                      </div>
                        <div class="photo__wrapper" @click="$modal.show('modal4')">
                            <img class="photo__img" src="img/example/pts2.jpg"  alt="">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                                    fill="white"/>
                            </svg>
                            <modal name="modal4"
                                   :width="768"
                                   :height="500"
                                   :adaptive="true"
                            >
                                <img src="img/example/pts2.jpg" alt="" width="768" height="500">
                            </modal>
                        </div>

                    </li>
                    <li class="photo__item">
                      <div class="photo__wrapper" @click="$modal.show('modal5')">
                        <img class="photo__img" src="img/example/car1.jpg" alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="white"/>
                        </svg>
                        <modal name="modal5"
                               :width="700"
                               :height="700"
                               :adaptive="true"
                        >
                          <img src="img/example/car1.jpg" alt="" width="700" height="700" style="">
                        </modal>
                      </div>
                      <div class="photo__wrapper" @click="$modal.show('modal6')">
                        <img class="photo__img" src="img/example/car2.jpg" alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="white"/>
                        </svg>
                        <modal name="modal6"
                               :width="700"
                               :height="700"
                               :adaptive="true"
                        >
                          <img src="img/example/car2.jpg" alt="" width="700" height="700">
                        </modal>
                      </div>
                    </li>
                    <li class="photo__item " style="border-bottom: 1px solid var(--bay-leaf);">
                      <div class="photo__wrapper" @click="$modal.show('modal7')">
                          <img class="photo__img" src="img/example/car3.png" alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="black"/>
                        </svg>
                          <modal name="modal7"
                                 :width="700"
                                 :height="700"
                                 :adaptive="true"
                          >
                              <img src="img/example/car3.png" alt="" width="700" height="700">
                          </modal>
                      </div>
                      <div class="photo__wrapper" @click="$modal.show('modal8')">
                        <img class="photo__img" src="img/example/car4.jpg" alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="black"/>
                        </svg>
                          <modal name="modal8"
                                 :width="700"
                                 :height="700"
                                 :adaptive="true"
                          >
                              <img src="img/example/car4.jpg" alt="" width="700" height="700">
                          </modal>
                      </div>
                    </li>
                    <li class="photo__item" @click="$modal.show('modal9')">
                      <div class="photo__wrapper">
                          <img class="photo__img" src="img/example/vin_door.jpg" alt="">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="black"/>
                        </svg>
                          <modal name="modal9"
                                 :width="768"
                                 :height="500"
                                 :adaptive="true"
                          >
                              <img src="img/example/vin_door.jpg" alt="" width="768" height="500">
                          </modal>
                      </div>
                      <div class="photo__wrapper" @click="$modal.show('modal10')">
                          <img class="photo__img" src="img/example/vin_glass.jpg" alt="">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                          <path
                              d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                              fill="black"/>
                        </svg>
                          <modal name="modal10"
                                 :width="768"
                                 :height="500"
                                 :adaptive="true"
                          >
                              <img src="img/example/vin_glass.jpg" alt="" width="768" height="500">
                          </modal>
                      </div>
                    </li>
                      <li class="photo__item" @click="$modal.show('modal11')">
                          <div class="photo__wrapper">
                              <img class="photo__img" src="img/example/tire.jpg" alt="">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                                      fill="black"/>
                              </svg>
                              <modal name="modal11"
                                     :width="768"
                                     :height="500"
                                     :adaptive="true"
                              >
                                  <img src="img/example/tire.jpg" alt="" width="768" height="500">
                              </modal>
                          </div>
                          <div class="photo__wrapper" @click="$modal.show('modal12')">
                              <img class="photo__img" src="img/example/tire_table.jpg" alt="">
                              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                   xmlns="http://www.w3.org/2000/svg">
                                  <path
                                      d="M11.7429 10.3421C12.7112 9.02083 13.1449 7.38264 12.9572 5.7553C12.7695 4.12796 11.9743 2.63149 10.7307 1.56528C9.48701 0.499068 7.88665 -0.0582491 6.24973 0.00482408C4.61282 0.0678972 3.06008 0.746709 1.90217 1.90545C0.744249 3.0642 0.0665484 4.61742 0.00464653 6.25438C-0.0572553 7.89134 0.501207 9.49131 1.56831 10.7342C2.6354 11.9771 4.13244 12.7712 5.75992 12.9577C7.38739 13.1442 9.02528 12.7094 10.3459 11.7401H10.3449C10.3749 11.7801 10.4069 11.8181 10.4429 11.8551L14.2929 15.7051C14.4804 15.8928 14.7348 15.9983 15 15.9983C15.2653 15.9984 15.5198 15.8932 15.7074 15.7056C15.895 15.5181 16.0005 15.2638 16.0006 14.9985C16.0007 14.7332 15.8954 14.4788 15.7079 14.2911L11.8579 10.4411C11.8221 10.405 11.7837 10.3715 11.7429 10.3411V10.3421ZM12.0009 6.49815C12.0009 7.22042 11.8586 7.93562 11.5822 8.60291C11.3058 9.2702 10.9007 9.87651 10.39 10.3872C9.87926 10.898 9.27295 11.3031 8.60566 11.5795C7.93837 11.8559 7.22317 11.9981 6.5009 11.9981C5.77863 11.9981 5.06343 11.8559 4.39614 11.5795C3.72885 11.3031 3.12253 10.898 2.61181 10.3872C2.10109 9.87651 1.69596 9.2702 1.41956 8.60291C1.14316 7.93562 1.0009 7.22042 1.0009 6.49815C1.0009 5.03946 1.58036 3.64051 2.61181 2.60906C3.64326 1.57761 5.04221 0.998147 6.5009 0.998147C7.95959 0.998147 9.35853 1.57761 10.39 2.60906C11.4214 3.64051 12.0009 5.03946 12.0009 6.49815Z"
                                      fill="black"/>
                              </svg>
                              <modal name="modal12"
                                     :width="768"
                                     :height="500"
                                     :adaptive="true"
                              >
                                  <img src="img/example/tire_table.jpg" alt="" width="768" height="500">
                              </modal>
                          </div>
                      </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section v-if="form.step>0 && form.step<5">
            <p style="color: red; margin: 5px 5px" v-if="!valid">Пожалуйста, заполните все поля</p>
            <div class="form__bottom">
              <button class="btn btn--back" @click="stepPrev">‹ Назад</button>
              <button class="btn btn--next" @click="stepNext" :disabled="!valid"
                      :class="{'disabled':!valid}">Далее
                ›
              </button>
            </div>
          </section>
        </validation-observer>
      </section>

      <section class="step-four" v-if="form.step === 4">
        <div v-if="loading" style="display: flex; justify-content: center">
          <ClipLoader
              color="#79B285FF"
              :size="100"
          />
        </div>
        <div class="form" v-if="!loading">
          <h2 class="form__title title title--green">Оплата и&nbsp;отправка заявки</h2>
          <div class="form__sum sum">
            <h3 class="sum__title title">Стоимость услуги</h3>
            <span class="sum__price price">5 000 рублей</span>
            <div style="display: flex" class="form-group">
              <input type="checkbox" id="checkbox_finish" v-model="form.checkbox_finish">

              <label for="checkbox_finish">Прошу произвести оформление ЭПТС на транспортное средство</label>
            </div>
            <p style="color:red" v-if="!form.checkbox_finish">Обязательное поле</p>
          </div>

          <div class="form__pay pay">
            <h3 class="pay__title title">Выберите способ оплаты</h3>
            <ul class="pay__list">
              <li class="pay__item"><input type="radio" name="face" value="" checked id="bank_card"
                                           @click="form.pay_method==='bank_card'"><label for="bank_card">Банковской
                картой</label>
              </li>
              <!--                <li class="pay__item"><input type="radio" name="face" value="" id="apple_pay"-->
              <!--                                             @click="pay_method==='apple_pay'"><label for="apple_pay">Apple pay</label>-->
              <!--                </li>-->
              <!--                <li class="pay__item"><input type="radio" name="face" value="" id="google_pay"-->
              <!--                                             @click="pay_method==='google_pay'"><label for="google_pay">Google-->
              <!--                  pay</label></li>-->
              <li class="pay__item"><input type="radio" name="face" value="" id="bank_transfer"
                                           @click="form.pay_method==='bank_transfer'"><label for="bank_transfer">Банковский
                перевод</label></li>
            </ul>
          </div>
        </div>

        <section v-if="form.step === 4">
          <div class="form__bottom ">
            <button class="btn btn--back" @click="stepPrev">‹ Назад</button>
            <button type="submit" class="btn btn--next" :disabled="!form.checkbox_finish"
                    :class="{'disabled':!form.checkbox_finish}" @click="stepNext">Далее
              ›
            </button>
          </div>
        </section>
      </section>

    <section class="step-five" v-if="form.step === 5">
      <div class="form">
        <h2 class="form__title title title--green">Оплата и&nbsp;отправка заявки</h2>
        <svg width="53" height="35" viewBox="0 0 31 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11L11 20L29 2" stroke="#79B285" stroke-width="3" stroke-linecap="round"
                stroke-linejoin="round"/>
        </svg>
        <p class="text__finish">Заявка успешно оформлена<br>
          Оформление ЭПТС длится от&nbsp;1&nbsp;до&nbsp;3&nbsp;дней.<br>
          ЭПТС будет отправлен на&nbsp;эл. почту, указанную при оформлении заявки.</p>
        <div class="home">
          <a href="#" class="link link--home">Вернуться на Главную ›</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {required, digits, email, max, regex, ext, size, length, excluded} from 'vee-validate/dist/rules'
import {extend, ValidationObserver, ValidationProvider, setInteractionMode} from 'vee-validate'
import {mask} from 'vue-the-mask'

import {ClipLoader} from '@saeris/vue-spinners'

import axios from 'axios'

setInteractionMode('eager')

extend('digits', {
  ...digits,
  message: '{_field_} needs to be {length} digits. ({_value_})',
})

extend('excluded', {
  ...excluded,
  message: 'Выберите возможный вариант',
})

extend('required', {
  ...required,
  message: 'Загрузите фото',
})

extend('max', {
  ...max,
  message: '{_field_} may not be greater than {length} characters',
})

extend('regex', {
  ...regex,
  message: 'Не валидный VIN номер',
})

extend('email', {
  ...email,
  message: 'Не валидная почта',
})


extend('size', {
  ...size,
  message: 'Макс. допустимый размер 5 мб',
})


extend('ext', {
  ...ext,
  message: 'Необходим файл формата: .jpg, .png, .jpeg',
})


extend('length', {
  ...length,
  message: 'Не корректный VIN',
})


export default {
  name: "Order",
  directives: {mask},
  components: {
    ValidationProvider,
    ValidationObserver,
    ClipLoader,
  },


  data() {
    return {

      loading: false,
      form: {
        step: 0,
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
        pass_photo:'',
        pass_photo_url:'',

        inn: null,
        snils: null,
        snils_photo:'',
        snils_photo_url:'',

        phone: '',
        email: '',

        car_mark: '',
        commercial_name: '',
        car_type: 0,
        car_id: null,
        car_color: '',
        drive_ts: 0,

        engine_model: '',
        engine_number: '',
        engine_power: '',
        engine_volume: '',
        fuel: 0,

        sts_front: '',
        sts_front_url: '',

        pts_front: '',
        pts_front_url: '',

        pts_back: '',
        pts_back_url:'',

        sts_back: '',
        sts_back_url: '',

        ts_front: '',
        ts_front_url: '',

        ts_back: '',
        ts_back_url: '',

        ts_right: '',
        ts_right_url: '',

        ts_left: '',
        ts_left_url: '',

        vin_door: '',
        vin_door_url: '',

        vin_glass: '',
        vin_glass_url: '',

        tire:'',
        tire_url:'',

        tire_table: '',
        tire_table_url: '',

        price: 5000,
        pay_method: 'bank_card',
        checkbox_finish: true,

        pay_success: false,


      },
      checkbox: true,
    }
  },

  created() {
    if (localStorage.getItem('data')) {
      this.form = JSON.parse(localStorage.getItem('data'))
    }
  },

  methods: {
    stepNext() {
      if (this.form.step === 4) {
        this.submit()
        return
      }
      this.form.step++
      window.scrollTo(0, 0)
      if (this.form.step > 1) localStorage.setItem('data', JSON.stringify(this.form))
    },
    stepPrev() {
      this.form.step--
      window.scrollTo(0, 0)
    },
    submit() {
      this.loading = true
      console.log('submit')
      this.postData()
    },

    pass_upload(event) {
      this.form.pass_photo = event.target.files[0]
      this.form.pass_photo_url = URL.createObjectURL(event.target.files[0])
    },

    snils_upload(event) {
      this.form.snils_photo = event.target.files[0]
      this.form.snils_photo_url = URL.createObjectURL(event.target.files[0])
    },

    pts_frontUpload(event) {
      this.form.pts_front = event.target.files[0];
      this.form.pts_front_url = URL.createObjectURL(event.target.files[0]);
    },

    pts_backUpload(event) {
      this.form.pts_back = event.target.files[0];
      this.form.pts_back_url = URL.createObjectURL(event.target.files[0]);
    },

    sts_frontUpload(event) {
      this.form.sts_front = event.target.files[0];
      this.form.sts_front_url = URL.createObjectURL(event.target.files[0]);
    },
    sts_backUpload(event) {
      this.form.sts_back = event.target.files[0];
      this.form.sts_back_url = URL.createObjectURL(event.target.files[0]);
    },
    ts_frontUpload(event) {
      this.form.ts_front = event.target.files[0];
      this.form.ts_front_url = URL.createObjectURL(event.target.files[0]);

    },
    ts_backUpload(event) {
      this.form.ts_back = event.target.files[0];
      this.form.ts_back_url = URL.createObjectURL(event.target.files[0]);
    },
    ts_rightUpload(event) {
      this.form.ts_right = event.target.files[0];
      this.form.ts_right_url = URL.createObjectURL(event.target.files[0]);
    },
    ts_leftUpload(event) {
      this.form.ts_left = event.target.files[0];
      this.form.ts_left_url = URL.createObjectURL(event.target.files[0]);
    },
    vin_doorUpload(event) {
      this.form.vin_door = event.target.files[0];
      this.form.vin_door_url = URL.createObjectURL(event.target.files[0]);
    },
    vin_glassUpload(event) {
      this.form.vin_glass = event.target.files[0];
      this.form.vin_glass_url = URL.createObjectURL(event.target.files[0]);
    },
    tire_Upload(event) {
      this.form.tire = event.target.files[0];
      this.form.tire_url = URL.createObjectURL(event.target.files[0]);
    },
    tire_tableUpload(event) {
      this.form.tire_table = event.target.files[0];
      this.form.tire_table_url = URL.createObjectURL(event.target.files[0]);
    },

    postData() {

      let formData = new FormData();

      formData.append('type_owner', this.form.type_owner)
      formData.append('last_name', this.form.last_name)
      formData.append('first_name', this.form.first_name)
      formData.append('patronymic', this.form.patronymic)
      formData.append('org_name', this.form.org_name)
      formData.append('kpp', this.form.kpp)
      formData.append('ogrn', this.form.ogrn)
      formData.append('city', this.form.city)
      formData.append('street', this.form.street)
      formData.append('home', this.form.home)
      formData.append('flat', this.form.flat)
      formData.append('pass_serial', this.form.pass_serial)
      formData.append('pass_number', this.form.pass_number)
      if (this.form.type_owner === 1) {
        formData.append('pass_photo', this.form.pass_photo)
        formData.append('snils_photo', this.form.snils_photo)
      }
      formData.append('inn', this.form.inn)
      formData.append('snils', this.form.snils)
      formData.append('phone', this.form.phone)
      formData.append('email', this.form.email)
      formData.append('car_mark', this.form.car_mark)
      formData.append('commercial_name', this.form.commercial_name)
      formData.append('car_type', this.form.car_type)
      formData.append('car_id', this.form.car_id)
      formData.append('car_color', this.form.car_color)
      formData.append('drive_ts', this.form.drive_ts)
      formData.append('engine_model', this.form.engine_model)
      formData.append('engine_number', this.form.engine_number)
      formData.append('engine_power', this.form.engine_power)
      formData.append('engine_volume', this.form.engine_volume)
      formData.append('fuel', this.form.fuel)
      formData.append('sts_front', this.form.sts_front)
      formData.append('sts_back', this.form.sts_back)
      formData.append('pts_front', this.form.pts_front)
      formData.append('pts_back', this.form.pts_back)
      formData.append('ts_front', this.form.ts_front)
      formData.append('ts_back', this.form.ts_back)
      formData.append('ts_right', this.form.ts_right)
      formData.append('ts_left', this.form.ts_left)
      formData.append('vin_door', this.form.vin_door)
      formData.append('vin_glass', this.form.vin_glass)
      formData.append('tire', this.form.tire)
      formData.append('tire_table', this.form.tire_table)
      formData.append('price', this.form.price)
      formData.append('pay_method', this.form.pay_method)
      formData.append('pay_success', this.form.pay_success)

      let config = {
        header: {
          'Content-Type': 'multipart/form-data'
        }
      }

      axios.post('https://admin.gospts.ru/api/order/create', formData, config)
          .then(res => {
            let order_id = res.data.order_id
            let data = {
              'order_id': order_id,
              'type_owner': this.form.type_owner,
              'email': this.form.email,
              'phone': this.form.phone,
              'last_name': this.form.last_name,
              'first_name': this.form.first_name,
              'patronymic': this.form.patronymic,
              'org_name': this.form.org_name
            }
            axios.post('https://admin.gospts.ru/api/pay', data)
                .then(res => {
                  localStorage.clear()
                  window.location.replace(res.data.url)
                })
          })
          .catch(err => {
            this.loading = false
          })

    }
  }

}
</script>

<style scoped>

</style>