
var disco;
var artista;

var shops = new Array();
var openTabs = new Array();

const boton = document.getElementById('buscador').onclick = buscar;


function buscar() {
    // Checkboxes values retrieved to be compared.
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
    for (let i = 0; i < checkboxes.length; i++) { shops.push(checkboxes[i].value) };

    for (url of urls) {
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].value == url.name) { openTabs.push(url.url) };
        };
    };

    disco = document.getElementById('disco').value.replace(" ", "+");
    artista = document.getElementById('artista').value.replace(" ", "+");

    var a = new Array(disco, artista).join("+");


    for (let i = 0; i < openTabs.length; i++) {
        chrome.tabs.create({ url: openTabs[i] + a });
    }

    shops = [];
    openTabs = [];
}






