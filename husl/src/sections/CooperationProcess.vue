<script setup>
const steps = [
  ['01', 'Оставьте заявку', 'Получите прайс и условия.'],
  ['02', 'Выберите модели', 'Поможем собрать заказ.'],
  ['03', 'Получите поставку', 'Доставим в ваш город.'],
];
</script>

<template>
  <section class="process-section" id="conditions">
    <div class="container">
      <div class="process-section__header">
        <div>
          <p class="section-label">—— НАЧАТЬ ЛЕГКО</p>
          <h2>Три шага<br>к поставке</h2>
        </div>
        <button type="button" data-contact-trigger>Получить прайс <span>→</span></button>
      </div>
      <ol class="process-section__steps">
        <li v-for="step in steps" :key="step[0]">
          <strong>{{ step[0] }}</strong>
          <h3>{{ step[1] }} <span>→</span></h3>
          <p>{{ step[2] }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped lang="scss">
.process-section { background: #f3f0eb; color: #171614; padding: 12px 0 74px; }
.process-section__header { display: flex; justify-content: space-between; align-items: end; gap: 30px; margin-bottom: 42px; }
.section-label { color: #55514c; font: 700 12px "Michroma", sans-serif; letter-spacing: 1.5px; margin-bottom: 16px; }
h2 { font-size: clamp(34px, 3.4vw, 50px); line-height: 1.08; }
button { color: #fff; background: #4c2f27; border: 1px solid #4c2f27; border-radius: 6px; padding: 15px 20px; font-size: 15px; transition: transform .2s ease; &:hover { transform: translateY(-2px); } span { margin-left: 8px; } }
.process-section__steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 26px; list-style: none; padding: 0; counter-reset: item; }
.process-section__steps li { position: relative; padding-right: 24px; }
.process-section__steps li:not(:last-child)::after { color: #55514c; content: '→'; position: absolute; right: -10px; top: 41px; }
.process-section__steps strong { display: block; font-size: 26px; }
.process-section__steps h3 { font-size: 16px; line-height: 1.3; margin: 10px 0 8px; }
.process-section__steps h3 span { display: none; }
.process-section__steps p { color: #55514c; font-size: 14px; line-height: 1.45; }
@media (max-width: 760px) { .process-section { padding-bottom: 54px; } .process-section__header { align-items: start; flex-direction: column; margin-bottom: 32px; } .process-section__header button { width: 100%; } .process-section__steps { grid-template-columns: 1fr; gap: 24px; } .process-section__steps li { border-top: 1px solid #d8d4ce; padding: 18px 0 0; } .process-section__steps li::after { display: none; } }
</style>
