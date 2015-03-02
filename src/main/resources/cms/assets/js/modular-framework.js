/* --------------------------------
    TABLE OF CONTENTS
-----------------------------------
    Document ready
    Inits
    Global functions

----- */


/* --------------------------------
    Document ready
-------------------------------- */
$(function() {
    if (checkExists($(".top-nav"))) {

        $(".top-nav").not(".docs .top-nav").prepend('<div class="top-nav-trigger"><span class="toggler"></span></div>');

        $(".top-nav-trigger").click(function() {
            $(this).parent().toggleClass("top-nav-open");
        });

        $(".top-nav li.dropdown").click(function() {
            $(".top-nav li.dropdown").not(this).removeClass("open");
            $(this).toggleClass("open");
        });
    }

    if (checkExists($(".eyecatcher.full-height"))) {
        setEyecatcherFullHeight();
        $( window ).resize(function() {
            setEyecatcherFullHeight();
        });
    }

    if (checkExists($(".side-nav"))) {
        $(".content-wrapper").prepend('<div class="side-nav-trigger"><span class="toggler"></span></div>');
        $(".side-nav-trigger").click(function() {
            $(".side-nav").toggleClass("closed");
            $(".side-nav-trigger").toggleClass("open");
            $(".content-wrapper").toggleClass("side-nav-open");

            triggerResize();
        });
    }

    if (checkExists($(".flexslider"))) {
        initFlexslider();
    }    
})


/* --------------------------------
    Inits
-------------------------------- */
function setEyecatcherFullHeight() {
    $(".eyecatcher.full-height").css({
        "height": $(window).height()
    });
}

function initFlexslider() {
    $('.flexslider').flexslider({
        animation: "slide"
    });
}


/* --------------------------------
    Global functions
-------------------------------- */
function checkExists($elem) {
    if ($elem.length) { return true; }
    return false;
}

function triggerResize() {
    var t = setTimeout(function() {
        $(window).resize();
    }, 200);
}