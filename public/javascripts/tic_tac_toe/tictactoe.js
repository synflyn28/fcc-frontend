/**
 * Created by towershine on 8/16/16.
 */

$(document).ready(function(){

    var clickedBoxes = 0;
    var winner = null;

    //Prompt user to select Xs or Os

    //Handle when box is clicked by the player
    $("td").click(function(){

        if ($(this).attr('class') !== 'computer_clicked') {

            //Run game by having the computer select an empty box
            runGame(this, clickedBoxes);
            clickedBoxes += 2;

            //Check to see if anyone has won the game
            checkWin(this, clickedBoxes);
        }
    });

    //Reset entire game
    $("#reset").click(function(){
        $("td").removeClass();
        $("td").empty();
    });
});
