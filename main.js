$(document).ready(function(){


// progress bar
var progressLine = $('.progress-line');
if ($(progressLine).length > 0) {
	$(progressLine).each(function(){
		var lineWidth = 0,
			lineMsg = "This widget is in good standing. Changing the placement of the widget may harm the performance.";
		// lineWidth = $(this).parent().siblings('.amount-p').text().slice(0, -1);
		// set value of progress width
		lineWidth = 15;
		if ( lineWidth < 25 ) {
			$(this).parent().addClass('progress-red');
			lineMsg = "This widget has extremely low visibility. Almost all visitors don't see the widget on the page, we highly recommend completely changing the placement of the widget.";
		} else {
			if ( lineWidth < 50 ) {
				$(this).parent().addClass('progress-orange');
				lineMsg = "This widget has low visibility. You can expect up to 400% increase in revenues by placing the widget higher on the page.";
			} else {
				if ( lineWidth < 75 ) {
					$(this).parent().addClass('progress-yellow');
					lineMsg = "This widget has normal visibility. We recommend decreasing the distance between the content and the widget to boost its performance.";
				}
			}
		}
		$(this).css({
			width: lineWidth + '%'
		});
		// tooltip
		$(this).parent().parent().append('<div class="progress-tooltip">'+lineMsg+'</div>');
	});
};


});