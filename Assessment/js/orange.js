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
    $("a[href='contact']").click(function () {
        $("#contact").addclass("show");
    });
});



