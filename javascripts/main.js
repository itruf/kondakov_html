//JS samples
function winop() {
    windop = window.open("http://www.google.ru", "GOOGLE", "height=120,width=300");
}

function wincl() {
    windop.close();
}

//BOM samples
function showAgent() {
    alert(navigator.userAgent);
}

function showHref() {
    alert(location.href);
}

//DOM samples
function makeBGRed() {
    if (document.body.style.background.valueOf() === new String("red").valueOf()) {
        document.body.style.background = "";
    } else {
        document.body.style.background = "red";
    }
}

function showSectionsCount() {
    alert(document.getElementsByTagName('section').length);
}

//jQuery

$(document).ready(function() {

    $("#hideable_btn").click(function() {
        $(this).hide();
    });

    $("#shake_btn").click(function() {
        $(this).effect("shake");
    });
});
