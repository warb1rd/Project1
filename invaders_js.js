
// var player1Name = prompt("Enter Player1");
// var player2Name = prompt("Enter Player2");


// $player1Name.val(player1Name);

// OPENING screen with inputs for player1 player 2 names
// hide opening screen when "ok" button is clicked.
// add player names on bottom screen
// engage game 



var $player1Name = $("#name1");
var $player2Name = $("#name2");
var $nameInput = $("#input-name");
var $okBtn = $("#ok-btn");
var $spaceCraft = $("#space-craft");
var $startButton = $("#start-game");
var $invaders = $("#grid");
$startButton.hide();
$spaceCraft.hide();
$invaders.hide();


function goButton(){                                                                                // asks players for names and stores in the bottom 
    var theName =  $nameInput.val();
    
    if($player1Name.text() === "name of player"){
        // console.log($player1Name)
        $player1Name.text(theName);
        // console.log('You typed');
        // console.log(theName);
        $nameInput.attr("placeholder","Who's Player-2 ?");                                          // change the placeholder to "who's player-2 ?"
    } else {
        $player2Name.text(theName);
        console.log(theName);
    }
    $nameInput.val("");
    function hideInput(){                                                                           // hide the input divs after players enter names.
           $(this).parent().hide(1000);
    $startButton.show(1000);
}  
    function showGame(){
        $spaceCraft.show(500);
        $invaders.show(500);
        $startButton.hide(500);
    }
    
         $okBtn.on("click", hideInput);
         $startButton.on("click",showGame);
}

// var myVar;
// function myFunction() {
//     myVar = setInterval(bullet, 3000);
// }

// function bullet() {
//   $spaceCraft.css({marginTop:"100px"})
// }

function bullet(e) {
    if (e.keyCode == "32"){
    // var $spaceCraft = $("#space-craft");  (declared outside fn)
    var pos = 0;
    var id = setInterval(frame, 15);
    function frame() {
        if (pos == 50) {
            clearInterval(id);
        } else {
        pos--; 
        $spaceCraft.css("marginTop", pos + 'px') ;
        }
        }
    }
}

window.addEventListener("keydown", bullet);
 
$okBtn.on("click", goButton);









// $okBtn.on("click", hideInput());

// function moveInvaders(){
    // if position is top left at 0 (eg) hide and move to position 5 px, or 1px every 5 milisec
// }
// function storeName(){
//     $player1Name.text() = $nameInput.val()
// }


// var game = {
//     players:[{name:player1Name}, {name:player2Name}],
//     currentPlayer: null,
//     invadersKilled: 0,

//     openingScreen: function(){
        
//     },

//     engage: function(){
//         game.invadersKilled = 0;
//         game.currentPlayer = game.players[0];       
//     },

//     switchPlayer: function(){
//         if(game.currentPlayer === game.players[0]){                          
//             game.currentPlayer = game.players[1]
//         } else {
//             game.currentPlayer = game.players[0]
//         }
//     },

//     // use keydown, key up, left, right functions

// }
