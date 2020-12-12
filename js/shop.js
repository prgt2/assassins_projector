(() => {
    /* wysuwanie forumlarza wyszukiwarki */
    $('.search__icon--mobile').on('click', () => {
            $('.search__container')
                .toggleClass('search__container--active')
        })
        /* chowanie wyszukiwarki */
    $('.close_cont').on('click', () => {
            $('.search__container--active')
                .toggleClass('search__container--active')
        })
        /* wysuwanie menu i chowanie */

    function hideAll() {
        $('.navigation-mobile').toggleClass('open')
        $('.layout').toggleClass('open')
        $('.collapsible').hide('fast')
        $('.collapisble_icon').removeClass('rotated')
    }

    $('.hamburger').on('click', function() {
        hideAll()
    })

    $('.layout').on('click', function() {
        if ($('.navigation-mobile').hasClass('open')) {
            hideAll()
        }
    })

    /* collapsible animacja */
    $('.lvl1').on('click', function() {
        $('.collapisble_icon').removeClass('rotated')
        if ($(this).children('.collapsible').is(':visible')) {
            $('.collapsible').slideUp()
        } else {
            $('.collapsible').slideUp()
            $(this).children('.collapsible').slideDown()
            $(this).find('.collapisble_icon').toggleClass('rotated')
        }
    })

    /* kod slidera */
    let index = 0
    let slides = $('.gallery_mobile').children('img')
    let dots = $('.bullets').children('span')

    /* funkcja do zmieniania zdjęć */
    function changeSlide(a, b) {
        if (a) {
            if (a + index > slides.length - 1) {
                index = 0
            } else if (a + index < 0) {
                index = slides.length - 1
            } else {
                index = index += a
            }
        } else {
            index = b
        }
        $(slides[index])
            .attr('id', 'product_pic_active')
            .siblings().removeAttr('id')
        $(dots[index])
            .toggleClass('dot_active').siblings()
            .removeClass('dot_active')
    }

    /* eventy do strzałek i kropek w sliderze*/
    $('.lt_icon').on('click', () => changeSlide(-1))
    $('.gt_icon').on('click', () => changeSlide(1))
    $('.dot').on('click', function() {
        let id = parseInt($(this).attr('id'))
        if (id !== index) {
            changeSlide(false, id)
        }
    })

    /* zmienianie zdjęć w hotspocie */
    let indexHotspot = 0
    let hotspot = $('.item')

    function changeHotspot(a) {
        if (a + indexHotspot > hotspot.length - 1) {
            indexHotspot = 0
        } else if (a + indexHotspot < 0) {
            indexHotspot = hotspot.length - 1
        } else {
            indexHotspot = indexHotspot += a
        }
        $(hotspot[indexHotspot]).addClass('active').siblings().removeClass('active')

    }

    /* event do strzałek w hotspocie */
    $('.lt_hot').click(() => changeHotspot(-1))
    $('.gt_hot').click(() => changeHotspot(1))

    /* ukrywanie parametrów */
    $('.dictionary__name').click(() => {
        if ($('.params').hasClass('.params--hidden')) {
            $('.params')
                .slideDown()
                .toggleClass('.params--hidden')
        } else {
            $('.params')
                .slideUp()
                .toggleClass('.params--hidden')
        }
    })

    /* ukrywanie pytań */
    $('.questions__question-text:not(.questions__question-text--open)')
        .slideDown('fast')
    $('.questions__question').click(function() {
        $(this).siblings('.questions__question--open')
            .toggleClass('questions__question--open')
            .children('.questions__question-text--open')
            .toggleClass('questions__question-text--open')
            .slideUp()
        $(this).siblings().find('.question__arrow-icon--rotated')
            .toggleClass('question__arrow-icon--rotated')
        if ($(this).hasClass('questions__question--open')) {
            $(this).toggleClass('questions__question--open')
                .children('.questions__question-text--open')
                .toggleClass('questions__question-text--open')
                .slideUp()
            $(this).find('.question__arrow-icon--rotated')
                .toggleClass('question__arrow-icon--rotated')
        } else {
            $(this).toggleClass('questions__question--open')
                .children('.questions__question-text')
                .toggleClass('questions__question-text--open')
                .slideDown()
            $(this).find('.question__arrow-icon')
                .toggleClass('question__arrow-icon--rotated')
        }
    })
})();