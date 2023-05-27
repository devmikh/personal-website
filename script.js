$(document).ready(() => {
    $(window).scroll(() => {
        let windowTop = $(this).scrollTop();
        $('.nav-link').each(function() {
            if (windowTop >= $($(this).attr('href')).offset().top - 100) {
                $('.nav-link.active').removeClass('active');

                $(this).addClass('active');
            }
        });
    });

    
    $(".theme-switch").on("click", function() {
        $('body').toggleClass('light-theme');
    });
});