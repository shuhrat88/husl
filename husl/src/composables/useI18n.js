import { readonly, ref } from 'vue';

const messages = {
  ru: {
    nav: { about: 'О компании', countries: 'Страны', conditions: 'Условия', price: 'Получить прайс' },
    hero: { eyebrow: '—— ОПТОВЫЕ ПОСТАВКИ', title: 'Мужская одежда|оптом', description: 'Мужская одежда оптом для магазинов. Актуальный ассортимент и стабильные поставки по Казахстану и СНГ.' },
    stats: { years: 'лет', market: 'на рынке', partners: 'магазинов-партнёров', countries: 'стран сотрудничества', units: 'единиц товара' },
    about: { eyebrow: '—— О КОМПАНИИ', title: '15 лет опыта|в оптовой торговле', description: 'Помогаем магазинам зарабатывать: актуальный ассортимент, стабильная логистика и личный менеджер на связи.', models: 'Актуальные модели', delivery: 'Стабильные поставки', partnership: 'Долгосрочное сотрудничество' },
    geography: { eyebrow: '—— ГЕОГРАФИЯ', title: 'Поставляем|по всему|СНГ', description: 'Одежда для вашего магазина — с понятными условиями и стабильной доставкой.', mapAlt: 'Карта географии поставок', countriesLabel: 'Страны сотрудничества', almaty: 'АЛМАТЫ', russia: 'РОССИЯ', uzbekistan: 'УЗБЕКИСТАН', kyrgyzstan: 'КЫРГЫЗСТАН', belarus: 'БЕЛАРУСЬ', tajikistan: 'ТАДЖИКИСТАН', countries: ['Армения', 'Азербайджан', 'Беларусь', 'Казахстан', 'Кыргызстан', 'Молдова', 'Россия', 'Таджикистан', 'Узбекистан'] },
    process: { eyebrow: '—— НАЧАТЬ ЛЕГКО', title: 'Три шага|к поставке', steps: [['Оставьте заявку', 'Получите прайс и условия.'], ['Выберите модели', 'Поможем собрать заказ.'], ['Получите поставку', 'Доставим в ваш город.']] },
    cta: { eyebrow: '—— ДЛЯ ВАШЕГО МАГАЗИНА', title: 'Обновите ассортимент|без лишних рисков', description: 'Оставьте заявку — отправим прайс и условия.' },
    footer: { tagline: 'Мужская одежда оптом', countries: 'Страны СНГ', location: 'г. Алматы, Казахстан', rights: '© 2024 HUSL. Все права защищены.' },
    modal: { eyebrow: '—— ПОЛУЧИТЬ ПРАЙС', title: 'Оставьте контакты', description: 'Менеджер свяжется с вами и отправит условия.', name: 'Имя', phone: 'Номер телефона', country: 'Страна', city: 'Город', selectCountry: 'Выберите страну', selectCity: 'Выберите город', otherCity: 'Другой город', customCity: 'Укажите город', comment: 'Комментарий', optional: 'необязательно', commentPlaceholder: 'Например, интересующий ассортимент или объём заказа', submit: 'Отправить заявку', successEyebrow: '—— ЗАЯВКА ПРИНЯТА', thanks: 'Спасибо,', successText: 'Мы свяжемся с вами по указанному номеру.', close: 'Закрыть' },
  },
  kk: {
    nav: { about: 'Компания туралы', countries: 'Елдер', conditions: 'Шарттар', price: 'Бағасын алу' },
    hero: { eyebrow: '—— КӨТЕРМЕ ЖЕТКІЗІЛІМ', title: 'Ерлер киімі|көтерме', description: 'Дүкендерге арналған ерлер киімі. Өзекті ассортимент және Қазақстан мен ТМД бойынша тұрақты жеткізілім.' },
    stats: { years: 'жыл', market: 'нарықта', partners: 'серіктес дүкен', countries: 'ынтымақтастық елі', units: 'тауар бірлігі' },
    about: { eyebrow: '—— КОМПАНИЯ ТУРАЛЫ', title: '15 жылдық тәжірибе|көтерме саудада', description: 'Дүкендердің табысын арттыруға көмектесеміз: өзекті ассортимент, тұрақты логистика және жеке менеджер үнемі байланыста.', models: 'Өзекті модельдер', delivery: 'Тұрақты жеткізілім', partnership: 'Ұзақ мерзімді серіктестік' },
    geography: { eyebrow: '—— ГЕОГРАФИЯ', title: 'ТМД бойынша|жеткіземіз', description: 'Дүкеніңізге арналған киім — түсінікті шарттармен және тұрақты жеткізіліммен.', mapAlt: 'Жеткізілім географиясының картасы', countriesLabel: 'Ынтымақтастық елдері', almaty: 'АЛМАТЫ', russia: 'РЕСЕЙ', uzbekistan: 'ӨЗБЕКСТАН', kyrgyzstan: 'ҚЫРҒЫЗСТАН', belarus: 'БЕЛАРУСЬ', tajikistan: 'ТӘЖІКСТАН', countries: ['Армения', 'Әзербайжан', 'Беларусь', 'Қазақстан', 'Қырғызстан', 'Молдова', 'Ресей', 'Тәжікстан', 'Өзбекстан'] },
    process: { eyebrow: '—— БАСТАУ ОҢАЙ', title: 'Жеткізілімге|үш қадам', steps: [['Өтінім қалдырыңыз', 'Баға мен шарттарды алыңыз.'], ['Модельдерді таңдаңыз', 'Тапсырысты жинауға көмектесеміз.'], ['Жеткізілімді алыңыз', 'Тауарыңызды қалаңызға жеткіземіз.']] },
    cta: { eyebrow: '—— ДҮКЕНІҢІЗ ҮШІН', title: 'Ассортиментті|қауіпсіз жаңартыңыз', description: 'Өтінім қалдырыңыз — баға мен шарттарды жібереміз.' },
    footer: { tagline: 'Ерлер киімі көтерме', countries: 'ТМД елдері', location: 'Алматы қ., Қазақстан', rights: '© 2024 HUSL. Барлық құқық қорғалған.' },
    modal: { eyebrow: '—— БАҒАСЫН АЛУ', title: 'Байланыс деректерін қалдырыңыз', description: 'Менеджер сізбен байланысып, шарттарды жібереді.', name: 'Аты-жөніңіз', phone: 'Телефон нөмірі', country: 'Ел', city: 'Қала', selectCountry: 'Елді таңдаңыз', selectCity: 'Қаланы таңдаңыз', otherCity: 'Басқа қала', customCity: 'Қаланы көрсетіңіз', comment: 'Пікір', optional: 'міндетті емес', commentPlaceholder: 'Мысалы, қызықтыратын ассортимент немесе тапсырыс көлемі', submit: 'Өтінім жіберу', successEyebrow: '—— ӨТІНІМ ҚАБЫЛДАНДЫ', thanks: 'Рақмет,', successText: 'Көрсетілген нөмірге хабарласамыз.', close: 'Жабу' },
  },
  en: {
    nav: { about: 'About', countries: 'Countries', conditions: 'Terms', price: 'Get price list' },
    hero: { eyebrow: '—— WHOLESALE SUPPLY', title: "Men's clothing|wholesale", description: 'Menswear for stores. Current collections and reliable delivery across Kazakhstan and the CIS.' },
    stats: { years: 'years', market: 'in business', partners: 'partner stores', countries: 'partner countries', units: 'items in stock' },
    about: { eyebrow: '—— ABOUT COMPANY', title: '15 years of experience|in wholesale trade', description: 'We help stores grow with current collections, reliable logistics and a personal manager always in touch.', models: 'Current collections', delivery: 'Reliable delivery', partnership: 'Long-term partnership' },
    geography: { eyebrow: '—— GEOGRAPHY', title: 'Delivering across|the CIS', description: 'Clothing for your store with clear terms and dependable delivery.', mapAlt: 'Supply geography map', countriesLabel: 'Partner countries', almaty: 'ALMATY', russia: 'RUSSIA', uzbekistan: 'UZBEKISTAN', kyrgyzstan: 'KYRGYZSTAN', belarus: 'BELARUS', tajikistan: 'TAJIKISTAN', countries: ['Armenia', 'Azerbaijan', 'Belarus', 'Kazakhstan', 'Kyrgyzstan', 'Moldova', 'Russia', 'Tajikistan', 'Uzbekistan'] },
    process: { eyebrow: '—— GET STARTED EASILY', title: 'Three steps|to delivery', steps: [['Leave a request', 'Receive the price list and terms.'], ['Choose collections', 'We will help you build an order.'], ['Receive delivery', 'We will deliver to your city.']] },
    cta: { eyebrow: '—— FOR YOUR STORE', title: 'Refresh your collection|with confidence', description: 'Leave a request — we will send the price list and terms.' },
    footer: { tagline: "Men's clothing wholesale", countries: 'CIS countries', location: 'Almaty, Kazakhstan', rights: '© 2024 HUSL. All rights reserved.' },
    modal: { eyebrow: '—— GET PRICE LIST', title: 'Leave your details', description: 'Our manager will contact you and send the terms.', name: 'Name', phone: 'Phone number', country: 'Country', city: 'City', selectCountry: 'Choose a country', selectCity: 'Choose a city', otherCity: 'Other city', customCity: 'Enter your city', comment: 'Comment', optional: 'optional', commentPlaceholder: 'For example, desired collection or order volume', submit: 'Send request', successEyebrow: '—— REQUEST RECEIVED', thanks: 'Thank you,', successText: 'We will contact you at the number provided.', close: 'Close' },
  },
};

const savedLocale = typeof window !== 'undefined' ? window.localStorage.getItem('husl-locale') : null;
const locale = ref(['ru', 'kk', 'en'].includes(savedLocale) ? savedLocale : 'ru');

if (typeof document !== 'undefined') {
  document.documentElement.lang = locale.value === 'kk' ? 'kk' : locale.value;
}

const getByPath = (object, path) => path.split('.').reduce((value, key) => value?.[key], object);
const t = (path) => getByPath(messages[locale.value], path) ?? getByPath(messages.ru, path) ?? path;

const setLocale = (nextLocale) => {
  if (!messages[nextLocale]) return;
  locale.value = nextLocale;
  document.documentElement.lang = nextLocale === 'kk' ? 'kk' : nextLocale;
  window.localStorage.setItem('husl-locale', nextLocale);
};

export const useI18n = () => ({ locale: readonly(locale), setLocale, t });
