(function() {

	function compile(templateId) {
		return Handlebars.compile($('#'+templateId).html());
	}

	var templates = {
		galleryItem: compile('gallery-item-template'),
		progressBar: compile('progress-bar-template')
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