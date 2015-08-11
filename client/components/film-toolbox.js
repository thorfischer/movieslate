Template.toolbox.events({
	'click .collapsed-btn': function(){
		$('p.synopsis').toggle('fast');
		$('span#film-poster').toggle('fast');
		
		$('div.film').toggleClass('collapsed-view');
	}
});