$(window).on("load", function() {
    $("#loader").addClass("fade-out");
    setTimeout(() => {
        $("#loader").css("display", "none");
        $("#content").css("opacity", "1");
    }, 800);
});

$(document).ready(function(){
    $(".hamburger").click(function(){
        $(".side-menu").toggleClass("active");
    });

    // Hide menu automatically when resizing to desktop
    $(window).resize(function() {
        if ($(window).width() > 768) {
            $(".side-menu").removeClass("active");
        }
    });
});


//Owl Carousel

$('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            // nav: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        })
