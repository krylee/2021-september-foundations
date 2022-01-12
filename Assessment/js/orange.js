$(function () {
    $("#about").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});

$(function () {
    $("a[href='#schedule']").click(function () {
        $("#schedule").addClass("show");
    });
});

$(function () {
    $(".close").click(function () {
        $("#schedule").removeClass("show");
    });
});

$(function () {
    $("a[href='#contact']").click(function () {
        $("#contact").addClass("spin");
    });
});

$(function () {
    $(".close").click(function () {
        $("#contact").removeClass("spin");
    });
});


