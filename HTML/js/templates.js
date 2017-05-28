(function() {

	var templates = {
		galleryItem: Handlebars.compile($('#gallery-item-template').html())
	};

	$('.template-item').each(function() {
		var $item = $(this);
		var data = $item.data();
		var template = templates[data.template];
		var renderedNewItem = template(data);
		$item.after(renderedNewItem);
		$item.remove();
	});

}());