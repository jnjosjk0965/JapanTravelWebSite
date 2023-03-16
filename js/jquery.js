$(document).ready(function () {
    let lastScroll = 0; 
    $(window).scroll(function (event) {
        const scp = $(this).scrollTop();
        if (scp > lastScroll) {
            $('nav').slideUp(500);
        }
        else {
            $('nav').slideDown(500);
        }
    });

    $('ul.tabs li').on('click', function () {
        const tabId = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $('#' + tabId).addClass('current');
    });

    $('.tips').on('mouseenter', function (event) {
        const tips = event.target;
        const tipId = $(this).attr('data-tips');
        const $tipDiv = $('#' + tipId);
        $tipDiv.css({
            top: tips.offsetTop,
            left: tips.offsetLeft + 60
        });
        $tipDiv.fadeIn();

        $('.tips').on('mouseout', function () {
            $tipDiv.fadeOut();
        });
    });

    $('#toConBox').on('click', function () {
        const position = $('#content_box').offset();
        $('html').animate({ scrollTop: position.top }, 400);
    });
    $('#toTop').on('click', function () {
        const position = $('#top').offset();
        $('html').animate({ scrollTop: position.top }, 400);
    });
    $('#toBottom').on('click', function () {
        const position = $('#bottom').offset();
        $('html').animate({ scrollTop: position.top }, 400);
    });

    $('.bucketVisible').on('click',function(){
        $('#bucketBox').fadeToggle(500);
    });
});