<template>
  <div class="hero-section">
    <div class="container">
      <div class="hero-content">
        <div class="hero-label">{{ t('hero.eyebrow') }}</div>
        <h1 class="hero-title"><template v-for="(line, index) in t('hero.title').split('|')" :key="line">{{ line }}<br v-if="index < t('hero.title').split('|').length - 1"></template></h1>
        <div class="hero-description">{{ t('hero.description') }}</div>

        <div class="hero-buttons">
          <div class="hero-button-conditions"><button type="button" data-contact-trigger>{{ t('nav.price') }} →</button></div>
          <div class="hero-button-about"><button type="button" @click="scrollToAbout">{{ t('nav.about') }} <span>→</span></button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from '../composables/useI18n';

const { t } = useI18n();

const scrollToAbout = () => {
  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped lang="scss">
.hero-section {
  background: linear-gradient(to right, #f3f0eb 40%, rgba(0, 0, 0, 0) 85%), (url(../assets/backgrounds/huslimagehero.webp) no-repeat 0 50%);
  background-size: 101%;
  padding-bottom: 200px;
}

.hero-label {
  font-size: 16px;
  font-weight: 700;
  padding: 40px 0px 15px 0px;
  font-family: "Michroma", sans-serif;
  letter-spacing: 2px;
}

.hero-title {
  font-size: clamp(46px, 5vw, 72px);
  line-height: 1.04;
  text-transform: uppercase;
  font-weight: 700;
  max-width: 600px;
}

.hero-description {
  color: #55514c;
  font-size: 18px;
  font-weight: 500;
  max-width: 388px;
  padding-top: 20px;
  line-height: 1.5;
}

.hero-button-conditions {
  margin-top: 30px;

  button {
    font-size: 15px;
    font-weight: 400;
    color: #fff;
    border: 1px solid #4c2f27;
    background-color: #4c2f27;
    padding: 15px 20px;
    border-radius: 6px;
    transition: all 0.2s ease;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
    }
  }
}

.hero-button-about {
  padding: 46px 0px 0px 0px;
  button {
    font-size: 16px;
    font-weight: 400;
    color: #55514c;
    border: none;
    background-color: #f3f0eb;

    span {
      display: inline-block;
      transform: rotate(90deg);
    }
  }
}

.hero-buttons{
  display: flex;
  gap: 40px;
}

@media (max-width: 760px) {
  .hero-section {
    background: #f3f0eb;
    padding: 52px 0 64px;
  }

  .hero-label { font-size: 12px; padding: 0 0 14px; letter-spacing: 1.5px; }
  .hero-title { font-size: clamp(36px, 10vw, 44px); }
  .hero-description { font-size: 16px; max-width: 340px; }
  .hero-buttons { align-items: flex-start; flex-direction: column; gap: 18px; }
  .hero-button-conditions { margin-top: 26px; }
  .hero-button-about { padding: 0; }
}
</style>
