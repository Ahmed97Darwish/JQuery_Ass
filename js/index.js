/// <reference types="../@types/jquery" />


$(document).ready(function () {

    const sidebarContent = $("#sidebar .content").outerWidth();
    $("#sidebar .icon").on("click", function () {
        if ($("#sidebar .content").css("left") == "0px") {
            $("#sidebar .content").animate({left: -sidebarContent}, 1500);
            $("#sidebar .icon").animate({left: 0}, 1500);
            $("#header").animate({marginLeft: 0}, 1500);
        } else {
            $("#sidebar .content").animate({left: "0px"}, 1500);
            $("#sidebar .icon").animate({left: sidebarContent}, 1500);
            $("#header").animate({marginLeft: sidebarContent}, 1500);
        }
    });


    $("#sidebar .content .closeBtn").on("click", function () {
        if ($("#sidebar .content").css("left") == "0px") {
            $("#sidebar .content").animate({left: -sidebarContent}, 1500);
            $("#sidebar .icon").animate({left: 0}, 1500);
            $("#header").animate({marginLeft: 0}, 1500);
        }
    })


    $("#singer .content h2").on("click", function(){
        $("#singer .content p").not($(this).next()).slideUp(1000);
        $(this).next().slideToggle(1000);
    });


    var countDownDate = new Date("jul 26, 2024 15:00:00").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(".days").html(`${days} D`);
        $(".hours").html(`${hours} H`);
        $(".minutes").html(`${ minutes } M`);
        $('.seconds').html(`${ seconds} S`);

        $(".event").html(`<strong class='text-success'>Be Ready: </strong>The Route Tech Summit After <strong>${days}</strong> Days <strong>${hours}</strong> Hours <strong>${minutes}</strong> Minutes <strong>${seconds}</strong> Seconds `);

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);


    var maxLength = 100;
    $("textarea").on("keyup", function() {
        var length = $(this).val().length;
        var AmountLeft = maxLength-length;
        if(AmountLeft<=0) {
            $("#countDown").html("<div class='alert alert-danger'>Your Available Character Finished</div>");                
        } else{
            $("#countDown").html(AmountLeft);
        }
    });

    new WOW().init();

});




