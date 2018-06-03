//===============AUGMENTATION======================================
if (!Array.isArray) {
    Array.isArray = function (arg) {
        return Object.prototype.toString.call(arg) == '[object Array]';
    };
}

//===============GLOBALS======================================
var aGroenten = [["aardappelen", 0.95, "kg"],
    ["avocado", 2.69, "stuk"],
    ["bloemkool", 1.93, "stuk"],
    ["brocoli", 1.29, "stuk"],
    ["champignons", 0.89, "250g"],
    ["chinese kool", 1.59, "stuk"],
    ["groene kool", 1.69, "stuk"],
    ["knolselder", 1.29, "stuk"],
    ["komkommer", 2.49, "stuk"],
    ["kropsla", 1.69, "stuk"],
    ["paprika", 0.89, "net"],
    ["prei", 2.99, "bundel"],
    ["princessenbonen", 1, "250g"],
    ["rapen", 0.99, "bundel"],
    ["kropsla", 1.69, "stuk"],
    ["rode kool", 1.39, "stuk"],
    ["sla iceberg", 1.49, "stuk"],
    ["spinazie vers", 1.89, "300g"],
    ["sjalot", 0.99, "500g"],
    ["spruiten", 1.86, "kg"],
    ["trostomaat", 2.99, "500g"],
    ["ui", 0.89, "kg"],
    ["witloof 1ste keus", 1.49, "700g"],
    ["wortelen", 2.59, "kg"],
    ["courgetten", 1.5, "stuk"]]

var aoWinkels = [{
    naam: "de fruitmand",
    adres: "steenstraat 34",
    post: 8000,
    gemeente: "Brugge",
    tel: "050342218",
    manager: "Francine Lapoule"
},
    {
        naam: "Jos & Anneke",
        adres: "visserijstraat 1",
        post: 8400,
        gemeente: "Oostende",
        tel: "059463689",
        manager: "Jos Leman"
    },
    {naam: "groene vingers", adres: "hoogstraat 108", post: 9000, gemeente: "Gent", tel: "091342218"},
    {
        naam: "de buurtwinkel",
        adres: "die laene 22",
        post: 2000,
        gemeente: "Antwerpen",
        tel: "0230342218",
        manager: "Bert Simoens"
    }]

window.onload = function () {

//=======DOM REFERENTIES=======================================
    //knoppen
    var eToevoegen = document.getElementById('toevoegen');
    //keuzelijsten
    var eGroente = document.getElementById('groente');
    var eWinkel = document.getElementById('winkel');
    var eWinkelmandje = document.getElementById('winkelmandje');

//=======GROENTE KEUZELIJST OPVULLEN =========================================
    var eDF = document.createDocumentFragment();
    var eOption1 = document.createElement('option');
    var sValue1 = document.createTextNode("--- maak uw keuze ---");
    eOption1.appendChild(sValue1);
    eOption1.value = "";
    eDF.appendChild(eOption1);
    for (var i = 0; i < aGroenten.length; i++) {
        var eOption = document.createElement('option');
        var sValue = document.createTextNode(aGroenten[i][0] + " (" + aGroenten[i][1] + " €/" + aGroenten[i][2] + ")");
        eOption.appendChild(sValue);
        eDF.appendChild(eOption);
    }
    eGroente.appendChild(eDF);

//=======WINKEL KEUZELIJST OPVULLEN =========================================
    var eDFr = document.createDocumentFragment();
    var eOptionOne = document.createElement('option');
    var sValueOne = document.createTextNode("--- kies uw winkel ---");
    eOptionOne.appendChild(sValueOne);
    eOptionOne.value = "";
    eDFr.appendChild(eOptionOne);
    for (var i = 0; i < aoWinkels.length; i++) {
        var option = document.createElement('option');
        var value = document.createTextNode(aoWinkels[i].naam);
        option.appendChild(value);
        option.setAttribute("title", aoWinkels[i].adres);
        eDFr.appendChild(option);
    }
    eWinkel.appendChild(eDFr);


}