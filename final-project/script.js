$(document).ready(function () {
    $(".faq").click(function () {
        $(".button-content").toggleClass("show");
    });

    $("button").click(function () {
        alert("Text: " + $("#txt-alert").text());
    });
});