<script setup>
import huslLogo from '../assets/logo/husl-logo.png';
import { useI18n } from '../composables/useI18n';

const { locale, setLocale, t } = useI18n();
</script>

<template>
  <div class="header-container">
    <div class="container">
      <div class="header">
        <a class="husl-logo" href="/" :aria-label="`HUSL — ${t('nav.about')}`">
          <img :src="huslLogo" alt="HUSL" width="350" height="86" fetchpriority="high">
        </a>

        <div class="header-button-list">
          <ul>
            <li><a href="#about">{{ t('nav.about') }}</a></li>
            <li><a href="#geography">{{ t('nav.countries') }}</a></li>
            <li><a href="#conditions">{{ t('nav.conditions') }}</a></li>
          </ul>
        </div>

        <div class="language-switcher" aria-label="Language selector">
          <button v-for="code in ['ru', 'kk', 'en']" :key="code" type="button" :class="{ 'is-active': locale === code }" @click="setLocale(code)">{{ code }}</button>
        </div>

        <div class="header-button-price">
          <button type="button" data-contact-trigger>{{ t('nav.price') }} →</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header-container {
  background: #f3f0eb;
  padding-bottom: 20px;
}
.header {
  display: grid;
  grid-template-columns: auto 1fr auto auto;
  gap: 26px;
  justify-content: space-between;
}

.husl-logo {
  display: flex;
  align-items: center;
  padding-top: 20px;

  img {
    width: 124px;
    height: auto;
    filter: brightness(0) saturate(100%);
  }
}

.header-button-list {
  ul {
    display: flex;
    list-style: none;
    gap: 20px;
    padding: 44px 0px 0px 0px;
    li {
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 1px;
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.03);
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
}

.header-button-price {
  margin: 28px 0px 0px 0px;
  button {
    background-color: #4c2f27;
    border: none;
    padding: 15px 25px;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border-radius: 6px;
    color: #fff;

    &:hover {
      transform: translateY(-2px);
    }
  }
}

.language-switcher { align-self: center; display: flex; gap: 4px; margin-top: 20px; }
.language-switcher button { background: transparent; border: 0; color: #55514c; font-size: 11px; letter-spacing: .8px; padding: 6px 3px; text-transform: uppercase; }
.language-switcher button.is-active { color: #171614; font-weight: 700; text-decoration: underline; text-underline-offset: 4px; }

@media (max-width: 900px) {
  .header {
    grid-template-columns: auto auto auto;
    align-items: center;
  }

  .header-button-list {
    display: none;
  }

  .header-button-price {
    margin-top: 20px;
  }

  .language-switcher { justify-self: end; margin-top: 20px; }
}

@media (max-width: 480px) {
  .header-container { padding-bottom: 14px; }
  .husl-logo { padding-top: 14px; }
  .husl-logo img { width: 106px; }
  .header-button-price { margin-top: 14px; }
  .header-button-price button { font-size: 11px; padding: 12px 14px; }
  .header { gap: 10px; }
  .language-switcher { margin-top: 14px; }
  .language-switcher button { font-size: 10px; }
}
</style>
