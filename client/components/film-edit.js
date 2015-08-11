Template.filmEdit.events({
	
	// upon clicking the `X` button, delete that entry from the database
	"click .delete-btn": function(){
		Films.remove(this._id);
	},
	// handle the form submission
	'submit form': function(event){
		// stop the form from submitting
		event.preventDefault();
		
		// get parent (film) id
		var newFilmID = $(event.currentTarget).parent().data('id');
		console.log(event.currentTarget);
		console.log(newFilmID);
		// Grab values from the form
		var newTitle = event.target.newTitle.value;
		var newYear = event.target.newYear.value;
		var newSynopsis = event.target.newSynopsis.value;
		var newPoster = event.target.newArt.value;
		
//		var titleString = ;
//		var yearString = ;
//		var synopsisString = ;
//		var posterString = ;
		
		Films.update(
			{ _id: newFilmID },
			{$set: { 
				title: newTitle,
				year: newYear,
				synopsis: newSynopsis,
				artwork: newPoster
				}
			}
//			{ $set: action }
		);
	}
});
Template.filmEdit.helpers({
	
});