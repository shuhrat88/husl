<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { useI18n } from '../composables/useI18n';

const isOpen = ref(false);
const isSent = ref(false);
const form = ref({ name: '', phone: '', country: '', city: '', customCity: '', comment: '' });
const { t } = useI18n();

// Keys are the country names in Russian (internal ids); labels come from i18n.
// City values are i18n ids from `cities.*`; 'other' maps to modal.otherCity.
const citiesByCountry = {
  'Армения': ['yerevan', 'gyumri', 'vanadzor', 'other'],
  'Азербайджан': ['baku', 'ganja', 'sumgait', 'other'],
  'Беларусь': ['minsk', 'gomel', 'brest', 'other'],
  'Казахстан': ['almaty', 'astana', 'shymkent', 'karaganda', 'other'],
  'Кыргызстан': ['bishkek', 'osh', 'jalalabad', 'other'],
  'Молдова': ['chisinau', 'balti', 'cahul', 'other'],
  'Россия': ['moscow', 'spb', 'kazan', 'yekaterinburg', 'novosibirsk', 'other'],
  'Таджикистан': ['dushanbe', 'khujand', 'bokhtar', 'other'],
  'Узбекистан': ['tashkent', 'samarkand', 'namangan', 'andijan', 'other'],
};

const countries = Object.keys(citiesByCountry);
const cities = computed(() => citiesByCountry[form.value.country] || []);
const countryLabel = (country) => t('geography.countries')[countries.indexOf(country)] || country;
const cityLabel = (city) => (city === 'other' ? t('modal.otherCity') : t(`cities.${city}`));

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
        <button class="contact-modal__close" type="button" :aria-label="t('modal.close')" @click="close">×</button>

        <template v-if="!isSent">
          <p>{{ t('modal.eyebrow') }}</p>
          <h2 id="contact-modal-title">{{ t('modal.title') }}</h2>
          <span>{{ t('modal.description') }}</span>

          <form @submit.prevent="submit">
            <label>{{ t('modal.name') }}<input v-model.trim="form.name" type="text" autocomplete="name" required></label>
            <label>{{ t('modal.phone') }}<input v-model.trim="form.phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="+7 700 000 00 00" required></label>
            <label>{{ t('modal.country') }}<select v-model="form.country" required @change="changeCountry"><option value="" disabled>{{ t('modal.selectCountry') }}</option><option v-for="country in countries" :key="country" :value="country">{{ countryLabel(country) }}</option></select></label>
            <label>{{ t('modal.city') }}<select v-model="form.city" :disabled="!form.country" required><option value="" disabled>{{ t('modal.selectCity') }}</option><option v-for="city in cities" :key="city" :value="city">{{ cityLabel(city) }}</option></select></label>
            <label v-if="form.city === 'other'">{{ t('modal.customCity') }}<input v-model.trim="form.customCity" type="text" autocomplete="address-level2" required></label>
            <label>{{ t('modal.comment') }} <small>{{ t('modal.optional') }}</small><textarea v-model.trim="form.comment" rows="3" :placeholder="t('modal.commentPlaceholder')"></textarea></label>
            <button type="submit">{{ t('modal.submit') }} <b>→</b></button>
          </form>
        </template>

        <div v-else class="contact-modal__success">
          <p>{{ t('modal.successEyebrow') }}</p>
          <h2>{{ t('modal.thanks', { name: form.name }) }}</h2>
          <span>{{ t('modal.successText') }}</span>
          <button type="button" @click="close">{{ t('modal.close') }}</button>
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
form { display: grid; gap: 16px; margin-top: 28px; } label { color: #55514c; display: grid; font-size: 13px; gap: 7px; } label small { color: #8a857f; font-size: 11px; font-weight: 400; } input, select, textarea { background: transparent; border: 1px solid #d8d4ce; border-radius: 0; color: #171614; font: inherit; font-size: 16px; min-height: 48px; padding: 0 13px; } textarea { min-height: 86px; padding: 12px 13px; resize: vertical; } select:disabled { cursor: not-allowed; opacity: .55; }
form button, .contact-modal__success button { background: #4c2f27; border: 1px solid #4c2f27; border-radius: 6px; color: #fff; font-size: 15px; margin-top: 8px; padding: 15px 20px; } button b { margin-left: 8px; }.contact-modal__success { padding: 38px 0 10px; }
@media (max-width: 480px) { .contact-modal { align-items: end; padding: 0; }.contact-modal__dialog { max-height: 92dvh; padding: 34px 20px 26px; }.contact-modal__dialog h2 { font-size: 32px; } }
</style>
