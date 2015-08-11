

Template.body.helpers({
	films: function() {
		return Films.find({}, { sort: { title: 1 } });
	}
	
});

// adds index to each item
UI.registerHelper('indexedArray', function(context, options) {
	if (context) {
		return context.map(function(item, index) {
			item._index = index;
			return item;
		});
	}
});
