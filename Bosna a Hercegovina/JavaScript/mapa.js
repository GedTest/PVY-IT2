const cities = [{
        "id": "Brcko",
        "img": "img/BrckoZnak.png",
        "text": "Brčko (srbsky Брчко) je město v severní části Bosny a Hercegoviny, administrativně součást vlastního distriktu. Nachází se u řeky Sávy, při hranici s Chorvatskem, v nížinné části země, západně od regionu Semberie. V roce 2013 žilo v Brčku celkem 43 859 obyvatel. Název města dle jedné teorie odkazuje na předslovanský panonský kmen Breuci. Breuci tvrdě bojovali proti příchozím Římanům na počátku našeho letopočtu, později byli asimilováni. Dle druhé vznikl podle tureckého názvu původní pevnosti, okolo níž se město rozvinulo (Beroska) a později byl přijat nejprve jako Brčka (po roce 1878) a nakonec v současné podobě jako Brčko (od roku 1912)."
    },
    {
        "id": "Tuzla_mesto",
        "img": "img/TuzlaZnak.png",
        "text": "Tuzla (v srbské cyrilici Тузла) je město v severovýchodní části Bosny a Hercegoviny, správní centrum Tuzlanského kantonu Federace Bosny a Hercegoviny. Leží 80 km severovýchodně od Sarajeva na soutoku řek Jala a Solina. V roce 2013 zde žilo 80 570 obyvatel a bylo tak po Sarajevu a Banja Luce třetím největším městem v zemi. Je dopravní křižovatkou této části země a průmyslovým centrem, které se specializuje na výrobu soli, chemický průmysl a výrobu energie. Název Tuzla je tureckého původu a označuje sůl"
    },
    {
        "id": "Banja_Luka_mesto",
        "img": "img/BanjaLukaZnak.png",
        "text": "Banja Luka (cyrilicí srbsky Бања Лука) je druhým největším městem Bosny a Hercegoviny. Dále je největším a de facto i hlavním městem jedné z autonomních entit – Republiky srbské (Rs) a geografického a historického regionu Bosenská krajina. Banja Luka je přirozeným politickým, ekonomickým, kulturním a dopravním centrem Republiky srbské. Počet obyvatel činil v roce 2013 138 963 obyvatel. Po válce město zažívá mírný hospodářský růst, převážně díky zahraniční pomoci. Známou historickou památkou ve městě je středověká pevnost, nacházející se přímo v jeho centru, na břehu Vrbasu. Ve městě se nachází mezinárodní letiště, využívané jak pro civilní tak vojenské lety."
    },
    {
        "id": "Travnik",
        "img": "img/TravnikZnak.png",
        "text": "Travnik je historické město v Bosně a Hercegovině, nachází se mezi městy Donji Vakuf a Zenica, prochází tudy silnice mezi Sarajevem a Banjou Lukou. Pro socialistickou Jugoslávii byla významná továrna na výrobu zbraní, které se v Travniku nacházela."
    },
    {
        "id": "Zenica",
        "img": "img/ZenicaZnak.gif",
        "text": "Zenica (v srbské cyrilici Зеница) je město v Bosně a Hercegovině, leží ve Federaci Bosny a Hercegoviny, v údolí řeky Bosny, v centrální části země. Dle informací ze sčítání lidu z roku 2013 v něm žije 73 751 obyvatel. Město se nachází v Zenicko-dobojském kantonu, je i jeho správním centrem. Leží na řece Bosně, na jejím středním toku, 70 km severně od hlavního města Sarajeva. Právě díky údolí má město dobré spojení jak s hlavním městem tak i s nedalekým Dobojem – důležitou křižovatkou v železniční síti Bosny a Hercegoviny. Název města pochází nejspíše od bosenského slova pro zornici."
    },
    {
        "id": "Mostar",
        "img": "img/MostarZnak.gif",
        "text": "Mostar (v srbské cyrilici Мостар) je město v jižní části Bosny a Hercegoviny, kulturní a společenské centrum regionu Hercegovina, hlavní město Hercegovsko-neretvanského kantonu, a jedno z největších měst v zemi. Situováno je v údolí řeky Neretva, mezi horami Hum a Velež. Podle údajů z posledního (2013) sčítání lidu žije v Mostaru 64 301 obyvatel, z toho v širším městě 105 797 obyvatel. Mostar je také turisticky velmi atraktivním městem v Bosně díky ikonickému mostu, symbolu města. Město získalo svůj název díky tzv. mostarům, lidé, kteří hlídali dnešní Starý most, resp. oba jeho konce na břehu řeky Neretvy. "
    },
    {
        "id": "Visegrad",
        "img": "img/VisegradZnak.png",
        "text": "Višegrad (srbsky Вишеград) je město v jihovýchodní Bosně a Hercegovině, na řece Drině. Rozkládá se v hlubokém horském údolí, na přirozeném dopravním tahu mezi srbským městem Užice a bosenskou metropolí Sarajevo. Podle sčítání lidu z roku 2013 mělo 5 869 obyvatel. Město je známé především díky historickému kamennému mostu přes řeku Drinu, který je zapsán na seznam památek UNESCO a o kterém tehdejší jugoslávský spisovatel Ivo Andrić napsal román Most na Drině. Na jeho počest byla na soutoku řek Rzav a Drina v letech 2011–2014 z popudu a za peníze známého filmového režiséra Emira Kusturici vybudována nová čtvrť, nazvaná Andrićgrad."
    },
    {
        "id": "Sarajevo_mesto",
        "img": "img/SarajevoZnak.png",
        "text": "Sarajevo (srbskou cyrilicí Сарајево) je hlavní město Bosny a Hercegoviny. Současně je i střediskem autonomní entity Federace Bosny a Hercegoviny (FBaH). Od historické části Sarajeva bylo v polovině 90. letech 20. století odděleno Východní Sarajevo, ležící v Republice srbské. Sarajevo je přirozeným politickým, ekonomickým, kulturním a dopravním centrem státu. Se svými 275 524 obyvateli (2013), na ploše 141,5 km² je největším a nejhustěji osídleným městem v zemi. Sídlí v něm Předsednictvo Bosny a Hercegoviny (kolektivní hlava státu), Parlament Bosny a Hercegoviny, Rada ministrů Bosny a Hercegoviny, Ústavní soud Bosny a Hercegoviny a Centrální banka Bosny a Hercegoviny."
    }
];
const sights = [{

}];

$(function () {
    let current = {
        id: null,
        city: null,
        sight: null,
        findId: function () {
            this.id = $(this).attr('id');
        },
        findCity: function () {
            this.city = cities.find(item => {
                return item.id === this.id
            });
        }
    };
    $('svg').hide();
    $('#map').click(function () {
        $('svg').toggle();
    });
    
    $('svg .kraj').mouseover(function () {
        styles = $(this).css('fill');
        $(this).css('fill', 'white');
    })
    $('svg .triangle').mouseover(function () {
        styles = $(this).css('fill');
        $(this).css('fill', 'yellow');
    })
    $('svg path').mouseout(function () {
        $(this).css('fill', styles);
    });

    /* Show info about current city */
       $('svg ellipse').mouseover(function () {
           styles = $(this).css('fill');
           $(this).css('fill', 'yellow');
           let id = $(this).attr('id');
           let city = cities.find(item => {
            return item.id === this.id
        });
           $('#info p').text(city.text);
           $('#info img').attr('src',city.img);
       });
    
        $('svg ellipse').mouseout(function () {
            $(this).css('fill', styles);
        })
});