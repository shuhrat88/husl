<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue';
import clothingImage1 from '../assets/backgrounds/hero-clothing-1.jpg';
import clothingImage2 from '../assets/backgrounds/hero-clothing-2.jpg';
import clothingImage3 from '../assets/backgrounds/hero-clothing-3.jpg';
import clothingImage4 from '../assets/backgrounds/hero-clothing-4.jpg';
import clothingImage5 from '../assets/backgrounds/hero-clothing-5.jpg';

const photos = [clothingImage1, clothingImage2, clothingImage3, clothingImage4, clothingImage5];
// The photos are repeated three times so the strip can loop in both directions:
// when the reader drifts into the first or last copy, the position jumps to the middle copy.
const slides = [...photos, ...photos, ...photos];

const track = ref(null);
let setWidth = 0;

const measure = () => {
  const el = track.value;
  if (!el || el.children.length < photos.length + 1) return;
  setWidth = el.children[photos.length].offsetLeft - el.children[0].offsetLeft;
  el.scrollLeft = setWidth;
};

const onScroll = () => {
  const el = track.value;
  if (!el || !setWidth) return;
  if (el.scrollLeft < setWidth * 0.5) el.scrollLeft += setWidth;
  else if (el.scrollLeft > setWidth * 1.5) el.scrollLeft -= setWidth;
};

// Full-size viewer
const openIndex = ref(null);
const isOpen = computed(() => openIndex.value !== null);

const openPhoto = (slideIndex) => {
  openIndex.value = slideIndex % photos.length;
};

const closePhoto = () => {
  openIndex.value = null;
};

const stepPhoto = (direction) => {
  if (openIndex.value === null) return;
  openIndex.value = (openIndex.value + direction + photos.length) % photos.length;
};

const onKeydown = (event) => {
  if (!isOpen.value) return;
  if (event.key === 'Escape') closePhoto();
  if (event.key === 'ArrowLeft') stepPhoto(-1);
  if (event.key === 'ArrowRight') stepPhoto(1);
};

// Stop the page behind the viewer from scrolling while it is open.
watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : '';
});

onMounted(() => {
  measure();
  window.addEventListener('resize', measure);
  window.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  window.removeEventListener('resize', measure);
  window.removeEventListener('keydown', onKeydown);
  document.body.style.overflow = '';
});
</script>

<template>
  <section class="clothing-carousel" aria-label="Фото одежды">
    <div ref="track" class="clothing-carousel__track" @scroll.passive="onScroll">
      <button
        v-for="(src, index) in slides"
        :key="index"
        class="clothing-carousel__slide"
        type="button"
        :aria-label="`Открыть фото ${(index % photos.length) + 1}`"
        @click="openPhoto(index)"
      >
        <img :src="src" alt="" loading="lazy" decoding="async">
      </button>
    </div>
  </section>

  <Teleport to="body">
    <div v-if="isOpen" class="photo-viewer" role="dialog" aria-modal="true" aria-label="Просмотр фото" @click.self="closePhoto">
      <button class="photo-viewer__close" type="button" aria-label="Закрыть" @click="closePhoto">×</button>
      <button class="photo-viewer__nav photo-viewer__nav--prev" type="button" aria-label="Предыдущее фото" @click="stepPhoto(-1)">‹</button>
      <img class="photo-viewer__image" :src="photos[openIndex]" alt="">
      <button class="photo-viewer__nav photo-viewer__nav--next" type="button" aria-label="Следующее фото" @click="stepPhoto(1)">›</button>
    </div>
  </Teleport>
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
    overflow: hidden;
    padding: 0;
    border: 0;
    background: none;
    cursor: zoom-in;
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

/* Full-size viewer (opened from the carousel). */
.photo-viewer {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(20, 18, 15, 0.94);
  padding: 56px 12px;
}

.photo-viewer__image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

.photo-viewer__close,
.photo-viewer__nav {
  position: absolute;
  background: rgba(243, 240, 235, 0.12);
  color: #f3f0eb;
  border: 0;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  font-size: 26px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.photo-viewer__close {
  top: 8px;
  right: 8px;
  font-size: 30px;
}

.photo-viewer__nav {
  top: 50%;
  transform: translateY(-50%);
}

.photo-viewer__nav--prev {
  left: 8px;
}

.photo-viewer__nav--next {
  right: 8px;
}
</style>
