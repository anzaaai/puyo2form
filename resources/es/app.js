'use strict';

$(function(){
	//agreemodal
	$('.btn.-apply').on('click', function(){
		$('.policy').fadeIn();
	})
	$('.policy__close').on('click', function(){
		$('.policy').fadeOut();
	})
	//hamburger
	$('.header__hamburger').on('click', function(){
		$('.header').toggleClass('-active');
	});
	$('.nav__link').on('click', function(){
		$('.header').removeClass('-active');
	});
	//smoothescroll
	var pagetop = $('.pagetop');
	pagetop.click(function () {
	   $('body, html').animate({ scrollTop: 0 }, 500);
	   return false;
	});
	$('a[href^="#"]').click(function () {
	  var href = $(this).attr("href");
	  var target = $(href == "#" || href == "" ? 'html' : href);
	  var position = target.offset().top;
  	  var speed = 500;
	  $("html, body").animate({
		scrollTop: position
	  }, speed, "swing");
	  return false;
	});

	//lazyload
	$(window).scroll(function() {
	  $(".scroll-block > *").each(function() {
		var scroll = $(window).scrollTop();
		var blockPosition = $(this).offset().top;
		var windowHeight = $(window).height();
		if (scroll > blockPosition - windowHeight + 120) {
		  $(this).addClass("blockIn");
		}
	  });
	});
	// チェックボックスの変更を監視
	$('input[name="final"]').change(function() {
		// チェックボックスがチェックされているかどうかを確認
		if ($(this).is(':checked')) {
			$('.app__btn').prop('disabled', false);
		} else {
			$('.app__btn').prop('disabled', true);
		}
	});

	// 初期状態でチェックボックスの状態に応じてボタンのdisabledを設定
	$('input[name="final"]').change();
});

