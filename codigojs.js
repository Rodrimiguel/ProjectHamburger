var navigationBar = false;

function F_replegar() {
    var aside = document.getElementById("aside");

    minimizar();

    cambiosMinimizar();

    aside.classList.remove("aside");
    aside.classList.add("smallClass");
}

function F_desplegar() {
    maximizar();
    var aside = document.getElementById("aside");
    cambiosMaximizar();


    aside.classList.remove("smallClass");
    aside.classList.add("aside");
}

function cambiarTamaño() { }

function minimizar() {
    var texts = document.getElementsByName("sub");
    var icons = document.getElementsByName("ico");

    var sidebar = (document.getElementById("aside").style.textAlign = "center");
    var adm = document.getElementsByName("adm");

    for (var i = 0; i < adm.length; i++) {

    }


    for (var i = 0; i < texts.length; i++) {
        texts[i].classList.remove("sublabel");
        texts[i].classList.add("achicar_textos");
    }

    for (var i = 0; i < icons.length; i++) {
        icons[i].classList.remove("icons");
        icons[i].classList.add("achicar_iconos");
    }

    document.getElementById("burger").style.color = "13828D";
}

function maximizar() {
    var texts = document.getElementsByName("sub");
    var icons = document.getElementsByName("ico");

    var sidebar = (document.getElementById("aside").style.textAlign = "left");


    for (var i = 0; i < texts.length; i++) {
        texts[i].classList.add("sublabel");
        texts[i].classList.remove("achicar_textos");
    }

    for (var i = 0; i < icons.length; i++) {
        icons[i].classList.add("icons");
        icons[i].classList.remove("achicar_iconos");
    }

    document.getElementById("burger").style.color = "";
}

function navbar() {
    if (navigationBar == false) {
        F_replegar();
        navigationBar = true;
    } else {
        F_desplegar();
        navigationBar = false;
    }
}

function cambiosMaximizar() {
    let cadm = document.getElementsByName("adm");

    for (var i = 0; i < cadm.length; i++) {
        cadm[i].classList.remove("ocultame");
        cadm[i].classList.add("desocultame");
    }

    document.getElementById("subtitles").style.position = "relative";
    document.getElementById("subtitles").style.top = "40px";


}

function cambiosMinimizar() {
    let cadm = document.getElementsByName("adm");

    for (var i = 0; i < cadm.length; i++) {
        cadm[i].classList.remove("ocultame");
        cadm[i].classList.add("desocultame");
    }


    document.getElementById("subtitles").style.position = "fixed";
    document.getElementById("subtitles").style.top = "100px";


}


function create(opc) {


    switch (opc) {
        case 1:
            document.getElementById("pres").innerText = "Customer Account";
            break;
        case 2:
            document.getElementById("pres").innerText = "Access Media";
            break;
        case 3:
            document.getElementById("pres").innerText = "Statistics";
            break;
        case 4:
            document.getElementById("pres").innerText = "Devices";
            break;
        case 5:
            document.getElementById("pres").innerText = "Tariffication";
            break;
        case 6:
            document.getElementById("pres").innerText = "Agents Account";
            break;
    }

}