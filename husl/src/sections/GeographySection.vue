<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import geographyMap from '../assets/backgrounds/geographymap-darkened.webp';
import { useI18n } from '../composables/useI18n';

const section = ref(null);
const hasPlayed = ref(false);
const { t } = useI18n();
let observer;

const playAnimation = () => {
  hasPlayed.value = true;
  observer?.disconnect();
};

onMounted(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    playAnimation();
    return;
  }

  observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) playAnimation();
  }, { threshold: 0.25 });

  observer.observe(section.value);
});

onUnmounted(() => observer?.disconnect());
</script>

<template>
  <section id="geography" ref="section" class="geography-section" :class="{ 'is-visible': hasPlayed }">
    <div class="container">
      <div class="geography-section__content">
        <div class="geography-section__copy">
          <p class="geography-section__eyebrow">{{ t('geography.eyebrow') }}</p>
          <h2><template v-for="(line, index) in t('geography.title').split('|')" :key="line">{{ line }}<br v-if="index < t('geography.title').split('|').length - 1"></template></h2>
          <p class="geography-section__description">{{ t('geography.description') }}</p>
          <button class="geography-section__button" type="button" data-contact-trigger>{{ t('nav.price') }} <span>→</span></button>
        </div>

        <div class="geography-section__visual">
          <div class="geography-section__map geography__map">
            <img class="geography__map-image" :src="geographyMap" :alt="t('geography.mapAlt')">
            <svg class="geography__routes" viewBox="0 0 1894 830" aria-hidden="true">
              <g class="routes">
                <path class="route route--russia" pathLength="100" d="M1195 493 Q1175 345 1110 274" />
                <path class="route route--uzbekistan" pathLength="100" d="M1195 493 Q1120 492 1061 532" />
                <path class="route route--kyrgyzstan" pathLength="100" d="M1195 493 Q1212 511 1222 532" />
                <path class="route route--belarus" pathLength="100" d="M1195 493 Q966 305 695 364" />
                <path class="route route--tajikistan" pathLength="100" d="M1195 493 Q1242 548 1260 596" />
              </g>
              <g class="points">
                <circle class="point point--almaty" cx="1195" cy="493" r="8" />
                <circle class="point point--russia" cx="1110" cy="274" r="5" />
                <circle class="point point--uzbekistan" cx="1061" cy="532" r="5" />
                <circle class="point point--kyrgyzstan" cx="1222" cy="532" r="5" />
                <circle class="point point--belarus" cx="695" cy="364" r="5" />
                <circle class="point point--tajikistan" cx="1260" cy="596" r="5" />
              </g>
              <text class="almaty-label" x="1211" y="484">{{ t('geography.almaty') }}</text>
              <text class="destination-label destination-label--russia" x="1122" y="267">{{ t('geography.russia') }}</text>
              <text class="destination-label destination-label--uzbekistan" x="990" y="550">{{ t('geography.uzbekistan') }}</text>
              <text class="destination-label destination-label--kyrgyzstan" x="1234" y="550">{{ t('geography.kyrgyzstan') }}</text>
              <text class="destination-label destination-label--belarus" x="707" y="357">{{ t('geography.belarus') }}</text>
              <text class="destination-label destination-label--tajikistan" x="1272" y="615">{{ t('geography.tajikistan') }}</text>
            </svg>
          </div>

          <ul class="geography-section__countries" :aria-label="t('geography.countriesLabel')">
            <li v-for="country in t('geography.countries')" :key="country">{{ country }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.geography-section {
  --dark: #14120f;
  background: var(--dark);
  color: #f3f0eb;
  overflow: hidden;
  padding: 58px 0 30px;

  &__content { display: grid; grid-template-columns: minmax(280px, 34%) minmax(0, 66%); align-items: center; gap: 10px; }
  &__eyebrow { color: #b7b1a9; font: 700 12px "Michroma", sans-serif; letter-spacing: 1.5px; margin-bottom: 18px; }
  h2 { font-size: clamp(36px, 3vw, 54px); line-height: 1.05; font-weight: 600; text-transform: none; max-width: 440px; }
  &__description { color: #b7b1a9; font-size: 17px; font-weight: 500; line-height: 1.5; margin-top: 20px; }
  &__button { margin-top: 30px; color: #1d1c1a; background: #f3f0eb; border: 1px solid #f3f0eb; border-radius: 6px; padding: 15px 20px; font-size: 15px; transition: transform .2s ease; &:hover { transform: translateY(-2px); } span { margin-left: 8px; } }
  &__map { position: relative; opacity: 0; transform: translateY(10px); transition: opacity .55s ease, transform .55s ease; }
  &__countries { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px 18px; list-style: none; margin: 12px 0 0; padding: 0; color: #b7b1a9; font-size: 13px; font-weight: 700; }

  &.is-visible &__map { opacity: 1; transform: none; }
}

.geography__map-image { display: block; width: 100%; height: auto; object-fit: contain; mix-blend-mode: lighten; }
.geography__routes { position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; }
.almaty-label { fill: #f3f0eb; font: 700 18px Arial, sans-serif; letter-spacing: 1px; opacity: 0; }
.destination-label { fill: #c7b498; font: 700 22px Arial, sans-serif; letter-spacing: .8px; opacity: 0; }
.route { fill: none; stroke: #c7b498; stroke-width: 2; stroke-linecap: round; stroke-dasharray: 100; stroke-dashoffset: 100; opacity: .65; }
.point { fill: #f3e5ca; stroke: #8f7e69; stroke-width: 5; opacity: 0; transform-box: fill-box; transform-origin: center; }
.point--almaty { stroke-width: 8; }

.is-visible {
  .point--almaty { animation: point-in .4s .55s both, soft-pulse 2.8s 1s infinite; }
  .almaty-label { animation: label-in .3s .75s both; }
  .route--russia { animation: draw .38s .8s ease-out forwards; }
  .point--russia { animation: point-in .25s 1.18s both, soft-pulse 2.8s 1.5s infinite; }
  .destination-label--russia { animation: label-in .25s 1.43s both; }
  .route--uzbekistan { animation: draw .35s 1.35s ease-out forwards; }
  .point--uzbekistan { animation: point-in .25s 1.7s both, soft-pulse 2.8s 2s infinite; }
  .destination-label--uzbekistan { animation: label-in .25s 1.95s both; }
  .route--kyrgyzstan { animation: draw .35s 1.88s ease-out forwards; }
  .point--kyrgyzstan { animation: point-in .25s 2.23s both, soft-pulse 2.8s 2.5s infinite; }
  .destination-label--kyrgyzstan { animation: label-in .25s 2.48s both; }
  .route--belarus { animation: draw .42s 2.4s ease-out forwards; }
  .point--belarus { animation: point-in .25s 2.82s both, soft-pulse 2.8s 3.1s infinite; }
  .destination-label--belarus { animation: label-in .25s 3.07s both; }
  .route--tajikistan { animation: draw .35s 2.98s ease-out forwards; }
  .point--tajikistan { animation: point-in .25s 3.33s both, soft-pulse 2.8s 3.6s infinite; }
  .destination-label--tajikistan { animation: label-in .25s 3.58s both; }
}

@keyframes draw { to { stroke-dashoffset: 0; } }
@keyframes point-in { from { opacity: 0; transform: scale(.35); } to { opacity: 1; transform: scale(1); } }
@keyframes label-in { to { opacity: .85; } }
@keyframes soft-pulse { 50% { filter: drop-shadow(0 0 4px #d7c3a5); } }

@media (prefers-reduced-motion: reduce) {
  .geography-section__map, .route, .point, .almaty-label, .destination-label { animation: none !important; transition: none !important; opacity: 1 !important; transform: none !important; stroke-dashoffset: 0 !important; }
}

@media (max-width: 760px) {
  .geography-section { padding-top: 52px; &__content { grid-template-columns: 1fr; gap: 28px; } &__description { font-size: 16px; } &__countries { justify-content: flex-start; gap: 10px 20px; margin-top: 8px; } }
  .desktop-only { display: none; }
}
</style>
