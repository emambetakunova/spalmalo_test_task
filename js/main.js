$(document).ready(function () {
    $('#header__toggle').click(function () {
        $('.header-menu__list').slideToggle(700);
        if ($(this).hasClass('not-active')) {
            $(this).addClass('is-active').removeClass('not-active');
        } else {
            $('.is-active').addClass('not-active').removeClass('is-active');
        }
    });
});

