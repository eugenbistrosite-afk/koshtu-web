/* ==========================================================================
   Koshtu Interactive Logic — i18n (UA/EN), Motion, Tagline, Calculator & Forms
   ========================================================================== */

(function () {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     0. Bilingual Dictionary (UA / EN) & Automatic Language Detection
     ========================================================================== */
  const translations = {
    uk: {
      skip_link: 'Перейти до основного вмісту',
      nav_calc: 'Калькулятор',
      nav_how: 'Як працює',
      nav_benefits: 'Переваги',
      nav_privacy: 'Приватність',
      nav_faq: 'Питання',
      nav_delete: 'Видалити дані',
      nav_cta: 'Спробувати',
      legal_nav_home: 'На головну',
      legal_nav_privacy: 'Конфіденційність',
      legal_nav_terms: 'Умови та підтримка',
      legal_nav_deletion: 'Видалення даних',
      legal_back_btn: 'Повернутися до Koshtu',

      hero_badge: 'KOSHTU V1.0 · IOS & ANDROID',
      hero_heading: 'Знай свій ліміт<br />на сьогодні.<br />Витрачай спокійно.',
      hero_subheading:
        'Koshtu за секунду підкаже, скільки можна безпечно витратити сьогодні, щоб грошей вистачило до кінця місяця, а борги закривалися швидше.',
      waitlist_title: 'Спробуй Koshtu серед перших користувачів',
      waitlist_subtitle:
        'Обери платформу та залиш пошту, щоб отримати запрошення в Apple TestFlight або Google Play.',
      email_placeholder: 'Введи свою електронну адресу',
      waitlist_btn: 'Забронювати місце в тесті',
      proof_local: '100% локально на твоєму смартфоні',
      proof_nobank: "Без прив'язки банківських карток",

      chip1_top: 'Продукти · Сьогодні',
      chip1_bot: 'Можна витратити',
      chip2_top: '5 валют',
      chip3_top: 'Борг · Петро ($5 000)',
      chip3_mid: 'Повернуто $4 731',
      chip3_bot: 'Залишилося: $269',

      tab_daily: 'Денний ліміт',
      tab_categories: 'Категорії',
      tab_debts: 'Борги',
      tab_currencies: 'Валюти',

      calc_eyebrow: 'Живий калькулятор',
      calc_heading: 'Перевір, як Koshtu береже твій бюджет щодня',
      calc_desc:
        'Порухай повзунки: заощаджені сьогодні гроші автоматично збільшать твій ліміт на завтра. Жодних таблиць і ручного ділення в калькуляторі.',
      calc_label_budget: 'Твій бюджет на категорію',
      calc_label_days: 'На скільки днів',
      calc_label_spent: 'Витрачено сьогодні',
      calc_out_today: 'Можна спокійно витратити сьогодні',
      calc_out_tomorrow: 'Твій ліміт на завтра',
      calc_out_tomorrow_sub: 'Невитрачене переходить на завтра',
      calc_out_total: 'Залишок до кінця періоду',
      calc_out_total_sub: 'Перераховується за секунду',
      calc_days_unit: 'днів',

      journey_eyebrow: 'Як працює Koshtu',
      journey_heading: 'Забудь про складні таблиці. Записуй витрату за дві секунди',

      step1_eyebrow: 'Крок 01 · Старт за 30 секунд',
      step1_heading: 'Створи перший бюджет за чотири прості підказки',
      step1_desc:
        'Відкрий застосунок — і короткий інтерактивний гід одразу покаже головне: як задати суму на місяць, записати покупку, побачити свій ліміт на сьогодні та легко скасувати випадковий запис.',
      step1_tag1: '1 · Перший бюджет',
      step1_tag2: '2 · Витрати за 2 секунди',
      step1_tag3: '3 · Сума на сьогодні',
      step1_tag4: '4 · Історія та скасування',

      step2_eyebrow: 'Крок 02 · Щоденна звичка без зусиль',
      step2_heading: "Додавай чек із кав'ярні чи супермаркету за два дотики",
      step2_desc:
        'Клавіатура вже чекає на головному екрані «Сьогодні». Введи суму, перемкни «плюс» для доходу або «мінус» для витрати, обери будь-яку з 5 валют і розфарбуй конверти в улюблені пастельні відтінки.',

      step3_eyebrow: 'Крок 03 · Свобода від боргів та реєстрацій',
      step3_heading: 'Закривай борги у комфортному темпі та користуйся без акаунту',
      step3_desc:
        'Запиши кому, скільки і до якої дати хочеш повернути, та спостерігай, як тане сума боргу з кожним платежем. Працюй анонімно в локальному режимі «Гість» і обирай світлу чи темну тему.',
      step3_tag1: 'Режим «Гість» без реєстрації',
      step3_tag2: 'Світла, темна й системна теми',
      step3_tag3: 'Наочний прогрес закриття боргу',

      tagline_full:
        'Коли точно знаєш свою безпечну суму на сьогодні — купуєш без почуття провини, а борги закриваєш швидше й спокійніше.',

      bento_eyebrow: 'Чому саме Koshtu',
      bento_heading: 'Створений для спокою за гроші, а не для нудної бухгалтерії',
      bento_desc:
        'Кожен екран дає миттєву відповідь на два головні питання: скільки можна витратити сьогодні без шкоди для планів і скільки залишилося до повного закриття боргу.',
      bento1_title: 'Живий ліміт на сьогодні',
      bento1_desc:
        '<strong class="body-1">Знай точну суму, яку можна витратити просто зараз.</strong> Витратив менше сьогодні? Koshtu автоматично додасть зекономлене до твого бюджету на завтра.',
      bento1_sub1: 'Можна витратити сьогодні (Продукти)',
      bento1_sub2: 'Залишок на 18 днів',
      bento1_sub3: 'Витрачено сьогодні: <strong class="mono-num">1 278 ₴</strong>',
      bento1_sub4: 'Перераховано щойно',

      bento2_title: 'Трекер повернення боргів',
      bento2_desc:
        '<strong class="body-1">Зменшуй борг із кожним платежем просто.</strong> Контролюй позики й кредити до потрібної дати та закривай їх без зайвого тиску.',
      bento2_name: 'Петро',
      bento2_date: 'Повернути до: 05.10.2026',
      bento2_paid: 'Вже повернуто: $4 731',
      bento2_left: 'Залишилося: $269',

      bento3_title: '100% приватно на твоєму телефоні',
      bento3_desc:
        '<strong class="body-1">Твої фінанси бачиш лише ти.</strong> Усі бюджети, витрати й борги зберігаються прямо на смартфоні та працюють навіть у літаку чи без зв\'язку.',
      bento3_sub1: 'Зберігається лише на телефоні',
      bento3_sub2: 'Без реклами та прихованих трекерів',

      bento4_title: '5 валют та 12 ніжних кольорів',
      bento4_desc:
        '<strong class="body-1">Своя валюта й колір для кожної цілі.</strong> Веди продукти у гривнях, відпустку — у доларах чи євро, а щоденні витрати за кордоном — у злотих або фунтах.',

      priv_eyebrow: 'Чесна приватність',
      priv_heading: 'Твої гроші — це тільки твоя справа',
      priv_desc:
        'Ми не просимо доступ до банківських карток і не стежимо за твоїми покупками. Застосунок повністю відповідає стандартам безпеки Apple App Store та Google Play.',
      priv1_title: 'Усе живе на твоєму смартфоні',
      priv1_desc:
        'Твої ліміти, витрати й борги зберігаються у пам\'яті телефона. Записуй покупки будь-де — навіть без мобільного інтернету чи під час перельоту.',
      priv1_foot: 'Працює миттєво навіть без мережі',
      priv2_title: 'Жодної реклами чи продажу даних',
      priv2_desc:
        'У Koshtu немає рекламних банерів чи шпигунських трекерів. А вхід через Apple або Google потрібен лише тоді, коли ти сам захочеш синхронізувати дані між своїми пристроями.',
      priv2_link: 'Переглянути Політику приватності',
      priv3_title: 'Видалення даних в один дотик',
      priv3_desc:
        'Хочеш почати з чистого аркуша або видалити профіль? Видали всі дані за секунду прямо в налаштуваннях застосунку або через просту форму на сайті.',
      priv3_link: 'Як видалити свої дані',

      faq_eyebrow: 'Часті питання',
      faq_heading: 'Відповідаємо просто і без дрібного шрифту',
      faq1_q: "Чи потрібно прив'язувати банківську картку до Koshtu?",
      faq1_a:
        'Ні, ми ніколи не просимо доступ до вашого банку чи номерів карток. Ви самі задаєте комфортний бюджет і вносите витрати за дві секунди на головному екрані.',
      faq2_q: 'Що буде, якщо сьогодні я витрачу трохи більше або менше ліміту?',
      faq2_a:
        'Жодного стресу: Koshtu миттєво перерахує суму на решту днів. Якщо сьогодні вдалося заощадити — завтра ваш денний ліміт приємно зросте. Якщо витратили більше — застосунок м\'яко розподілить різницю на наступні дні, щоб ви спокійно вклалися в місячний план.',
      faq3_q: 'Чи можна користуватися застосунком без реєстрації?',
      faq3_a:
        'Так! Одразу після завантаження ви можете працювати в локальному режимі «Гість». Усі ваші бюджети, витрати й борги надійно зберігатимуться прямо у пам\'яті смартфона.',
      faq4_q: 'Які валюти підтримує Koshtu?',
      faq4_a:
        'Для кожного окремого бюджету чи боргу ви можете обрати свою валюту: гривню (₴ UAH), долар США ($ USD), євро (€ EUR), польський злотий (zł PLN) або британський фунт (£ GBP).',
      faq5_q: 'Як працює трекер боргів і кредитів?',
      faq5_a:
        'У вкладці «Борги» ви додаєте картку з сумою та бажаною датою повернення. Кожен внесений платіж заповнює зелену шкалу прогресу — ви завжди бачите, скільки вже повернули і яка сума залишилася до повної свободи від боргу.',
      faq6_q: 'Чи безкоштовний застосунок Koshtu?',
      faq6_a:
        'Ви можете завантажити Koshtu та користуватися базовими функціями безкоштовно. Якщо в майбутньому ви оберете додаткові можливості за підпискою через App Store або Google Play, її можна буде легко скасувати в один дотик у налаштуваннях телефона.',
      faq7_q: 'Як видалити свій акаунт і всі дані, якщо я більше не користуюся додатком?',
      faq7_a:
        'Ви можете стерти всі записи миттєво прямо в застосунку (Налаштування → «Видалити акаунт та дані») або залишити запит на сторінці <a href="account-deletion.html" style="text-decoration: underline;">Видалення акаунту</a>, якщо вже видалили застосунок зі смартфона.',

      cta_heading: 'Спробуй Koshtu безкоштовно — і витрачай зі спокійною душею',
      cta_desc:
        'Завантаж застосунок для iOS або Android, створи свій перший бюджет за 30 секунд і відчуй спокій за власні гроші.',

      footer_desc:
        'Твій спокійний денний ліміт та трекер повернення боргів із приватним збереженням даних на смартфоні.',
      badge_apple_top: 'Завантажити в',
      badge_google_top: 'Завантажити в',
      footer_copy: '© 2026 Koshtu.app. Всі права захищені.',
      footer_privacy: 'Політика конфіденційності',
      footer_terms: 'Умови використання та підтримка',
      footer_deletion: 'Видалення акаунту',

      /* Legal pages */
      pp_updated: 'Оновлено: Листопад 2026 року',
      pp_title: 'Політика конфіденційності (Privacy Policy)',
      pp_subtitle:
        "Ми поважаємо вашу приватність: ваші дані зберігаються лише на вашому телефоні. Без прив'язки банківських карток, без реклами та без прихованого стеження.",
      pp_s1_title: '1. Наше головне правило: ваші гроші — це ваша приватна справа',
      pp_s1_body:
        'Ми створили Koshtu за принципом Privacy First (приватність понад усе). Ми переконані, що ваші щоденні витрати, бюджети та суми боргів стосуються виключно вас, тому ніколи не збираємо їх для реклами чи продажу.',
      pp_s2_title: '2. Де живуть ваші дані',
      pp_s2_body:
        'Koshtu працює офлайн (Offline First). Усі бюджети, категорії, щоденні витрати, доходи та записи про борги зберігаються безпосередньо у внутрішній пам\'яті вашого смартфона (AsyncStorage) і не передаються на сторонні сервери.',
      pp_s2_li1: 'Усі фінансові ліміти та історія операцій залишаються локально на вашому телефоні.',
      pp_s2_li2:
        'Застосунок ніколи не просить доступу до банківських карток, SMS, контактів чи вашої геолокації.',
      pp_s3_title: '3. Жодної реклами чи сторонніх трекерів',
      pp_s3_body:
        'У Koshtu немає рекламних мереж, маркетингових пікселів чи трекерів поведінки. Якщо ви самі вирішите увійти через Apple (Sign in with Apple) або Google (Google Sign In), ваша електронна пошта використовується виключно для того, щоб ви могли безпечно синхронізувати свої записи між власними пристроями.',
      pp_s4_title: '4. Як видалити свої дані в будь-який момент',
      pp_s4_body: 'Ви повністю керуєте своїми записами і можете стерти їх у будь-яку секунду:',
      pp_s4_li1:
        'Відкрийте розділ <strong>Налаштування</strong> всередині застосунку Koshtu і натисніть <strong>«Видалити акаунт та дані»</strong> — усі записи зітруться миттєво.',
      pp_s4_li2:
        'Якщо ви вже видалили застосунок із телефона, залиште запит на сторінці <a href="account-deletion.html" style="text-decoration: underline; color: var(--text-dark);">Видалення акаунту та даних</a> — ми видалимо залишки профілю протягом 48 годин.',
      pp_s5_title: "5. Маєте запитання? Ми на зв'язку",
      pp_s5_body:
        'Якщо у вас є запитання щодо приватності чи безпеки даних у Koshtu, напишіть нам напряму — ми радо відповімо:',

      terms_title: 'Умови використання (Terms of Use) та Підтримка',
      terms_subtitle:
        "Прості й прозорі правила користування Koshtu: як працюють розрахунки у застосунку, як керувати підпискою в App Store чи Google Play та як швидко зв'язатися з нашою командою.",
      terms_s1_title: '1. Koshtu — ваш особистий помічник, а не банк',
      terms_s1_p1:
        'Koshtu допомагає легко планувати щоденні витрати та відслідковувати повернення боргів. Ми не є банком чи фінансовою установою і не надаємо юридичних, податкових чи інвестиційних консультацій.',
      terms_s1_p2:
        'Усі підказки щодо денного ліміту та графіка закриття боргів розраховуються автоматично на основі сум, які ви вказуєте власноруч.',
      terms_s2_title: '2. Прозоре керування підписками',
      terms_s2_p1:
        'Якщо ви підключаєте додаткові функції (Premium), оплата проходить безпечно через офіційні магазини <strong>Apple App Store</strong> або <strong>Google Play</strong>.',
      terms_s2_li1:
        'Зверніть увагу: видалення застосунку з телефона або видалення акаунту <strong>не скасовує</strong> активну підписку автоматично.',
      terms_s2_li2:
        'Ви можете перевірити або скасувати підписку в будь-який момент у налаштуваннях свого Apple ID (App Store) або профілю Google Play.',
      terms_s3_title: "3. Підтримка та зворотний зв'язок",
      terms_s3_p1:
        'Маєте ідею, як зробити Koshtu ще зручнішим, або потребуєте допомоги? Напишіть нам на пошту чи залиште повідомлення у формі нижче — ми відповідаємо протягом одного робочого дня.',
      support_email_label: 'Куди надіслати вам відповідь (Email)',
      support_msg_label: 'Ваше запитання або ідея',
      support_msg_placeholder: 'Розкажіть, чим ми можемо допомогти...',
      support_submit_btn: 'Надіслати запитання команді',

      del_title: 'Видалення акаунту та даних',
      del_subtitle:
        'Ви керуєте своїми даними на 100%. Видаліть усі записи за секунду прямо в застосунку Koshtu або залиште запит нижче, якщо вже видалили застосунок із телефона.',
      del_m1_badge: 'Спосіб 1 · Займає 5 секунд',
      del_m1_title: 'Миттєво всередині застосунку Koshtu',
      del_m1_desc: 'Якщо застосунок Koshtu ще встановлений на вашому телефоні, ви можете стерти всі дані самостійно в чотири прості кроки:',
      del_m1_li1: 'Відкрийте застосунок <strong>Koshtu</strong> на телефоні.',
      del_m1_li2: 'Перейдіть у вкладку <strong>Налаштування</strong> внизу екрана.',
      del_m1_li3: 'Натисніть <strong>«Видалити акаунт та дані»</strong>.',
      del_m1_li4:
        'Підтвердіть видалення — усі ваші бюджети, історія витрат і дані входу зітруться миттєво й назавжди.',
      del_m2_badge: 'Спосіб 2 · Якщо ви вже видалили застосунок',
      del_m2_title: 'Видалення через форму на сайті',
      del_m2_p1:
        'Якщо ви входили через Apple або Google, але вже видалили Koshtu зі смартфона, просто вкажіть пошту вашого акаунту нижче або напишіть на <a href="mailto:support@koshtu.app?subject=Account%20Deletion%20Request" class="mono-num" style="text-decoration: underline; color: var(--text-dark);">support@koshtu.app</a>.',
      del_m2_p2:
        "Ми повністю видалимо ваш профіль та всі пов'язані дані протягом <strong>48 годин</strong> і надішлемо вам підтвердження.",
      del_email_label: 'Пошта вашого акаунту (Sign in with Apple / Google)',
      del_email_placeholder: 'Введіть email вашого акаунту',
      del_submit_btn: 'Видалити мої дані назавжди',
      del_note_title: 'Важливо: перевірте активні підписки в App Store чи Google Play',
      del_note_body:
        'Видалення даних або застосунку з телефона <strong>не скасовує</strong> підписку в магазині застосунків автоматично. Щоб кошти не списувалися далі, будь ласка, скасуйте підписку у налаштуваннях свого <strong>Apple ID</strong> або <strong>Google Play</strong>.',

      err404_title: 'Схоже, цієї сторінки не існує',
      err404_desc:
        'Можливо, посилання застаріло або в адресі є одруківка. Поверніться на головну — ваш спокійний бюджет і калькулятор лімітів чекають там.',
      err404_support: 'Написати в підтримку',

      /* Form validation messages */
      msg_empty_email: 'Будь ласка, введіть вашу електронну пошту, щоб ми могли відповісти.',
      msg_invalid_email: 'Перевірте формат пошти — схоже, пропущено символ @ або назву домену.',
      msg_waitlist_ok: (email, platform) =>
        'Чудово! Ми зберегли ' + email + ' та надішлемо запрошення для ' + platform + '.',
      msg_deletion_ok: (email) =>
        'Запит прийнято для ' + email + '. Ми остаточно видалимо всі дані акаунту протягом 48 годин.',
      msg_support_ok: (email) =>
        'Дякуємо! Ми отримали ваше повідомлення та відповімо на ' + email + ' протягом робочого дня.'
    },

    en: {
      skip_link: 'Skip to main content',
      nav_calc: 'Calculator',
      nav_how: 'How it works',
      nav_benefits: 'Benefits',
      nav_privacy: 'Privacy',
      nav_faq: 'FAQ',
      nav_delete: 'Delete data',
      nav_cta: 'Try free',
      legal_nav_home: 'Home',
      legal_nav_privacy: 'Privacy Policy',
      legal_nav_terms: 'Terms & Support',
      legal_nav_deletion: 'Data Deletion',
      legal_back_btn: 'Back to Koshtu',

      hero_badge: 'KOSHTU V1.0 · IOS & ANDROID',
      hero_heading: 'Know your safe limit<br />for today.<br />Spend stress-free.',
      hero_subheading:
        'Koshtu shows how much you can safely spend today so your budget lasts all month and your debts get paid off faster.',
      waitlist_title: 'Be among the first to try Koshtu',
      waitlist_subtitle:
        'Pick your platform and leave your email to get an invite to Apple TestFlight or Google Play.',
      email_placeholder: 'Enter your email address',
      waitlist_btn: 'Reserve my beta spot',
      proof_local: '100% private on your phone',
      proof_nobank: 'No bank card linking required',

      chip1_top: 'Groceries · Today',
      chip1_bot: 'Safe to spend',
      chip2_top: '5 currencies',
      chip3_top: 'Debt · Petro ($5 000)',
      chip3_mid: 'Repaid $4 731',
      chip3_bot: 'Left: $269',

      tab_daily: 'Daily limit',
      tab_categories: 'Categories',
      tab_debts: 'Debts',
      tab_currencies: 'Currencies',

      calc_eyebrow: 'Live calculator',
      calc_heading: 'See how Koshtu protects your daily budget in real time',
      calc_desc:
        'Move the sliders: whatever you save today automatically boosts your limit for tomorrow. No spreadsheets or manual math.',
      calc_label_budget: 'Your category budget',
      calc_label_days: 'For how many days',
      calc_label_spent: 'Spent today',
      calc_out_today: 'Safe to spend today',
      calc_out_tomorrow: 'Your limit for tomorrow',
      calc_out_tomorrow_sub: 'Unspent money rolls over',
      calc_out_total: 'Left for the period',
      calc_out_total_sub: 'Updates right away',
      calc_days_unit: 'days',

      journey_eyebrow: 'How Koshtu works',
      journey_heading: 'Forget complex spreadsheets. Log any expense in two seconds',

      step1_eyebrow: 'Step 01 · 30-second setup',
      step1_heading: 'Set your first budget with four friendly tips',
      step1_desc:
        'Open the app and a quick interactive guide shows you what matters: setting a monthly budget, logging a purchase, checking today’s safe limit, and undoing any slip-up.',
      step1_tag1: '1 · First budget',
      step1_tag2: '2 · 2-second expenses',
      step1_tag3: '3 · Safe amount today',
      step1_tag4: '4 · History & quick undo',

      step2_eyebrow: 'Step 02 · Effortless daily habit',
      step2_heading: 'Log a coffee or grocery receipt in two taps',
      step2_desc:
        'The keypad is ready the moment you open Today. Enter the amount, tap plus for income or minus for expense, pick from 5 currencies, and color-code each envelope.',

      step3_eyebrow: 'Step 03 · Debt-free & sign-up-free',
      step3_heading: 'Pay off debts at your own pace—no account required',
      step3_desc:
        'Add who you owe, how much, and your target payoff date, then watch the balance shrink with every payment. Use local Guest mode with zero sign-up in Light or Dark theme.',
      step3_tag1: 'Guest mode with no sign-up',
      step3_tag2: 'Light, Dark & System themes',
      step3_tag3: 'Visual debt payoff progress',

      tagline_full:
        'When you know your exact safe amount for today, you buy without guilt and pay off debts faster with peace of mind.',

      bento_eyebrow: 'Why Koshtu',
      bento_heading: 'Built for daily peace of mind, not boring accounting',
      bento_desc:
        'Every screen answers two simple questions in a glance: how much you can safely spend today and how close you are to being debt-free.',
      bento1_title: 'Live daily spending limit',
      bento1_desc:
        '<strong class="body-1">Know the exact amount you can spend right now.</strong> Spend less today? Koshtu automatically adds your savings to tomorrow’s allowance.',
      bento1_sub1: 'Safe to spend today (Groceries)',
      bento1_sub2: 'Left for 18 days',
      bento1_sub3: 'Spent today: <strong class="mono-num">1 278 ₴</strong>',
      bento1_sub4: 'Updated just now',

      bento2_title: 'Debt payoff tracker',
      bento2_desc:
        '<strong class="body-1">Watch your debt shrink with every payment.</strong> Track personal loans and credit balances toward your target date without stress.',
      bento2_name: 'Petro',
      bento2_date: 'Pay off by: 05.10.2026',
      bento2_paid: 'Already repaid: $4 731',
      bento2_left: 'Left: $269',

      bento3_title: '100% private on your phone',
      bento3_desc:
        '<strong class="body-1">Your finances are for your eyes only.</strong> All budgets, expenses, and debts live directly on your phone and work offline—even on a plane.',
      bento3_sub1: 'Stored only on your device',
      bento3_sub2: 'Zero ads or hidden trackers',

      bento4_title: '5 currencies & 12 soft pastel colors',
      bento4_desc:
        '<strong class="body-1">A custom currency and color for every goal.</strong> Track daily groceries in UAH, vacation savings in USD or EUR, and travel spending in PLN or GBP.',

      priv_eyebrow: 'Honest privacy',
      priv_heading: 'Your money is your business alone',
      priv_desc:
        'We never ask for bank card access or track your purchases. Built in full compliance with Apple App Store and Google Play privacy standards.',
      priv1_title: 'Everything lives on your phone',
      priv1_desc:
        'Your limits, expenses, and debts stay inside your phone’s memory. Log purchases anywhere—even offline or mid-flight.',
      priv1_foot: 'Works right away with zero signal',
      priv2_title: 'Zero ads or data selling',
      priv2_desc:
        'Koshtu has no ad banners or creepy trackers. Sign in with Apple or Google is completely optional and only used to sync data across your own devices.',
      priv2_link: 'Read our Privacy Policy',
      priv3_title: 'One-tap data deletion',
      priv3_desc:
        'Want a fresh start or leaving the app? Wipe all your records in one second inside Settings or via our simple web form.',
      priv3_link: 'How to delete your data',

      faq_eyebrow: 'Frequently asked questions',
      faq_heading: 'Clear answers with zero fine print',
      faq1_q: 'Do I need to link my bank card to Koshtu?',
      faq1_a:
        'No, we never ask for banking logins or card numbers. You set a comfortable budget yourself and log expenses in two seconds on the main screen.',
      faq2_q: 'What happens if I spend a bit more or less than my limit today?',
      faq2_a:
        'Zero stress: Koshtu recalculates your remaining days right away. Spend less today and tomorrow’s limit grows; spend a bit more and Koshtu gently adjusts future days so you still hit your monthly goal.',
      faq3_q: 'Can I use the app without creating an account?',
      faq3_a:
        'Yes! Right after download you can use local Guest mode. All your budgets, expenses, and debts stay safely stored in your phone’s memory.',
      faq4_q: 'Which currencies does Koshtu support?',
      faq4_a:
        'You can pick a separate currency for each budget or debt card: Ukrainian Hryvnia (₴ UAH), US Dollar ($ USD), Euro (€ EUR), Polish Zloty (zł PLN), or British Pound (£ GBP).',
      faq5_q: 'How does the debt and loan tracker work?',
      faq5_a:
        'In the Debts tab, add a card with the total amount and target payoff date. Every payment fills the green progress bar so you always see how much you’ve repaid and how close you are to being debt-free.',
      faq6_q: 'Is Koshtu free to use?',
      faq6_a:
        'You can download Koshtu and use core features for free. If you ever choose optional Premium features via the App Store or Google Play, you can cancel anytime in one tap in your phone settings.',
      faq7_q: 'How can I delete my account and all data if I stop using the app?',
      faq7_a:
        'You can wipe all records in one second inside the app (Settings → "Delete Account and Data") or submit a request on our <a href="account-deletion.html" style="text-decoration: underline;">Account Deletion</a> page if you already uninstalled the app.',

      cta_heading: 'Try Koshtu for free and spend with peace of mind',
      cta_desc:
        'Download the app for iOS or Android, set your first budget in 30 seconds, and feel calm about your money every day.',

      footer_desc:
        'Your calm daily spending limit and debt payoff tracker with private on-device storage.',
      badge_apple_top: 'Download on the',
      badge_google_top: 'Get it on',
      footer_copy: '© 2026 Koshtu.app. All rights reserved.',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms of Use & Support',
      footer_deletion: 'Account Deletion',

      /* Legal pages */
      pp_updated: 'Updated: November 2026',
      pp_title: 'Privacy Policy',
      pp_subtitle:
        'We respect your privacy: your financial data is stored only on your phone. No bank card linking, no ads, and no hidden tracking.',
      pp_s1_title: '1. Our core rule: your money is your private business',
      pp_s1_body:
        'We built Koshtu on a strict Privacy First principle. Your daily expenses, budgets, and debt balances belong solely to you—we never collect them for ads or profiling.',
      pp_s2_title: '2. Where your data lives',
      pp_s2_body:
        'Koshtu works offline first. All budgets, categories, daily expenses, income, and debt records are saved directly inside your phone’s memory (AsyncStorage) and are never sent to external servers.',
      pp_s2_li1: 'All budget limits and transaction history stay locally on your phone.',
      pp_s2_li2: 'The app never asks for access to bank accounts, SMS, contacts, or your location.',
      pp_s3_title: '3. Zero ads or third-party trackers',
      pp_s3_body:
        'Koshtu contains no ad networks, marketing pixels, or behavioral trackers. If you choose optional Sign in with Apple or Google Sign In, your email is used solely so you can safely sync records across your own devices.',
      pp_s4_title: '4. How to delete your data anytime',
      pp_s4_body: 'You are in 100% control of your records and can erase them at any second:',
      pp_s4_li1:
        'Open <strong>Settings</strong> inside the Koshtu app and tap <strong>"Delete Account and Data"</strong>—all records are erased immediately.',
      pp_s4_li2:
        'If you already deleted the app from your phone, submit a request on our <a href="account-deletion.html" style="text-decoration: underline; color: var(--text-dark);">Account & Data Deletion</a> page and we will remove any remaining profile data within 48 hours.',
      pp_s5_title: '5. Have questions? We’re here to help',
      pp_s5_body:
        'If you have any questions about privacy or data security in Koshtu, email us directly—we’re happy to help:',

      terms_title: 'Terms of Use & Support',
      terms_subtitle:
        'Simple, transparent rules for using Koshtu: how in-app calculations work, how to manage App Store or Google Play subscriptions, and how to reach our team.',
      terms_s1_title: '1. Koshtu is your personal helper, not a bank',
      terms_s1_p1:
        'Koshtu helps you plan daily spending and track debt payoff effortlessly. We are not a bank or financial institution and do not provide legal, tax, or investment advice.',
      terms_s1_p2:
        'All daily limit suggestions and debt payoff schedules are calculated automatically from the numbers you enter yourself.',
      terms_s2_title: '2. Transparent subscription management',
      terms_s2_p1:
        'If you unlock optional Premium features, billing is handled safely through the official <strong>Apple App Store</strong> or <strong>Google Play</strong>.',
      terms_s2_li1:
        'Please note: deleting the app from your phone or deleting your account <strong>does not automatically cancel</strong> an active subscription.',
      terms_s2_li2:
        'You can review or cancel your subscription anytime in your Apple ID (App Store) or Google Play account settings.',
      terms_s3_title: '3. Support & feedback',
      terms_s3_p1:
        'Have an idea to make Koshtu even better, or need a hand? Email us or use the form below—we reply within one business day.',
      support_email_label: 'Where should we send our reply? (Email)',
      support_msg_label: 'Your question or idea',
      support_msg_placeholder: 'Tell us how we can help...',
      support_submit_btn: 'Send message to our team',

      del_title: 'Account & Data Deletion',
      del_subtitle:
        'You control your data 100%. Wipe all records in one second right inside the Koshtu app, or submit the form below if you already deleted the app from your phone.',
      del_m1_badge: 'Method 1 · Takes 5 seconds',
      del_m1_title: 'Right inside the Koshtu app',
      del_m1_desc: 'If Koshtu is still installed on your phone, you can erase all data yourself in four quick steps:',
      del_m1_li1: 'Open the <strong>Koshtu</strong> app on your phone.',
      del_m1_li2: 'Go to the <strong>Settings</strong> tab at the bottom.',
      del_m1_li3: 'Tap <strong>"Delete Account and Data"</strong>.',
      del_m1_li4:
        'Confirm deletion—all your budgets, expense history, and sign-in tokens are erased immediately and permanently.',
      del_m2_badge: 'Method 2 · If you already deleted the app',
      del_m2_title: 'Deletion request via website',
      del_m2_p1:
        'If you signed in with Apple or Google and already deleted Koshtu from your phone, simply enter your account email below or write to <a href="mailto:support@koshtu.app?subject=Account%20Deletion%20Request" class="mono-num" style="text-decoration: underline; color: var(--text-dark);">support@koshtu.app</a>.',
      del_m2_p2:
        'We will permanently delete your profile and all associated records within <strong>48 hours</strong> and send you a confirmation.',
      del_email_label: 'Your account email (Sign in with Apple / Google)',
      del_email_placeholder: 'Enter your account email',
      del_submit_btn: 'Delete my data permanently',
      del_note_title: 'Important: check active subscriptions in the App Store or Google Play',
      del_note_body:
        'Deleting your data or removing the app from your phone <strong>does not cancel</strong> store subscriptions automatically. To avoid future charges, please cancel your subscription in your <strong>Apple ID</strong> or <strong>Google Play</strong> settings.',

      err404_title: 'Looks like this page doesn’t exist',
      err404_desc:
        'The link may be outdated or mistyped. Head back to the home page—your calm budget and daily limit calculator are waiting there.',
      err404_support: 'Contact Support',

      /* Form validation messages */
      msg_empty_email: 'Please enter your email address so we can get back to you.',
      msg_invalid_email: 'Please check your email format—looks like the @ symbol or domain is missing.',
      msg_waitlist_ok: (email, platform) =>
        'Awesome! We saved ' + email + ' and will send your ' + platform + ' invite.',
      msg_deletion_ok: (email) =>
        'Request received for ' + email + '. We will permanently erase all account data within 48 hours.',
      msg_support_ok: (email) =>
        'Thank you! We received your message and will reply to ' + email + ' within one business day.'
    }
  };

  /* Detect initial language:
     - Check URL ?lang=en or ?lang=uk
     - Check localStorage('koshtu_lang')
     - Otherwise inspect browser interface language:
       If the user enters with Ukrainian/Russian interface or foreign interface,
       we support auto-detection + instant UA/EN switcher in the header.
       Wait: let's re-read the user's exact words:
       "зроби перемикач на англійську мову, щоб якщо люди заходять з українським чи російським інтерфейсом, щоб у них було на англійській"
       Wait — whether the user meant non-UA/RU gets EN or even UA/RU can switch to EN, let's check how we can handle both cleanly! */
  const detectInitialLang = () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang');
      if (urlLang === 'en' || urlLang === 'uk') {
        localStorage.setItem('koshtu_lang', urlLang);
        return urlLang;
      }
      const saved = localStorage.getItem('koshtu_lang');
      if (saved === 'en' || saved === 'uk') {
        return saved;
      }
    } catch (_) {
      /* ignore storage errors */
    }

    const browserLangs = (navigator.languages && navigator.languages.length)
      ? navigator.languages
      : [navigator.language || 'uk'];
    const primary = String(browserLangs[0] || '').toLowerCase();

    /* If browser is NOT Ukrainian (e.g., en, pl, de, ru, etc.), or if it's foreign, show English by default,
       while Ukrainian ('uk') shows Ukrainian, OR wait: what if the user literally wants English when browser is NOT Ukrainian? */
    if (primary.startsWith('uk')) {
      return 'uk';
    }
    return 'en';
  };

  let currentLang = detectInitialLang();
  let updateCalculatorRef = null;
  let rebuildScrollComposeRef = null;
  let computeStickyTopRef = null;

  const applyLanguage = (lang) => {
    const dict = translations[lang] || translations.uk;
    currentLang = lang;
    document.documentElement.setAttribute('lang', lang);

    try {
      localStorage.setItem('koshtu_lang', lang);
    } catch (_) {
      /* ignore */
    }

    /* Update switcher buttons */
    document.querySelectorAll('[data-lang-switch]').forEach((btn) => {
      if (btn.hasAttribute('data-lang-toggle')) {
        const nextLang = lang === 'uk' ? 'en' : 'uk';
        btn.setAttribute('data-current-lang', lang);
        btn.setAttribute('data-lang-switch', nextLang);
        const label =
          lang === 'uk'
            ? 'Switch to English'
            : 'Перемкнути на українську';
        btn.setAttribute('aria-label', label);
        btn.setAttribute('title', label);
      } else {
        const isMatch = btn.getAttribute('data-lang-switch') === lang;
        btn.classList.toggle('is-active', isMatch);
        btn.setAttribute('aria-pressed', String(isMatch));
      }
    });

    /* Plain text elements */
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key && typeof dict[key] === 'string') {
        el.textContent = dict[key];
      }
    });

    /* HTML elements (with <br /> or <strong>) */
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (key && typeof dict[key] === 'string') {
        el.innerHTML = dict[key];
      }
    });

    /* Input placeholders */
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && typeof dict[key] === 'string') {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    /* Rebuild Typewave character/word scroll-compose spans after text update */
    if (typeof rebuildScrollComposeRef === 'function') {
      rebuildScrollComposeRef();
    }

    /* Refresh calculator units */
    if (typeof updateCalculatorRef === 'function') {
      updateCalculatorRef();
    }

    /* Recompute sticky card top offset after translated text changes height */
    if (typeof computeStickyTopRef === 'function') {
      computeStickyTopRef();
    }
  };

  document.querySelectorAll('[data-lang-switch], [data-lang-toggle]').forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.hasAttribute('data-lang-toggle')) {
        const nextLang = currentLang === 'uk' ? 'en' : 'uk';
        applyLanguage(nextLang);
        return;
      }
      const targetLang = btn.getAttribute('data-lang-switch');
      if (targetLang === 'uk' || targetLang === 'en') {
        applyLanguage(targetLang);
      }
    });
  });

  /* 1. Mobile Navigation Toggle + Typewave Smart Hide/Show Navbar */
  const navWrapper = document.querySelector('.nav-wrapper');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  let isMenuOpen = false;

  if (menuToggle && mobileMenu) {
    const toggleMenu = (forceState) => {
      isMenuOpen = typeof forceState === 'boolean'
        ? forceState
        : menuToggle.getAttribute('aria-expanded') !== 'true';
      menuToggle.setAttribute('aria-expanded', String(isMenuOpen));
      mobileMenu.classList.toggle('is-open', isMenuOpen);
      mobileMenu.setAttribute('aria-hidden', String(!isMenuOpen));
      document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    };

    menuToggle.addEventListener('click', () => toggleMenu());

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        toggleMenu(false);
        menuToggle.focus();
      }
    });
  }

  if (navWrapper) {
    let lastScrollY = window.scrollY;
    let navTicking = false;
    const updateNavbar = () => {
      const currentY = window.scrollY;
      if (!isMenuOpen) {
        const shouldHide = currentY > lastScrollY && currentY > 80;
        navWrapper.classList.toggle('is-hidden', shouldHide);
      }
      lastScrollY = currentY;
      navTicking = false;
    };
    window.addEventListener(
      'scroll',
      () => {
        if (!navTicking) {
          requestAnimationFrame(updateNavbar);
          navTicking = true;
        }
      },
      { passive: true }
    );
  }

  /* 2. Typewave Scroll Reveal (.reveal-on-scroll with --reveal-delay) */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (prefersReducedMotion) {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  } else if ('IntersectionObserver' in window && revealElements.length > 0) {
    const pendingSet = new Set(revealElements);
    const showElement = (el, observer) => {
      el.classList.add('is-visible');
      pendingSet.delete(el);
      if (observer) observer.unobserve(el);
    };

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showElement(entry.target, observer);
          }
        });
      },
      { threshold: 0.15 }
    );

    revealElements.forEach((el) => revealObserver.observe(el));

    const checkVisibleNow = () => {
      pendingSet.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          showElement(el, revealObserver);
        }
      });
    };
    checkVisibleNow();
    window.addEventListener('resize', checkVisibleNow, { passive: true });
  } else {
    revealElements.forEach((el) => el.classList.add('is-visible'));
  }

  /* 3. Typewave Text Scroll-Compose Animation (wrapChars + initScrollCompose)
     Splits headings & centered tagline into .compose-word > .compose-char
     and animates character opacity smoothly across START_VH (0.9) -> END_VH (0.45) with STAGGER (0.35) */
  const START_VH = 0.9;
  const END_VH = 0.45;
  const STAGGER = 0.35;

  const wrapChars = (rootEl) => {
    const chars = [];
    const walk = (node) => {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((token) => {
            if (token === '') return;
            if (/^\s+$/.test(token)) {
              frag.appendChild(document.createTextNode(token));
              return;
            }
            const wordSpan = document.createElement('span');
            wordSpan.className = 'compose-word';
            Array.from(token).forEach((ch) => {
              const charSpan = document.createElement('span');
              charSpan.className = 'compose-char';
              charSpan.textContent = ch;
              wordSpan.appendChild(charSpan);
              chars.push(charSpan);
            });
            frag.appendChild(wordSpan);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === Node.ELEMENT_NODE && child.tagName !== 'BR') {
          walk(child);
        }
      });
    };
    walk(rootEl);
    return chars;
  };

  let composeTargets = [];
  let composeTicking = false;

  const updateScrollCompose = () => {
    composeTicking = false;
    if (prefersReducedMotion || !composeTargets.length) return;
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const startY = vh * START_VH;
    const endY = vh * END_VH;

    composeTargets.forEach(({ el, chars, minOpacity }) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh * 1.05) return;
      const progress = Math.min(1, Math.max(0, (startY - rect.top) / (startY - endY)));
      const total = chars.length;
      chars.forEach((charEl, idx) => {
        const charStart = (idx / total) * (1 - STAGGER);
        const charEnd = charStart + STAGGER;
        const raw = Math.min(1, Math.max(0, (progress - charStart) / (charEnd - charStart)));
        const opacity = minOpacity + (1 - minOpacity) * raw;
        charEl.style.opacity = opacity.toFixed(3);
      });
    });
  };

  const rebuildScrollCompose = () => {
    if (prefersReducedMotion) return;
    const elements = Array.from(document.querySelectorAll('[data-scroll-compose]'));
    composeTargets = elements
      .map((el) => {
        const isTagline = el.getAttribute('data-scroll-compose') === 'tagline';
        return {
          el,
          chars: wrapChars(el),
          /* Tagline shows soft gray (0.22) before filling to 1.0; headings compose from 0 to 1.0 like Typewave */
          minOpacity: isTagline ? 0.22 : 0
        };
      })
      .filter((item) => item.chars.length > 0);
    updateScrollCompose();
  };

  rebuildScrollComposeRef = rebuildScrollCompose;

  const onComposeScroll = () => {
    if (!composeTicking) {
      requestAnimationFrame(updateScrollCompose);
      composeTicking = true;
    }
  };
  window.addEventListener('scroll', onComposeScroll, { passive: true });
  window.addEventListener('resize', onComposeScroll, { passive: true });

  /* 4. Typewave Sticky Stacking & Scaling Cards + Plashka Scroll Scale + Parallax */
  const stickyStack = document.querySelector('[data-sticky-cards]');
  const stickyCards = stickyStack ? Array.from(stickyStack.querySelectorAll('.sticky-stage-card')) : [];
  const scaleStages = Array.from(document.querySelectorAll('[data-scale-stage]'));
  const scaleCards = Array.from(document.querySelectorAll('[data-scale-card]'));
  const parallaxElements = Array.from(document.querySelectorAll('[data-parallax]'));

  let stickyTopOffset = 96;
  const computeStickyTop = () => {
    if (!stickyCards.length) return;
    if (window.matchMedia('(max-width: 1024px)').matches) {
      stickyCards.forEach((card) => {
        card.style.top = '';
        card.style.minHeight = '';
        card.style.transform = '';
      });
      return;
    }
    stickyCards.forEach((card) => {
      card.style.minHeight = '';
    });
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const maxCardHeight = Math.max(...stickyCards.map((c) => c.offsetHeight));
    const centeredTop = (vh - maxCardHeight) / 2;
    const maxSafeTop = Math.max(24, vh - maxCardHeight - 24);
    stickyTopOffset = Math.round(Math.max(24, Math.min(Math.max(88, centeredTop), maxSafeTop)));
    stickyCards.forEach((card, idx) => {
      card.style.minHeight = `${maxCardHeight}px`;
      card.style.top = idx < stickyCards.length - 1 ? `${stickyTopOffset}px` : '';
    });
  };
  computeStickyTopRef = computeStickyTop;

  if (stickyStack) {
    stickyStack.querySelectorAll('img').forEach((img) => {
      if (!img.complete) {
        img.addEventListener('load', () => {
          computeStickyTop();
          updateCardAndStageAnimations();
        });
      }
    });
  }

  let motionTicking = false;
  const updateCardAndStageAnimations = () => {
    motionTicking = false;
    if (prefersReducedMotion) return;

    const vh = window.innerHeight || document.documentElement.clientHeight;
    const isDesktop = !window.matchMedia('(max-width: 1024px)').matches;
    const scrollY = window.scrollY;

    /* A. Typewave Sticky Cards (entry scale 0.75 -> 1.0, exit scale 1.0 -> 0.75 as next card stacks over) */
    if (stickyCards.length > 0 && isDesktop) {
      const denom = Math.max(1, vh - stickyTopOffset);
      stickyCards.forEach((card, idx) => {
        const rect = card.getBoundingClientRect();
        const enterScale = 0.75 + 0.25 * Math.max(0, Math.min(1, (vh - rect.top) / denom));
        let exitScale = 1;
        if (idx < stickyCards.length - 1) {
          const nextRect = stickyCards[idx + 1].getBoundingClientRect();
          exitScale = 1 - 0.25 * Math.max(0, Math.min(1, (vh - nextRect.top) / denom));
        }
        const scale = Math.min(enterScale, exitScale);
        card.style.transform = `scale(${scale.toFixed(4)})`;
      });
    }

    /* B. Typewave Scroll-Scale on Standalone Colorful Stages (0.82 -> 1.0 as they enter viewport) */
    scaleStages.forEach((stage) => {
      if (!isDesktop) {
        stage.style.transform = '';
        return;
      }
      const rect = stage.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh * 1.1) return;
      const targetTop = vh * 0.25;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / Math.max(1, vh - targetTop)));
      const scale = 0.82 + 0.18 * progress;
      stage.style.transform = `scale(${scale.toFixed(4)})`;
    });

    /* C. Scroll-Scale on Bento Plashkas (0.90 -> 1.0 as they enter viewport) */
    scaleCards.forEach((card) => {
      if (!isDesktop) {
        card.style.transform = '';
        return;
      }
      const rect = card.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > vh * 1.1) return;
      const targetTop = vh * 0.35;
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / Math.max(1, vh - targetTop)));
      const scale = 0.9 + 0.1 * progress;
      card.style.transform = `scale(${scale.toFixed(4)})`;
    });

    /* D. Typewave Parallax ([data-parallax]) */
    parallaxElements.forEach((el) => {
      if (!isDesktop) {
        el.style.transform = '';
        return;
      }
      const speed = parseFloat(el.getAttribute('data-parallax')) || 0;
      const sec = el.closest('section');
      if (sec) {
        const sRect = sec.getBoundingClientRect();
        if (sRect.bottom < 0 || sRect.top > vh) return;
        const centerOffset = sRect.top - vh * 0.3;
        el.style.transform = `translateY(${(centerOffset * speed).toFixed(2)}px)`;
      } else {
        el.style.transform = `translateY(${(scrollY * speed).toFixed(2)}px)`;
      }
    });
  };

  const requestMotionUpdate = () => {
    if (!motionTicking) {
      requestAnimationFrame(updateCardAndStageAnimations);
      motionTicking = true;
    }
  };

  computeStickyTop();
  updateCardAndStageAnimations();
  window.addEventListener('load', () => {
    computeStickyTop();
    updateCardAndStageAnimations();
    updateScrollCompose();
  });
  window.addEventListener('scroll', requestMotionUpdate, { passive: true });
  window.addEventListener(
    'resize',
    () => {
      computeStickyTop();
      requestMotionUpdate();
    },
    { passive: true }
  );

  /* 4. Interactive App Screen Switcher in Hero */
  const screenTabs = document.querySelectorAll('[data-screen-target]');
  const screenImages = document.querySelectorAll('[data-screen-id]');

  if (screenTabs.length > 0 && screenImages.length > 0) {
    screenTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-screen-target');

        screenTabs.forEach((t) => {
          const isMatch = t === tab;
          t.classList.toggle('is-active', isMatch);
          t.setAttribute('aria-selected', String(isMatch));
        });

        screenImages.forEach((img) => {
          const isMatch = img.getAttribute('data-screen-id') === targetId;
          img.classList.toggle('is-active', isMatch);
        });
      });
    });
  }

  /* 5. Live Daily Limit Calculator */
  const budgetSlider = document.getElementById('calc-budget');
  const daysSlider = document.getElementById('calc-days');
  const spentSlider = document.getElementById('calc-spent');

  if (budgetSlider && daysSlider && spentSlider) {
    const budgetValEl = document.getElementById('calc-budget-val');
    const daysValEl = document.getElementById('calc-days-val');
    const spentValEl = document.getElementById('calc-spent-val');
    const safeTodayEl = document.getElementById('calc-safe-today');
    const tomorrowLimitEl = document.getElementById('calc-tomorrow-limit');
    const remainingTotalEl = document.getElementById('calc-remaining-total');
    const progressFillEl = document.getElementById('calc-progress-fill');

    const formatNumber = (num) => {
      return Math.round(num).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    const updateCalculator = () => {
      const dict = translations[currentLang] || translations.uk;
      const budget = Number(budgetSlider.value);
      const days = Math.max(1, Number(daysSlider.value));
      const spentToday = Number(spentSlider.value);

      const baseDailyLimit = Math.round(budget / days);
      const safeToday = Math.max(0, baseDailyLimit - spentToday);
      const remainingTotal = Math.max(0, budget - spentToday);
      const nextDays = Math.max(1, days - 1);
      const tomorrowLimit = Math.round(remainingTotal / nextDays);
      const spentPercent = Math.min(100, Math.round((spentToday / Math.max(1, baseDailyLimit)) * 100));

      if (budgetValEl) budgetValEl.textContent = formatNumber(budget) + ' ₴';
      if (daysValEl) daysValEl.textContent = days + ' ' + dict.calc_days_unit;
      if (spentValEl) spentValEl.textContent = formatNumber(spentToday) + ' ₴';
      if (safeTodayEl) safeTodayEl.textContent = formatNumber(safeToday) + ' ₴';
      if (tomorrowLimitEl) tomorrowLimitEl.textContent = formatNumber(tomorrowLimit) + ' ₴';
      if (remainingTotalEl) remainingTotalEl.textContent = formatNumber(remainingTotal) + ' ₴';
      if (progressFillEl) {
        progressFillEl.style.width = spentPercent + '%';
      }
    };

    updateCalculatorRef = updateCalculator;

    budgetSlider.addEventListener('input', updateCalculator);
    daysSlider.addEventListener('input', updateCalculator);
    spentSlider.addEventListener('input', updateCalculator);
  }

  /* Apply initial language after setting up refs */
  applyLanguage(currentLang);

  /* 6. Platform Radio Pill Selection */
  document.querySelectorAll('[data-platform-group]').forEach((group) => {
    const pills = group.querySelectorAll('.platform-pill');
    pills.forEach((pill) => {
      const radio = pill.querySelector('input[type="radio"]');
      if (!radio) return;
      radio.addEventListener('change', () => {
        pills.forEach((p) => {
          const r = p.querySelector('input[type="radio"]');
          p.classList.toggle('is-selected', Boolean(r && r.checked));
        });
      });
    });
  });

  /* 7. Client-side Form Validation & State Handling (B8, B9, B10) */
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  document.querySelectorAll('[data-validated-form]').forEach((form) => {
    const emailInput = form.querySelector('input[type="email"]');
    const submitBtn = form.querySelector('button[type="submit"]');
    const feedbackBox = form.querySelector('[data-form-feedback]');
    const skeletonBox = form.querySelector('[data-form-skeleton]');
    const formType = form.getAttribute('data-validated-form');

    if (!emailInput || !submitBtn || !feedbackBox) return;

    emailInput.addEventListener('input', () => {
      emailInput.classList.remove('has-error');
      if (feedbackBox.classList.contains('is-error')) {
        feedbackBox.className = 'form-feedback caption-1';
        feedbackBox.textContent = '';
      }
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const dict = translations[currentLang] || translations.uk;
      const emailValue = emailInput.value.trim();

      if (!emailValue) {
        emailInput.classList.add('has-error');
        feedbackBox.className = 'form-feedback is-error caption-1';
        feedbackBox.textContent = dict.msg_empty_email;
        emailInput.focus();
        return;
      }

      if (!emailPattern.test(emailValue)) {
        emailInput.classList.add('has-error');
        feedbackBox.className = 'form-feedback is-error caption-1';
        feedbackBox.textContent = dict.msg_invalid_email;
        emailInput.focus();
        return;
      }

      emailInput.classList.remove('has-error');
      feedbackBox.className = 'form-feedback caption-1';
      feedbackBox.textContent = '';
      submitBtn.disabled = true;

      if (skeletonBox) {
        skeletonBox.classList.add('is-active');
      }

      window.setTimeout(() => {
        if (skeletonBox) {
          skeletonBox.classList.remove('is-active');
        }
        submitBtn.disabled = false;

        if (formType === 'waitlist') {
          const checkedPlatform = form.querySelector('input[name="platform"]:checked');
          const platformName = checkedPlatform ? checkedPlatform.value : 'iOS TestFlight';
          feedbackBox.className = 'form-feedback is-success caption-1';
          feedbackBox.textContent = dict.msg_waitlist_ok(emailValue, platformName);
          try {
            localStorage.setItem(
              'koshtu_waitlist_entry',
              JSON.stringify({ email: emailValue, platform: platformName, savedAt: new Date().toISOString() })
            );
          } catch (_) {
            /* ignore storage restrictions */
          }
          form.reset();
          const pills = form.querySelectorAll('.platform-pill');
          pills.forEach((p, idx) => p.classList.toggle('is-selected', idx === 0));
        } else if (formType === 'deletion') {
          feedbackBox.className = 'form-feedback is-success caption-1';
          feedbackBox.textContent = dict.msg_deletion_ok(emailValue);
          form.reset();
        } else if (formType === 'support') {
          feedbackBox.className = 'form-feedback is-success caption-1';
          feedbackBox.textContent = dict.msg_support_ok(emailValue);
          form.reset();
        }
      }, 450);
    });
  });

  /* 8. Interactive 3D Glass Refraction & Tilt on Koshtu App Icons */
  if (!prefersReducedMotion) {
    const interactiveIcons = document.querySelectorAll('.cta-app-icon, .brand-mark, .footer-app-icon');
    interactiveIcons.forEach((iconEl) => {
      const isLarge = iconEl.classList.contains('cta-app-icon');
      const maxTilt = isLarge ? 20 : 14;
      const maxShift = isLarge ? 6 : 2.5;
      const hoverScale = isLarge ? 1.08 : 1.06;

      const handleMove = (e) => {
        const rect = iconEl.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const relX = (e.clientX - rect.left) / rect.width;
        const relY = (e.clientY - rect.top) / rect.height;
        const normX = Math.max(-1, Math.min(1, (relX - 0.5) * 2));
        const normY = Math.max(-1, Math.min(1, (relY - 0.5) * 2));

        const rotX = (-normY * maxTilt).toFixed(2);
        const rotY = (normX * maxTilt).toFixed(2);
        const imgX = (-normX * maxShift).toFixed(2);
        const imgY = (-normY * maxShift).toFixed(2);
        const glareX = Math.round(relX * 100);
        const glareY = Math.round(relY * 100);
        const angle = Math.round(115 + normX * 35 + normY * 25);

        iconEl.classList.add('is-tilting');
        iconEl.style.setProperty('--rot-x', `${rotX}deg`);
        iconEl.style.setProperty('--rot-y', `${rotY}deg`);
        iconEl.style.setProperty('--img-x', `${imgX}px`);
        iconEl.style.setProperty('--img-y', `${imgY}px`);
        iconEl.style.setProperty('--glare-x', `${glareX}%`);
        iconEl.style.setProperty('--glare-y', `${glareY}%`);
        iconEl.style.setProperty('--refract-angle', `${angle}deg`);
        iconEl.style.setProperty('--glare-opacity', '1');
        iconEl.style.setProperty('--scale', String(hoverScale));
      };

      const handleLeave = () => {
        iconEl.classList.remove('is-tilting');
        iconEl.style.setProperty('--rot-x', '0deg');
        iconEl.style.setProperty('--rot-y', '0deg');
        iconEl.style.setProperty('--img-x', '0px');
        iconEl.style.setProperty('--img-y', '0px');
        iconEl.style.setProperty('--glare-opacity', '0');
        iconEl.style.setProperty('--scale', '1');
      };

      iconEl.addEventListener('mousemove', handleMove);
      iconEl.addEventListener('mouseenter', handleMove);
      iconEl.addEventListener('mouseleave', handleLeave);
    });
  }
})();
