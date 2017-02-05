var keysReqd = require('./keys.js');
var commandsObj = {
    one: 'my-tweets'        
    two: 'spotify-this-song'
    three: 'movie-this'
    four: 'do-what-it-says'
};
var commandArg = keysReqd(process.argv[2]);
var tweet = 'commandArg === my-tweets';
var spotify = 'commandArg === spotify-this-song';
var movie = 'commandArg === movie-this';
var justDoIt = 'commandArg === do-what-it-says';

// ### What Each Command Should Do
switch(e){
// 1. `node liri.js my-tweets`
	case tweet:
        //code
        var date;
        var tweet;
        //* This will show your last 20 tweets and when they were created at in your terminal/bash window.

        console.log('Tweeted on' + date + '---' + tweet);        
        break;
// 2. `node liri.js spotify-this-song '<song name here>'`
    case spotify:
        //code
        var songArg = keysReqd(process.argv[3]);
        // * This will show the following information about the song in your terminal/bash window
        // * Artist(s)
        console.log('Artist : ' + artistName);
        // * The song's name
        console.log('Song : ' + songName);
        //* A preview link of the song from Spotify
        console.log('Preview Link: ' + linkUrl );
        //* The album that the song is from
        console.log('Album : ' + albumName);
        //* if no song is provided then your program will default to
        if (songArg == undefined){
        //* "The Sign" by Ace of Base
        }
        break;
// 3. `node liri.js movie-this '<movie name here>'`
    case movie:
        //code
        var movieArg = keysReqd(process.argv[3]);
        // 	* This will output the following information to your terminal/bash window:
        // * Title of the movie.
        console.log('Movie ' + movieTitle);
        // * Year the movie came out.
        console.log('Movie ' + movieTitle);
        // * IMDB Rating of the movie.
        console.log('Movie ' + movieTitle);
        // * Country where the movie was produced.
        console.log('Movie ' + movieTitle);
        // * Language of the movie.
        console.log('Movie ' + movieTitle);
        // * Plot of the movie.
        console.log('Movie ' + movieTitle);
        // * Actors in the movie.
        console.log('Movie ' + movieTitle);
        // * Rotten Tomatoes Rating.
        console.log('Movie ' + movieTitle);
        // * Rotten Tomatoes URL.
        if (movieArg == undefined){
            //code
            var linkUrl;
            //* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
            //* If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
            console.log('If you haven\'t watched "Mr. Nobody," then you should: ' + linkUrl);
            //* It's on Netflix!
            console.log("It's on Netflix!" )
        }
        break;
// 4. `node liri.js do-what-it-says`
    case justDoIt:
    //code

    //* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
    //* It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
    //* Feel free to change the text in that document to test out the feature for other commands.
    break;
}
