var antalKopi = 0;
var timerKopi;
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
    $("#retry_knap_btn").hide();
    $("#pige_scene").hide();


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


    timerKopi = setInterval(kopier, 500);
}

function kopier() {
    console.log("kopier");
    antalKopi++;
    if (antalKopi <= 20) {
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
    $("#pige_scene").show();

    $("#pige_sprite").addClass("pige_one_sprite");

    $("pige_container").on("animationend", pigeTwo);
}

function pigeTwo() {
    console.log("pigeTwo");
    $("pige_container").on("animationend", pigeTwo);
}


function pigeThree() {
    console.log("pigeThree");
    $("pige_container").on("animationend", pigeThree);
    $(".slet_knap_btn").on("click", sletningAfBillede);

}

function sletningAfBillede() {
    console.log("sletningAfBillede");
    $(".slet_knap_btn").off("click", sletningAfBillede);
    $("#slet_knap_container").removeClass("puls_knap_slet");


    $("#scene").hide();
    $("#del_scene").show();
}




/* FORSØG PÅ LINK EFTER BILLEDER ER KOMMET FREM. */

//$("#del_knap_container").on("animationend", slutTekst);
//setTimeout(saaErTidenGaaet, 5000);

//function saaErTidenGaaet() {
//    console.log("saaErTidenGaaet");
//    $("#del_knap_container").off("animationend", saaErTidenGaaet);
//
//    $("#scene").hide();
//    $("#del_scene").hide();
//
//    $("#slutside").show();
//
//}


//
//function slutTekst() {
//    console.log("slutTekst");
//    $("#del_knap_container").off("animationend", slutTekst);
//
//    $("#scene").hide();
//    $("#del_scene").hide();
//
//    $("#slutside").show();
//
//
//}
