Template.filmForm.events({
	// handle the form submission
	'submit form': function(event){
		// stop the form from submitting
		event.preventDefault();
		
		
		// Get the films poster
		//// TODO: - Maybe make a button that fetches the artwork and injects into the DB entry
		var filmTitle = event.target.film.value;
		var filmTitleURI = encodeURIComponent(filmTitle);
		var filmYear = event.target.year.value;
		var filmPoster;
		
		$.getJSON('http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsSearch?term='+filmTitleURI+'&country=us&entity=movie&callback=?', function (mov) {

			var posterUrl = mov.results[0].artworkUrl100;

			posterUrl = posterUrl.replace("100x100", "1500x1500");
			filmPoster = posterUrl;
			
			var filmSynopsis = mov.results[0].longDescription;
//		});
		// End of getting the films poster
		
		// get data we need from the form
		// instead of injecting new users each time, have them all present
		// but `update` the entries for when they have seen the movie using:
		// `Films.update(this._id, {$set: {seen: ! this.checked}});`
		var newFilm = {
			title: filmTitle,
			year: filmYear,
			artwork: filmPoster,
			synopsis: filmSynopsis,
			users: [
				//{name: event.target.name.value, seen: event.target.seen.value}
				{name: 'John', seen: false},
				{name: 'Jack', seen: false},
				{name: 'Jared', seen: false},
				{name: 'Jill', seen: false},
				{name: 'Jason', seen: false},
				{name: 'Jay', seen: false}
			],
			created: new Date() // current time
		};
		
		// create the new film
		Films.insert(newFilm);
	}); // End of $.getJSON()
		// clear form
		event.target.film.value = "";
		event.target.year.value = "";
	}
});
