/*
	Twenty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  const	$window = $(window)

  $window.on('load', function () {
    const $body = $('body')
    const $header = $('#header')
    const $banner = $('#banner')

    // Breakpoints.
    breakpoints({
      wide: ['1281px', '1680px'],
      normal: ['981px', '1280px'],
      narrow: ['841px', '980px'],
      narrower: ['737px', '840px'],
      mobile: [null, '736px']
    })

    // Play initial animations on page load.
    window.setTimeout(function () {
      $body.removeClass('is-preload')
    }, 100)

    // Scrolly.
    $('.scrolly').scrolly({
      speed: 1000,
      offset () { return $header.height() + 10 }
    })

    // Dropdowns.
    var a = $('#nav > ul')
    a.dropotron({
      mode: 'fade',
      noOpenerFade: true,
      expandMode: (browser.mobile ? 'click' : 'hover')
    })

    // Nav Panel.

    // Button.
    $(
      '<div id="navButton">' +
            '<a href="#navPanel" class="toggle"></a>' +
          '</div>'
    )
      .appendTo($body)

    // Panel.
    setTimeout(() => {
      $(
        '<div id="navPanel">' +
              '<nav>' +
                $('#nav').navList() +
              '</nav>' +
            '</div>'
      )
        .appendTo($body)
        .panel({
          delay: 500,
          hideOnClick: true,
          hideOnSwipe: true,
          resetScroll: true,
          resetForms: true,
          side: 'left',
          target: $body,
          visibleClass: 'navPanel-visible'
        })

      // Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
      if (browser.os == 'wp' && browser.osVersion < 10) {
        $('#navButton, #navPanel, #page-wrapper')
          .css('transition', 'none')
      }
    });

    // Header.
    if (!browser.mobile	&&
      $header.hasClass('alt')	&&
      $banner.length > 0) {
      $window.on('load', function () {
        $banner.scrollex({
          bottom:	$header.outerHeight(),
          terminate () { $header.removeClass('alt') },
          enter () { $header.addClass('alt reveal') },
          leave () { $header.removeClass('alt') }
        })
      })
    }
  })
})(jQuery)
