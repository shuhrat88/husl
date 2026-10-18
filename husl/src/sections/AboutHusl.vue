<script setup>
import {
  Package,
  Handshake,
  Truck
} from 'lucide-vue-next'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<template>
  <div id="about" class="about-section">
    <div class="container">
      <div class="about-husl-content">
        <div class="husl-label">{{ t('about.eyebrow') }}</div>
        <div class="husl-title"><template v-for="(line, index) in t('about.title').split('|')" :key="line">{{ line }}<br v-if="index < t('about.title').split('|').length - 1"></template></div>
        <div class="husl-description">{{ t('about.description') }}</div>
        <div class="husl-advantages">
            <div class="actual-models"><Package class="box-models" /> {{ t('about.models') }}</div>
            <div class="stable-supplies"><Truck class="truck-supplies" />{{ t('about.delivery') }}</div>
            <div class="long-term-cooperation"><Handshake class="handshake-cooperation" />{{ t('about.partnership') }}</div>
        </div>
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

.husl-advantages{
    padding: 50px 0px 50px 0px;
    display: flex;
    width: 650px;
    max-width: 100%;
    justify-content: space-between;
    gap: 20px;
}

.actual-models{
    font-size: 20px;
    font-weight: 500px;
    padding-bottom: 20px;
    display: flex;
    width: 200px;
    padding-left: 15px;
    .box-models{
        width: 80px;
        height: 53px;
        padding-right: 15px;
        padding-bottom: 6px;

    }
}

.stable-supplies{
    font-size: 20px;
    font-weight: 500px;
    padding-bottom: 20px;
    display: flex;
    width: 200px;
    padding-left: 15px;
    .truck-supplies{
        width: 80px;
        height: 53px;
        padding-right: 15px;
        padding-bottom: 6px;

    }
}

.long-term-cooperation{
    font-size: 20px;
    font-weight: 500px;
    padding-bottom: 20px;
    display: flex;
    width: 200px;
    padding-left: 15px;
    .handshake-cooperation{
        width: 100px;
        height: 60px;
        padding-right: 15px;
        padding-bottom: 6px;
        transform: scale(1.6);
    }
}

@media (max-width: 760px) {
  .about-section { background: #f3f0eb; }
  .about-husl-content { align-items: flex-start; padding: 52px 0; }
  .husl-label { font-size: 12px; padding: 0 0 14px; letter-spacing: 1.5px; }
  .husl-title { font-size: clamp(32px, 9vw, 40px); line-height: 1.08; }
  .husl-description { font-size: 17px; padding-top: 18px; }
  .husl-advantages { display: grid; grid-template-columns: 1fr; gap: 10px; padding: 30px 0 0; }
  .actual-models, .stable-supplies, .long-term-cooperation { align-items: center; font-size: 17px; min-height: 48px; padding: 0; width: auto; }
  .actual-models .box-models, .stable-supplies .truck-supplies { flex: 0 0 54px; height: 42px; width: 54px; }
  .long-term-cooperation .handshake-cooperation { flex: 0 0 54px; height: 42px; transform: none; width: 54px; }
}
</style>
