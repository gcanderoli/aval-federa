$(function () {

    function whichTransitionEvent() {
        var t,
            el = document.createElement("fakeelement");

        var transitions = {
            "transition": "transitionend",
            "OTransition": "oTransitionEnd",
            "MozTransition": "transitionend",
            "WebkitTransition": "webkitTransitionEnd"
        }

        for (t in transitions) {
            if (el.style[t] !== undefined) {
                return transitions[t];
            }
        }
    };

    var transitionEvent = whichTransitionEvent();
    // console.log(transitionEvent);
    var windowWidth = $(window).width();

    if (windowWidth > 575) {

        // $('.btn-expand-collapse, .edit-info').click(function (e) {
        //     $('.primary').toggleClass('collapsed').toggleClass("col-md-12").toggleClass("col-md-3");
        //     $('.secondary').toggleClass('expanded');
        //     $('.terciary').removeClass('expanded');

        //     $('.primary').one(transitionEvent, function (e) {
        //         var mr = $('.secondary').css('margin-right');
        //         console.log(mr);
        //         if (mr == "0px") {
        //             $('.secondary').css('margin-right', "-600px");
        //         } else {
        //             $('.secondary').css('margin-right', "0");
        //         }
        //     });
        // });


        // $('.btn-expand-collapse2, .edit-info2').click(function (e) {
        //     $('.secondary').toggleClass('expanded').toggleClass("col-md-9").toggleClass("col-md-3").toggleClass('collapsed');
        //     $('.terciary').toggleClass('expanded');
        // });

        console.log("es mayor");
    } else {

        $('.btn-expand-collapse, .edit-info').click(function (e) {
            console.log("click")
            $('.primary').toggleClass('collapsed');

            // $('.primary.collapsed .mobileCollapsed').addClass('effect');
            // $('.secondary').toggleClass('expanded');
            // $('.terciary').removeClass('expanded');


            $('.primary.collapsed ').one(transitionEvent, function (e) {
                console.log('end')
                $('.primary.collapsed .mobileCollapsed').addClass('effect');
                $('.secondary').toggleClass('expanded ');
            });

        });



        $('.btn-expand-collapse2, .edit-info2').click(function (e) {
            $('.secondary').toggleClass('expanded collapsed')
            $('.terciary').toggleClass('expanded');
        });

        $('.btn-expand-collapse3').click(function (e) {
            $('.contact').toggleClass('expanded');
            
        });

        $('.btn-expand-collapse4').click(function (e) {
            $('.contact').toggleClass('expanded');
            $('.msjFinal').toggleClass('expanded');
            
        });


    }
});