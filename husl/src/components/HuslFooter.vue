<template>
  <footer class="husl-footer">
    <div class="container husl-footer__content">
      <div><strong>HUSL</strong><span>Мужская одежда оптом</span></div>
      <nav><a href="#">О компании</a><a href="#geography">Страны СНГ</a><a href="#conditions">Условия</a></nav>
      <address>+7 700 123 45 67<br>г. Алматы, Казахстан</address>
      <small>© 2024 HUSL. Все права защищены.</small>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.husl-footer { background: #14120f; color: #f3f0eb; padding: 36px 0; }
.husl-footer__content { display: grid; grid-template-columns: 1.2fr 1.6fr 1fr; gap: 28px; }
.husl-footer strong { display: block; font: 400 22px "Michroma", sans-serif; letter-spacing: 3px; }.husl-footer span, .husl-footer small, address { color: #b7b1a9; font-size: 12px; font-style: normal; line-height: 1.6; }.husl-footer nav { display: flex; justify-content: space-between; gap: 14px; font-size: 12px; }.husl-footer small { grid-column: 1 / -1; }
@media (max-width: 760px) { .husl-footer__content { grid-template-columns: 1fr; } .husl-footer nav { justify-content: flex-start; flex-wrap: wrap; } }
</style>
