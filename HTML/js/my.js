var My = (function() {

	var photography = [
		{ path: 'images/work/1.jpg', heading: 'Right Sand', description: 'Product', classes: 'product web'},
		{ path: 'images/work/2.jpg', heading: 'Polly Fox', description: 'Print', classes: 'print product'}
	];

	var templates = {
		galleryItem: Handlebars.compile($('#gallery-item-template').html())
	};

	function render(what) {
		if (what === 'photography') {
			$.each(photography, function(index, item) {
				var renderedItem = templates.galleryItem(item);
				$('#photography-div').append(renderedItem);
			});
		}
	}

	return {
		render: render
	};

}());