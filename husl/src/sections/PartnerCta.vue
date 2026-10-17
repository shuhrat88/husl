<template>
  <section class="partner-cta">
    <div class="container">
      <div class="partner-cta__content">
        <p>—— ДЛЯ ВАШЕГО МАГАЗИНА</p>
        <h2>Обновите ассортимент<br>без лишних рисков</h2>
        <span>Оставьте заявку — отправим прайс и условия.</span>
        <button type="button" data-contact-trigger>Получить прайс <b>→</b></button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.partner-cta { background: linear-gradient(90deg, #14120f 32%, rgba(20, 18, 15, .26)), url('../assets/backgrounds/partnerbackground.webp') right 45% / 66% auto no-repeat, #14120f; color: #f3f0eb; padding: 90px 0; }
.partner-cta__content { max-width: 610px; }
.partner-cta p { color: #b7b1a9; font: 700 12px "Michroma", sans-serif; letter-spacing: 1.5px; margin-bottom: 18px; }
h2 { font-size: clamp(34px, 3.7vw, 54px); line-height: 1.08; }
.partner-cta span { display: block; color: #b7b1a9; font-size: 17px; line-height: 1.5; margin-top: 20px; }
button { background: #f3f0eb; border: 1px solid #f3f0eb; border-radius: 6px; color: #171614; font-size: 15px; margin-top: 28px; padding: 15px 20px; } button b { margin-left: 8px; }
@media (max-width: 760px) { .partner-cta { background: #14120f; padding: 64px 0; } .partner-cta p { font-size: 11px; letter-spacing: 1px; } .partner-cta h2 { font-size: clamp(34px, 10vw, 44px); } .partner-cta span { font-size: 16px; } }
</style>
