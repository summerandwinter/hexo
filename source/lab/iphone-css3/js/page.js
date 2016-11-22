$(document).ready(function(){
	colorSelectorControll();
	
	hash = window.location.hash.toLowerCase();
	if (hash != '') {
		$('.iphone_black_bg').css('background-color', hash);
		$('#colorSelector div').css('background-color', hash);
		$('#colors_set a').removeClass('on');
		$(hash.toLowerCase() + '_color').addClass('on');
		
		console.log(hash);
		
		$('#tweet_color_button').attr('href', 'https://twitter.com/share?url=&text=' + encodeURIComponent('So awesome! What do you think about my color version of iPhone 4 in pure CSS3? (made by @TjRus) ' + window.location));
	}
	
	setInterval(function(){
		if (hash != window.location.hash) {
			hash = window.location.hash.toLowerCase();
			$('.iphone_black_bg').css('background-color', hash);
			$('#colorSelector div').css('background-color', hash);
			$('#colors_set a').removeClass('on');
			$(hash.toLowerCase() + '_color').addClass('on');
			
		$('#tweet_color_button').attr('href', 'https://twitter.com/share?url=&text=' + encodeURIComponent('So awesome! What do you think about my color version of iPhone 4 in pure CSS3? (made by @TjRus) ' + window.location));
		}
	}, 10);
});



function colorSelectorControll(){
	$('#colorSelector').ColorPicker({
		color: '#000000',
		onShow: function (colpkr) {
			$(colpkr).show();
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).hide();
			return false;
		},
		onChange: function (hsb, hex, rgb) {
			$('#colorSelector div').css('background-color', '#' + hex);
			window.location.hash = '#' + hex.toLowerCase();
		}
	});
}