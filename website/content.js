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
const GALLERY = ["65edd72f82232948f525520f_welteco-product-min.jpg", "65edd730188fb988d16b97f3_welteco-product4-min.jpg", "65edd72f3aca131160082f14_welteco-product2-min.jpg", "65edd730188fb988d16b97fd_welteco-product3-min.jpg", "65edd8299405abd52744f335_6543eeb3b704bf971745f8b6__CGM7170_Medium.webp", "65edd82995c07005f6f0f957_6543eeb3a366d083ce2a2de0__CGM7180_Medium.webp", "65edd829e020cd817c74d5bd_6543eeb5f77a617cfd44db35_DSC_1253_Medium.webp", "65edd829cafa8822ef055972_6543eeb43a6435c35ffce74f_______Medium.webp", "65edd8c9d9a1a95a5f611da2_64ecf042894150090658df32__CGM7135_Medium.webp", "65edd8c92ae242b09d625184_64ecf04269b8e9278f2a251b_IMG_6317_Medium.webp", "65edd8c90d55f0c26e65ce74_64ecf02848fd4d51a3cab2f4_Witech_Extruder_foto___7__Medium.webp", "65ede1d5d9252c7b9c35d02c_welteco-product-example__3__Large.webp", "65ede1d43543df2a0c7e7430_welteco-product-example__4__Large.webp", "65ede1d4fdebfc980f7e2d42_welteco-product-example__7__Large.webp", "65ede1d48883cfba23bc1417_welteco-product-example_Large.webp", "65ede1d4328404b87b58219c_welteco-product-example__2__Large.webp", "65edd55fac8183a7e4009f03_Welteco_products-min.webp", "65edd55f305da811b376f3d1_Welteco_products_example2-min.jpeg", "65edd55fc7531e8168af770e_Welteco_products_example-min.jpeg"].map((f) => A + f).concat(["assets/gallery-road-slabs-stack.jpeg", "assets/gallery-road-slab.jpeg"]);

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
