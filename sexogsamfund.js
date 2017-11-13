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

    $("#peter_sprite").on("animationend", byTelefon);
}





//
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
