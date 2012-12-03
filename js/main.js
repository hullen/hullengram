$(function() { 
	var max_img = 6,
	$insta_list = $('#insta_media');
	$.ajax({
	  type: "GET",
     dataType: "jsonp",
     cache: false,
	  url: "https://api.instagram.com/v1/users/1910204/media/recent?count=" + max_img + "&amp;access_token=1910204.1fb234f.55bf74fc1df246a584191dcf5909eae8",
	  success: function(obj){
			$.each(obj.data, function (k,insta) {
				var caption = insta.caption;
				if(caption == null) {
					$insta_list.append('<li class="span2"><a href="' + insta.link + '" class="thumbnail"><img src="' + insta.images['thumbnail'].url + '" alt=""></a></li>');
				} else {
					$insta_list.append('<li class="span2"><a href="' + insta.link + '" class="thumbnail"><img src="' + insta.images['thumbnail'].url + '" alt="' + caption.text + '"></a><small>' + caption.text + '</small></li>');
				}
			});
	  }
	});

});