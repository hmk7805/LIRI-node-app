var keysReqd = require('./keys.js');
var fs = require('fs');
var request = require('request');
var twitter = require('twitter');
var spotify = require('spotify');

var commandArg = process.argv[2];
var tweet = 'commandArg === ' + 'my-tweets';
var spotifyCall = 'spotify-this-song';
var movie = 'commandArg === ' + 'movie-this';
var justDoIt = 'commandArg === ' + 'do-what-it-says';

// ### What Each Command Should Do
switch(commandArg){
// 1. `node liri.js my-tweets`
	case tweet:
        //code
        var date;
        var tweetArr = [];
        //* This will show your last 20 tweets and when they were created at in your terminal/bash window.
        //Probably need some sort of for loop
        var input = 'Tweeted on' + date + '---' + tweet
        console.log('---------------------------------------');
        console.log(input);
        console.log('---------------------------------------');
        // write/append the log.txt file for all console.log
        function logAppend(input){
            var content = ['------------------------------', input, '------------------------------'];
            for (var i = 0; i < content.length; i++){
                fs.appendFile('log.txt', content[i], function(err){
                    if(err){
                        console.log(err);
                    };
                });
            };   
        }; 
        break;      
        
// 2. `node liri.js spotify-this-song '<song name here>'`
    case spotifyCall:
        //code
        var songArg = process.argv[3];
        // 4. `node liri.js do-what-it-says`
        console.log(songArg);
    case justDoIt:
        //code
        var songArg;
        //* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
        fs.readFile('random.txt', 'utf8', function(err, data){
            if (err){
                console.log(err)
            };
            var arr = data.split(',');
            songArg = arr[1];
        });
        console.log(songArg);
        //* It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`
        //* Feel free to change the text in that document to test out the feature for other commands.
        //* if no song is provided then your program will default to
        if (songArg === undefined){
            //* "The Sign" by Ace of Base 
            console.log('-------------------------')
            console.log('No Song Request? I chose to run "The Sign" Ace of Base')
            console.log('-------------------------')
            songArg = "The Sign";
        };
        spotify.search({type: 'track', query: songArg }, function(err, data) {
            if ( err ) {
                console.log('Error occurred: ' + err);
                return;
            }
            //console.log(data);
            // fs.appendFile('log.txt', JSON.parse(data), function(err){
            //     if(err){
            //         console.log(err);
            //     };
            //     console.log('data appended');
            // });  
            var dataPath = data.tracks.items[0];
            var artistName = dataPath.artists.name;
            var albumName = dataPath.album.name;
            var linkUrl = dataPath.preview_url;
            var songName = dataPath.name;
            // * This will show the following information about the song in your terminal/bash window
            // * Artist(s)
            console.log('Artist : ' + artistName);
            // * The song's name
            console.log('Song : ' + songName);
            //* A preview link of the song from Spotify
            console.log('Preview Link: ' + linkUrl );
            //* The album that the song is from
            console.log('Album : ' + albumName);
        });
        break;
    // 3. `node liri.js movie-this '<movie name here>'`
    case movie:
        //code
        var request = require('request');
        //* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
        if (movieArg == undefined){
            //code
            //* If you haven't watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947/
            console.log('-------------------------')
            console.log('If you haven\'t watched "Mr. Nobody," then you should: http://www.imdb.com/title/tt0485947')
            console.log("It's on Netflix!" )
            console.log('-------------------------')
            //* It's on Netflix!
        }
        var movieArg = process.argv[3];    
        request("'http://www.omdbapi.com/?t=' + movieArg + '&y=&plot=short&r=json'", function(error, response, body) {
        // If there were no errors and the response code was 200 (i.e. the request was successful)...
            if (!error && response.statusCode === 200) {
                // Then we print out the imdbRating
                // 	* This will output the following information to your terminal/bash window:
                // * Title of the movie
                // var movieTitle = JSON.parse(body).__________;
                // var movieRating = JSON.parse(body).__________;
                // var movieCountry = JSON.parse(body).__________;
                // var moviePlot = JSON.parse(body).__________;
                // var movieActors = JSON.parse(body).__________;
                // var movieRTR = JSON.parse(body).__________;
                // var movieURL = JSON.parse(body).__________;
                //Test
                console.log(body)
                // console.log('Movie: ' + movieTitle);
                // // * Year the movie came out.
                // console.log('Year: ' + movieYear);
                // // * IMDB Rating of the movie.
                // console.log('Rating: ' + movieRating);
                // // * Country where the movie was produced.
                // console.log('Country: ' + movieCountry);
                // // * Language of the movie.
                // console.log('Language: ' + movieLanguage);
                // // * Plot of the movie.
                // console.log('Plot: ' + moviePlot);
                // // * Actors in the movie.
                // console.log('Actors: ' + movieActors);
                // // * Rotten Tomatoes Rating.
                // console.log('Rotten Tomatoes Rating: ' + movieRTR);
                // // * Rotten Tomatoes URL.
                // console.log('Rotten Tomatoes URL: ' + movieURL);
            }
        })
            break;
    default: 
        console.log('default');
}

