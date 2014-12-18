//$(document).ready( function() {


var myKey = "AIzaSyAvY8gw_9m9K4kfUbASjxJWcgzVjkwImcQ";


//try some hard coding to make this easier
var technique ="jquery";



$('.button')
	.on('click', function(){

        technique = $('input[name="technique"]:checked').val();
        alert(technique);

        //search(technique);
		
        onYouTubeApiLoad();
		//alert(technique);
		
		//loadMyClient();
		//search(technique);
        //onClientLoad();

		

		});


//}); // end document ready function


// ***************************  Get Stats for Videos from youtube  ********************************************


// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms

// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
// step 1. Load the javascript client library.
	function onClientLoad() {
	//function loadMyClient() {
		alert('onclientload');
    	//gapi.client.load('youtube', 'v3', onYouTubeApiLoad);  lets try calling a new function that binds the click from here.

        gapi.client.load('youtube', 'v3', onYouTubeApiLoad);

}

// Called automatically when YouTube API interface is loaded (see line 9).
//step 2.  Reference the API key
function onYouTubeApiLoad() {
	alert('onyoutubeapiload');
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey(myKey); //my api key here

    	search(technique);
    
}

function search(technique) {

	alert("searching " + technique);

	//var qString = '\"' +'bjj,' + technique +'\"';
	//alert('qString is ' + qString + 'desired string is ' + '"bjj,takedown"');
    // Use the JavaScript client library to create a search.list() API call.
    var request = gapi.client.youtube.search.list({
        dataType: "JSONP",
        part: 'snippet',
        q: technique,
        //order: viewCount,

       // "https://www.googleapis.com/youtube/v3/search?part=snippet&q=".urlencode($kwd)."&maxResults=".$max."&order=viewCount&key={YOUR_API_KEY}"
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    request.execute(onSearchResponse);
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
	alert('onsearchresponse');
    showResponse(response);
}




/* 

getStats function to get stats on most watched youtube videos for technique selected.
list	searchResults 		

https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=YOUR_API_KEY
     &part=snippet,contentDetails,statistics,status


https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyDqZVJ1gxbvSviWDXnq0CJP3lxTt_nzR4o&part=snippet,contentDetails,statistics,status


my API key for bjj project
     AIzaSyDqZVJ1gxbvSviWDXnq0CJP3lxTt_nzR4o



topTen function to identify the top 10 videos for search term selected

showResults function to display links to videos for top 10 Results

playVideo function to show the video in the video play area on the page.

*/

