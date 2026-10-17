<script setup>
import huslLogo from '../assets/logo/husl-logo.png';
</script>

<template>
  <div class="header-container">
    <div class="container">
      <div class="header">
        <a class="husl-logo" href="/" aria-label="HUSL — главная">
          <img :src="huslLogo" alt="HUSL" width="350" height="86" fetchpriority="high">
        </a>

        <div class="header-button-list">
          <ul>
            <li>О компании</li>
            <li>Страны</li>
            <li>Условия</li>
          </ul>
        </div>

        <div class="header-button-price">
          <button type="button" data-contact-trigger>Получить прайс →</button>
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
  grid-template-columns: repeat(3, auto);
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

@media (max-width: 900px) {
  .header {
    grid-template-columns: auto auto;
    align-items: center;
  }

  .header-button-list {
    display: none;
  }

  .header-button-price {
    margin-top: 20px;
  }
}

@media (max-width: 480px) {
  .header-container { padding-bottom: 14px; }
  .husl-logo { padding-top: 14px; }
  .husl-logo img { width: 106px; }
  .header-button-price { margin-top: 14px; }
  .header-button-price button { font-size: 11px; padding: 12px 14px; }
}
</style>
