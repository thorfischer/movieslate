// run when Meteor starts
Meteor.startup(function() {
	// if no films in list create sample films
	if (Films.find().count() === 0) {
		//create sample films
		var sampleFilms = [
			{
				title: 'The Avengers',
				year: '2009',
				users: [
					{name: 'John', seen: 'checked'},
					{name: 'Jack', seen: ''}
				]
			},
			{
				title: 'Mad Max: Fury Road',
				year: '2015',
				users: [
					{name: 'John', seen: ''},
					{name: 'Jack', seen: ''}
				]
			}
		];
		
		// loop over each sample film and insert into database
		_.each(sampleFilms, function(film){
			Films.insert(film);
		});
	}
});