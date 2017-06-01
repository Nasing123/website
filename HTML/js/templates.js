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
		var $renderedTemplate;
		if (template === templates.galleryItem) {
			data.srcFullImage = $item.attr('src').replace('/preview', '');
		}
		$renderedTemplate = $(template(data));
		$item.after($renderedTemplate);

		if (template === templates.galleryItem) {
			$item.addClass('img-responsive template-item-rendered').attr('alt', '...');
			$renderedTemplate.find('.grid-item').append($item);
		} else {
			$item.remove();
		}
	});

}());