var keysReqd = require('./keys.js');
var fs = require('fs');
var request = require('request');
var Twitter = require('twitter');
var spotify = require('spotify');

var commandArg = process.argv[2];
var tweet = 'my-tweets';
var spotifyCall = 'spotify-this-song';
var movie = 'movie-this';
var justDoIt = 'do-what-it-says';

// ### What Each Command Should Do
switch (commandArg) {
    // 2. `node liri.js spotify-this-song '<song name here>'`
    case spotifyCall:
        var songArg = process.argv[3];
    // 4. `node liri.js do-what-it-says`
    case justDoIt:
        var songArg;
        //* Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
        fs.readFile('random.txt', 'utf8', function(err, data){
            if (err){
                console.log(err)
            };
            var arr = data.split(',');
            songArg = arr[1];
        });
        //* It should run `spotify-this-song` for "a drop in the ocean" as follows the text in `random.txt`
        if (songArg === undefined){
            //No song provided will call "A drop in the ocean" by Ace of Base 
            console.log('-------------------------');
            console.log('No Song Request? I chose to run "A Drop In The Ocean"');
            console.log('-------------------------');
            songArg = "A drop in the ocean";
        };
        var params = {
            type: 'track',
            query: songArg
        };
        spotify.search(params, function(err, data) {
            if (err) {
                console.log('Error occurred: ' + err);
                return;
            }
            // * This will show the following information about the song in your terminal/bash window
            var dataPath = data.tracks.items[0];
            var artistName = dataPath.album.artists[0].name;
            var albumName = dataPath.album.name;
            var linkUrl = dataPath.preview_url;
            var songName = dataPath.name;
            console.log('---------------------------------------');
            console.log('Artist : ' + artistName);
            console.log('Song : ' + songName);
            console.log('Preview Link: ' + linkUrl );
            console.log('Album : ' + albumName);
            console.log('---------------------------------------');
            var content = '\n---------------------------------------\n \nArtist :  ' + artistName + '\nSong : ' + songName + '\nPreview Link: ' + linkUrl + '\nAlbum : ' + albumName + '\n---------------------------------------\n';
            fs.appendFile('log.txt', content, function(err){
                if(err){
                    console.log(err);
                };
                console.log('log.txt is appended');
            });  
        });
        break;
    // 1. `node liri.js my-tweets`
    case tweet:
        var client = new Twitter (keysReqd.twitterKeys);
        var params = {
            count: 20,
            screen_name: 'hann_king'
        };
        client.get('favorites/list', params, function(error, tweets, response) {
            if(error) {
                console.log(error);
            }
            var tweetContent = ('\n-------------------------')
            //This will show your last 20 tweets and when they were created at in your terminal/bash window.
            for (var i = 0; i < 20; i++){
                console.log('-------------------------')
                console.log('Date Submitted: ' + tweets[i].created_at);
                console.log('Tweet ' + i + ' : ' + tweets[i].text);
                console.log('-------------------------')
                tweetContent = '\nTweet ' + i + ' : ' + tweets[i].text + '\n-------------------------'
                //write/append the log.txt file for all console.log
                fs.appendFile('log.txt', tweetContent, function(err){
                    if(err){
                        console.log(err);
                    };
                    console.log('log.txt is appended');
                }); 
            } 
        });
        break;       
    3. `node liri.js movie-this '<movie name here>'`
    case movie:
        //code
        //* If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
        if (movieArg === undefined){
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
                console.log(JSON.stringify(body, 2, null));
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
            };
        });
        break
    default: 
        console.log('default');
} 