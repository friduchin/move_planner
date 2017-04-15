
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview

    // YOUR CODE GOES HERE!
    var imgBasicUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x300&location=';
    var streetStr = $('#street').val();
    var cityStr = $('#city').val();
    $body.append('<img class="bgimg" src="' + imgBasicUrl + streetStr + ', ' + cityStr + '">');

    var nytimesUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
    nytimesUrl += '?api-key=0efe24ce58e24f19bdf03ef804d6d98a';
    nytimesUrl += '&q=' + cityStr;
    $.getJSON(nytimesUrl, function(data){
        data.response.docs.forEach(function(article){
            $nytElem.append(
                '<li class="article"><a href="' + article.web_url + '">' + article.headline.main
                + '</a><p>' + article.snippet + '</p></li>'
                );
        });
    }).fail(function(){
        $nytHeaderElem.text('New York Times Articles Could Not Be Loaded');
    });

    return false;
};

$('#form-container').submit(loadData);
