// Expand/Collapse mobile menu in navbar on icon click
$("#navbar-v2 .toggler-icon").click(function() {
    // if mobile menu is already expanded, collapse it
    if ($("#navbar-v2").hasClass("mobile-navbar-expanded")) {
        $("#navbar-v2").removeClass("mobile-navbar-expanded");
    }

    // if mobile menu is already collapsed, expand it
    else {
        $("#navbar-v2").addClass("mobile-navbar-expanded");
    }
});

// Prevent mobile menu from being displayed when window width >= 768px
$(window).resize(function() {
    if ($(window).width() > 767) {
        $("#navbar-v2").removeClass("mobile-navbar-expanded");
    }
});

// Submission and input validation for contact form in Contact page
$("#contact-form form").submit(function() {
    // Full Name (required)
    if ($("#contact-full-name").val() == "") {
        $("#contact-full-name").removeClass("is-valid");
        $("#contact-full-name").addClass("is-invalid");
    } else {
        $("#contact-full-name").removeClass("is-invalid");
        $("#contact-full-name").addClass("is-valid");
    }
    
    // Phone Number (optional)
    if($("#contact-phone-number").val().length == 0){
        $("#contact-phone-number").removeClass("is-invalid");
        $("#contact-phone-number").removeClass("is-valid");
    }
    else if (
        $("#contact-phone-number").val().replace(/\D/g,'').length != 10 || 
        $("#contact-phone-number").val().length!=10
    ) {
        $("#contact-phone-number").removeClass("is-valid");
        $("#contact-phone-number").addClass("is-invalid");
    } else {
        $("#contact-phone-number").removeClass("is-invalid");
        $("#contact-phone-number").addClass("is-valid");
    }

    // Email Address (required)
    if ($("#contact-email-address").val() == "") {
        $("#contact-email-address").removeClass("is-valid");
        $("#contact-email-address").addClass("is-invalid");
    } else {
        $("#contact-email-address").removeClass("is-invalid");
        $("#contact-email-address").addClass("is-valid");
    }
    
    // Subject (optional)
    if ($("#contact-subject").val() === "default") {
        $("#contact-subject").removeClass("is-valid");
        $("#contact-subject").removeClass("is-invalid");
    } else {
        $("#contact-subject").removeClass("is-invalid");
        $("#contact-subject").addClass("is-valid");
    }
    
    // How'd you hear about us? (optional)
    if ($("#contact-referral").val() == "") {
        $("#contact-referral").removeClass("is-valid");
    } else {
        $("#contact-referral").addClass("is-valid");
    }

    // Message (required)
    if ($("#contact-message").val() == "") {
        $("#contact-message").removeClass("is-valid");
        $("#contact-message").addClass("is-invalid");
    } else {
        $("#contact-message").removeClass("is-invalid");
        $("#contact-message").addClass("is-valid");
    }
        
    if ($("#contact-full-name").val() != "" &&
        $("#contact-email-address").val() != "" &&
        $("#contact-message").val() != "" &&
        ($("#contact-phone-number").val() == "" || ($("#contact-phone-number").val().length == 10 && $("#contact-phone-number").val().replace(/\D/g,'').length == 10))) 
        return true;
    else
        return false;
});

// Submission and input validation for email subscription form in Footer
$("#email-form").submit(function() {
    // Email Address (required)
    if ($("#email-form input").val() == "") {
        $("#email-form input").removeClass("is-valid");
        $("#email-form input").addClass("is-invalid");
        return false;
    } else {
        $("#email-form input").removeClass("is-invalid");
        $("#email-form input").addClass("is-valid");
        return true;
    }
});

// Remove form validity classes if a user edits the input
$("input").on('input', function() {
    $(this).removeClass("is-valid");
    $(this).removeClass("is-invalid");
});
$("textarea").on('input', function() {
    $(this).removeClass("is-valid");
    $(this).removeClass("is-invalid");
});
$("select").on('input', function() {
    $(this).removeClass("is-valid");
    $(this).removeClass("is-invalid");
});