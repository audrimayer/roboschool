$(function(){

    var $menu__list = $('.menu__list');
 
	$(".menu-triger").click(function(){
		$('body').addClass('body_pointer');		
		$menu__list.show(0);
		$menu__list.animate(
			{right: parseInt($menu__list.css('left'),10) == 0 ? -$menu__list.outerWidth() : 0}, 
			300
		);
		return false;
	});	
	
	$(".menu-close").click(function(){
		$('body').removeClass('body_pointer');		
		$menu__list.animate(
			{right: parseInt($menu__list.css('right'),10) == 0 ? -$menu__list.outerWidth() : 0}, 
			300, 
			function(){
				$menu__list.hide(0);
			}
		);
		return false;
	});	

	// Функция чтобы скрывать меню при нажатии за пределами меню

	// $(document).on('click', function(e){
	// 	if (!$(e.target).closest('.menu__list').length){
	// 		$('body').removeClass('body_pointer');
	// 		$menu__list.animate(
	// 			{right: parseInt($menu__list.css('right'),10) == 0 ? -$menu__list.outerWidth() : 0}, 
	// 			300, 
	// 			function(){
	// 				$menu__list.hide(0);
	// 			}
	// 		);
	// 	}
	// });


	// Функция чтобы скрывать меню и при нажатии на кнопки внутри меню, и за пределами меню

	$(document).on('click', function(e){
		
		$('body').removeClass('body_pointer');
		$menu__list.animate(
			{right: parseInt($menu__list.css('right'),10) == 0 ? -$menu__list.outerWidth() : 0}, 
			300, 
			function(){
				$menu__list.hide(0);
			}
		);
	});
    


    
    $('.slider__content').slick({
        dots: true,
        dotsClass: 'slider-dots',
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        autoplay: false
    });

    $(document).on('click', '[data-toggle="modal"]', function () {
        var target = $(this).attr('data-target');
        console.log(target);
        $(target).addClass('show');
        $('body').addClass('hidden');
        return false;
    });

    $('.modal .close').on('click', function () {
        $(this).closest('.modal').removeClass('show');
        $('body').removeClass('hidden');
        return false;
    })

});


