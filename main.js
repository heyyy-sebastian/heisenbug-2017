jQuery(function() {

//public variables
var mothHits = 0;
var roundNum = 1;
var currTime = 30;

var mothHitsR1 = 0;
var mothHitsR2 = 0;
var mothHitsR3 = 0;
var mothHitsR4 = 0;
var mothHitsR5 = 0;
var mothHitsR6 = 0;

//generate moths, increment score
function createMoth() {
    var moth = $('<div class="moth"></div>');
    $('#img-container').append(moth);

    moth.css("top", ((478 * Math.random() + 1)+ 106.4)); //height of #img-container
    moth.css("left", ((700 * Math.random() + 1)+14)); //width

    setInterval(function() {
      moth.css("top", ((478 * Math.random() + 1)+106.4)); //height
      moth.css("left", ((700 * Math.random() + 1)+14)); //width
    }, 1500)

    moth.on("click", function(){
      $(this).addClass("patch");
      mothHits++;

      setTimeout(function(){
        moth.remove();
        switch(roundNum){
          case 1:
          mothHitsR1++;
          $('#round-1a-score').text(mothHitsR1);
          break;
          case 2:
          mothHitsR2++;
          $('#round-1b-score').text(mothHitsR2);
          break;
          case 3:
          mothHitsR3++;
          $('#round-2a-score').text(mothHitsR3);
          break;
          case 4:
          mothHitsR4++;
          $('#round-2b-score').text(mothHitsR4);
          break;
          case 5:
          mothHitsR5++;
          $('#round-3a-score').text(mothHitsR5);
          break;
          case 6:
          mothHitsR6++;
          $('#round-3b-score').text(mothHitsR6);
        };
        checkForTiming();
      }, 500);

    });
    return moth;
  }

//Produce a random number of bugs
var mothMaker = function(){
  var numMoths = Math.floor(Math.random()*5+1);
  for(var i=0; i<numMoths; i++){
      createMoth();
    }
}

//Time each round for 30s,
//remove unpatched moths at the
//end of the round.

var roundStarter = function(){
  var endTimer = setInterval(function(){
    if(currTime > 0){
    updateTime();
    }else{
      clearInterval(endTimer);
      $('.moth').remove();
    }
  }, 1000);


  var updateTime = function(){
    currTime--;
    if(currTime > 9){
      $('#counting').text("00:" + currTime);
    }else{
      $('#counting').text("00:0" + currTime);
    }

    if((currTime <= 0 )&& (roundNum <= 6)){
      roundNum++;
      $('.moth').remove();
      $('#next-round').show();
      findWinner();
      return;
    }
  }

};

//Check for amt of time left in round
function checkForTiming(){
  if(($('.moth').length<=0) && currTime > 0){
      mothMaker();
  }
}

//Start Game/trigger next round on Click
$('.start').on("click", function(event){
  event.preventDefault();
  $('#game-start-pop-up').hide();
  $('#next-round').hide();
  $('#rules-list').hide();
  currTime=30;
  roundStarter();
  mothMaker();
})

//Win notification
function findWinner(){
  if((roundNum > 6) && (currTime === 0)){
  var playerOneFinalScore = mothHitsR1 + mothHitsR3 + mothHitsR5;
  var playerTwoFinalScore = mothHitsR2 + mothHitsR4 + mothHitsR6;
  if(playerOneFinalScore > playerTwoFinalScore){
    $("<div>Player One wins!<br>Final Score: " + playerOneFinalScore + " to " + playerTwoFinalScore + "</div>").insertBefore('#next-game');
  }else if(playerOneFinalScore < playerTwoFinalScore){
    $("<div>Player Two wins!<br>Final Score: " + playerTwoFinalScore + " to " + playerOneFinalScore + "</div>").insertBefore('#next-game');
  }else{
    $("<div>It's a tie!</div>").insertBefore('#next-game');
  }
  $('#victory').show();
  $('#next-round').hide();
}
}

//Rules pop-up
$('#rules').on('click', function() {
  $('#game-start-pop-up').hide();
  $('#next-round').hide();
  $('.moth').hide();
  $('#rules-list').show();
  });

$('#continue').on('click', function(){
  roundStarter();
  $('#rules-list').hide();
  $('.moth').show();
})

//Exit pop-up & page reload
$('#exit-game').on("click", function(){
  location.reload();
})

$('#victory').on("click", function(){
  location.reload();
})

}) //Don't mess with these
