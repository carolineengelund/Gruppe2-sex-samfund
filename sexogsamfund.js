var antalKopi = 0;
var timerKopi;
$(window).on("load", start);

function start() {
    console.log("start");
    $("#start").show();
    $("#baggrund").hide();
    $("#peter_sprite").hide();
    $("#fugl_sprite").hide();
    $("#sky").hide();
    $("#del_knap_container").hide();
    $("#slet_knap_container").hide();

    $(".start_knap_btn").on("click", startHistorie);
}

function startHistorie() {
    console.log("startHistorie");
    $(".start_knap_btn").off("click", startHistorie);

    $("#start").hide();
    $("#baggrund").show();
    $("#peter_sprite").show();
    $("#fugl_sprite").show();
    $("#sky").show();

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

    $(".del_knap_btn").show();
    $(".slet_knap_btn").show();

    $(".del_knap_btn").on("click", delingAfBillede);
    $(".slet_knap_btn").on("click", SletningAfBillede);
}


function delingAfBillede() {
    console.log("delingAfBillede");
    $(".del_knap_btn").off("click", delingAfBillede);

    timerKopi = setInterval(kopier, 500);
}

function kopier() {
    console.log("kopier");
    antalKopi++;
    if (antalKopi <= 20) {
        $(".del_container").clone().removeClass("del_container").addClass("del_container_kopi").appendTo("#del_scene").css({
            "left": randomIntFromInterval(1, 90) + "%",
            "top": randomIntFromInterval(1, 90) + "%"
        });
    } else {
        clearInterval(timerKopi);
        /* jeres nye function */
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}




//
//
//
//var antalKopi = 0;
//var timerKopi;
//$(".del_btn").on("click", delBtnHandler);
//
//function delBtnHandler() {
//    timerKopi = setInterval(kopier, 500);
//}
//
//function kopier() {
//    console.log("kopier");
//    antalKopi++;
//    if (antalKopi <= 20) {
//        $(".box_container").clone().removeClass("box_container").addClass("box_container_kopi").appendTo("#scene").css({
//            "left": randomIntFromInterval(1, 90) + "%",
//            "top": randomIntFromInterval(1, 90) + "%"
//        });
//    } else {
//        clearInterval(timerKopi);
//        /* jeres nye function */
//    }
//}
//
//function randomIntFromInterval(min, max) {
//    return Math.floor(Math.random() * (max - min + 1) + min);
//}
