// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

$(".to-second-page2").on('dblclick', function () {
    overlay();
});

function overlay() {
    var e1 = document.getElementById('modal-overlay');
    e1.style.visibility = (e1.style.visibility == "visible") ? "hidden" : "visible";
}

$(".click-me").on('dblclick', function () {
    var me = this;
    setTimeout(function () {
        $("iframe").removeClass("full-screen-style");
        $(me).parent().find("iframe").addClass("full-screen-style");
        $(".exit-fullscreen").show();
    }, 10)
});

$(".exit-fullscreen").on('dblclick', function () {
    $("iframe").removeClass("full-screen-style");
    $(".exit-fullscreen").hide();
});

$(".to-second-page").on('dblclick', function () {
    $(".first-page").hide();
    $(".second-page").show();
});

$(".back-to-indexpage").on('dblclick', function () {
    $(".first-page").show();
    $(".second-page").hide();
});


var socket = io("http://localhost:7001/hr");

// 登录
socket.emit('bigsreen_online', {});

socket.on('receive_commad', function (commad) {
    if (commad) {
        switch (commad) {
            case 'big_to_four': big_to_four(); break;
            case 'four_to_big': four_to_big(); break;
            case 'left_up_fullscreen': left_up_fullscreen(); break;
            case 'left_up_exit_fullscreen': left_up_exit_fullscreen(); break;
            case 'right_up_fullscreen': right_up_fullscreen(); break;
            case 'right_up_exit_fullscreen': right_up_exit_fullscreen(); break;
            case 'left_down_fullscreen': left_down_fullscreen(); break;
            case 'left_down_exit_fullscreen': left_down_exit_fullscreen(); break;
            case 'right_down_fullscreen': right_down_fullscreen(); break;
            case 'right_down_exit_fullscreen': right_down_exit_fullscreen(); break;
            default: break;
        }
    }
});

function big_to_four() {
    $(".first-page").hide();
    $(".second-page").show();
}
function four_to_big() {
    $(".first-page").show();
    $(".second-page").hide();
}
function left_up_fullscreen() {
    $("iframe").removeClass("full-screen-style");
    $("#leftUpUrl_f").parent().find("iframe").addClass("full-screen-style");
    $(".exit-fullscreen").show();
}
function left_up_exit_fullscreen() {
    $("iframe").removeClass("full-screen-style");
    $(".exit-fullscreen").hide();
}
function right_up_fullscreen() {
    $("iframe").removeClass("full-screen-style");
    $("#rightUpUrl_f").parent().find("iframe").addClass("full-screen-style");
    $(".exit-fullscreen").show();
}
function right_up_exit_fullscreen() {
    $("iframe").removeClass("full-screen-style");
    $(".exit-fullscreen").hide();
}
function left_down_fullscreen() {
    $("iframe").removeClass("full-screen-style");
    $("#leftDownUrl_f").parent().find("iframe").addClass("full-screen-style");
    $(".exit-fullscreen").show();
}
function left_down_exit_fullscreen() {
    $("iframe").removeClass("full-screen-style");
    $(".exit-fullscreen").hide();
}
function right_down_fullscreen() {
    $("iframe").removeClass("full-screen-style");
    $("#rightDownUrl_f").parent().find("iframe").addClass("full-screen-style");
    $(".exit-fullscreen").show();
}
function right_down_exit_fullscreen() {
    $("iframe").removeClass("full-screen-style");
    $(".exit-fullscreen").hide();
}