
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

    return false;
};

$('#form-container').submit(loadData);
