$(document).ready(function () {
    // Check if an element is scrolled into view
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    // If element is scrolled into view, fade it in
    $(window).scroll(function () {
        $('.scroll-animations .animate__animated').each(function () {
            if (isScrolledIntoView(this) == true) {
                $(this).addClass('animate__fadeInLeft');
            }
        });
    });

    // Click animations
    $('button').on('click', function () {
        /*
        If any input is empty, make its border red and shake it. After the 
        animation is complete, remove the shake and animated classes so that 
        so that the animation can repeat
        */
        
        //Check name input
        if ($("#name").val() === "") {
            $("#name")
                .addClass("form-error animate__animated animate__shakeX")
                .one(
                    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                    function () {
                        $(this).removeClass("animate__animated animate__shakeX");
                    }
                );
        } else {
            $("#name").removeClass("form-error");
        }

        //Check email input
        if ($("#email").val() === "") {
            $("#email")
                .addClass("form-error animate__animated animate__shakeX")
                .one(
                    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                    function () {
                        $(this).removeClass("animate__animated animate__shakeX");
                    }
                );
        } else {
            $("#email").removeClass("form-error");
        }

        //Check message textarea
        if ($("#message").val() === "") {
            $("#message")
                .addClass("form-error animate__animated animate__shakeX")
                .one(
                    "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                    function () {
                        $(this).removeClass("animate__animated animate__shakeX");
                    }
                );
        } else {
            $("#message").removeClass("form-error");
        }
    });
});