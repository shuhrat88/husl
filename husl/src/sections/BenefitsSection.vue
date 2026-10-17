<script setup>
import wideAssortment from '../assets/images/wideassortment.webp';
import wholesalePrices from '../assets/images/wholesaleprices.webp';
import stableSupplies from '../assets/images/stablesupplies.webp';
import partnerSupport from '../assets/images/partnersupport.jpg';

const benefits = [
  { image: wideAssortment, width: 900, height: 1198, title: 'Большой ассортимент', text: 'Актуальные модели мужской одежды для разных форматов магазинов.' },
  { image: wholesalePrices, width: 900, height: 1198, title: 'Оптовые цены', text: 'Выгодные условия сотрудничества для постоянных партнёров.' },
  { image: stableSupplies, width: 1200, height: 900, title: 'Стабильные поставки', text: 'Чёткие сроки и надёжная логистика.' },
  { image: partnerSupport, width: 679, height: 452, title: 'Поддержка партнёров', text: 'Личный менеджер и быстрая связь по всем вопросам.' },
];
</script>

<template>
  <section class="benefits-section" id="benefits">
    <div class="container">
      <div class="benefits-section__intro">
        <div>
          <p class="section-label">—— ПОЧЕМУ HUSL</p>
          <h2>Надёжный партнёр<br>для вашего бизнеса</h2>
        </div>
        <p>Мы понимаем потребности магазинов и предпринимателей, поэтому предлагаем выгодные условия, актуальный ассортимент и стабильные поставки.</p>
      </div>

      <div class="benefits-section__grid">
        <article v-for="benefit in benefits" :key="benefit.title" class="benefit-card">
          <img :src="benefit.image" :alt="benefit.title" :width="benefit.width" :height="benefit.height" loading="lazy" decoding="async">
          <h3>{{ benefit.title }}</h3>
          <p>{{ benefit.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.benefits-section { background: #f3f0eb; padding: 70px 0; color: #171614; }
.benefits-section__intro { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; align-items: end; margin-bottom: 34px; }
.section-label { color: #55514c; font: 700 12px "Michroma", sans-serif; letter-spacing: 1.5px; margin-bottom: 16px; }
h2 { font-size: clamp(34px, 3.4vw, 50px); line-height: 1.08; font-weight: 700; }
.benefits-section__intro > p { max-width: 470px; color: #55514c; font-size: 17px; line-height: 1.5; }
.benefits-section__grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
.benefit-card { border: 1px solid #d8d4ce; padding-bottom: 20px; }
.benefit-card img { display: block; width: 100%; height: 176px; object-fit: cover; filter: saturate(.65); }
.benefit-card h3 { font-size: 17px; margin: 18px 16px 8px; }
.benefit-card p { color: #55514c; font-size: 14px; line-height: 1.4; margin: 0 16px; }

@media (max-width: 760px) {
  .benefits-section { padding: 52px 0; }
  .benefits-section__intro { grid-template-columns: 1fr; gap: 18px; }
  .benefits-section__grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .benefit-card img { height: 130px; }
  .benefit-card h3 { font-size: 15px; margin: 14px 12px 6px; }
  .benefit-card p { font-size: 13px; margin: 0 12px; }
}
</style>
