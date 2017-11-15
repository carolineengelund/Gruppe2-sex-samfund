var antalKopi = 0;
var timerKopi;
var antalFoto = 0;
var erDerKlikketPaaAlleFotoFlag = false;
$(window).on("load", start);

function start() {
    console.log("start");
    $("#start").show();
    $("#baggrund").hide();
    $("#del_scene").hide();
    $("#peter_sprite").hide();
    $("#fugl_sprite").hide();
    $("#del_knap_container").hide();
    $("#slet_knap_container").hide();
    $(".retry_knap_btn").hide();
    $("#slutside").hide();
    $("#pige_scene").hide();
    $("#foto_slettes_scene").hide();
    $("#godt_goet_tekst").hide();

    $(".start_knap_btn").on("click", startHistorie);
}

function startHistorie() {
    console.log("startHistorie");
    $(".start_knap_btn").off("click", startHistorie);

    $("#start").hide();
    $("#baggrund").show();
    $("#peter_sprite").show();
    $("#fugl_sprite").show();

    $("#peter_container").addClass("peter_walk_ind");
    $("#peter_sprite").addClass("peter_walkcycle");
    $("#fugl_container").addClass("fugl_walk_ind");
    $("#fugl_sprite").addClass("fugl_walkcycle");

    $("#peter_sprite").on("animationend", peterVinker);
}

function peterVinker() {
    console.log("peterVinker");
    $("#peter_sprite").off("animationend", peterVinker);

    $("#peter_container").removeClass("peter_walk_ind");
    $("#peter_sprite").removeClass("peter_walkcycle");
    $("#peter_sprite").addClass("peter_vinker_cycle");
    $("#heyhvadsaa")[0].play();
    $("#heyhvadsaa")[0].volume = 0.5;
    $("#peter_sprite").on("animationend", peterFremad);
}

function peterFremad() {
    console.log("peterFremad");
    $("#peter_sprite").off("animationend", peterFremad);
    $("#peter_sprite").removeClass("peter_vinker_cycle");
    $("#peter_sprite").addClass("peter_fremad_cycle");
    $("#peter_sprite").on("animationend", valg);
}

function valg() {
    console.log("valg");
    $("#peter_sprite").off("animationend", valg);
    $("#delingafbillede")[0].play();
    $("#delingafbillede")[0].volume = 0.5;
    $("#del_knap_container").show();
    $("#slet_knap_container").show();

    $(".del_knap_btn").on("click", delingAfBillede);
    $("#del_knap_container").addClass("puls_knap_del");

    $(".slet_knap_btn").on("click", sletningAfBillede);
    $("#slet_knap_container").addClass("puls_knap_slet");
}
/****************************** SCENE OVER BYEN START********************************/

function delingAfBillede() {
    console.log("delingAfBillede");
    $(".del_knap_btn").off("click", delingAfBillede);
    $("#del_knap_container").removeClass("puls_knap_del");

    $("#scene").hide();
    $("#del_scene").show();

    timerKopi = setInterval(kopier, 300);
}

function kopier() {
    console.log("kopier");
    antalKopi++;
    if (antalKopi <= 20) {

        $("#facebookdeling")[0].play();
        $("#facebookdeling")[0].volume = 0.5;
        $(".del_container").clone().removeClass("del_container").addClass("del_container_kopi").appendTo("#del_scene").css({
            "left": randomIntFromInterval(1, 90) + "%",
            "top": randomIntFromInterval(1, 62) + "%"
        });
    } else {
        clearInterval(timerKopi);
        /* jeres nye function */
        pigeOne();
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/****************************** SCENE TIL PIGEN START********************************/

function pigeOne() {
    console.log("pigeOne");
    $("#del_scene").hide();
    $("#pige_scene").show();
    $("#forskraeket")[0].play();
    $("#forskraeket")[0].volume = 0.5;
    $("#pige1_container").addClass(".pige1_sprite");
    $("#pige2_container").hide();
    $("#pige3_container").hide();
    setTimeout(pigeTwo, 2000);
}

function pigeTwo() {
    console.log("pigeTwo");
    $("#pige2_container").show();
    $("#graeder")[0].play();
    $("#graeder")[0].volume = 0.5;
    setTimeout(pigeThree, 2000);
}

function pigeThree() {
    console.log("pigeThree");
    $("#pige3_container").show();

    setTimeout(delSlutTekst, 3000);
}

/********** Ny scene start - slet foto *********/

function sletningAfBillede() {
    console.log("sletningAfBillede");
    $(".slet_knap_btn").off("click", sletningAfBillede);
    $("#slet_knap_container").removeClass("puls_knap_slet");
    $("#scene").hide();
    $("#foto_slettes_scene").show();
    $(".foto").addClass("puls");
    $(".foto").on("click", klikPaaFoto);
}

function klikPaaFoto() {
    console.log("klikPaaFoto");
    $(this).off("click", klikPaaFoto);
    $(this).hide();
    antalFoto++;
    if (antalFoto >= 20) {
        erDerKlikketPaaAlleFotoFlag = true;
        $(".foto").off("click", klikPaaFoto);
        $(".foto").removeClass("puls");
        godtValgt();
    }
    console.log("erDerKlikketPaaAlleFotoFlag er lig med " + erDerKlikketPaaAlleFotoFlag);
}

function delSlutTekst() {
    console.log("delSlutTekst");
    $("#graeder")[0].pause();
    $("#pige_scene").hide();
    $("#del_scene").hide();
    $("#slutside").show();
    $(".retry_knap_btn").show();
    $(".retry_knap_btn").on("click", start);
}

function godtValgt() {
    console.log("godtValgt");
    $("#foto_slettes_scene").hide();
    $("#godt_goet_tekst").show();
    setTimeout(sletSlutTekst, 4000);
}

function sletSlutTekst() {
    console.log("sletSlutTekst");
    $("#godt_goet_tekst").hide();
    $("#foto_slettes_scene").hide();
    $("#slutside").show();
    $(".retry_knap_btn").show();
    $(".retry_knap_btn").on("click", provigen);
}

function provigen() {
    console.log("provigen");
    $(".retry_knap_btn").off("click", provigen);
    location.reload();
}
