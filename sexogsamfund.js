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


    $("#peter_container").on("animationend", peterVinker);
}


function peterVinker() {
    console.log("peterVinker");
    $("#peter_container").off("animationend", peterVinker);

    $("#peter_container").removeClass("peter_walk_ind");
    $("#peter_sprite").removeClass("peter_walkcycle");

    $("#peter_sprite").addClass("peter_vinker_cycle");
}
