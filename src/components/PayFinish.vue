<template>
  <div>
    <Header/>
    <main class="container">
      <section class="step-five" v-if="step === 5">
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
    </main>
    <Footer/>
  </div>
</template>

<script>
export default {
  name: "PayFinish"
}
</script>

<style scoped>

</style>