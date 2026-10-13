
// ---- content.js
// Copy from Rostislav4r/welteco-website. UA is verbatim from the site; EN for Home is verbatim from home-copy.html, EN for other pages is translated (the source has no English versions).
(function () {
const A = "assets/";
const IMG = {
  logo: A + "65e9e392c9a05bfae0d93688_Group_75.svg",
  logoLight: A + "65e9f1863a7cfee7941c6e94_welteco-logo__2_.svg",
  heroPoster: A + "654e77817b1a00f16f8dbf4f_Hero-video-Welteco_CGM-poster-00001.jpg",
  heroVideo: A + "vibrocast-3000-stampo-canalina.mp4",
  partnersPoster: A + "65f8aa8d950fb6027b252092_WELTECO-paertners-video-poster-00001.jpg",
  partnersVideo: "https://raw.githubusercontent.com/Rostislav4r/welteco-website/main/site/assets/65f8aa8d950fb6027b252092_WELTECO-paertners-video-transcode.mp4",
  pause: A + "655928727dbc4d78056c7fc2_Group_65__1_.svg",
  play: A + "6559282d91ac8fe07322acb3_Group_64.svg",
  arrow: A + "65da542e31d71fae16e008c7_arrow_icon.svg",
  flagUS: A + "64ee2192fc93b86e8b501a25_united-states-flag-icon.svg",
  flagUA: A + "64ee2194712af901112992f4_ukraine-flag-icon.svg",
  whatsapp: A + "65e9f2479ebf7a9c6af4a117_whatsapp_icon.svg",
  telegram: A + "65e9f2471ab5b24547f21f1e_telegram-icon_1.svg",
  viber: A + "65e9f24742938d7a06e22cdb_viber-white-icon__2__1.svg",
  cacciamani: A + "65d0cb235ce7370b8672afba_cacciamani_logo__1_.svg",
  cgm: null, // repo SVG embeds its bitmap as base64, which was stripped on import — rendered as type until a raster logo is supplied
  cgm100: null,
  witech: A + "65d0ca4fbba003f13ebcddf6_witech_logo.svg",
  vibroMachine: A + "65c11242abf27e86e1a1caf4_Vibro-forming_machine._CGM-_Welteco_s_partner-p-1080.png",
  cacciamaniForm: A + "65219805ab98d7fee8637069_PHOTO-2023-06-16-02-46-40-p-1080.jpg",
  slipformer: A + "64eceffd9ff4906b968bc2d2_WITECH_Slipformer___21_.JPG",
  concreteMachine: A + "65dbab639c5fe0a79d320dc8_concrete_machine.JPG",
  parts: A + "65d00ad0824a8fe641943f13_page_4.webp",
  used: A + "65c8eab5dcaae63bd59c9469_______005.jpeg",
  cgmPartner: A + "65de1e4019522d0330877502_welteco-partners-cgm.jpeg",
  stampo: A + "65c1658856750edf12aedb22_B-STAMPO_DOPPIO__-_PER_TC2__1.png",
  dispatcher: A + "64eceffd9ff4906b968bc2ed_WiTech_DISPATCHER___5_.JPG",
  saw: A + "64eceffd068669b6d0943b18_WITECH_Cutting_Saw_2015__11_.JPG",
  examples1: A + "65edd55fac8183a7e4009f03_Welteco_products-min.webp",
  examples2: A + "661706337265e76150f694c1_dsc_0390.jpeg",
};
const FEATURE_ICONS = [A + "65e9f008a47aafd20ea9b77c_welteco-icon__2_.svg", A + "65e9f006e633f15843728b1f_welteco-customer_service_icon__2_.svg", A + "65e9f003d2a3fb69bfe58553_welteco-experiance_icon__2_.svg", A + "65e9f0013a82ee39b580aaba_welteco-eco-icon__1_.svg"];
const STRIP = ["65c2dc6485af75153fa01a86_6.png", "65c2dc64361ea89d0ffd020b_4.png", "65c2dc64878a2e434c045735_2.png", "65c2dec3e02ed332aa8a9ee0_11.png", "65c2dc6440ba30eb0f9cba79_1.png", "65c2dc649d4a1db26860c311_5.png", "65c2dc646e83ec0903f56b09_9.png", "65c2dec3e02ed332aa8a9ee3_13.png", "65c2dec238d709964c92bfc3_14.png", "65c2dc64e93a06a64665fc6f_3.png"].map((f) => A + f);
const GALLERY = ["65edd72f82232948f525520f_welteco-product-min.jpg", "65edd730188fb988d16b97f3_welteco-product4-min.jpg", "65edd72f3aca131160082f14_welteco-product2-min.jpg", "65edd730188fb988d16b97fd_welteco-product3-min.jpg", "65edd8299405abd52744f335_6543eeb3b704bf971745f8b6__CGM7170_Medium.webp", "65edd82995c07005f6f0f957_6543eeb3a366d083ce2a2de0__CGM7180_Medium.webp", "65edd829e020cd817c74d5bd_6543eeb5f77a617cfd44db35_DSC_1253_Medium.webp", "65edd829cafa8822ef055972_6543eeb43a6435c35ffce74f_______Medium.webp", "65edd8c9d9a1a95a5f611da2_64ecf042894150090658df32__CGM7135_Medium.webp", "65edd8c92ae242b09d625184_64ecf04269b8e9278f2a251b_IMG_6317_Medium.webp", "65edd8c90d55f0c26e65ce74_64ecf02848fd4d51a3cab2f4_Witech_Extruder_foto___7__Medium.webp", "65ede1d5d9252c7b9c35d02c_welteco-product-example__3__Large.webp", "65ede1d4d70625ca0abaa1c8___________Large.webp", "65ede1d43543df2a0c7e7430_welteco-product-example__4__Large.webp", "65ede1d4fdebfc980f7e2d42_welteco-product-example__7__Large.webp", "65ede1d48883cfba23bc1417_welteco-product-example_Large.webp", "65ede1d4328404b87b58219c_welteco-product-example__2__Large.webp", "65ede1d49405abd5274a0aa8_welteco-product-example__5__Large.webp", "65edd55fac8183a7e4009f03_Welteco_products-min.webp", "65edd55f305da811b376f3d1_Welteco_products_example2-min.jpeg", "65edd55fc7531e8168af770e_Welteco_products_example-min.jpeg"].map((f) => A + f);

const CONTACT = { phone: "+3 8067 487 1637", tel: "tel:+380674871637", email: "office@welteco.com", mailto: "mailto:office@welteco.com?subject=Welteco%20website%20", whatsapp: "https://wa.me/380674871637", telegram: "https://msng.link/o?Adik845=tg", viber: "https://msng.link/o?380674871637=vi" };

const ua = {
  nav: { about: "про нас", offers: "пропозиції", products: "продукція", partners: "Наші партнери", contact: "написати нам", productsExamples: "приклади продукції", machines: "вібраційні машини" },
  hero: {
    title: "Високотехнологічне обладнання для роботи з бетоном",
    cats: ["Віброформувальне обладнання для залізобетону", "ЗАВОДИ З ВИРОБНИЦТВА БЕТОННИХ ЕЛЕМЕНТІВ", "Оцінка та ремонт обладнання", "запчастини"],
    sub: "Для тих, хто шукає інноваційні рішення для підвищення якості та ефективності виробництва різних типів бетонних виробів.",
    cta: "наші пропозиції", credit: "Video credit: cgm-srl.com", pause: "Pause video", play: "Play video",
  },
  about: {
    eyebrow: "про нас", why: "чому ми?",
    title: "Вже більше 10-ти років Welteco спеціалізується на дистрибуції та обслуговуванні бетонного обладнання",
    p: ["Ми пропонуємо широкий асортимент продукції, включаючи бетонні заводи, системи постачання, лінії виробництва та форми опалубки.", "Також Welteco надає комплексні рішення, від монтажу та обслуговування, до проектування та технічної підтримки."],
    cta: "Дізнатись більше",
    features: ["Передові технології", "Комплексна допомога", "14 років на ринку", "Високі екологічні стандарти"],
  },
  partners: { eyebrow: "наші пaртнери", text: "ми Співпрацюємо з визначними лідерами у галузі", cta: "дізнатись більше" },
  offers: {
    eyebrow: "наші пропозиції", cta: "написати нам",
    featured: "вібраційні машини для формування бетонних виробів",
    items: ["обладнання для виробництва методом віброформування", "лінії для виробництва напружено-зброєних бетонних виробів", "Оцінка та ремонт обладнання", "запчастини", "вживане обладнання"],
  },
  strip: { title: "наші клієнти Отримують продукт високої якості, що поєднує в собі міцність та привабливість", cta: "приклади продукції" },
  contact: {
    eyebrow: "зв'язатись з нами", title1: "ЗАЛИШИЛИСЬ питання?", title2: "напиши нам, ми з радістю надамо відповіді",
    name: "ваше імʼя", phone: "номер телефону", email: "Eлектронна пошта", message: "повідомлення", submit: "відправити", wait: "Please wait...",
    success: ["Thank you!", "We received your form and will contact you shortly!"], error: "Oops! Something went wrong while submitting the form.",
    call: "телефонуй:",
  },
  footer: {
    links: [["про нас", "about"], ["пропозиції", "home#offers"], ["партнери", "partners"], ["приклади продукції", "products"]],
    offersTitle: "пропозиції",
    offers: ["Віброформувальне обладнання для залізобетону", "Oбладнання для виробництва методом віброформування", "Заводи з виробництва бетонних елементів", "Оцінка та ремонт обладнання", "запчастини", "вживане обладнання"],
    privacy: "політика конфіденційності",
  },
  aboutPage: {
    h1: "про компанію", eyebrow: "welteco - це",
    title: "Компанія, яка вже дванадцять років пропонує передові технічні рішення для роботи з бетоном на українському ринку.",
    p: "Як офіційний представник європейських виробників, ми надаємо комплексний спектр обладнання для облаштування заводів з виробництва бетону та виготовлення бетонних виробів.",
    list: ["Бетонні заводи та бетоносумішальні установки", "Системи адресного постачання бетону", "Сучасні лінії для виробництва пустотних плит перекриття та інших напружено-зброєних бетонних виробів за допомогою безформових методів формування", "Віброформовочне обладнання для виробництва бетонних виробів", "Оцінка та ремонт обладнання", "Запчастини", "Вживане обладнання"],
  },
  partnersPage: {
    h1: "наші партнери", examples: "приклади обладнання",
    sections: [
      { key: "cgm", logo: IMG.cgm100, title: "Welteco є офіційним представником компанії CGM в Україні", images: [IMG.vibroMachine, IMG.cgmPartner],
        intro: [], points: ["Сучасна і ефективніша альтернатива агрегато-потокової технології виробництва ЗБВ – самохідні віброформувальні машини.", "Машини CGM надзвичайно прості в експлуатації, практичні і тому забезпечують високі обсяги виробництва: швидкий монтаж та демонтаж форм дозволяє уникнути втрат часу, пов'язаних із переходом на інший вид виробів. Час формування складає від 1,5 до 6 хвилин, для роботи достатньо одного оператора та допоміжного робітника.", "Bисока міцність виробів (55мПа - 9000футів на кв дюйм) дозволяє відвантажувати продукцію замовнику в найкоротші терміни після виробництва.", "Машини оснащені формами, які за рахунок системи наповнення бетоном, вібрації та розопалубки забезпечують виробництво бетонних виробів."] },
      { key: "cacciamani", logo: IMG.cacciamani, title: "Компанії Cacciamani надає Широкий асортимент Продукції та обладнання", images: [IMG.cacciamaniForm, IMG.stampo],
        intro: ["Компанія \"Cacciamani\" протягом понад 40 років виготовляє обладнання для заводів виробників залізобетонних виробів. Широкий асортимент включає різноманітне обладнання та комплектуючі для виробництва бетонних виробів, такі як вібростоли, гідравлічні балки, гідравлічні опрокидувачі, гідравлічні засувки, шнеки, дозатори цементу, дозатори води, дозатори добавок та фарб, транспортери, силоси, ковші, бункери та підйомники, що дозволяє задовольняти будь-які потреби клієнтів."],
        points: ["Гідравлічні опрокидувачі, встановлені на вілочних навантажувачах, сприяють переміщенню та опрокиданню гідравлічних та негідравлічних прес-форм.", "Гідравлічний балансир призначений для опрокидання навіть великих форм, таких як люки, канали, труби тощо, з використанням вілочного навантажувача. Він дозволяє переміщувати форму з зони подачі та вібрації в зону вибірки з форми.За допомогою тих же рукояток вілочного навантажувача, він дозволяє повертати форму на 180° відносно центру, перевертаючи її на себе та дозволяючи вибрати з форми вже піддаваний вібрації продукт."] },
      { key: "witech", logo: IMG.witech, title: "Діяльність компанії Weiler Italia (WItech)", images: [IMG.dispatcher, IMG.saw],
        intro: ["Діяльність компанії Weiler Italia (торгова марка WiTech), що здійснюється в Італії та інших країнах з 1970 року, повністю спрямована на задоволення потреб будівельних компаній та підприємств, що виготовляють вироби з збірного залізобетону. Компанія постійно розробляє та впроваджує нові методи і ідеї для досягнення найкращих результатів. Одним із основних напрямків діяльності компанії є виробництво обладнання для виготовлення напругованих порожнистих плит перекриття, ребристі плити, двутаврові балки, сваї та інша продукція. Всі лінії автоматизовані і здатні виконувати повний цикл виробництва з мінімальною кількістю персоналу."],
        points: ["Завдяки порожнинам у виробі зменшується витрата бетонної суміші.", "Немає потреби збільшувати товщину виробу, оскільки висока міцність плит досягається за рахунок попередньої напруженої арматури.", "Попереднє напруження арматури у вигляді сталевих ниток або дроту дозволяє знизити витрати сталі.", "На прогоні довжиною 3,5 м економиться понад 50% сталі порівняно з звичайними повнотелесними плитами.", "Крім того, сьогодні виробництво напружених плит порожнистого настилу є автоматизованим і добре налагодженим процесом, для якого потреба в робочій силі на 40% менша, ніж для випуску звичайних повнотелесних плит."] },
    ],
  },
  productsPage: { h1: "приклади продукції" },
  machinesPage: { h1: "вібраційні машини для формування бетонних виробів", standard: "Стандартна ĸомплеĸтація вĸлючає:", specs: "характеристики машини", examples: "приклади продукції" },
  update: { h1: "Сайт на оновленні", p: ["Наразі ми оновлюємо інформацію на нашому сайті, щоб ви могли отримувати актуальну інформацію про наші послуги.", "Дякуємо за ваше розуміння. Незабаром сайт знову буде доступний у повному форматі."], helpTitle: "Потрібна допомога?", helpText: "Якщо у вас виникли запитання або вам потрібна додаткова інформація, зв’яжіться з нами безпосередньо." },
};

const en = {
  nav: { about: "About Us", offers: "Offers", products: "Products", partners: "Our Partners", contact: "Contact Us", productsExamples: "Product examples", machines: "Vibro-forming machines" },
  hero: {
    title: "high-tech equipment for concrete applications",
    cats: ["Vibro-forming equipment for reinforced concrete", "Concrete element production plants", "Equipment assessment and repair", "Spare parts"],
    sub: "For those looking for innovative solutions to enhance the quality and efficiency of manufacturing a wide range of concrete products.",
    cta: "Our Offers", credit: "Video credit: cgm-srl.com", pause: "Pause video", play: "Play video",
  },
  about: {
    eyebrow: "about us", why: "why choose us?",
    title: "For over 10 years, Welteco has specialized in the distribution and servicing of high-tech concrete equipment.",
    p: ["We offer a wide range of products, including concrete plants, supply systems, production lines, and formwork molds.", "Welteco also provides comprehensive solutions, from installation and maintenance to design and technical support."],
    cta: "Learn More",
    features: ["Advanced technologies", "Comprehensive assistance", "14 years in the market", "High environmental standards"],
  },
  partners: { eyebrow: "our partners", text: "We partner with top industry leaders to bring you the best solutions and expertise in the field.", cta: "Learn More" },
  offers: {
    eyebrow: "what we offer", cta: "Contact Us",
    featured: "Vibro-forming machines for shaping concrete products",
    items: ["Equipment for production using the vibroforming method", "lines for the production of precast concrete products", "Equipment assessment and repair", "spare parts", "used equipment"],
  },
  strip: { title: "Our clients receive a high-quality product that combines durability and visual appeal.", cta: "Product's examples" },
  contact: {
    eyebrow: "contact us", title1: "Still have questions?", title2: "Fill out this form, and we'll be happy to answer them all!",
    name: "Full name", phone: "Phone Number", email: "Email", message: "Message", submit: "Submit", wait: "Please wait...",
    success: ["Thank you!", "We received your form and will contact you shortly!"], error: "Oops! Something went wrong while submitting the form.",
    call: "or call:",
  },
  footer: {
    links: [["About us", "about"], ["Offers", "home#offers"], ["Partners", "partners"], ["Product examples", "products"]],
    offersTitle: "Offers",
    offers: ["Vibro-forming equipment for reinforced concrete", "Equipment for production using the vibroforming method", "Concrete element production plants", "Equipment assessment and repair", "Spare parts", "Used equipment"],
    privacy: "Privacy policy",
  },
  aboutPage: {
    h1: "about the company", eyebrow: "welteco is",
    title: "A company that has offered advanced technical solutions for working with concrete on the Ukrainian market for twelve years.",
    p: "As the official representative of European manufacturers, we supply a complete range of equipment for setting up concrete plants and manufacturing concrete products.",
    list: ["Concrete plants and concrete mixing units", "Targeted concrete delivery systems", "Modern lines for hollow-core floor slabs and other prestressed concrete products using formless (slipform) methods", "Vibro-forming equipment for concrete products", "Equipment assessment and repair", "Spare parts", "Used equipment"],
  },
  partnersPage: {
    h1: "our partners", examples: "equipment examples",
    sections: [
      { key: "cgm", logo: IMG.cgm100, title: "Welteco is the official representative of CGM in Ukraine", images: [IMG.vibroMachine, IMG.cgmPartner], intro: [],
        points: ["A modern, more efficient alternative to conveyor-line precast production: self-propelled vibro-forming machines.", "CGM machines are extremely easy to operate and practical, so they deliver high output: fast mould assembly and removal avoids downtime when switching to another product. Forming takes 1.5 to 6 minutes, and one operator plus one helper is enough to run the machine.", "High product strength (55 MPa / 9,000 psi) means products can be shipped to the customer very soon after production.", "The machines are fitted with moulds that produce concrete products through the concrete filling, vibration and demoulding system."] },
      { key: "cacciamani", logo: IMG.cacciamani, title: "Cacciamani offers a wide range of products and equipment", images: [IMG.cacciamaniForm, IMG.stampo],
        intro: ["For more than 40 years, Cacciamani has manufactured equipment for precast concrete plants. The wide range includes equipment and components for concrete production such as vibrating tables, hydraulic beams, hydraulic tilters, hydraulic gates, screw conveyors, cement, water, additive and colour dosers, conveyors, silos, buckets, hoppers and lifts, so it can meet any customer need."],
        points: ["Hydraulic tilters mounted on forklifts help move and tilt hydraulic and non-hydraulic moulds.", "The hydraulic balancer is designed to tilt even large moulds, such as manholes, channels and pipes, using a forklift. It moves the mould from the filling and vibration area to the demoulding area. Using the same forklift forks, it rotates the mould 180° around its centre, turning it over so the vibrated product can be demoulded."] },
      { key: "witech", logo: IMG.witech, title: "About Weiler Italia (WiTech)", images: [IMG.dispatcher, IMG.saw],
        intro: ["Weiler Italia (trademark WiTech) has operated in Italy and other countries since 1970, fully focused on the needs of construction companies and precast concrete manufacturers. The company continually develops and introduces new methods and ideas to achieve the best results. One of its main lines is equipment for prestressed hollow-core floor slabs, ribbed slabs, I-beams, piles and other products. All lines are automated and can run the full production cycle with minimal staff."],
        points: ["The voids in the product reduce concrete consumption.", "There is no need to increase product thickness, because the slabs get their high strength from prestressed reinforcement.", "Prestressing the reinforcement as steel strands or wire reduces steel consumption.", "On a 3.5 m span, more than 50% of steel is saved compared with ordinary solid slabs.", "In addition, producing prestressed hollow-core slabs today is an automated, well-established process that needs 40% less labour than ordinary solid slabs."] },
    ],
  },
  productsPage: { h1: "products examples" },
  machinesPage: { h1: "vibro-forming machines for concrete products", standard: "Standard equipment includes:", specs: "machine specifications", examples: "product examples" },
  update: { h1: "Site under update", p: ["We are currently updating the information on our website so you can get up-to-date information about our services.", "Thank you for your understanding. The site will soon be fully available again."], helpTitle: "Need help?", helpText: "If you have any questions or need more information, contact us directly." },
};

const SPEC_LABELS = {
  ua: ["Розміри машини:", "Маса машини:", "Об'єм засипного бунĸеру:", "Висота загрузĸи засипного бунĸеру:", "Ширина засипного бунĸеру:", "Встановлена потужність:", "Мінімальні розміри елементів, що виробляються:", "Маĸсимальні розміри елементів, що виробляються: (*)", "Час повною виробничого циĸлу: (“)", "Кільĸість операторів машини:", "Кількість вилочних навантажувачів, що обслуговують машину:", "Додаткові комплектуючі : (***)"],
  en: ["Machine dimensions:", "Machine weight:", "Hopper volume:", "Hopper loading height:", "Hopper width:", "Installed power:", "Minimum element size:", "Maximum element size: (*)", "Full production cycle time: (**)", "Machine operators:", "Forklifts serving the machine:", "Optional accessories: (***)"],
};
const EQ_FULL = {
  ua: ["Вібратори, що управляються інвертором", "Два вібратори", "Два скребка", "Збільшений шлях переміщення засипного ящика", "Металева рама, котра зменшує об'єм засипного бункеру", "Металева рама, котра зменшує робочий діапазон засипного ящика", "Компресор, балон таустановĸа для антиадгезійної речовини для форм"],
  en: ["Inverter-controlled vibrators", "Two vibrators", "Two scrapers", "Extended feed-box travel", "Metal frame that reduces hopper volume", "Metal frame that reduces the feed-box working range", "Compressor, tank and mould release agent unit"],
};
const tcDesc = (w) => ({
  ua: ["Самохідна машина, що підходить для виробництва бетонних лементів, котрі отримують методом віброформування, середньої величини (" + w.ua + "), утому числі армованих. Працює у циклі безперервної розформовки. Вона проста в експлуатації, та водночас вирізняється високою продуктивністю. Розформовка елементу є негайною, та здійснюється шляхом обертання форми.", "Закріплення форми відбувається легко та швидко, диверсифікувати виробництво протягом одного дня."],
  en: ["A self-propelled machine for vibro-formed concrete elements of medium size (" + w.en + "), including reinforced ones. It works in a continuous demoulding cycle. It is easy to operate and highly productive. Demoulding is immediate and done by rotating the mould.", "Moulds are fixed quickly and easily, so production can be changed within a single day."],
});
const MACHINES = [
  { id: "tb", name: "МОДЕЛЬ ТВ", nameEn: "MODEL TB", img: A + "65ee07c94891515fa1a2c206_cgm-machine-min-min.png",
    eq: { ua: ["Вібратори, що управляються інвертором (2 шт.)", "Два скребка", "Компресор, балон та установка для антиадгезійної речовини для форм"], en: ["Inverter-controlled vibrators (2 pcs.)", "Two scrapers", "Compressor, tank and mould release agent unit"] },
    cycle: { ua: "Час виробничого циклу 2-4 хвилини", en: "Production cycle time 2–4 minutes" },
    desc: { ua: ["Самохідна машина, що підходить для виробництва бетонних елементів, котрі отримують методом віброформування, у тому числі армованих. Працює у циклі безперервної розформовки. Вона проста в експлуатації, та водночас вирізняється високою прoдуктивністю.", "Розформовка елементу обертання форми є негайною,та здійснюється шляхом обертання форми.", "Закріплення форми відбувається легко та швидко, диверсифікувати виробництво протягом одного дня."], en: ["A self-propelled machine for vibro-formed concrete elements, including reinforced ones. It works in a continuous demoulding cycle. It is easy to operate and highly productive.", "Demoulding is immediate and done by rotating the mould.", "Moulds are fixed quickly and easily, so production can be changed within a single day."] },
    specs: { ua: ["260х380х295 см", "3.600 кг", "0,75 м3", "216 см", "140 см", "6,0 кВт", "25х25х25 см товщина 3 см", "120х100х100 см товщина 8 см (*)", "від 2 до 4 хвилин (**)", "1", "1", "прес, мішалка для бетону (***)"], en: ["260×380×295 cm", "3,600 kg", "0.75 m³", "216 cm", "140 cm", "6.0 kW", "25×25×25 cm, 3 cm thick", "120×100×100 cm, 8 cm thick (*)", "2 to 4 minutes (**)", "1", "1", "press, concrete mixer (***)"] } },
  { id: "tc1", name: "МОДЕЛЬ ТC1", nameEn: "MODEL TC1", img: A + "6616d0f209ab93e8404e4a51_tc1-cgm-machine.png", eq: EQ_FULL,
    cycle: { ua: "Час виробничого циклу 2-6 хвилини", en: "Production cycle time 2–6 minutes" }, desc: tcDesc({ ua: "шириною 2 метри", en: "2 metres wide" }),
    specs: { ua: ["390х403х323 см", "7.200 кг", "1 м3", "236 см", "185 см", "15,0 кВт", "30х30х30 см товщина 3 см", "200х140х110 смтовщина 15 см (*)", "від 2 до 6 хвилин (**)", "1", "1", "прес, мішалка для бетону (***)"], en: ["390×403×323 cm", "7,200 kg", "1 m³", "236 cm", "185 cm", "15.0 kW", "30×30×30 cm, 3 cm thick", "200×140×110 cm, 15 cm thick (*)", "2 to 6 minutes (**)", "1", "1", "press, concrete mixer (***)"] } },
  { id: "tc2", name: "МОДЕЛЬ ТC2", nameEn: "MODEL TC2", img: A + "6616d0f209ab93e8404e4a51_tc1-cgm-machine.png", eq: EQ_FULL,
    cycle: { ua: "Час виробничого циклу 2-6 хвилини", en: "Production cycle time 2–6 minutes" }, desc: tcDesc({ ua: "шириною 3 метри", en: "3 metres wide" }),
    specs: { ua: ["490x403x323 см", "8.850 кг", "1,5 м3", "236 см", "285 см", "15,0 кВт", "40х40х40 см товщина 3,5 см", "300х140х110 смтовщина 15 см (*)", "від 2 до 6 хвилин (**)", "1", "1", "прес, мішалка для бетону (***)"], en: ["490×403×323 cm", "8,850 kg", "1.5 m³", "236 cm", "285 cm", "15.0 kW", "40×40×40 cm, 3.5 cm thick", "300×140×110 cm, 15 cm thick (*)", "2 to 6 minutes (**)", "1", "1", "press, concrete mixer (***)"] } },
  { id: "tc2h", name: "МОДЕЛЬ ТC2 H1300", nameEn: "MODEL TC2 H1300", img: A + "6616d0f209ab93e8404e4a51_tc1-cgm-machine.png", eq: EQ_FULL,
    cycle: { ua: "Час виробничого циклу 2-6 хвилини", en: "Production cycle time 2–6 minutes" }, desc: tcDesc({ ua: "шириною 3 метри, висотою 1,3м", en: "3 metres wide, 1.3 m high" }),
    specs: { ua: ["500x410x366 см", "11.000 кг", "1,5 м3", "260 см", "285 см", "18,5 кВт", "50x50x50см товщина 3 см", "300x150x130 см товщина 15 см (*)", "від 2 до 6 хвилин (**)", "1", "1", "(***) прес, мішалка для бетону, пристрій для прийому виготовлених елементів."], en: ["500×410×366 cm", "11,000 kg", "1.5 m³", "260 cm", "285 cm", "18.5 kW", "50×50×50 cm, 3 cm thick", "300×150×130 cm, 15 cm thick (*)", "2 to 6 minutes (**)", "1", "1", "press, concrete mixer, finished element receiving device (***)"] } },
  { id: "tc3", name: "МОДЕЛЬ ТC3", nameEn: "MODEL TC3", img: A + "6616f9e23c80cae7484d6776_tc3_vibroforming_machine.png", eq: EQ_FULL,
    cycle: { ua: "Час виробничого циклу 2-8 хвилин", en: "Production cycle time 2–8 minutes" },
    desc: { ua: ["Модель ТСЗ є ідеальним рішенням для виробництва великих подовжених бетонних елементів (до 4 метрів ширини) або виробництва декількох елементів одночасно в одній і тій самій формі. Машина є самохідною, та складає на підлозі виготовлений елемент після обертання форми.", "Засипний ящик дає можливість швидко заповнити форму. Вібрація, котра застосовується для кращого загуснення бетону, здійснюється за допомогою вібраторів, що управляються інвертором. Форми постачаються окремо, їх легко можна змінювати, завдяки чому можна протягом дня змінювати асортимент продукції, що виробляється."], en: ["The TC3 is the ideal solution for large elongated concrete elements (up to 4 metres wide) or for producing several elements at once in the same mould. The machine is self-propelled and sets the finished element on the floor after rotating the mould.", "The feed box fills the mould quickly. Vibration for better concrete compaction comes from inverter-controlled vibrators. Moulds are supplied separately and are easy to change, so the product range can be changed during the day."] },
    specs: { ua: ["590x403x331 см", "11.000 кг", "2 м3", "236 см", "384 см", "18,5 кВт", "50x50x50см товщина 4,5 см", "400x140x110 смтовщина 10 см (*)", "від 2 до 8 хвилин (**)", "1", "1", "прес, мішалка для бетону (***)"], en: ["590×403×331 cm", "11,000 kg", "2 m³", "236 cm", "384 cm", "18.5 kW", "50×50×50 cm, 4.5 cm thick", "400×140×110 cm, 10 cm thick (*)", "2 to 8 minutes (**)", "1", "1", "press, concrete mixer (***)"] } },
];

window.WCONTENT = { IMG, FEATURE_ICONS, STRIP, GALLERY, CONTACT, ua, en, SPEC_LABELS, MACHINES,
  OFFER_IMAGES: [IMG.cacciamaniForm, IMG.slipformer, IMG.concreteMachine, IMG.parts, IMG.used],
  PARTNER_LOGOS: [IMG.cacciamani, IMG.cgm, IMG.witech] };
})();

// ---- Shell.jsx
const C = window.WCONTENT;
const wc = { blue: "#20387F", yellow: "#FAF870", orange: "#FFBA4C", black: "#1D1C1C", dark: "#313138", medium: "#3A3A3A", grey: "#DBDBDB", greyLight: "#E4E2E2", line: "#AFACAC", white: "#F5F5F5", pure: "#FFFFFF", navy: "#004394" };
const LangCtx = React.createContext({ lang: "ua", t: C.ua, go: () => {} });
const useL = () => React.useContext(LangCtx);

function useWide(bp = 900) {
  const [w, setW] = React.useState(window.innerWidth);
  React.useEffect(() => { const f = () => setW(window.innerWidth); window.addEventListener("resize", f); return () => window.removeEventListener("resize", f); }, []);
  return w >= bp;
}

function Container({ children, style }) {
  return <div style={{ maxWidth: 1428, margin: "0 auto", padding: "0 20px", ...style }}>{children}</div>;
}

function Eyebrow({ children, tone = "light", style }) {
  const tones = { light: [wc.grey, wc.black], dark: ["rgba(255,255,255,0.1)", wc.white], yellow: [wc.yellow, wc.black] };
  const [bg, fg] = tones[tone];
  return <div style={{ display: "inline-flex", alignSelf: "flex-start", padding: "8px 12px", borderRadius: 4, background: bg, color: fg, fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", ...style }}>{children}</div>;
}

function WButton({ children, variant = "yellow", onClick, href, block, type, style }) {
  const [h, setH] = React.useState(false);
  const v = {
    yellow: { background: wc.yellow, color: wc.black },
    dark: { background: wc.black, color: wc.white },
    blue: { background: wc.blue, color: wc.white },
    glass: { background: "rgba(255,255,255,0.1)", color: wc.white, backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", border: "1px solid rgba(255,255,255,0.4)" },
    outline: { background: "transparent", color: wc.black, border: `1px solid ${wc.line}` },
  }[variant];
  const Tag = href ? "a" : "button";
  return (
    <Tag href={href} type={type} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ all: "unset", boxSizing: "border-box", cursor: "pointer", display: block ? "flex" : "inline-flex", width: block ? "100%" : undefined, justifyContent: "center", alignItems: "center", gap: 8, padding: "12px 16px", borderRadius: 4, fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: "24px", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.2px", textAlign: "center", opacity: h ? 0.8 : 1, transition: "opacity 200ms ease", ...v, ...style }}>
      {children}
    </Tag>
  );
}

function SectionTitle({ eyebrow, title, tone = "light", color, right, size = 40 }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 1000 }}>
        {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
        {title && <h2 style={{ margin: 0, fontSize: size, lineHeight: 1.15, fontWeight: 500, color: color || wc.black, textWrap: "balance", textTransform: "uppercase" }}>{title}</h2>}
      </div>
      {right}
    </div>
  );
}

function PageHero({ title, image, video, minHeight = 560, children }) {
  return (
    <section style={{ position: "relative", minHeight, marginTop: -76, display: "flex", alignItems: "flex-end", overflow: "hidden", background: wc.black }}>
      <div style={{ position: "absolute", inset: 0, background: `url("${image}") 50% 50% / cover no-repeat` }}></div>
      {video ? <video autoPlay muted loop playsInline poster={image} src={video} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}></video>
        : <div style={{ position: "absolute", inset: 0, background: `url("${image}") 50% 50% / cover no-repeat` }}></div>}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(rgba(245,245,245,0.45),rgba(245,245,245,0.45)), linear-gradient(180deg, rgba(245,245,245,0) 40%, rgb(245,245,245) 100%)" }}></div>
      <Container style={{ position: "relative", width: "100%", boxSizing: "border-box", padding: "140px 20px 48px" }}>
        <h1 style={{ margin: 0, fontSize: "clamp(40px, 6vw, 90px)", lineHeight: 1, fontWeight: 500, color: wc.black, textTransform: "uppercase", textWrap: "balance", maxWidth: 1200 }}>{title}</h1>
        {children}
      </Container>
    </section>
  );
}

function NavItem({ children, onClick, active }) {
  const [h, setH] = React.useState(false);
  return <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ all: "unset", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, padding: "8px 12px", fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", color: wc.black, opacity: h ? 0.5 : 1, transition: "opacity 200ms ease" }}>{active && <span style={{ width: 4, height: 4, borderRadius: 2, background: wc.blue }}></span>}{children}</button>;
}

function LangToggle() {
  const { lang, setLang } = useL();
  return (
    <div style={{ display: "flex", padding: 3, borderRadius: 6, background: "rgba(29,28,28,0.06)", border: "1px solid rgba(29,28,28,0.12)" }}>
      {[["ua", C.IMG.flagUA, "ukr"], ["en", C.IMG.flagUS, "eng"]].map(([k, f, l]) => (
        <button key={k} onClick={() => setLang(k)} style={{ all: "unset", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, padding: "5px 8px", borderRadius: 4, background: lang === k ? wc.black : "transparent", color: lang === k ? wc.white : wc.black, fontSize: 12, lineHeight: "16.8px", textTransform: "uppercase", transition: "background-color 200ms ease" }}>
          <img src={f} alt="" style={{ width: 16, height: 12, objectFit: "cover", borderRadius: 2 }} />{l}
        </button>
      ))}
    </div>
  );
}

function LogoTile({ src, alt, height = 120, style }) {
  if (src) return <img src={src} alt={alt} style={{ maxWidth: "60%", maxHeight: height, ...style }} />;
  return <span style={{ fontSize: height * 0.5, lineHeight: 1, fontWeight: 700, letterSpacing: "-0.02em", color: wc.navy }}>CGM</span>;
}

function SiteNav({ page }) {
  const { t, go } = useL();
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => { const f = () => setScrolled(window.scrollY > 400); f(); window.addEventListener("scroll", f, { passive: true }); return () => window.removeEventListener("scroll", f); }, []);
  const wide = useWide(1000);
  const [open, setOpen] = React.useState(false);
  const [prod, setProd] = React.useState(false);
  const nav = (p) => { setOpen(false); setProd(false); go(p); };
  const items = [["about", t.nav.about], ["home#offers", t.nav.offers], ["products-menu", t.nav.products], ["partners", t.nav.partners]];
  const prodItems = [["products", t.nav.productsExamples], ["machines", t.nav.machines]];
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 40, height: 76, background: scrolled ? "rgba(245,245,245,0.92)" : "rgba(245,245,245,0.6)", borderBottom: "1px solid rgba(29,28,28,0.08)", transition: "background-color 200ms ease", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}>
      <Container style={{ height: 76, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href="#/home" onClick={(e) => { e.preventDefault(); nav("home"); }} style={{ display: "flex" }}><img src={C.IMG.logo} alt="Welteco company  logo" style={{ height: 44, width: "auto" }} /></a>
        {wide ? (
          <React.Fragment>
            <nav style={{ display: "flex", alignItems: "center" }}>
              {items.map(([k, l]) => k === "products-menu" ? (
                <div key={k} style={{ position: "relative" }} onMouseEnter={() => setProd(true)} onMouseLeave={() => setProd(false)}>
                  <NavItem active={page === "products" || page === "machines"}>{l}<span style={{ fontSize: 10, opacity: 0.7 }}>▾</span></NavItem>
                  {prod && (
                    <div style={{ position: "absolute", top: "100%", left: 0, paddingTop: 8 }}>
                      <div style={{ minWidth: 260, padding: 6, borderRadius: 6, background: "rgba(245,245,245,0.96)", boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.1), 0px 1px 3px 0px rgba(0,0,0,0.1)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", flexDirection: "column", gap: 2 }}>
                        {prodItems.map(([pk, pl]) => <NavItem key={pk} onClick={() => nav(pk)} active={page === pk}>{pl}</NavItem>)}
                      </div>
                    </div>
                  )}
                </div>
              ) : <NavItem key={k} onClick={() => nav(k)} active={page === k}>{l}</NavItem>)}
            </nav>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <LangToggle />
              <WButton onClick={() => nav("contacts")}>{t.nav.contact}</WButton>
            </div>
          </React.Fragment>
        ) : (
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <LangToggle />
            <button onClick={() => setOpen(!open)} aria-label="Menu" style={{ all: "unset", cursor: "pointer", width: 46, height: 46, borderRadius: 6, background: wc.pure, border: "1px solid rgba(29,28,28,0.12)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5 }}>
              {[0, 1, 2].map((i) => <span key={i} style={{ width: 18, height: 2, background: wc.black }}></span>)}
            </button>
          </div>
        )}
      </Container>
      {!wide && open && (
        <div style={{ position: "absolute", top: 76, left: 0, right: 0, background: "rgba(245,245,245,0.98)", padding: "12px 20px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
          {[...items.filter(([k]) => k !== "products-menu"), ...prodItems].map(([k, l]) => <NavItem key={k} onClick={() => nav(k)} active={page === k}>{l}</NavItem>)}
          <div style={{ marginTop: 12 }}><WButton block onClick={() => nav("contacts")}>{t.nav.contact}</WButton></div>
        </div>
      )}
    </header>
  );
}

function Messengers({ size = 40, tone = "dark" }) {
  const list = [[C.CONTACT.whatsapp, C.IMG.whatsapp, "icon whatsapp"], [C.CONTACT.telegram, C.IMG.telegram, "icon telegram"], [C.CONTACT.viber, C.IMG.viber, "icon viber"]];
  return (
    <div style={{ display: "flex", gap: 6 }}>
      {list.map(([href, src, alt]) => (
        <a key={alt} href={href} target="_blank" rel="noreferrer" style={{ width: size + 6, height: size + 6, borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", background: tone === "dark" ? "rgba(255,255,255,0.1)" : wc.black, border: "1px solid rgba(255,255,255,0.2)" }}>
          <img src={src} alt={alt} style={{ width: size * 0.6, height: size * 0.6 }} />
        </a>
      ))}
    </div>
  );
}

function Field({ label, type = "text", textarea, value, onChange }) {
  const [f, setF] = React.useState(false);
  const base = { all: "unset", boxSizing: "border-box", width: "100%", padding: "10px 0", borderBottom: `1px solid ${f ? wc.yellow : "rgba(255,255,255,0.4)"}`, color: wc.white, fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: "24px", transition: "border-color 200ms ease" };
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 4, gridColumn: textarea ? "1 / -1" : undefined }}>
      <span style={{ fontSize: 12, lineHeight: "16.8px", letterSpacing: "0.2px", textTransform: "uppercase", color: "rgba(245,245,245,0.7)" }}>{label}</span>
      {textarea ? <textarea required maxLength={5000} value={value} onChange={onChange} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{ ...base, minHeight: 96, resize: "vertical" }}></textarea>
        : <input required maxLength={256} type={type} value={value} onChange={onChange} onFocus={() => setF(true)} onBlur={() => setF(false)} style={base} />}
    </label>
  );
}

function ContactForm() {
  const { t } = useL();
  const c = t.contact;
  const [v, setV] = React.useState({ name: "", phone: "", email: "", msg: "" });
  const [state, setState] = React.useState("idle");
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });
  const submit = (e) => { e.preventDefault(); setState("wait"); setTimeout(() => setState("done"), 700); };
  if (state === "done") return (
    <div style={{ padding: 32, borderRadius: 6, background: "rgba(255,255,255,0.1)", color: wc.white, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ fontSize: 28, lineHeight: "33.6px", fontWeight: 500 }}>{c.success[0]}</div>
      <div style={{ fontSize: 16, lineHeight: "24px" }}>{c.success[1]}</div>
    </div>
  );
  return (
    <form onSubmit={submit} style={{ padding: 32, borderRadius: 6, background: "rgba(255,255,255,0.1)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "24px 20px" }}>
      <Field label={c.name} value={v.name} onChange={set("name")} />
      <Field label={c.phone} type="tel" value={v.phone} onChange={set("phone")} />
      <div style={{ gridColumn: "1 / -1" }}><Field label={c.email} type="email" value={v.email} onChange={set("email")} /></div>
      <Field label={c.message} textarea value={v.msg} onChange={set("msg")} />
      <div style={{ gridColumn: "1 / -1" }}><WButton block type="submit">{state === "wait" ? c.wait : c.submit}</WButton></div>
    </form>
  );
}

function ContactSection({ id = "Contact", first }) {
  const { t } = useL();
  const c = t.contact;
  return (
    <section id={id} style={{ background: wc.blue, color: wc.white, padding: first ? "176px 0 96px" : "96px 0", marginTop: first ? -76 : 0 }}>
      <Container style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 420px), 1fr))", gap: 48 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 32, justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <Eyebrow tone="dark">{c.eyebrow}</Eyebrow>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: "46px", fontWeight: 500, textTransform: "uppercase", textWrap: "balance" }}>{c.title1}<br /><span style={{ color: wc.yellow }}>{c.title2}</span></h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", opacity: 0.7 }}>{c.call}</div>
            <a href={C.CONTACT.tel} style={{ color: wc.white, textDecoration: "none", fontSize: 32, lineHeight: "38.4px" }}>{C.CONTACT.phone}</a>
            <a href={C.CONTACT.mailto} style={{ color: wc.white, textDecoration: "none", fontSize: 20, lineHeight: "26px" }}>{C.CONTACT.email}</a>
            <div style={{ marginTop: 8 }}><Messengers /></div>
          </div>
        </div>
        <ContactForm />
      </Container>
    </section>
  );
}

function FooterLink({ children, onClick, href }) {
  const [h, setH] = React.useState(false);
  return <a href={href || "#"} onClick={onClick ? (e) => { e.preventDefault(); onClick(); } : undefined} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ display: "flex", alignItems: "center", gap: 8, color: wc.white, textDecoration: "none", fontSize: 16, lineHeight: "24px", opacity: h ? 0.6 : 1, transition: "opacity 200ms ease" }}><span style={{ width: h ? 6 : 0, height: 6, borderRadius: 3, background: wc.yellow, transition: "width 200ms ease" }}></span>{children}</a>;
}

function SiteFooter() {
  const { t, go } = useL();
  const f = t.footer;
  const head = { fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", color: "rgba(245,245,245,0.6)" };
  return (
    <footer style={{ background: wc.black, color: wc.white }}>
      <Container style={{ padding: "96px 20px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 48 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
            <a href="#/home" onClick={(e) => { e.preventDefault(); go("home"); }}><img src={C.IMG.logoLight} alt="Welteco" style={{ height: 56 }} /></a>
            <Messengers size={34} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={head}>Welteco</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>{f.links.map(([l, p]) => <FooterLink key={p} onClick={() => go(p)}>{l}</FooterLink>)}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={head}>{f.offersTitle}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>{f.offers.map((l, i) => <FooterLink key={l} onClick={() => go(i < 2 ? "machines" : "home#offers")}>{l}</FooterLink>)}</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={head}>{t.contact.call}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <FooterLink href={C.CONTACT.tel}>{C.CONTACT.phone}</FooterLink>
              <FooterLink href={C.CONTACT.mailto}>{C.CONTACT.email}</FooterLink>
            </div>
          </div>
        </div>
        <div style={{ height: 1, marginTop: 72, background: "rgba(230,228,223,0.3)" }}></div>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", padding: "16px 0 0", fontSize: 12.1, lineHeight: "18.12px", color: "rgba(245,245,245,0.6)" }}>
          <span>© Welteco</span>
          <a href="#" style={{ color: "rgba(245,245,245,0.6)" }}>{f.privacy}</a>
        </div>
      </Container>
    </footer>
  );
}

function Lightbox({ src, onClose }) {
  if (!src) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 60, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 40, cursor: "zoom-out" }}>
      <img src={src} alt="" style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: 4, objectFit: "contain" }} />
    </div>
  );
}

Object.assign(window, { LogoTile, C, wc, LangCtx, useL, useWide, Container, Eyebrow, WButton, SectionTitle, PageHero, SiteNav, Messengers, ContactSection, SiteFooter, Lightbox });

// ---- Home.jsx
function HomeHero() {
  const { t, go } = useL();
  const h = t.hero;
  const wide = useWide(900);
  return (
    <section id="top" style={{ position: "relative", minHeight: "max(760px, 100vh)", marginTop: -76, display: "flex", flexDirection: "column", overflow: "hidden", background: wc.white }}>
      <div style={{ position: "absolute", inset: 0, background: `url("${C.IMG.heroPoster}") 50% 50% / cover no-repeat` }}>
        <video onError={(e) => { e.currentTarget.style.display = "none"; }} autoPlay muted loop playsInline poster={C.IMG.heroPoster} src={C.IMG.heroVideo} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}></video>
        <div style={{ position: "absolute", inset: 0, background: "rgba(245,245,245,0.45)" }}></div>
      </div>
      <Container style={{ position: "relative", flex: 1, display: "flex", flexDirection: "column", width: "100%", boxSizing: "border-box", padding: "100px 20px 48px" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 72 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: "8px 24px", flexWrap: "wrap", fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", color: wc.black }}>
              {h.cats.map((c, i) => <a key={c} href="#" onClick={(e) => { e.preventDefault(); go(i === 0 ? "machines" : "home#offers"); }} style={{ color: wc.black, textDecoration: "none" }}>{c}</a>)}
            </div>
            <div style={{ height: 1, opacity: 0.3, background: wc.black }}></div>
          </div>
          <div style={{ maxWidth: 900, display: "flex", flexDirection: "column", gap: 24 }}>
            <h1 style={{ margin: 0, fontSize: "clamp(44px, 6.2vw, 90px)", lineHeight: 1, fontWeight: 500, color: wc.black, textTransform: "uppercase", textWrap: "balance" }}>{h.title}</h1>
            <p style={{ margin: 0, maxWidth: 520, fontSize: 18, lineHeight: "26px", color: wc.black }}>{h.sub}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
              <WButton onClick={() => go("home#offers")}>{h.cta}</WButton>
              <WButton variant="outline" onClick={() => go("contacts")}>{t.nav.contact}</WButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function HomeAbout() {
  const { t, go } = useL();
  const a = t.about;
  return (
    <section style={{ padding: "128px 0 96px", background: wc.white }}>
      <Container>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 24 }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", alignContent: "flex-start" }}><Eyebrow>{a.eyebrow}</Eyebrow><Eyebrow tone="yellow">{a.why}</Eyebrow></div>
          <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: 32, minWidth: 0 }}>
            <h2 style={{ margin: 0, fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.15, fontWeight: 500, color: wc.black, textWrap: "balance" }}>{a.title}</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24 }}>
              {a.p.map((p) => <p key={p} style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: wc.dark }}>{p}</p>)}
            </div>
            <div><WButton variant="dark" onClick={() => go("about")}>{a.cta}</WButton></div>
          </div>
        </div>
        <div style={{ marginTop: 72, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 6 }}>
          {a.features.map((f, i) => (
            <div key={f} style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", gap: 48, minHeight: 200, padding: 24, borderRadius: 4, background: wc.black }}>
              <img src={C.FEATURE_ICONS[i]} alt="" style={{ width: 44, height: 54, objectFit: "contain", alignSelf: "flex-start" }} />
              <div style={{ fontSize: 20, lineHeight: "26px", fontWeight: 500, color: wc.white, textTransform: "uppercase" }}>{f}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HomePartners() {
  const { t, go } = useL();
  const p = t.partners;
  return (
    <section style={{ padding: "96px 0", background: wc.grey }}>
      <Container>
        <SectionTitle eyebrow={p.eyebrow} title={p.text} size={32} right={<WButton variant="dark" onClick={() => go("partners")}>{p.cta}</WButton>} />
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 6 }}>
          {C.PARTNER_LOGOS.map((src, i) => (
            <button key={i} onClick={() => go("partners")} style={{ all: "unset", cursor: "pointer", height: 200, borderRadius: 4, background: wc.pure, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <LogoTile src={src} alt={["partners logo", "logo of partmer cgm", "logo of partner - witech"][i]} />
            </button>
          ))}
        </div>
      </Container>
    </section>
  );
}

function OfferCard({ title, image, onClick, featured }) {
  const [h, setH] = React.useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ all: "unset", cursor: "pointer", position: "relative", minHeight: featured ? 560 : 420, borderRadius: 4, overflow: "hidden", display: "flex", alignItems: "flex-end", padding: 24, boxSizing: "border-box", background: featured ? wc.grey : wc.black, gridColumn: featured ? "1 / -1" : undefined }}>
      <div style={{ position: "absolute", inset: 0, background: `url("${image}") 50% 50% / ${featured ? "contain" : "cover"} no-repeat`, transform: h ? "scale(1.04)" : "scale(1)", transition: "transform 600ms ease" }}></div>
      {!featured && <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.85) 100%)" }}></div>}
      <img src={C.IMG.arrow} alt="" style={{ position: "absolute", top: 24, right: 24, width: 28, height: 28, transform: h ? "translate(3px,-3px)" : "none", transition: "transform 200ms ease" }} />
      <h3 style={{ position: "relative", margin: 0, maxWidth: 560, fontSize: featured ? 40 : 24, lineHeight: featured ? "46px" : "30px", fontWeight: 500, textTransform: "uppercase", color: featured ? wc.black : wc.white, textWrap: "balance" }}>{title}</h3>
    </button>
  );
}

function HomeOffers() {
  const { t, go } = useL();
  const o = t.offers;
  return (
    <section id="offers" style={{ padding: "128px 0 144px", background: wc.white }}>
      <Container>
        <SectionTitle eyebrow={o.eyebrow} right={<WButton variant="dark" onClick={() => go("contacts")}>{o.cta}</WButton>} />
        <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 6 }}>
          <OfferCard featured title={o.featured} image={C.IMG.vibroMachine} onClick={() => go("machines")} />
          {o.items.map((it, i) => <OfferCard key={it} title={it} image={C.OFFER_IMAGES[i]} onClick={() => go(i === 0 ? "machines" : "contacts")} />)}
        </div>
      </Container>
    </section>
  );
}

function HomeStrip() {
  const { t, go } = useL();
  const imgs = [...C.STRIP, ...C.STRIP];
  return (
    <section style={{ padding: "96px 0", background: wc.grey, overflow: "hidden" }}>
      <Container>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap" }}>
          <h3 style={{ margin: 0, maxWidth: 900, fontSize: "clamp(24px, 2.4vw, 32px)", lineHeight: 1.2, fontWeight: 500, textTransform: "uppercase", color: wc.black, textWrap: "balance" }}>{t.strip.title}</h3>
          <WButton variant="dark" onClick={() => go("products")}>{t.strip.cta}</WButton>
        </div>
      </Container>
      <div style={{ marginTop: 48, display: "flex", gap: 6, width: "max-content", animation: "wMarquee 60s linear infinite" }}>
        {imgs.map((src, i) => (
          <div key={i} style={{ width: 260, height: 260, flexShrink: 0, borderRadius: 4, background: wc.white, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={src} alt="concrete product" style={{ maxWidth: "80%", maxHeight: "80%", objectFit: "contain" }} />
          </div>
        ))}
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <React.Fragment>
      <HomeHero />
      <HomeAbout />
      <HomePartners />
      <HomeOffers />
      <HomeStrip />
      <ContactSection />
    </React.Fragment>
  );
}

Object.assign(window, { HomePage });

// ---- Pages.jsx
function AboutPage() {
  const { t, go } = useL();
  const a = t.aboutPage;
  return (
    <React.Fragment>
      <PageHero title={a.h1} image={C.IMG.concreteMachine} minHeight={520} />
      <section style={{ padding: "128px 0 96px", background: wc.white }}>
        <Container style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 24 }}>
          <div><Eyebrow>{a.eyebrow}</Eyebrow></div>
          <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: 24, minWidth: 0 }}>
            <h2 style={{ margin: 0, fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.15, fontWeight: 500, color: wc.black, textWrap: "balance" }}>{a.title}</h2>
            <p style={{ margin: 0, fontSize: 20, lineHeight: "26px", color: wc.dark, maxWidth: 820 }}>{a.p}</p>
          </div>
        </Container>
      </section>
      <section style={{ padding: "0 0 144px", background: wc.white }}>
        <Container style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {a.list.map((l, i) => (
            <button key={l} onClick={() => go(i === 3 ? "machines" : "contacts")} style={{ all: "unset", cursor: "pointer", display: "grid", gridTemplateColumns: "64px minmax(0,1fr) 28px", alignItems: "center", gap: 24, padding: "24px", borderRadius: 4, background: i % 2 ? wc.greyLight : wc.grey }}>
              <span style={{ fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", color: wc.blue }}>{String(i + 1).padStart(2, "0")}</span>
              <span style={{ fontSize: 20, lineHeight: "26px", fontWeight: 500, color: wc.black, textTransform: "uppercase" }}>{l}</span>
              <img src={C.IMG.arrow} alt="" style={{ width: 20, height: 20 }} />
            </button>
          ))}
        </Container>
      </section>
      <ContactSection />
    </React.Fragment>
  );
}

function PartnersPage() {
  const { t } = useL();
  const p = t.partnersPage;
  const [lb, setLb] = React.useState(null);
  return (
    <React.Fragment>
      <PageHero title={p.h1} image={C.IMG.partnersPoster} video={C.IMG.partnersVideo} minHeight={620} />
      {p.sections.map((s, si) => (
        <section key={s.key} id={s.key} style={{ padding: "128px 0", background: si % 2 ? wc.grey : wc.white }}>
          <Container>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 24 }}>
              <div style={{ height: 160, borderRadius: 4, background: wc.pure, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <LogoTile src={s.logo} alt="" height={110} />
              </div>
              <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: 24, minWidth: 0, justifyContent: "center" }}>
                <h2 style={{ margin: 0, fontSize: "clamp(28px, 3vw, 40px)", lineHeight: 1.15, fontWeight: 500, color: wc.black, textTransform: "uppercase", textWrap: "balance" }}>{s.title}</h2>
                {s.intro.map((x) => <p key={x} style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: wc.dark }}>{x}</p>)}
              </div>
            </div>
            <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 16 }}>
              <Eyebrow tone={si % 2 ? "yellow" : "light"}>{p.examples}</Eyebrow>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 6 }}>
                {s.images.map((src) => (
                  <button key={src} onClick={() => setLb(src)} style={{ all: "unset", cursor: "zoom-in", height: 440, borderRadius: 4, background: `${wc.pure} url("${src}") 50% 50% / cover no-repeat` }}></button>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 6, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 6 }}>
              {s.points.map((x, i) => (
                <div key={x} style={{ padding: 24, borderRadius: 4, background: si % 2 ? wc.white : wc.grey, display: "flex", flexDirection: "column", gap: 16 }}>
                  <span style={{ fontSize: 14, lineHeight: "19.6px", color: wc.blue }}>{String(i + 1).padStart(2, "0")}</span>
                  <p style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: wc.dark }}>{x}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}
      <ContactSection />
      <Lightbox src={lb} onClose={() => setLb(null)} />
    </React.Fragment>
  );
}

function ProductsPage() {
  const { t } = useL();
  const [lb, setLb] = React.useState(null);
  return (
    <React.Fragment>
      <PageHero title={t.productsPage.h1} image={C.GALLERY[11]} minHeight={520} />
      <section style={{ padding: "96px 0 144px", background: wc.white }}>
        <Container>
          <div style={{ columnWidth: 320, columnGap: 6 }}>
            {C.GALLERY.map((src) => (
              <button key={src} onClick={() => setLb(src)} style={{ all: "unset", cursor: "zoom-in", display: "block", width: "100%", marginBottom: 6, borderRadius: 4, overflow: "hidden", breakInside: "avoid" }}>
                <img src={src} alt="concrete product example" loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
              </button>
            ))}
          </div>
        </Container>
      </section>
      <ContactSection />
      <Lightbox src={lb} onClose={() => setLb(null)} />
    </React.Fragment>
  );
}

function MachinesPage() {
  const { t, lang } = useL();
  const m = t.machinesPage;
  const [active, setActive] = React.useState(0);
  const mc = C.MACHINES[active];
  const labels = C.SPEC_LABELS[lang];
  const name = (x) => lang === "en" ? x.nameEn : x.name;
  return (
    <React.Fragment>
      <PageHero title={m.h1} image={C.IMG.heroPoster} minHeight={560} />
      <section style={{ padding: "96px 0 144px", background: wc.white }}>
        <Container>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {C.MACHINES.map((x, i) => (
              <button key={x.id} onClick={() => setActive(i)} style={{ all: "unset", cursor: "pointer", padding: "16px 20px", borderRadius: 4, border: `1px solid ${i === active ? wc.black : wc.grey}`, background: i === active ? wc.black : "transparent", color: i === active ? wc.white : wc.black, fontSize: 16, lineHeight: "24px", fontWeight: 500, transition: "background-color 200ms ease" }}>{name(x)}</button>
            ))}
          </div>
          <div style={{ marginTop: 32, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 440px), 1fr))", gap: 6 }}>
            <div style={{ minHeight: 520, borderRadius: 4, background: wc.grey, display: "flex", alignItems: "center", justifyContent: "center", padding: 32 }}>
              <img src={mc.img} alt={name(mc)} style={{ maxWidth: "100%", maxHeight: 520, objectFit: "contain" }} />
            </div>
            <div style={{ padding: 32, borderRadius: 4, background: wc.greyLight, display: "flex", flexDirection: "column", gap: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
                <h2 style={{ margin: 0, fontSize: 40, lineHeight: "46px", fontWeight: 500, color: wc.black }}>{name(mc)}</h2>
                <Eyebrow tone="yellow">{mc.cycle[lang]}</Eyebrow>
              </div>
              {mc.desc[lang].map((p) => <p key={p} style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: wc.dark }}>{p}</p>)}
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{ fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", color: wc.blue }}>{m.standard}</div>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {mc.eq[lang].map((e) => <li key={e} style={{ display: "flex", gap: 10, alignItems: "baseline", fontSize: 16, lineHeight: "24px", color: wc.black }}><span style={{ width: 6, height: 6, flexShrink: 0, borderRadius: 3, background: wc.blue, transform: "translateY(-2px)" }}></span>{e}</li>)}
                </ul>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 6, padding: 32, borderRadius: 4, background: wc.black, color: wc.white }}>
            <div style={{ fontSize: 14, lineHeight: "19.6px", letterSpacing: "0.2px", textTransform: "uppercase", color: wc.yellow, marginBottom: 16 }}>{m.specs} · {name(mc)}</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", columnGap: 48 }}>
              {labels.map((l, i) => (
                <div key={l} style={{ display: "flex", justifyContent: "space-between", gap: 24, padding: "14px 0", borderBottom: "1px solid rgba(230,228,223,0.2)", fontSize: 16, lineHeight: "24px" }}>
                  <span style={{ color: "rgba(245,245,245,0.7)" }}>{l}</span>
                  <span style={{ textAlign: "right", fontWeight: 500 }}>{mc.specs[lang][i]}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 96, display: "flex", flexDirection: "column", gap: 16 }}>
            <Eyebrow>{m.examples}</Eyebrow>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))", gap: 6 }}>
              {[C.IMG.examples1, C.IMG.examples2].map((src) => <div key={src} style={{ height: 480, borderRadius: 4, background: `url("${src}") 50% 50% / cover no-repeat` }}></div>)}
            </div>
          </div>
        </Container>
      </section>
      <ContactSection />
    </React.Fragment>
  );
}

function ContactsPage() {
  return <ContactSection first />;
}

function UpdatePage() {
  const { t } = useL();
  const u = t.update;
  return (
    <React.Fragment>
      <PageHero title={u.h1} image={C.IMG.heroPoster} minHeight={560}>
        <div style={{ marginTop: 24, maxWidth: 720, display: "flex", flexDirection: "column", gap: 8 }}>
          {u.p.map((p) => <p key={p} style={{ margin: 0, fontSize: 20, lineHeight: "26px", color: wc.black }}>{p}</p>)}
        </div>
      </PageHero>
      <section style={{ padding: "96px 0", background: wc.white }}>
        <Container>
          <div style={{ maxWidth: 896, margin: "0 auto", padding: 48, borderRadius: 4, background: wc.pure, display: "flex", flexDirection: "column", alignItems: "center", gap: 16, textAlign: "center" }}>
            <h2 style={{ margin: 0, fontSize: 40, lineHeight: "46px", fontWeight: 500, color: wc.black, textTransform: "uppercase" }}>{u.helpTitle}</h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: "24px", color: wc.dark, maxWidth: 560 }}>{u.helpText}</p>
            <a href={C.CONTACT.tel} style={{ marginTop: 8, color: wc.blue, textDecoration: "none", fontSize: 32, lineHeight: "38.4px" }}>{C.CONTACT.phone}</a>
            <a href={"mailto:" + C.CONTACT.email} style={{ color: wc.blue, textDecoration: "none", fontSize: 20, lineHeight: "26px" }}>{C.CONTACT.email}</a>
          </div>
        </Container>
      </section>
      <ContactSection />
    </React.Fragment>
  );
}

Object.assign(window, { AboutPage, PartnersPage, ProductsPage, MachinesPage, ContactsPage, UpdatePage });

// ---- App (index.html)

const PAGES = { home: HomePage, about: AboutPage, partners: PartnersPage, products: ProductsPage, machines: MachinesPage, contacts: ContactsPage, update: UpdatePage };
const parse = () => { const [p, a] = (location.hash.replace(/^#\/?/, "") || "home").split("#"); return [PAGES[p] ? p : "home", a]; };
function App() {
  const [[page, anchor], setRoute] = React.useState(parse);
  const [lang, setLangState] = React.useState(() => localStorage.getItem("welteco-lang") || "ua");
  const setLang = (l) => { setLangState(l); localStorage.setItem("welteco-lang", l); document.documentElement.lang = l === "en" ? "en" : "uk"; };
  React.useEffect(() => { const f = () => setRoute(parse()); window.addEventListener("hashchange", f); return () => window.removeEventListener("hashchange", f); }, []);
  React.useEffect(() => {
    if (anchor) { const el = document.getElementById(anchor); if (el) { setTimeout(() => window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 76, behavior: "smooth" }), 30); return; } }
    window.scrollTo(0, 0);
  }, [page, anchor]);
  const go = (target) => { const h = "#/" + target; if (location.hash === h) { setRoute(parse()); } location.hash = h; };
  const Page = PAGES[page];
  return (
    <LangCtx.Provider value={{ lang, setLang, t: C[lang], go }}>
      <SiteNav page={page} />
      <main><Page key={page + lang} /></main>
      <SiteFooter />
    </LangCtx.Provider>
  );
}

window.WeltecoApp = App;
