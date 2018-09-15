var MatchGame = {};

$(document).ready(function(){
  $('.master').ready(function(){
    $('.master').fadeIn(1000);
  });
  $('.bannerb').mouseenter(function() {
    $(this).animate({'opacity':'1'}, 1000);
  });
  $('.bannerc').mouseenter(function(){
    $(this).animate({'opacity':'1'}, 1000);
  });
    $('.stand').mouseenter(function(){
      $(this).animate({'opacity':'1'}, 1000);
      $('.exitbutton').animate({'opacity':'1'}, 1000);
      $(this).find('span').css('font-weight','bold');
      $(this).find('span').animate({'fontSize':'30rem'}, 500);
      $(this).find('span').animate({'fontSize':'1rem'});
      $(this).find('.aaaa').css('color','red');
      $(this).find('.b').css('color','green');
      $(this).find('.c').css('color','pink');
      $(this).find('.d').css('color','orange');
      $(this).find('.e').css('color','blue');
      $(this).find('.f').css('color','yellow');
      $(this).find('.g').css('color','purple');
      $(this).find('.h').css('color','white');
      $(this).find('span').css('text-decoration','underline');
    });
    $('.stand').mouseleave(function(){
      $(this).find('span').css('color','black');
      $(this).find('span').css('text-decoration','none');
    });
  $('.linkish').mouseenter(function(){
    $(this).animate({'fontSize':'1.3rem'}, 500);
  });
  $('.linkish').mouseleave(function(){
    $(this).finish();
    $(this).animate({'fontSize':'1rem'}, 500);
  });
  //jesus button animations
  $('.exitbutton').mouseenter(function(){
    $(this).children('p').animate({'fontSize':'1.3rem'}, 500);
  });
  $('.exitbutton').mouseleave(function(){
    $(this).finish();
    $(this).children('p').animate({'fontSize':'1rem'}, 500);
  });
  $('.exitbutton').click(function(){
    $('.stand').fadeOut(500);
    $('.exitbutton').fadeOut(500);
  });
  //iframe toggle button animations
  $('.buttonw').mouseenter(function(){
    $(this).animate({'fontSize':'1.1rem'}, 1000);
  });
  $('.buttonw').mouseleave(function(){
    $(this).finish()
    $(this).animate({'fontSize':'1rem'});
  });
  $('.buttonh').mouseenter(function(){
    $(this).animate({'fontSize':'1.1rem'}, 1000);
  });
  $('.buttonh').mouseleave(function(){
    $(this).finish()
    $(this).animate({'fontSize':'1rem'});
  });
///wierd slidey button thingeys
  $('.aa').mouseenter(function (){
    $(this).children('.fa').finish();
    $(this).finish();
    $(this).animate({'width':'90%'}, 1000);
    $(this).children('.fa').delay(1000).fadeIn();
    $(this).children('.fa').delay(1500).css('margin-right','40%');
  });
  $('.aa').mouseleave(function () {
    $(this).children('.fa').finish();
    $(this).animate({'width':'40%'}, 1000);
    $(this).children('.fa').css('display','none');
    $(this).children('.fa').css('margin-right','0');
  });
  $('.aal').mouseenter(function (){
    $(this).children('.fa').finish();
    $(this).finish();
    $(this).animate({'width':'90%'}, 1000);
    $(this).children('.fa').delay(1000).fadeIn();
    $(this).children('.fa').delay(1500).css('margin-left','40%');
  });
  $('.aal').mouseleave(function () {
    $(this).children('.fa').finish();
    $(this).animate({'width':'40%'}, 1000);
    $(this).children('.fa').css('display','none');
    $(this).children('.fa').css('margin-right','0');
  });
  //weather feature
  $('.button').click(function(){
    var state = $('.state-input').val();
    var city = $('.city-input').val();
    var url = 'https://api.wunderground.com/api/4e1fe0d302980707/geolookup/conditions/q/' + state + '/' + city + '.json';
    $.ajax({
     url: url,
     datatype: 'jsonp',
     success: function(data){
       $('.righta .conditiona .value').html('<p class="data">' + data.current_observation.weather + '</p>');
       $('.righta .temp .value').html('<p class="data">' + data.current_observation.temp_f + '</p>')
       $('.righta .humidity .value').html('<p class="data">' + data.current_observation.relative_humidity + '</p>')
     }});
     var weather = $('.data').val();
     $('.conditiona').fadeIn();
     $('.conditiona').css('display','inline-flex');
     $('.temp').fadeIn();
     $('.temp').css('display','inline-flex');
     $('.humidity').fadeIn();
     $('.humidity').css('display','inline-flex');
     $('.state-input').val('');
     $('.city-input').val('');
  });
  //video height shiz niz
  $('.master').ready(function(){
    var height = $('video').css('height');
    $('.master').find('.placeholdera').html('<div style="height:' + height + ';" class="videocontainer"><div class="mainstuff"><h1>/Professional Web Development</h1></div><video autoplay="" muted="" loop=""><source src="https://www.codecademy.com/assets/marketing-pages/intensives/bws/coding-scenes-9a2031e8142b40bdb5d936d5eef33dfa.mp4" type="video/mp4"></video></div>')
  });
  //i-frame schenanigans
  $('.plusheight').click(function(){
    var a = $('iframe').css('height');
    var integer = parseInt(a, 10);
    var scaleUp = 10;
    var c = integer + 50;
    var d = c + 'px';
    var dd = $('iframe').css('width');
    $('.placeholder').html('<iframe src="./index.html" height="' + d + '" width="' + dd + '"></iframe>');
  });
  $('.minusheight').click(function(){
    var a = $('iframe').css('height');
    var integer = parseInt(a, 10);
    var scaleUp = 10;
    var c = integer - 50;
    var d = c + 'px';
    var dd = $('iframe').css('width');
    $('.placeholder').html('<iframe src="./index.html" height="' + d + '" width="' + dd + '"></iframe>');
  });
  $('.pluswidth').click(function(){
    var aa = $('iframe').css('width');
    var integer = parseInt(aa, 10);
    var scaleUp = 10;
    var cc = integer + 50;
    var dd = cc + 'px';
    var d = $('iframe').css('height');
    $('.placeholder').html('<iframe src="./index.html" height="' + d + '" width="' + dd + '"></iframe>');
  });
  $('.minuswidth').click(function(){
    var aa = $('iframe').css('width');
    var integer = parseInt(aa, 10);
    var scaleUp = 10;
    var cc = integer - 50;
    var dd = cc + 'px';
    var d = $('iframe').css('height');
    $('.placeholder').html('<iframe src="./index.html" height="' + d + '" width="' + dd + '"></iframe>');
  });
  $('.buttonh').click(function(){
    var height = $('.height-input').val();
    var dd = $('iframe').css('width');
    $('.placeholder').html('<iframe src="./index.html" height="' + height + '" width="' + dd + '"></iframe>');
    $('.height-input').val('');
  });
  $('.buttonw').click(function(){
    var width = $('.width-input').val();
    var d = $('iframe').css('width');
    $('.placeholder').html('<iframe src="./index.html" height="' + d + '" width="' + width + '"></iframe>');
    $('.width-input').val('');
  });
  //matching game crap
  var $game = $('#game');
  var values = MatchGame.generateCardValues();
  MatchGame.renderCards(values, $game);
});
//outside of jquery function
MatchGame.generateCardValues = function () {
  var sequentialValues = [];

  for (var value = 1; value <= 8; value++) {
    sequentialValues.push(value);
    sequentialValues.push(value);
  }

  var cardValues = [];

  while (sequentialValues.length > 0) {
    var randomIndex = Math.floor(Math.random() * sequentialValues.length);
    var randomValue = sequentialValues.splice(randomIndex, 1)[0];
    cardValues.push(randomValue);
  }

  return cardValues;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  var colors = [
    'hsl(25, 85%, 65%)',
    'hsl(55, 85%, 65%)',
    'hsl(90, 85%, 65%)',
    'hsl(160, 85%, 65%)',
    'hsl(220, 85%, 65%)',
    'hsl(265, 85%, 65%)',
    'hsl(310, 85%, 65%)',
    'hsl(360, 85%, 65%)'];

  $game.empty();
  $game.data('flippedCards', []);

  for (var valueIndex = 0; valueIndex < cardValues.length; valueIndex++) {
    var value = cardValues[valueIndex];
    var color = colors[value - 1];
    var data = {
      value: value,
      color: color,
      isFlipped: false
    };

    var $cardElement = $('<div class="col-xs-3 card"></div>');
    $cardElement.data(data);

    $game.append($cardElement);
  }

  $('.card').click(function() {
    MatchGame.flipCard($(this), $('#game'));
  });
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  if ($card.data('isFlipped')) {
    return;
  }

  $card.css('background-color', $card.data('color'))
      .text($card.data('value'))
      .data('isFlipped', true);

  var flippedCards = $game.data('flippedCards');
  flippedCards.push($card);

  if (flippedCards.length === 2) {
    if (flippedCards[0].data('value') === flippedCards[1].data('value')) {
      var matchCss = {
        backgroundColor: 'rgb(153, 153, 153)',
        color: 'rgb(204, 204, 204)'
      };
      flippedCards[0].css(matchCss);
      flippedCards[1].css(matchCss);
    } else {
      var card1 = flippedCards[0];
      var card2 = flippedCards[1];
      window.setTimeout(function() {
        card1.css('background-color', 'rgb(32, 64, 86)')
            .text('')
            .data('isFlipped', false);
        card2.css('background-color', 'rgb(32, 64, 86)')
            .text('')
            .data('isFlipped', false);
      }, 350);
    }
    $game.data('flippedCards', []);
  }
};
