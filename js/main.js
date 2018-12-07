'use strict';
$(function() { //аналогично DOMContentLoaded

	//инициируем выпадающий список
	$('#dealers-list').ddslick({
		width: 280,
		background: 'transparent',
		onSelected: changeSelect
	});

	//изменяем стили выпадабщего списка
	function changeSelect() {
		$('.dd-selected-image, .dd-option-image').css('height', '15px');
		$('.dd-selected').css({
			'height': '15px',
			'font-weight': 'normal',
			'padding': '5px 10px'
		});
		$('.dd-option').css({
			'padding': '5px 10px'
		});
		$('.dd-selected-text').css({
			'line-height': 'normal'
		});
		$('.dd-container label').css({

		});
	}

	changeSelect();

	$('.main__nav-item, .main__proposal-item, .main__news-button').click(function() {
		document.location.hash = '#';
	});


});