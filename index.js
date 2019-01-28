// sets the opacity of the gradient background on the Home page
$(window).scroll(function() {
    var curr_pos = $(window).scrollTop(); // current position of top of window
    var ckpt_1 = $("#intro-text-col > p.text-sub").offset().top;            // below: 0%                  |   above: ramp up to 100%
    var ckpt_2 = $("#tagline-section > span:nth-child(1)").offset().top;    // below: ramp up to 100%     |   above: 100%
    var ckpt_3 = $("#about-text-col > p.text-sub").offset().top;            // below: 100%                |   above: ramp down to 0%
    var ckpt_4 = $("#divider-3").offset().top;                              // below: ramp down to 0%     |   above: 0%
    
    // on screen sizes where ckpt_4 cannot be reached because the end of the Home page was reached first, move ckpt_4 up
    if ($(document).height() - $(window).height() < $("#divider-3").offset().top)
        ckpt_4 = $(document).height() - $(window).height() - 25;
    
    if (ckpt_1 <= curr_pos && curr_pos < ckpt_2)        // between checkpoint 1 & 2
        $("#bg").css("opacity", (curr_pos - ckpt_1) / (ckpt_2 - ckpt_1));
    else if (ckpt_2 <= curr_pos && curr_pos < ckpt_3)   // between checkpoint 2 & 3
        $("#bg").css("opacity", 1);
    else if (ckpt_3 <= curr_pos && curr_pos < ckpt_4)   // between checkpoint 3 & 4
        $("#bg").css("opacity", 1 - ((curr_pos - ckpt_3) / (ckpt_4 - ckpt_3)));
    else                                                // before checkpoint 1 or after checkpoint 4
        $("#bg").css("opacity", 0);
});

// sets the background image sizes for the Drinks and Apparel sections on the Shop page
$(window).resize(function() {
    // if screen width is 767px or smaller
    if ($("body").width() < 768) {
        $("#drinks-container-bg").css("height", "calc((100vh - 101px - 98px) / 2)");
        $("#apparel-container-bg").css("height", "calc((100vh - 101px - 98px) / 2)");
        $("#apparel-container-bg").css("margin", "calc((100vh - 101px - 98px) / 2) 0 0 0");
        $("#drinks-container, #drinks-container-bg, #apparel-container, #apparel-container-bg").css("width", "100vw");
        $(".shop-text p").css("line-height", "calc((100vh - 101px - 98px) / 2)");
    // if screen width is 768px or larger
    } else {
        $("#drinks-container, #drinks-container-bg, #apparel-container, #apparel-container-bg").css("width", "50vw");
        $("#apparel-container-bg").css("margin", "0 0 0 50vw");
        $("#drinks-container-bg, #apparel-container-bg").css("height", "calc(100vh - 101px - 98px)");
        $(".shop-text p").css("line-height", "calc(100vh - 101px - 98px)");
    }
});

var hover_size = "20px";

// hover animation for Drinks section on the Shop page
$("#drinks-container").hover(function() {
    // on hover
    $("#drinks-container-bg").css("filter", "grayscale(0) contrast(1)");
    // if screen width is 767px or smaller
    if ($("body").width() < 768) {
        $("#drinks-container .shop-text p").css("line-height", "calc(((100vh - 101px - 98px) / 2) + " + hover_size + ")");
        $("#apparel-container .shop-text p").css("line-height", "calc(((100vh - 101px - 98px) / 2) - " + hover_size + ")");
        $("#drinks-container-bg").css("height", "calc(((100vh - 101px - 98px) / 2) + " + hover_size + ")");
        $("#apparel-container-bg").css("height", "calc(((100vh - 101px - 98px) / 2) - " + hover_size + ")");
        $("#apparel-container-bg").css("margin-top", "calc(((100vh - 101px - 98px) / 2) + " + hover_size + ")");
    // if screen width is 768px or larger
    } else {
        $("#drinks-container, #drinks-container-bg").css("width", "calc(50vw + " + hover_size + ")");
        $("#apparel-container, #apparel-container-bg").css("width", "calc(50vw - " + hover_size + ")");
        $("#apparel-container-bg").css("margin-left", "calc(50vw + " + hover_size + ")");
    }
}, function() {
    // off hover
    $("#drinks-container-bg").css("filter", "grayscale(1) contrast(0.3)");
    // if screen width is 767px or smaller
    if ($("body").width() < 768) {
        $("#drinks-container .shop-text p").css("line-height", "calc((100vh - 101px - 98px) / 2)");
        $("#apparel-container .shop-text p").css("line-height", "calc((100vh - 101px - 98px) / 2)");
        $("#drinks-container-bg").css("height", "calc((100vh - 101px - 98px) / 2)");
        $("#apparel-container-bg").css("height", "calc((100vh - 101px - 98px) / 2)");
        $("#apparel-container-bg").css("margin-top", "calc((100vh - 101px - 98px) / 2)");
    // if screen width is 768px or larger
    } else {
        $("#drinks-container, #drinks-container-bg, #apparel-container, #apparel-container-bg").css("width", "50vw");
        $("#apparel-container-bg").css("margin-left", "50vw");
    }
});

// hover animation for Apparel section on the Shop page
$("#apparel-container").hover(function() {
    // on hover
    $("#apparel-container-bg").css("filter", "grayscale(0) contrast(1)");
    // if screen width is 767px or smaller
    if ($("body").width() < 768) {
        $("#apparel-container .shop-text p").css("line-height", "calc(((100vh - 101px - 98px) / 2) + " + hover_size + ")");
        $("#drinks-container .shop-text p").css("line-height", "calc(((100vh - 101px - 98px) / 2) - " + hover_size + ")");
        $("#apparel-container-bg").css("height", "calc(((100vh - 101px - 98px) / 2) + " + hover_size + ")");
        $("#drinks-container-bg").css("height", "calc(((100vh - 101px - 98px) / 2) - " + hover_size + ")");
        $("#apparel-container-bg").css("margin-top", "calc(((100vh - 101px - 98px) / 2) - " + hover_size + ")");
    // if screen width is 768px or larger
    } else {
        $("#apparel-container, #apparel-container-bg").css("width", "calc(50vw + " + hover_size + ")");
        $("#drinks-container, #drinks-container-bg").css("width", "calc(50vw - " + hover_size + ")");
        $("#apparel-container-bg").css("margin-left", "calc(50vw - " + hover_size + ")");
    }
}, function() {
    // off hover
    $("#apparel-container-bg").css("filter", "grayscale(1) contrast(0.3)");
    // if screen width is 767px or smaller
    if ($("body").width() < 768) {
        $("#apparel-container .shop-text p").css("line-height", "calc((100vh - 101px - 98px) / 2)");
        $("#drinks-container .shop-text p").css("line-height", "calc((100vh - 101px - 98px) / 2)");
        $("#apparel-container-bg").css("height", "calc((100vh - 101px - 98px) / 2)");
        $("#drinks-container-bg").css("height", "calc((100vh - 101px - 98px) / 2)");
        $("#apparel-container-bg").css("margin-top", "calc((100vh - 101px - 98px) / 2)");
    // if screen width is 768px or larger
    } else {
        $("#drinks-container, #drinks-container-bg, #apparel-container, #apparel-container-bg").css("width", "50vw");
        $("#apparel-container-bg").css("margin-left", "50vw");
    }
});