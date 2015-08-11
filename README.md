#Movieslate

![Preview](http://i.imgur.com/Dla9nbg.jpg)

My roommates and I would always suggest movies to each other, so much so that we started using a Google spreadsheet to track movies that we thought each other should definitely see. The spreadsheet was a pain, so I sought to make a better one.

When you input a movie and hit add, it will automatically grab the poster and synopsis info from the iTunes API and saves it to a Mongo database.

When someones seen a movie they can just click their name and it will register in the database that that person has seen the film.

The names of the individuals can be changed in <code>client/components/film-form.js</code>

##Installation

Clone the repo then, go into the directory, and run <pre>meteor</pre>
Then point your browser to <a href="localhost:3000">localhost:3000</a>

##Notes

 - The font most likely won't work since I'm using Typekit by Adobe;
 - The ratings don't work yet;
 - The 'New' tag stays for movies posted in the last month.