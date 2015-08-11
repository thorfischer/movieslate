// delete movies from database
Template.film.events({
	
	// Display editor when clicking edit button
	'click .edit-film-btn': function(){
		$('#'+this._id).toggle('fast');
		$('#'+this._id+'.synopsis').toggle('fast');
	},
	
	// event to handle clicking name/btn/checkbox
	'click .saw': function(event){
		// prevent default behaviour
		event.preventDefault();
		
		// get parent (film) id
		var filmID = $(event.currentTarget).parent('.film').data('id');
		var btnID = $(event.currentTarget).data('id');
		
		// create object for seen
		var seenString = 'users.' + btnID + '.seen';
		var action = {};
		if (this.seen){
			action[seenString] = false;
		}else {
			action[seenString] = true;
		}
		
		Films.update(
			{ _id: filmID },
			{ $set: action }
		);
	}
});

Template.film.helpers ({
	newBadge: function() {
		var lastMonth = new Date().getMonth()-1;
		var createdDate = this.created.getMonth();
		if (lastMonth <= this.created.getMonth()){
			return Session.get("badge");
		}
		console.log(this.created);
		
	}	
});

Session.set("badge","badge");
$(document).ready(function(){
	$('.modal-trigger').leanModal();
});



