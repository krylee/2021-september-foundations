$(function () {
    let errorWasLast = false;
    let equalWasLast = false;
    let display = $("#display");
    $(".number, .operator").click(function () {
        let label = $(this).text().trim();
        if (display.text() === "0" || errorWasLast || (equalWasLast && $(this).hasClass(".number"))) {
            display.empty();
            errorWasLast = false;
            equalWasLast = false;
        }
        if (display.text().length < 12) {
            display.append(label);
        }
    });

    $(".clear").click(function () {
        display.empty().append("0");
    });

    $(".equal").click(function () {
        try {
            let answer = eval(display.text()).toString();
            display.empty().append(answer);
        } catch (error) {
            errorWasLast = true;
            display.empty().append("*ERROR*");
        }
    });
});

// click a number - number displays
// click an operator - operator dislays
// click on a number again - number displays after operator
// click on equal - display clears and the answer displays
// click on operator after equals - operator displays after answer
// click on number after equals - display clears and number displays
// click on clear - display clears and 0 displays