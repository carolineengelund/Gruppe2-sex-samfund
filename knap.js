$(window).on("load", start);

function start() {
    console.log("start");
    $("#start").show();
    $("#baggrund").hide();
    $("#peter_sprite").hide();
    $("#fugl_sprite").hide();
    $("#sky").hide();

    $(".start_knap_btn").on("click", startHistorie);
}

function startHistorie() {
    console.log("startHistorie");
    $(".start_knap_btn").off("click", startHistorie);

    $(".peter_ind_btn").on("click", peterIndBtnHandler);
}

function peterIndBtnHandler() {
    console.log("Du har klikket på peter ind");

    $("#peter_container").addClass("peter_walk_ind");
}

$(".peter_vinker_btn").on("click", peterVinkerBtnHandler);

function peterVinkerBtnHandler() {
    console.log("Du har klikket på peter vinker");
    $("#peter_container").off("animationend", peterVinker);

    $("#peter_container").removeClass("peter_walk_ind");
    $("#peter_sprite").removeClass("peter_walkcycle");

    $("#peter_sprite").addClass("peter_vinker_cycle");
}

$(".peter_mod_bruger_btn").on("click", peterModBrugerBtnHandler);

function peterModBrugerBtnHandler() {
    console.log("Du har klikket på pige vend");
    $("#pige_container").removeClass("pige_move_down");
    $("#pige_container").addClass("pige_3_move_not");
    $("#pige_sprite").addClass("pige_3_walkcycle");
}


$(".pige_bobler_btn").on("click", PigeBoblerBtnHandler);

function PigeBoblerBtnHandler() {
    console.log("Du har klikket på pige så der kommer bobler");
    $("#pige_container").removeClass("pige_3_move_not");
    $("#pige_sprite").removeClass("pige_3_walkcycle");


    $("#pige_container").addClass("pige_4_move_not");
    $("#pige_sprite").addClass("pige_4_walkcycle");
}

$(".haj_mund_btn").on("click", HajMundBtnHandler);

function HajMundBtnHandler() {
    console.log("Du har klikket på haj med tænder");
    $("#haj_container").removeClass("haj_move");
    $("#haj_sprite").removeClass("haj_øje_walkcycle");


    $("#haj_container").addClass("haj_move_not_mund");
    $("#haj_sprite").addClass("haj_mund_walkcycle");
}

$(".pige_op_btn").on("click", PigeOpBtnHandler);

function PigeOpBtnHandler() {
    console.log("Du har klikket på pige op");

    $("#pige_container").removeClass("pige_4_move_not");
    $("#pige_sprite").removeClass("pige_4_walkcycle");


    $("#pige_container").addClass("pige_6_move_up");
    $("#pige_sprite").addClass("pige_6_walkcycle");


}
