function parallax(event) {
    this.querySelectorAll('.image').forEach(img => {
        let speed = img.getAttribute('data-speed');
        img.style.transform = `translateX(${event.clientX*speed/1000}px)`
    });
}

document.addEventListener('mousemove', parallax);




var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-background', {
        videoId: 'vh-OnLkL1DY', 
        playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            fs: 0,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
            iv_load_policy: 3,
            loop: 1,
            playlist: 'vh-OnLkL1DY' 
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo();
    }
}




const translations = {
    en: {
        mainPage: "Home",
        mapKR: "Map of KR",
        heroTitle: "Attractions of Northern Kyrgyzstan", 
        newsTitle: "News about Northern Kyrgyzstan",
        h3Title1: "Beautiful Mountains",
        pNews1: "Discover the breathtaking mountain landscapes of Northern Kyrgyzstan.",
        h3Title2: "Kyzyl-Art Pass",
        pNews2: "Explore the majestic pass and its unique views.",
        h3Title3: "Travel Tips",
        pNews3: "Get useful tips for a safe and enjoyable journey.",
        Burana:"Burana Tower",
        Alamedin:"Alamedin Gorge",
        IK:"Issyk-Kul Lake",
        AkSuu:"Ak-Suu",
        Jeti:"Jeti-Oguz",
        Bishkek:"Bishkek - the capital city",
        IssykAta:"Issyk-Ata",
        footer1:"Home",
        footer2:"About Us",
        footer3:"Attractions",
        footer4:"Contacts",
        footer5:"2024 Northern Kyrgyzstan. All rights reserved."
        
    },
    kg: {
        mainPage: "Башкы Бет",
        mapKR: "КР картасы",
        heroTitle: "Түндүк Кыргызстандагы Көркөмдүктөр",
        newsTitle: "Түндүк Кыргызстан тууралуу жаңылыктар",
        h3Title1: "Керемет Тоолор",
        pNews1: "Түндүк Кыргызстандагы керемет тоо көрүнүштөрүн ачыңыз.",
        h3Title2: "Кызыл-Арт Өтмөгү",
        pNews2: "Кереметтүү өтмөктү жана анын өзгөчө көрүнүштөрүн изилдеңиз.",
        h3Title3: "Саякат Кенештери",
        pNews3: "Коопсуз жана жагымдуу саякат үчүн пайдалуу кеңештерди алыңыз.",
        Burana:"Бурана Мунарасы",
        Alamedin:"Аламедин Капчыгайы",
        IK:"Ысык-Көл",
        AkSuu:"Ак-Суу",
        Jeti:"Жети-Өгүз",
        Bishkek:"Бишкек - өлкөнүн борбору",
        IssykAta:"Ысык-Ата",
        footer1:"Башкы бет",
        footer2:"Биз жөнүндө",
        footer3:"Көркөмдүктөр",
        footer4:"Байланыш",
        footer5:"2024 Түндүк Кыргызстан. Бардык укуктар корголгон."
        
    },
    ru: {
        mainPage: "Главная",
        mapKR: "Карта КР",
        heroTitle: "Достопримечательности Северной части Кыргызстана",
        newsTitle: "Новости про Северный Кыргызстан",
        h3Title1: "Красивые Горы",
        pNews1: "Откройте для себя захватывающие горные пейзажи Северного Кыргызстана.",
        h3Title2: "Перевал Кызыл-Арт",
        pNews2: "Исследуйте величественный перевал и его неповторимые виды.",
        h3Title3: "Советы по Путешествиям",
        pNews3: "Получите полезные советы для безопасного и приятного путешествия.",
        Burana:"Башня Бурана",
        Alamedin:"Аламединское Ущелье",
        IK:"Озеро Иссык-Куль",
        AkSuu:"Ак-Суу",
        Jeti:"Жети Огуз",
        Bishkek:"Бишкек - столица страны",
        IssykAta:"Иссык-Ата",
        footer1:"Главная",
        footer2:"О Нас",
        footer3:"Достопримечательности",
        footer4:"Контакты",
        footer5:"2024 Северный Кыргызстан. Все права защищены."
        
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
        { id: 'main', key: 'mainPage' },
        { id: 'map', key: 'mapKR' },
        { id: 'heroTitle', key: 'heroTitle' },
        { id: 'newsTitle', key: 'newsTitle' },
        { id: 'h3Title1', key: 'h3Title1' },
        { id: 'pNews1', key: 'pNews1' },
        { id: 'h3Title2', key: 'h3Title2' },
        { id: 'pNews2', key: 'pNews2' },
        { id: 'h3Title3', key: 'h3Title3' },
        { id: 'pNews3', key: 'pNews3' },
        { id: 'Burana', key: 'Burana' },
        { id: 'Alamedin', key: 'Alamedin' },
        { id: 'IK', key: 'IK' },
        { id: 'AkSuu', key: 'AkSuu' },
        { id: 'Jeti', key: 'Jeti' },
        { id: 'Bishkek', key: 'Bishkek' },
        { id: 'IssykAta', key: 'IssykAta' },
        { id: 'footer1', key: 'footer1' },
        { id: 'footer2', key: 'footer2' },
        { id: 'footer3', key: 'footer3' },
        { id: 'footer4', key: 'footer4' },
        { id: 'footer5', key: 'footer5' }

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
