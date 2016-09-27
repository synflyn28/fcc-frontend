/**
 * Created by towershine on 8/17/16.
 */


//Select a random column variable name between both 0-9 for the 3x3 grid
function computerSelect() {
    var rowval = Math.floor((Math.random() * 3) + 1);
    var colval = Math.floor((Math.random() * 3) + 1);

    //Find the element within the tic tac toe grid and return it

    return {'rowval':rowval, 'colval':colval};
}


//Check to see if either the player or the computer won the game
function checkWin(currentElem, clickedBoxes) {
    


}


//Make the computer pick a cell when the player makes their selection
function runGame(playerElement, clickedBoxes) {

    //Set the player element's class to be highlighted
    $(playerElement).addClass('player-clicked');

    var notSelected = true;
    var randVals = computerSelect();
    var elementSelect = "td#r"+randVals.rowval.toString()+"c"+randVals.colval.toString();
    var selectedElement = $("table " + elementSelect);

    while (notSelected) {

        if (clickedBoxes == 8) {
            selectedElement.addClass('player-clicked');
            notSelected = false;
        }

        else if (selectedElement.attr('class') === undefined) {
            selectedElement.addClass('computer-clicked');
            notSelected = false;
        }

        else if (selectedElement.attr('class') !== 'player-clicked' && selectedElement.attr('class') !== 'computer-clicked'){
            selectedElement.addClass('computer-clicked');
            notSelected = false;
        }
        else {
            //If the element isn't valid select another one
            randVals = computerSelect();
            elementSelect = "td#r"+randVals.rowval.toString()+"c"+randVals.colval.toString();
            selectedElement = $("table " + elementSelect);
        }

    }



}

