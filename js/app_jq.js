var cards = ["o1.png", "o2.png", "o3.png", "o4.png", "o5.png", "o6.png", "o7.png", "o8.png", "o9.png", "o10.png"];

var shuffleArray = (array) => $.map(array, (element) => [element, element]).sort(() => 0.87 - Math.random());
cards = shuffleArray(cards);

var c0 = document.getElementById('c0');
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');

var c4 = document.getElementById('c4');
var c5 = document.getElementById('c5');
var c6 = document.getElementById('c6');
var c7 = document.getElementById('c7');

var c8 = document.getElementById('c8');
var c9 = document.getElementById('c9');
var c10 = document.getElementById('c10');
var c11 = document.getElementById('c11');

var c12 = document.getElementById('c12');
var c13 = document.getElementById('c13');
var c14 = document.getElementById('c14');
var c15 = document.getElementById('c15');

var c16 = document.getElementById('c16');
var c17 = document.getElementById('c17');
var c18 = document.getElementById('c18');
var c19 = document.getElementById('c19');

c0.addEventListener("click", function() { revealCard(0); });
c1.addEventListener("click", function() { revealCard(1); });
c2.addEventListener("click", function() { revealCard(2); });
c3.addEventListener("click", function() { revealCard(3); });

c4.addEventListener("click", function() { revealCard(4); });
c5.addEventListener("click", function() { revealCard(5); });
c6.addEventListener("click", function() { revealCard(6); });
c7.addEventListener("click", function() { revealCard(7); });

c8.addEventListener("click", function() { revealCard(8); });
c9.addEventListener("click", function() { revealCard(9); });
c10.addEventListener("click", function() { revealCard(10); });
c11.addEventListener("click", function() { revealCard(11); });

c12.addEventListener("click", function() { revealCard(12); });
c13.addEventListener("click", function() { revealCard(13); });
c14.addEventListener("click", function() { revealCard(14); });
c15.addEventListener("click", function() { revealCard(15); });

c16.addEventListener("click", function() { revealCard(16); });
c17.addEventListener("click", function() { revealCard(17); });
c18.addEventListener("click", function() { revealCard(18); });
c19.addEventListener("click", function() { revealCard(19); });

var oneVisible = false;
var turnCounter = 0;
var visible_nr;
var pairsLeft = 10;

function revealCard(nr) {

  var opacityValue = $('#c'+nr).css('opacity');

  if (opacityValue != 0){

    var obraz = "url(img/" + cards[nr] + ")";

    $('#c'+nr).css('background-image', obraz);
    $('#c'+nr).addClass('cardA');
    $('#c'+nr).removeClass('card');

    if(oneVisible == false)
    {
      //first card
      oneVisible = true;
      visible_nr = nr;
    }
    else
    {
      //second card
      if(cards[visible_nr] == cards[nr])
      {
        setTimeout(function() { hide2Cards(nr, visible_nr) }, 600);
      }
        else
      {
        setTimeout(function() { restore2Cards(nr, visible_nr) }, 1000);
      }
      turnCounter++;
      $('.score').html('Turn counter: '+turnCounter);
      oneVisible = false;
    }
  }
}

function hide2Cards(nr1, nr2) {
  $('#c'+nr1).css('opacity', '0');
  $('#c'+nr2).css('opacity', '0');

  pairsLeft--;

}

function restore2Cards(nr1, nr2)
{
	$('#c'+nr1).css('background-image', 'url(img/karta.png)');
	$('#c'+nr1).addClass('card');
	$('#c'+nr1).removeClass('cardA');

	$('#c'+nr2).css('background-image', 'url(img/karta.png)');
	$('#c'+nr2).addClass('card');
	$('#c'+nr2).removeClass('cardA');
}
