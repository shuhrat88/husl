<script setup>
import {
  Package,
  Handshake,
  Truck
} from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const advantages = [
  { icon: Package, key: 'about.models' },
  { icon: Truck, key: 'about.delivery' },
  { icon: Handshake, key: 'about.partnership' },
]
</script>

<template>
  <div id="about" class="about-section">
    <div class="container">
      <div class="about-husl-content">
        <div class="husl-label">{{ t('about.eyebrow') }}</div>
        <div class="husl-title"><template v-for="(line, index) in t('about.title').split('|')" :key="line">{{ line }}<br v-if="index < t('about.title').split('|').length - 1"></template></div>
        <div class="husl-description">{{ t('about.description') }}</div>
        <ul class="husl-advantages">
          <li v-for="item in advantages" :key="item.key" class="husl-advantage">
            <span class="husl-advantage__icon" aria-hidden="true"><component :is="item.icon" :size="34" :stroke-width="1.6" /></span>
            <span class="husl-advantage__text">{{ t(item.key) }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-section{
    background: url(../assets/backgrounds/huslimage.webp) no-repeat 0% 50%, #f3f0eb;
    background-size: 40%;
}

.about-husl-content{
    display: flex;
    flex-direction: column;
    align-items: end;
}

.husl-label{
    font-size: 14px;
    font-weight: 700;
    padding: 40px 0px 15px 0px;
    font-family: "Michroma", sans-serif;
    letter-spacing: 2px;
    color: #55514c;
    width: 650px;
    max-width: 100%;
}

.husl-title{
    font-size: 42px;
    text-transform: uppercase;
    font-weight: 700;
    width: 650px;
    max-width: 100%;
}

.husl-description{
    color: #55514c;
    font-size: 22px;
    font-weight: 500;
    width: 650px;
    max-width: 100%;
    padding-top: 20px;
    line-height: 1.5;
    padding-right: 0;
}

/* One grid for all three items: identical icon box, aligned text column. */
.husl-advantages{
    list-style: none;
    padding: 50px 0px 50px 0px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    width: 650px;
    max-width: 100%;
    gap: 20px;
}

.husl-advantage{
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
}

.husl-advantage__icon{
    flex: 0 0 56px;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.husl-advantage__icon svg{
    display: block;
}

@media (max-width: 760px) {
  .about-section { background: #f3f0eb; }
  .about-husl-content { align-items: flex-start; padding: 28px 0 32px; }
  .husl-label { font-size: 11px; padding: 0 0 10px; letter-spacing: 1.5px; }
  .husl-title { font-size: clamp(28px, 8vw, 34px); line-height: 1.08; }
  .husl-description { display: none; }
  .husl-advantages { grid-template-columns: repeat(3, 1fr); gap: 8px; padding: 18px 0 0; width: 100%; }
  .husl-advantage { flex-direction: column; text-align: center; gap: 8px; font-size: 13px; line-height: 1.25; }
  .husl-advantage__icon { flex-basis: 40px; width: 40px; height: 40px; }
}
</style>
