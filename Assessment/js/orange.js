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


