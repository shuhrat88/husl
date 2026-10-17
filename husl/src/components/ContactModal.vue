<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const isOpen = ref(false);
const isSent = ref(false);
const form = ref({ name: '', phone: '', country: '', city: '', customCity: '' });

const citiesByCountry = {
  'Армения': ['Ереван', 'Гюмри', 'Ванадзор', 'Другой город'],
  'Азербайджан': ['Баку', 'Гянджа', 'Сумгаит', 'Другой город'],
  'Беларусь': ['Минск', 'Гомель', 'Брест', 'Другой город'],
  'Казахстан': ['Алматы', 'Астана', 'Шымкент', 'Караганда', 'Другой город'],
  'Кыргызстан': ['Бишкек', 'Ош', 'Джалал-Абад', 'Другой город'],
  'Молдова': ['Кишинёв', 'Бельцы', 'Кагул', 'Другой город'],
  'Россия': ['Москва', 'Санкт-Петербург', 'Казань', 'Екатеринбург', 'Новосибирск', 'Другой город'],
  'Таджикистан': ['Душанбе', 'Худжанд', 'Бохтар', 'Другой город'],
  'Узбекистан': ['Ташкент', 'Самарканд', 'Наманган', 'Андижан', 'Другой город'],
};

const countries = Object.keys(citiesByCountry);
const cities = computed(() => citiesByCountry[form.value.country] || []);

const open = () => {
  isOpen.value = true;
  isSent.value = false;
};

const close = () => {
  isOpen.value = false;
};

const changeCountry = () => {
  form.value.city = '';
  form.value.customCity = '';
};

const submit = () => {
  isSent.value = true;
};

const handleClick = (event) => {
  if (event.target.closest('[data-contact-trigger]')) open();
};

const handleKeydown = (event) => {
  if (event.key === 'Escape') close();
};

onMounted(() => {
  document.addEventListener('click', handleClick);
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClick);
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <Teleport to="body">
    <div v-if="isOpen" class="contact-modal" role="presentation" @click.self="close">
      <section class="contact-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
        <button class="contact-modal__close" type="button" aria-label="Закрыть" @click="close">×</button>

        <template v-if="!isSent">
          <p>—— ПОЛУЧИТЬ ПРАЙС</p>
          <h2 id="contact-modal-title">Оставьте контакты</h2>
          <span>Менеджер свяжется с вами и отправит условия.</span>

          <form @submit.prevent="submit">
            <label>Имя<input v-model.trim="form.name" type="text" autocomplete="name" required></label>
            <label>Номер телефона<input v-model.trim="form.phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="+7 700 000 00 00" required></label>
            <label>Страна<select v-model="form.country" required @change="changeCountry"><option value="" disabled>Выберите страну</option><option v-for="country in countries" :key="country" :value="country">{{ country }}</option></select></label>
            <label>Город<select v-model="form.city" :disabled="!form.country" required><option value="" disabled>Выберите город</option><option v-for="city in cities" :key="city" :value="city">{{ city }}</option></select></label>
            <label v-if="form.city === 'Другой город'">Укажите город<input v-model.trim="form.customCity" type="text" autocomplete="address-level2" required></label>
            <button type="submit">Отправить заявку <b>→</b></button>
          </form>
        </template>

        <div v-else class="contact-modal__success">
          <p>—— ЗАЯВКА ПРИНЯТА</p>
          <h2>Спасибо, {{ form.name }}!</h2>
          <span>Мы свяжемся с вами по указанному номеру.</span>
          <button type="button" @click="close">Закрыть</button>
        </div>
      </section>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
.contact-modal { align-items: center; background: rgba(20, 18, 15, .68); display: flex; inset: 0; justify-content: center; padding: 20px; position: fixed; z-index: 20; }
.contact-modal__dialog { background: #f3f0eb; color: #171614; max-height: calc(100dvh - 40px); max-width: 520px; overflow-y: auto; padding: 42px; position: relative; width: 100%; }
.contact-modal__dialog > p, .contact-modal__success p { color: #55514c; font: 700 11px "Michroma", sans-serif; letter-spacing: 1px; margin-bottom: 16px; }
h2 { font-size: clamp(32px, 4vw, 44px); line-height: 1.08; }.contact-modal__dialog > span, .contact-modal__success span { color: #55514c; display: block; font-size: 16px; line-height: 1.5; margin-top: 14px; }
.contact-modal__close { background: transparent; border: 0; color: #55514c; font-size: 30px; line-height: 1; position: absolute; right: 16px; top: 12px; }
form { display: grid; gap: 16px; margin-top: 28px; } label { color: #55514c; display: grid; font-size: 13px; gap: 7px; } input, select { background: transparent; border: 1px solid #d8d4ce; border-radius: 0; color: #171614; font-size: 16px; min-height: 48px; padding: 0 13px; } select:disabled { cursor: not-allowed; opacity: .55; }
form button, .contact-modal__success button { background: #4c2f27; border: 1px solid #4c2f27; border-radius: 6px; color: #fff; font-size: 15px; margin-top: 8px; padding: 15px 20px; } button b { margin-left: 8px; }.contact-modal__success { padding: 38px 0 10px; }
@media (max-width: 480px) { .contact-modal { align-items: end; padding: 0; }.contact-modal__dialog { max-height: 92dvh; padding: 34px 20px 26px; }.contact-modal__dialog h2 { font-size: 32px; } }
</style>
