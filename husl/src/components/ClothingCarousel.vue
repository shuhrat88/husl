<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import clothingImage1 from '../assets/backgrounds/hero-clothing-1.jpg';
import clothingImage2 from '../assets/backgrounds/hero-clothing-2.jpg';
import clothingImage3 from '../assets/backgrounds/hero-clothing-3.jpg';

const photos = [clothingImage1, clothingImage2, clothingImage3];
// The photos are repeated three times so the strip can loop in both directions:
// when the reader drifts into the first or last copy, the position jumps to the middle copy.
const slides = [...photos, ...photos, ...photos];

const track = ref(null);
let setWidth = 0;

const measure = () => {
  const el = track.value;
  if (!el || el.children.length < 4) return;
  setWidth = el.children[3].offsetLeft - el.children[0].offsetLeft;
  el.scrollLeft = setWidth;
};

const onScroll = () => {
  const el = track.value;
  if (!el || !setWidth) return;
  if (el.scrollLeft < setWidth * 0.5) el.scrollLeft += setWidth;
  else if (el.scrollLeft > setWidth * 1.5) el.scrollLeft -= setWidth;
};

onMounted(() => {
  measure();
  window.addEventListener('resize', measure);
});

onUnmounted(() => {
  window.removeEventListener('resize', measure);
});
</script>

<template>
  <section class="clothing-carousel" aria-label="Фото одежды">
    <div ref="track" class="clothing-carousel__track" @scroll.passive="onScroll">
      <figure v-for="(src, index) in slides" :key="index" class="clothing-carousel__slide">
        <img :src="src" alt="" loading="lazy" decoding="async">
      </figure>
    </div>
  </section>
</template>

<style scoped lang="scss">
/* Phones only. */
.clothing-carousel {
  display: none;
}

@media (max-width: 760px) {
  .clothing-carousel {
    display: block;
    background: #f3f0eb;
    padding: 4px 0 24px;
  }

  .clothing-carousel__track {
    display: flex;
    gap: 12px;
    padding: 0 20px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
  }

  .clothing-carousel__track::-webkit-scrollbar {
    display: none;
  }

  .clothing-carousel__slide {
    flex: 0 0 72vw;
    max-width: 340px;
    aspect-ratio: 3 / 4;
    scroll-snap-align: center;
  }

  .clothing-carousel__slide {
    overflow: hidden;
  }

  /* Scaled from the bottom edge so the top of each photo (where the chin shows) is cropped off. */
  .clothing-carousel__slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transform: scale(1.12);
    transform-origin: 50% 100%;
  }
}
</style>
