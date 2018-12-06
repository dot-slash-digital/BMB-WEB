$(window).scroll(function() {
    /* console.log($(window).scrollTop()); */
    if ($(window).scrollTop() > 630 && $(window).scrollTop() < 1300) {
        $("#bg").addClass("enable-bg");
        $("#home-page").addClass("enable-color");
    } else {
        $("#bg").removeClass("enable-bg");
        $("#home-page").removeClass("enable-color");
    }
});

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