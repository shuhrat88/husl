<template>
  <div class="hero-section">
    <div class="hero-slides" aria-hidden="true">
      <img v-for="(src, index) in slides" :key="src" :src="src" alt="" :style="{ '--i': index }">
    </div>

    <div class="container">
      <div class="hero-content">
        <div class="hero-label">{{ t('hero.eyebrow') }}</div>
        <h1 class="hero-title"><template v-for="(line, index) in t('hero.title').split('|')" :key="line">{{ line }}<br v-if="index < t('hero.title').split('|').length - 1"></template></h1>
        <div class="hero-description">{{ t('hero.description') }}</div>

        <div class="hero-buttons">
          <div class="hero-button-conditions"><button type="button" data-contact-trigger>{{ t('actions.primary') }} →</button></div>
          <div class="hero-button-about"><button type="button" @click="scrollToAbout">{{ t('nav.about') }} <span>→</span></button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from '../composables/useI18n';
import clothingImage1 from '../assets/backgrounds/hero-clothing-1.jpg';
import clothingImage2 from '../assets/backgrounds/hero-clothing-2.jpg';
import clothingImage3 from '../assets/backgrounds/hero-clothing-3.jpg';
import storefrontImage from '../assets/backgrounds/huslimagehero.webp';

const { t } = useI18n();

// Phones only (see the media query below); desktop keeps the storefront background.
const slides = [storefrontImage, clothingImage1, clothingImage2, clothingImage3];

const scrollToAbout = () => {
  document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped lang="scss">
/* Phone slideshow: each slide stays visible for 4s and cross-fades into the next one. */
$slide-count: 4;
$slide-seconds: 4s;

.hero-section {
  background: linear-gradient(to right, #f3f0eb 40%, rgba(0, 0, 0, 0) 85%), (url(../assets/backgrounds/huslimagehero.webp) no-repeat 0 50%);
  background-size: 101%;
  padding-bottom: 200px;
}

.hero-slides {
  display: none;
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
    position: relative;
    overflow: hidden;
    background: #f3f0eb;
    padding: 22px 0 26px;

    /* Light veil over the photos so the text stays readable on a phone. */
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 1;
      background: rgba(243, 240, 235, 0.88);
      pointer-events: none;
    }

    > .container {
      position: relative;
      z-index: 2;
    }
  }

  .hero-slides {
    display: block;
    position: absolute;
    inset: 0;
    z-index: 0;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center 35%;
      opacity: 0;
      animation: hero-slide calc(#{$slide-count} * #{$slide-seconds}) ease-in-out infinite;
      /* Negative delay starts each slide at its own point in the cycle, so the first frame already shows one photo. */
      animation-delay: calc(var(--i) * -#{$slide-seconds});
    }
  }

  @keyframes hero-slide {
    0% { opacity: 0; }
    6% { opacity: 1; }
    25% { opacity: 1; }
    31%, 100% { opacity: 0; }
  }

  .hero-label { font-size: 11px; padding: 0 0 10px; letter-spacing: 1.5px; }
  .hero-title { font-size: clamp(32px, 9vw, 38px); line-height: 1.05; }
  .hero-description { font-size: 15px; max-width: none; padding-top: 12px; }
  .hero-buttons { align-items: flex-start; flex-direction: column; gap: 10px; }
  .hero-button-conditions { margin-top: 16px; }
  .hero-button-conditions button { padding: 12px 16px; font-size: 14px; }
  .hero-button-about { padding: 0; }
  .hero-button-about button { font-size: 14px; }
}

@media (max-width: 760px) and (prefers-reduced-motion: reduce) {
  .hero-slides img { animation: none; }
  .hero-slides img:first-child { opacity: 1; }
}
</style>
