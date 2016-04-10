//extra features draft

Highlight Round & Player turn

function highlightRound(roundNum){
  switch(roundNum){
          case 1:
          $('#scoreboard h2:first-child').css('color', 'purple');
          $('#scoreboard:first-child').css('color', 'purple');
          break;
          case 2:
          $('#scoreboard:first-child').css('color', 'purple');
          $('#scoreboard:first-child').css('color', 'purple');
          break;
          case 3:
          $('#round-2a-score').text(mothHits);
          $('#scoreboard:first-child').css('color', 'purple');
          break;
          case 4:
          $('#round-2b-score').text(mothHits);
          $('#scoreboard:first-child').css('color', 'purple');
          break;
          case 5:
          $('#round-3a-score').text(mothHits);
          $('#scoreboard:first-child').css('color', 'purple');
          break;
          case 6:
          $('#round-3b-score').text(mothHits);
          $('#scoreboard:first-child').css('color', 'purple');
        };
}();


if((roundNum > 6) && (playerOneTotalScore > playerTwoTotalScore)){
    $('<div class="to-play">').
