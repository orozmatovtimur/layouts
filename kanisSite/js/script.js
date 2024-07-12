document.getElementById('searchButton').addEventListener('click', function() {
    const searchBox = document.getElementById('searchBox');
    const searchContainer = document.querySelector('.search-container');
    searchContainer.classList.toggle('active');
    if (searchContainer.classList.contains('active')) {
        searchBox.focus();
    } else {
        searchBox.value = '';
        filterSections('');
    }
});

document.getElementById('searchBox').addEventListener('input', function(event) {
    const query = event.target.value.toLowerCase();
    filterSections(query);
});

function filterSections(query) {
    const sections = document.querySelectorAll('main section');
    
    sections.forEach(section => {
        const content = section.textContent.toLowerCase();
        if (content.includes(query)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}


const translations = {
    en: {
        about: "About Us",
        exhibits: "Exhibits",
        buyTickets: "Buy Tickets",
        address: "Address",
        searchPlaceholder: "Search...",
        slide1Title: "Welcome to the National Museum",
        slide2Title: "Unique Exhibits",
        slide3Title: "History and Culture",
        addressTitle: "Address of the National Museum",
        addressText: "Biskek city, Kyrgyzstan<br>Ala-Too square<br>Phone: +123 456 7890<br>Email: info@nationalmuseum.kg",
        heroTitle: "NHM KR",
        heroSubtitle: "National Historical Museum of the KR",
        aboutText1: "1925-1933 'Central Museum of Kyrgyzstan' FOUNDATION The exhibition was prepared for the start of the 1st Constituent Congress of the Soviets of Kyrgyzstan and was located in one of the rooms of M.V. Frunze's parents' house. The creation of the museum marked the beginning of systematic study of the history and nature of the mountainous region and the broad promotion of local history. The first director of the museum and the founder of the ethnographic department was the famous ethnographer S.M. Abramzon. In the 1920s-1930s, the main focus was on the collection of ethnographic and natural science collections. The creation of the historical and archaeological department is associated with the name of the Leningrad archaeologist A.N. Bernshtam.",
        aboutText2: "1933-1943 ||| 1943-1954 Renaming HISTORY OF NAMES 1925-1933 — Central Museum of Kyrgyzstan; 1933-1943 — State Museum of Local Lore; 1943-1954 — Museum of National Culture; 1954 — renamed to State Historical Museum. In 2018 — renamed to the National Historical Museum of the Kyrgyz Republic. In 1941, under his leadership, the first scientific exhibition on the history of Kyrgyzstan from the 2nd millennium BC to the beginning of the 20th century was opened. In 1947, the department of socialist construction began its work. The foundations of its exposition were laid by museum staff in the 1940s-1950s, now well-known historians: S.K. Kerimbaev, K.U. Usenbaev, K.I. Antipina, V.Ya. Galitsky. In 1967, the Historical Museum moved to a building built in 1927 by the architect A.P. Zenkov for the Government of the Republic. The museum grew into a major scientific, cultural, and methodological center in the Republic. In 1991, the Historical Museum was given the building of the branch of the Central Museum of V.I. Lenin.",
        aboutText3: "2016-2021 Reconstruction and OPENING Currently, the museum's collections include 90 thousand items of museum significance, including 44 thousand monuments of the main fund. The pride of the Historical Museum is its archaeological and ethnographic collections, materials that tell about state building, the development and achievements in the field of economy, science, and culture of Soviet and sovereign Kyrgyzstan. From 2016 to 2021, the museum was under reconstruction, and on November 20, 2021, the museum opened its doors to visitors."
    },
    kg: {
        about: "Биз жөнүндө",
        exhibits: "Көргөзмөлөр",
        buyTickets: "Билеттерди сатып алуу",
        address: "Дарек",
        searchPlaceholder: "Издөө...",
        slide1Title: "Улуттук музейге кош келиңиз",
        slide2Title: "Уникалдуу көргөзмөлөр",
        slide3Title: "Тарых жана маданият",
        addressTitle: "Улуттук музейдин дареги",
        addressText: "Бишкек Шаары, Кыргызстан<br>Ала-Тоо Аянты<br>Телефон: +123 456 7890<br>Email: info@nationalmuseum.kg",
        heroTitle: "УТМ КР",
        heroSubtitle: "Кыргыз Республикасынын Улуттук тарыхый музейи",
        aboutText1: "1925-1933 Кыргызстандын Борбордук музейи НЕГИЗДӨӨ Экспозиция Кыргызстан Советтеринин 1-курултайынын башталышына даярдалган жана М.В. Фрунзенин ата-энесинин үйүнүн бир бөлмөсүнө жайгаштырылган. Музейдин түзүлүшү тоолуу аймактын тарыхын жана табиятын системалуу изилдөөнүн башталышына, аймак таануунун кеңири жайылтуусуна шарт түздү. Музейдин биринчи директору, этнография бөлүмүнүн негиздөөчүсү белгилүү этнограф-окумуштуу С.М. Абрамзон болгон. 20—30-жылдары негизги көңүл этнографиялык жана жаратылыш илимдеринин коллекцияларын түзүүгө бурулган. Тарыхый-археологиялык бөлүмдү түзүү ленинграддык археолог А.Н. Бернштамдын аты менен байланыштуу.",
        aboutText2: "1933-1943 ||| 1943-1954 Атынын өзгөрүшү АТТАР ТАРЫХЫ 1925-1933 жж. — Кыргызстандын Борбордук музейи; 1933-1943 жж. — Мамлекеттик жер таануу музейи; 1943-1954 жж. — Улуттук маданият музейи; 1954-ж. – Мамлекеттик тарыхый музейге өзгөртүлгөн. 2018-ж. — Кыргыз Республикасынын Улуттук тарыхый музейи болуп өзгөртүлгөн. 1941-ж. анын жетекчилиги астында Кыргызстан тарыхы боюнча экинчи миң жылдыктан б.з.ч. XX кылымдын башына чейинки биринчи илимий экспозиция ачылган. 1947-ж. социалисттик курулуш бөлүмү иштей баштаган. Анын экспозициясынын негиздери 40—50-жылдары музей кызматкерлери, азыркы белгилүү тарыхчы окумуштуулар: С.К. Керимбаев, К.У. Үсөнбаев, К. И. Антипина, В.Я. Галицкий тарабынан түзүлгөн. 1967-ж. Тарыхый Музей 1927-ж. архитектор А.П. Зенков тарабынан Республиканын Өкмөтү үчүн курулган имаратка көчүрүлгөн. Музей Республикада ири илимий, маданий жана методикалык борбор болуп өскөн. 1991-ж. Тарыхый Музейге В.И.Лениндин Борбордук музейинин филиалынын имараты берилген.",
        aboutText3: "2016-2021 Реконструкция жана АЧЫЛУУ Учурда музейдин фонддорунда 90 миң музейдик маанидеги буюмдар, анын ичинде 44 миңи негизги фонддун эстеликтери бар. Тарыхый Музейдин сыймыгы анын археологиялык жана этнографиялык коллекциялары, мамлекеттик курулуш, советтик жана суверендүү Кыргызстандын экономикасы, илими жана маданиятынын өнүгүшү жана жетишкендиктери тууралуу материалдары болуп саналат. 2016-жылдан 2021-жылга чейин музей реконструкцияланып, 2021-жылдын 20-ноябрынан тартып музей өз эшигин зыяратчылар үчүн ачкан.",
        
    },
    ru: {
        about: "О нас",
        exhibits: "Экспонаты",
        buyTickets: "купить билеты",
        address: "адрес",
        searchPlaceholder: "Поиск...",
        slide1Title: "Добро пожаловать в Национальный Музей",
        slide2Title: "Уникальные Экспонаты",
        slide3Title: "История и Культура",
        addressTitle: "Адрес Национального Музея",
        addressText: " Город Бишкек, Кыргызстан<br>Площадь Ала-Тоо<br>Телефон: +123 456 7890<br>Email: info@nationalmuseum.kg",
        heroTitle: "НИМ КР",
        heroSubtitle: "Национальный Исторический Музей КР",
        aboutText1: "1925-1933 Центральный музей Кыргызстана ОСНОВАНИЕ Экспозиция была подготовлена к началу работы 1 учредительного съезда Советов Киргизии и размещалась в одной из комнат дома родителей М.В. Фрунзе. Создание музея положило начало систематическому изучению истории и природы горного края, широкой пропаганде краеведения. Первым директором музея, основателем этнографического отдела стал известный ученый-этнограф С.М. Абрамзон. В 20—30-е годы основное внимание уделялось комплектованию этнографических и естественно-научных коллекций. Создание историко-археологического отдела связано с именем ленинградского ученого-археолога А.Н. Бернштама.",
        aboutText2: "1933-1943 ||| 1943-1954 Переименования ИСТОРИЯ НАЗВАНИЙ 1925-1933 гг. — Центральный музей Кыргызстана; 1933-1943 гг. — Государственный музей краеведения; В 1943-1954 гг. — Музей Национальной культуры; В 1954 г. – переименован в Государственный исторический музей. В 2018 г. — переименован в Национальный исторический музей Кыргызской Республики. В 1941 г. под его руководством была открыта первая научная экспозиция по истории Кыргызстана с ll тыс. до н.э. до начала ХХ в. В 1947г. начинает работу отдел социалистического строительства. Основы его экспозиции были заложены сотрудниками музея 40—50-х годов, ныне известными учеными историками: С.К. Керимбаевым, К.У. Усенбаевым, К. И. Антипиной, В.Я. Галицким. В 1967г. Исторический Музей переехал в здание, построенное в 1927г. по проекту архитектора А.П. Зенкова для Правительства Республики. Музей вырос в крупный научный, культурный и методический центр в Республике. В 1991г. Историческому Музею передано здание филиала Центрального музея В.И.Ленина.",
        aboutText3: "2016-2021 Реконструкция и ОТКРЫТИЕ В настоящее время фонды музея насчитывают 90 тыс. предметов музейного значении, в том числе 44 тыс.—памятники основного фонда. Гордостью Исторического Музея являются его археологические и этнографические коллекции, материалы, рассказывающие о государственном строительстве, о развитии и достижениях в области экономики, науки и культуры советского и суверенного Кыргызстана. С 2016 по 2021 год музей находился на реконструкции с 20 ноября 2021 музей открыл свои двери для посетителей.",
        
    }
};

document.querySelectorAll('.lang').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const selectedLang = event.target.getAttribute('data-lang');
        applyTranslation(selectedLang);
    });
});

function applyTranslation(lang) {
    const elementsToTranslate = [
        { id: 'nav-about', key: 'about' },
        { id: 'nav-exhibits', key: 'exhibits' },
        { id: 'nav-tickets', key: 'buyTickets' },
        { id: 'nav-address', key: 'address' },
        { id: 'nav-glassmorphism', key: 'glassmorphism' },
        { id: 'searchBox', key: 'searchPlaceholder', attribute: 'placeholder' },
        { id: 'slide1-title', key: 'slide1Title' },
        { id: 'slide2-title', key: 'slide2Title' },
        { id: 'slide3-title', key: 'slide3Title' },
        { id: 'address-title', key: 'addressTitle' },
        { id: 'address-text', key: 'addressText', isInnerHTML: true },
        { id: 'hero-title', key: 'heroTitle' },
        { id: 'hero-subtitle', key: 'heroSubtitle' },
        { id: 'text1', key: 'aboutText1' },
        { id: 'text2', key: 'aboutText2' },
        { id: 'text3', key: 'aboutText3' },
    ];
    elementsToTranslate.forEach(element => {
        const el = document.getElementById(element.id);
        if (el) {
            if (element.isInnerHTML) {
                el.innerHTML = translations[lang][element.key];
            } else if (element.attribute) {
                el.setAttribute(element.attribute, translations[lang][element.key]);
            } else {
                el.textContent = translations[lang][element.key];
            }
        } else {
            console.error(`Element with ID '${element.id}' not found.`);
        }
    });
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

setInterval(function() {
  plusSlides(1);
}, 5000);

// let slideIndex = 0;
// showSlides();

// function plusSlides(n) {
//   slideIndex += n;
//   showSlides();
// }

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   } 
//   if (slideIndex < 0) {
//     slideIndex = slides.length - 1;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].classList.remove("active");
//   }
//   slides[slideIndex].classList.add("active");
// }

// setInterval(function() {
//   plusSlides(1);
// }, 5000);