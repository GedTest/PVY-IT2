let bOnce = false
const text = [{
        "text": "Bosna a Hercegovina je domovem tří národů, mezi které patří Bosňáci, Srbové a Chorvati, plus několik menších skupin, včetně Židů a Romů. Sčítání lidu roku 2013 ukázalo, že Bosnu a Hercegovinu obývá 50,1 % Bosňáků, 30,8 % Srbů, 15,4 % Chorvatů a 2,7 % ostatních."
    },
    {
        "text": "Bosenština, srbština a chorvatština jsou v současné Bosně a Hercegovině uznávány jako rovnoprávné oficiální jazyky. Rozdíly v mluvené formě jsou nepatrné. Mluvčí tří daných jazyků si navzájem rozumějí, jazyky jsou dohromady známé jako srbochorvatština. Užívání jednoho z nich se stalo znakem etnické identity. Bosenština a srbština se píší latinkou i cyrilicí, zatímco chorvatština jen latinkou."
    },
    {
        "text": "V Bosně a Hercegovině převažuje islám, který vyznává 51% populace a většina patří k sunnitům, 46% populace jsou křesťané, z nichž nejvíce přísluší k srbské pravoslavné církvi, což představuje 31% populace. Po nich následuje římskokatolická církev s 15%, agnostici tvoří 0,3%, ateisté 0,8% a ostatní 1,15%."
    }
]

$(function () {
    $("#map").click(function () {
        if (!bOnce) {
            $("#map").append('<img src="img/Map_Bih.png" alt="Map_Bih.png">');
            //$("#map").animate({height: "300px"});
            bOnce = true;
        }
    });
});