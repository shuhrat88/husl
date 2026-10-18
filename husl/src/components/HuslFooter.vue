<script setup>
import { useI18n } from '../composables/useI18n';

const { t } = useI18n();
</script>

<template>
  <footer class="husl-footer">
    <div class="container husl-footer__content">
      <div><strong>HUSL</strong><span>{{ t('footer.tagline') }}</span></div>
      <nav><a href="#about">{{ t('nav.about') }}</a><a href="#geography">{{ t('footer.countries') }}</a><a href="#conditions">{{ t('nav.conditions') }}</a></nav>
      <address>+7 700 123 45 67<br>{{ t('footer.location') }}</address>
      <small>{{ t('footer.rights') }}</small>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.husl-footer { background: #14120f; color: #f3f0eb; padding: 36px 0; }
.husl-footer__content { display: grid; grid-template-columns: 1.2fr 1.6fr 1fr; gap: 28px; }
.husl-footer strong { display: block; font: 400 22px "Michroma", sans-serif; letter-spacing: 3px; }.husl-footer span, .husl-footer small, address { color: #b7b1a9; font-size: 12px; font-style: normal; line-height: 1.6; }.husl-footer nav { display: flex; justify-content: space-between; gap: 14px; font-size: 12px; }.husl-footer small { grid-column: 1 / -1; }
@media (max-width: 760px) { .husl-footer__content { grid-template-columns: 1fr; } .husl-footer nav { justify-content: flex-start; flex-wrap: wrap; } }
</style>
