import { computed, readonly, ref } from 'vue';

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
    footer: { tagline: 'Мужская одежда оптом', countries: 'Страны СНГ', location: 'г. Алматы, Казахстан', rights: '© 2026 HUSL. Все права защищены.' },
    modal: { eyebrow: '—— ЗАЯВКА НА СОТРУДНИЧЕСТВО', title: 'Получите условия сотрудничества', description: 'Оставьте контакты — менеджер HUSL свяжется с вами, ответит на вопросы и отправит прайс и условия.', name: 'Ваше имя', phone: 'Телефон для связи', country: 'Страна', city: 'Город', selectCountry: 'Выберите страну', selectCity: 'Выберите город', otherCity: 'Другой город', customCity: 'Укажите город', comment: 'О вашем бизнесе', optional: 'необязательно', commentPlaceholder: 'Например: формат магазина, интересующие категории, примерный объём закупки', submit: 'Получить условия сотрудничества', successEyebrow: '—— ЗАЯВКА ПОЛУЧЕНА', thanks: 'Спасибо, {name}!', successText: 'Менеджер HUSL свяжется с вами по указанному номеру, ответит на вопросы и расскажет об условиях сотрудничества.', close: 'Закрыть' },
    cities: { yerevan: 'Ереван', gyumri: 'Гюмри', vanadzor: 'Ванадзор', baku: 'Баку', ganja: 'Гянджа', sumgait: 'Сумгаит', minsk: 'Минск', gomel: 'Гомель', brest: 'Брест', almaty: 'Алматы', astana: 'Астана', shymkent: 'Шымкент', karaganda: 'Караганда', bishkek: 'Бишкек', osh: 'Ош', jalalabad: 'Джалал-Абад', chisinau: 'Кишинёв', balti: 'Бельцы', cahul: 'Кагул', moscow: 'Москва', spb: 'Санкт-Петербург', kazan: 'Казань', yekaterinburg: 'Екатеринбург', novosibirsk: 'Новосибирск', dushanbe: 'Душанбе', khujand: 'Худжанд', bokhtar: 'Бохтар', tashkent: 'Ташкент', samarkand: 'Самарканд', namangan: 'Наманган', andijan: 'Андижан' },
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
    footer: { tagline: 'Ерлер киімі көтерме', countries: 'ТМД елдері', location: 'Алматы қ., Қазақстан', rights: '© 2026 HUSL. Барлық құқық қорғалған.' },
    modal: { eyebrow: '—— ЫНТЫМАҚТАСТЫҚҚА ӨТІНІМ', title: 'Ынтымақтастық шарттарын алыңыз', description: 'Байланыс деректерін қалдырыңыз — HUSL менеджері сізбен хабарласып, сұрақтарға жауап береді, баға тізімі мен шарттарды жібереді.', name: 'Атыңыз', phone: 'Байланыс телефоны', country: 'Ел', city: 'Қала', selectCountry: 'Елді таңдаңыз', selectCity: 'Қаланы таңдаңыз', otherCity: 'Басқа қала', customCity: 'Қаланы көрсетіңіз', comment: 'Бизнесіңіз туралы', optional: 'міндетті емес', commentPlaceholder: 'Мысалы: дүкен форматы, қызықтыратын санаттар, шамамен сатып алу көлемі', submit: 'Ынтымақтастық шарттарын алу', successEyebrow: '—— ӨТІНІМ ҚАБЫЛДАНДЫ', thanks: 'Рақмет, {name}!', successText: 'HUSL менеджері көрсетілген нөмірге хабарласып, сұрақтарға жауап береді және ынтымақтастық шарттарын айтады.', close: 'Жабу' },
    cities: { yerevan: 'Ереван', gyumri: 'Гюмри', vanadzor: 'Ванадзор', baku: 'Баку', ganja: 'Гянджа', sumgait: 'Сумгайыт', minsk: 'Минск', gomel: 'Гомель', brest: 'Брест', almaty: 'Алматы', astana: 'Астана', shymkent: 'Шымкент', karaganda: 'Қарағанды', bishkek: 'Бишкек', osh: 'Ош', jalalabad: 'Жалалабад', chisinau: 'Кишинев', balti: 'Бельцы', cahul: 'Кагул', moscow: 'Мәскеу', spb: 'Санкт-Петербург', kazan: 'Қазан', yekaterinburg: 'Екатеринбург', novosibirsk: 'Новосибирск', dushanbe: 'Душанбе', khujand: 'Худжанд', bokhtar: 'Бохтар', tashkent: 'Ташкент', samarkand: 'Самарқанд', namangan: 'Наманған', andijan: 'Андижан' },
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
    footer: { tagline: "Men's clothing wholesale", countries: 'CIS countries', location: 'Almaty, Kazakhstan', rights: '© 2026 HUSL. All rights reserved.' },
    modal: { eyebrow: '—— PARTNERSHIP REQUEST', title: 'Get partnership terms', description: 'Leave your details and a HUSL manager will contact you, answer your questions and send the price list and terms.', name: 'Your name', phone: 'Contact phone', country: 'Country', city: 'City', selectCountry: 'Choose a country', selectCity: 'Choose a city', otherCity: 'Other city', customCity: 'Enter your city', comment: 'About your business', optional: 'optional', commentPlaceholder: 'For example: store format, categories of interest, approximate order volume', submit: 'Get partnership terms', successEyebrow: '—— REQUEST RECEIVED', thanks: 'Thank you, {name}!', successText: 'A HUSL manager will contact you at the number provided, answer your questions and go over the partnership terms.', close: 'Close' },
    cities: { yerevan: 'Yerevan', gyumri: 'Gyumri', vanadzor: 'Vanadzor', baku: 'Baku', ganja: 'Ganja', sumgait: 'Sumgait', minsk: 'Minsk', gomel: 'Gomel', brest: 'Brest', almaty: 'Almaty', astana: 'Astana', shymkent: 'Shymkent', karaganda: 'Karaganda', bishkek: 'Bishkek', osh: 'Osh', jalalabad: 'Jalal-Abad', chisinau: 'Chisinau', balti: 'Balti', cahul: 'Cahul', moscow: 'Moscow', spb: 'Saint Petersburg', kazan: 'Kazan', yekaterinburg: 'Yekaterinburg', novosibirsk: 'Novosibirsk', dushanbe: 'Dushanbe', khujand: 'Khujand', bokhtar: 'Bokhtar', tashkent: 'Tashkent', samarkand: 'Samarkand', namangan: 'Namangan', andijan: 'Andijan' },
  },
  zh: {
    nav: { about: '关于我们', countries: '合作国家', conditions: '合作流程' },
    actions: { primary: '获取合作条件', primaryShort: '了解条件', discuss: '洽谈合作', request: '申请批发报价' },
    hero: { eyebrow: '—— 面向门店与批发采购商', title: '男装|批发', description: '15年市场经验。获取合作条件，并与经理洽谈适合您门店的产品系列。' },
    stats: { years: '年', market: '行业经验', partners: '合作门店', countries: '合作国家', units: '件商品' },
    about: { eyebrow: '—— 关于公司', title: '与您一起|共同成长', description: '门店需要的不只是一次性供应商，而是能与您共同规划采购、扩展产品系列的合作伙伴。HUSL 15年来一直以这种方式与客户合作。', models: '当季款式', delivery: '稳定供货', partnership: '专属经理' },
    geography: { eyebrow: '—— 供货区域', title: '从阿拉木图|发往独联体', description: '与经理讨论配送至您所在城市的物流方案，以及您所在国家的合作条件。', mapAlt: '供货区域地图', countriesLabel: '合作国家', almaty: '阿拉木图', russia: '俄罗斯', uzbekistan: '乌兹别克斯坦', kyrgyzstan: '吉尔吉斯斯坦', belarus: '白俄罗斯', tajikistan: '塔吉克斯坦', countries: ['亚美尼亚', '阿塞拜疆', '白俄罗斯', '哈萨克斯坦', '吉尔吉斯斯坦', '摩尔多瓦', '俄罗斯', '塔吉克斯坦', '乌兹别克斯坦'] },
    process: { eyebrow: '—— 合作流程', title: '三步|完成首批供货', steps: [['提交申请', '经理将与您联系，并发送价目表和合作条件。'], ['确定产品系列', '根据您门店的定位，协助您组建订单。'], ['收到货物', '将货物配送至您所在的城市。']] },
    cta: { eyebrow: '—— 为您的生意', title: '一起洽谈|适合您门店的产品', description: '提交申请后，经理将发送价目表和合作条件，解答您的问题，并帮助您判断这项合作是否适合您的业务。' },
    footer: { tagline: '男装批发', countries: '独联体国家', location: '哈萨克斯坦 阿拉木图', rights: '© 2026 HUSL. 版权所有。' },
    modal: { eyebrow: '—— 合作申请', title: '获取合作条件', description: '请留下您的联系方式，HUSL 经理将与您联系，解答您的问题，并发送价目表和合作条件。', name: '您的姓名', phone: '联系电话', country: '国家', city: '城市', selectCountry: '请选择国家', selectCity: '请选择城市', otherCity: '其他城市', customCity: '请填写城市', comment: '关于您的业务', optional: '选填', commentPlaceholder: '例如：门店类型、感兴趣的品类、大致采购规模', submit: '获取合作条件', successEyebrow: '—— 申请已收到', thanks: '{name}，感谢您！', successText: 'HUSL 经理将通过您提供的号码与您联系，解答您的问题并介绍合作条件。', close: '关闭' },
    cities: { yerevan: '埃里温', gyumri: '久姆里', vanadzor: '瓦纳佐尔', baku: '巴库', ganja: '甘贾', sumgait: '苏梅盖特', minsk: '明斯克', gomel: '戈梅利', brest: '布列斯特', almaty: '阿拉木图', astana: '阿斯塔纳', shymkent: '奇姆肯特', karaganda: '卡拉干达', bishkek: '比什凯克', osh: '奥什', jalalabad: '贾拉拉巴德', chisinau: '基希讷乌', balti: '别尔齐', cahul: '卡胡尔', moscow: '莫斯科', spb: '圣彼得堡', kazan: '喀山', yekaterinburg: '叶卡捷琳堡', novosibirsk: '新西伯利亚', dushanbe: '杜尚别', khujand: '胡占德', bokhtar: '博赫塔尔', tashkent: '塔什干', samarkand: '撒马尔罕', namangan: '纳曼干', andijan: '安集延' },
  },
};

export const LOCALES = ['ru', 'kk', 'en', 'zh'];

// Value for <html lang> (BCP 47).
const htmlLang = { ru: 'ru', kk: 'kk', en: 'en', zh: 'zh-CN' };
// Locale used by Number.prototype.toLocaleString.
const intlLocale = { ru: 'ru-RU', kk: 'kk-KZ', en: 'en-US', zh: 'zh-CN' };

const savedLocale = typeof window !== 'undefined' ? window.localStorage.getItem('husl-locale') : null;
// Keep one reactive instance while Vite replaces individual components in development.
// Without this, a newly reloaded header can change a different locale ref than the sections.
const locale = globalThis.__huslLocaleRef || ref(LOCALES.includes(savedLocale) ? savedLocale : 'ru');
globalThis.__huslLocaleRef = locale;

const applyHtmlLang = (code) => {
  if (typeof document !== 'undefined') document.documentElement.lang = htmlLang[code];
};
applyHtmlLang(locale.value);

const getByPath = (object, path) => path.split('.').reduce((value, key) => value?.[key], object);

// t('modal.thanks', { name }) replaces {name} placeholders.
const t = (path, params) => {
  const text = getByPath(messages[locale.value], path) ?? getByPath(messages.ru, path) ?? path;
  if (typeof text !== 'string' || !params) return text;
  return text.replace(/\{(\w+)\}/g, (match, key) => (key in params ? params[key] : match));
};

const setLocale = (nextLocale) => {
  if (!LOCALES.includes(nextLocale)) return;
  locale.value = nextLocale;
  applyHtmlLang(nextLocale);
  try {
    window.localStorage.setItem('husl-locale', nextLocale);
  } catch {
    // Storage can be blocked (private mode); the language still switches for this session.
  }
};

const intlLocaleTag = computed(() => intlLocale[locale.value]);

export const useI18n = () => ({ locale: readonly(locale), setLocale, t, intlLocaleTag });
