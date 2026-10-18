<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from '../composables/useI18n';

const statsSection = ref(null);
const { locale, t } = useI18n();

const stats = ref([
  { value: 0, target: 15, suffix: 'stats.years', label: 'stats.market' },
  { value: 0, target: 500, suffix: '+', label: 'stats.partners' },
  { value: 0, target: 10, suffix: '+', label: 'stats.countries' },
  { value: 0, target: 100000, suffix: '+', label: 'stats.units' },
]);

let observer;
let animationFrame;

const startCounters = () => {
  const duration = 2500;
  const startTime = performance.now();

  const animate = (currentTime) => {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);

    stats.value.forEach((stat) => {
      stat.value = Math.floor(easedProgress * stat.target);
    });

    if (progress < 1) {
      animationFrame = requestAnimationFrame(animate);
    } else {
      stats.value.forEach((stat) => {
        stat.value = stat.target;
      });
    }
  };

  animationFrame = requestAnimationFrame(animate);
};

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        startCounters();

        // Чтобы анимация сработала только один раз
        observer.disconnect();
      }
    },
    {
      threshold: 0.3,
    },
  );

  observer.observe(statsSection.value);
});

onUnmounted(() => {
  observer?.disconnect();
  cancelAnimationFrame(animationFrame);
});
</script>

<template>
  <div class="husl-stats">
    <div class="container">
    <section ref="statsSection" class="stats">
      <div v-for="stat in stats" :key="stat.target" class="stats__item">
        <strong class="stats__value">
          {{ stat.value.toLocaleString(locale === 'kk' ? 'kk-KZ' : locale === 'en' ? 'en-US' : 'ru-RU') }}{{ stat.suffix.startsWith('stats.') ? ` ${t(stat.suffix)}` : stat.suffix }}
        </strong>

        <span class="stats__label">
          {{ t(stat.label) }}
        </span>
      </div>
    </section>
  </div>
  </div>
</template>

<style scoped lang="scss">
.stats {
  display: flex;
  justify-content: space-between;
  padding: 40px 0px;
  gap: 90px;

  &__item {
    flex: 1;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid #d8d4ce;
    }
  }

  &__value {
    display: block;
    font-size: 40px;
    font-weight: 600;
  }

  &__label {
    display: block;
    margin-top: 8px;
    font-size: 14px;
    color: #777;
  }
}

.husl-stats{
    background: #f3f0eb;
}

@media (max-width: 760px) {
  .stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; padding: 24px 0; }
  .stats__item { padding: 18px 10px; }
  .stats__item:nth-child(2) { border-right: 0; }
  .stats__value { font-size: clamp(30px, 9vw, 40px); }
  .stats__label { font-size: 13px; }
}
</style>
