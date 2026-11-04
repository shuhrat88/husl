import { readonly, ref } from 'vue';

const messages = {
  ru: {
    nav: { about: 'О компании', countries: 'Страны', conditions: 'Как начать' },
    actions: { primary: 'Получить условия сотрудничества', primaryShort: 'Узнать условия', discuss: 'Обсудить сотрудничество', request: 'Запросить оптовое предложение' },
    hero: { eyebrow: '—— ДЛЯ МАГАЗИНОВ И ОПТОВЫХ ПОКУПАТЕЛЕЙ', title: 'Мужская одежда|оптом', description: '15 лет на рынке. Получите условия сотрудничества и обсудите с менеджером ассортимент для вашего магазина.' },
    stats: { years: 'лет', market: 'на рынке', partners: 'магазинов-партнёров', countries: 'стран сотрудничества', units: 'единиц товара' },
    about: { eyebrow: '—— О КОМПАНИИ', title: 'Партнёр для развития|вашего бизнеса', description: 'Магазину нужен не разовый поставщик, а партнёр, с которым можно планировать закупки и расширять ассортимент. Именно так HUSL работает уже 15 лет.', models: 'Актуальные модели', delivery: 'Стабильные поставки', partnership: 'Личный менеджер' },
    geography: { eyebrow: '—— ГЕОГРАФИЯ ПОСТАВОК', title: 'Из Алматы|в страны СНГ', description: 'Обсудите с менеджером логистику до вашего города и условия сотрудничества в вашей стране.', mapAlt: 'Карта географии поставок', countriesLabel: 'Страны сотрудничества', almaty: 'АЛМАТЫ', russia: 'РОССИЯ', uzbekistan: 'УЗБЕКИСТАН', kyrgyzstan: 'КЫРГЫЗСТАН', belarus: 'БЕЛАРУСЬ', tajikistan: 'ТАДЖИКИСТАН', countries: ['Армения', 'Азербайджан', 'Беларусь', 'Казахстан', 'Кыргызстан', 'Молдова', 'Россия', 'Таджикистан', 'Узбекистан'] },
    process: { eyebrow: '—— КАК НАЧАТЬ', title: 'Три шага|к первой поставке', steps: [['Оставьте заявку', 'Менеджер свяжется с вами и отправит прайс и условия.'], ['Согласуйте ассортимент', 'Поможем собрать заказ под формат вашего магазина.'], ['Получите поставку', 'Организуем доставку в ваш город.']] },
    cta: { eyebrow: '—— ДЛЯ ВАШЕГО БИЗНЕСА', title: 'Обсудим ассортимент|для вашего магазина', description: 'Оставьте заявку — менеджер отправит прайс и условия, ответит на вопросы и поможет понять, подходит ли сотрудничество вашему бизнесу.' },
    footer: { tagline: 'Мужская одежда оптом', countries: 'Страны СНГ', location: 'г. Алматы, Казахстан', rights: '© 2024 HUSL. Все права защищены.' },
    modal: { eyebrow: '—— ЗАЯВКА НА СОТРУДНИЧЕСТВО', title: 'Получите условия сотрудничества', description: 'Оставьте контакты — менеджер HUSL свяжется с вами, ответит на вопросы и отправит прайс и условия.', name: 'Ваше имя', phone: 'Телефон для связи', country: 'Страна', city: 'Город', selectCountry: 'Выберите страну', selectCity: 'Выберите город', otherCity: 'Другой город', customCity: 'Укажите город', comment: 'О вашем бизнесе', optional: 'необязательно', commentPlaceholder: 'Например: формат магазина, интересующие категории, примерный объём закупки', submit: 'Получить условия сотрудничества', successEyebrow: '—— ЗАЯВКА ПОЛУЧЕНА', thanks: 'Спасибо,', successText: 'Менеджер HUSL свяжется с вами по указанному номеру, ответит на вопросы и расскажет об условиях сотрудничества.', close: 'Закрыть' },
  },
  kk: {
    nav: { about: 'Компания туралы', countries: 'Елдер', conditions: 'Қалай бастау' },
    actions: { primary: 'Ынтымақтастық шарттарын алу', primaryShort: 'Шарттарды алу', discuss: 'Ынтымақтастықты талқылау', request: 'Көтерме ұсынысты сұрау' },
    hero: { eyebrow: '—— ДҮКЕНДЕР МЕН КӨТЕРМЕ САУДАГЕРЛЕРГЕ', title: 'Ерлер киімі|көтерме', description: '15 жыл нарықта. Ынтымақтастық шарттарын алыңыз және менеджермен дүкеніңізге арналған ассортиментті талқылаңыз.' },
    stats: { years: 'жыл', market: 'нарықта', partners: 'серіктес дүкен', countries: 'ынтымақтастық елі', units: 'тауар бірлігі' },
    about: { eyebrow: '—— КОМПАНИЯ ТУРАЛЫ', title: 'Бизнесіңізді дамытудағы|серіктес', description: 'Дүкенге бір реттік жеткізуші емес, сатып алуды жоспарлап, ассортиментті бірге кеңейтетін серіктес керек. HUSL 15 жыл бойы дәл осылай жұмыс істеп келеді.', models: 'Өзекті модельдер', delivery: 'Тұрақты жеткізілім', partnership: 'Жеке менеджер' },
    geography: { eyebrow: '—— ЖЕТКІЗІЛІМ ГЕОГРАФИЯСЫ', title: 'Алматыдан|ТМД елдеріне', description: 'Қалаңызға дейінгі логистиканы және еліңіздегі ынтымақтастық шарттарын менеджермен талқылаңыз.', mapAlt: 'Жеткізілім географиясының картасы', countriesLabel: 'Ынтымақтастық елдері', almaty: 'АЛМАТЫ', russia: 'РЕСЕЙ', uzbekistan: 'ӨЗБЕКСТАН', kyrgyzstan: 'ҚЫРҒЫЗСТАН', belarus: 'БЕЛАРУСЬ', tajikistan: 'ТӘЖІКСТАН', countries: ['Армения', 'Әзербайжан', 'Беларусь', 'Қазақстан', 'Қырғызстан', 'Молдова', 'Ресей', 'Тәжікстан', 'Өзбекстан'] },
    process: { eyebrow: '—— ҚАЛАЙ БАСТАУ', title: 'Алғашқы жеткізілімге|үш қадам', steps: [['Өтінім қалдырыңыз', 'Менеджер сізбен байланысып, баға тізімі мен шарттарды жібереді.'], ['Ассортиментті келісіңіз', 'Дүкеніңіздің форматына сай тапсырыс жинауға көмектесеміз.'], ['Жеткізілімді алыңыз', 'Қалаңызға жеткізуді ұйымдастырамыз.']] },
    cta: { eyebrow: '—— БИЗНЕСІҢІЗ ҮШІН', title: 'Ассортиментті|бірге талқылайық', description: 'Өтінім қалдырыңыз — менеджер баға тізімі мен шарттарды жібереді, сұрақтарға жауап береді және ынтымақтастық бизнесіңізге сай келетінін түсінуге көмектеседі.' },
    footer: { tagline: 'Ерлер киімі көтерме', countries: 'ТМД елдері', location: 'Алматы қ., Қазақстан', rights: '© 2024 HUSL. Барлық құқық қорғалған.' },
    modal: { eyebrow: '—— ЫНТЫМАҚТАСТЫҚҚА ӨТІНІМ', title: 'Ынтымақтастық шарттарын алыңыз', description: 'Байланыс деректерін қалдырыңыз — HUSL менеджері сізбен хабарласып, сұрақтарға жауап береді, баға тізімі мен шарттарды жібереді.', name: 'Атыңыз', phone: 'Байланыс телефоны', country: 'Ел', city: 'Қала', selectCountry: 'Елді таңдаңыз', selectCity: 'Қаланы таңдаңыз', otherCity: 'Басқа қала', customCity: 'Қаланы көрсетіңіз', comment: 'Бизнесіңіз туралы', optional: 'міндетті емес', commentPlaceholder: 'Мысалы: дүкен форматы, қызықтыратын санаттар, шамамен сатып алу көлемі', submit: 'Ынтымақтастық шарттарын алу', successEyebrow: '—— ӨТІНІМ ҚАБЫЛДАНДЫ', thanks: 'Рақмет,', successText: 'HUSL менеджері көрсетілген нөмірге хабарласып, сұрақтарға жауап береді және ынтымақтастық шарттарын айтады.', close: 'Жабу' },
  },
  en: {
    nav: { about: 'About', countries: 'Countries', conditions: 'How to start' },
    actions: { primary: 'Get partnership terms', primaryShort: 'Get terms', discuss: 'Discuss partnership', request: 'Request a wholesale offer' },
    hero: { eyebrow: '—— FOR STORES AND WHOLESALE BUYERS', title: "Men's clothing|wholesale", description: '15 years in the market. Get our partnership terms and discuss with a manager the right range for your store.' },
    stats: { years: 'years', market: 'in business', partners: 'partner stores', countries: 'partner countries', units: 'product units' },
    about: { eyebrow: '—— ABOUT COMPANY', title: 'A partner in growing|your business', description: 'A store needs more than a one-off supplier: it needs a partner to plan purchases and expand the range with. That is how HUSL has worked for 15 years.', models: 'Current collections', delivery: 'Reliable delivery', partnership: 'Personal manager' },
    geography: { eyebrow: '—— SUPPLY GEOGRAPHY', title: 'From Almaty|across the CIS', description: 'Discuss logistics to your city and partnership terms for your country with a manager.', mapAlt: 'Supply geography map', countriesLabel: 'Partner countries', almaty: 'ALMATY', russia: 'RUSSIA', uzbekistan: 'UZBEKISTAN', kyrgyzstan: 'KYRGYZSTAN', belarus: 'BELARUS', tajikistan: 'TAJIKISTAN', countries: ['Armenia', 'Azerbaijan', 'Belarus', 'Kazakhstan', 'Kyrgyzstan', 'Moldova', 'Russia', 'Tajikistan', 'Uzbekistan'] },
    process: { eyebrow: '—— HOW TO START', title: 'Three steps|to your first delivery', steps: [['Leave a request', 'A manager will contact you and send the price list and terms.'], ['Agree on the range', "We will help you build an order that fits your store's format."], ['Receive delivery', 'We will arrange delivery to your city.']] },
    cta: { eyebrow: '—— FOR YOUR BUSINESS', title: "Let's discuss the range|for your store", description: 'Leave a request and a manager will send the price list and terms, answer your questions and help you see whether the partnership suits your business.' },
    footer: { tagline: "Men's clothing wholesale", countries: 'CIS countries', location: 'Almaty, Kazakhstan', rights: '© 2024 HUSL. All rights reserved.' },
    modal: { eyebrow: '—— PARTNERSHIP REQUEST', title: 'Get partnership terms', description: 'Leave your details and a HUSL manager will contact you, answer your questions and send the price list and terms.', name: 'Your name', phone: 'Contact phone', country: 'Country', city: 'City', selectCountry: 'Choose a country', selectCity: 'Choose a city', otherCity: 'Other city', customCity: 'Enter your city', comment: 'About your business', optional: 'optional', commentPlaceholder: 'For example: store format, categories of interest, approximate order volume', submit: 'Get partnership terms', successEyebrow: '—— REQUEST RECEIVED', thanks: 'Thank you,', successText: 'A HUSL manager will contact you at the number provided, answer your questions and go over the partnership terms.', close: 'Close' },
  },
};

const savedLocale = typeof window !== 'undefined' ? window.localStorage.getItem('husl-locale') : null;
// Keep one reactive instance while Vite replaces individual components in development.
// Without this, a newly reloaded header can change a different locale ref than the sections.
const locale = globalThis.__huslLocaleRef || ref(['ru', 'kk', 'en'].includes(savedLocale) ? savedLocale : 'ru');
globalThis.__huslLocaleRef = locale;

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
