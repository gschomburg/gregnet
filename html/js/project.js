
$(document).ready(function(){
	if($('.vimeo-gallery').length<1) return;

	$('.vimeo-gallery').featherlight({
		gallery: {
			fadeIn: 300,
			fadeOut: 200
		},
		openSpeed:    300,
		closeSpeed:   200,
		type: 'iframe',
		afterContent: function(event){
			if (this.variant === "vimeo") {
				var projectVideoPlayer = new Vimeo.Player(this.$content[0]);
				if (projectVideoPlayer) {
					projectVideoPlayer.on('ended', onVimeoEnded);
					projectVideoPlayer.play().catch(function(error) {
		    			console.error('error playing the video:', error.name);
					});
				}
			}
		}
	});
});

function onVimeoEnded(ended){
	//play next vimeo

	var total = $.featherlightGallery.current().slides().length;
	var currentIndex = $.featherlightGallery.current().currentNavigation();
	if(currentIndex<total-1){
		$.featherlightGallery.current().navigateTo(currentIndex+1);
	}
	//otherwise this is the last slide
	
}