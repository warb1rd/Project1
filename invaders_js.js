
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
var count = 0;

$startButton.hide();
$spaceCraft.hide();
$invaders.hide();


function goButton(){   
    // asks players for names and stores in the bottom 
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
        var enemyMovement = setInterval(moveRight,15);
        
    
    function moveRight(){ 
          
        $invaders.css("marginLeft", "+=4px")
        if(parseInt($invaders.css("marginLeft"))>1005){            
            clearInterval(enemyMovement)

            enemyMovement = setInterval(moveDown, 15)
            function moveDown(){
                $invaders.css("marginTop", "+=8px")
                if(parseInt($invaders.css("marginTop"))>100){
                    clearInterval(enemyMovement);

                    enemyMovement = setInterval(moveLeft, 15) 
                    function moveLeft(){
                        $invaders.css("marginLeft", "-=4px")   
                        if(parseInt($invaders.css("marginLeft")) < 2){
                            clearInterval(enemyMovement)
                            console.log($invaders.css("marginLeft"))           
                            
                            enemyMovement = setInterval(moveDownAgain, 15)   
                            function moveDownAgain(){
                            $invaders.css("marginTop", "+=8px")   
                            if(parseInt($invaders.css("marginTop")) > 200){ 
                                console.log($invaders.css("marginTop"))           
                                clearInterval(enemyMovement)
                            
                                enemyMovement = setInterval(moveRight, 15)

                                if(parseInt(($invaders.css("marginTop"))) > 340){
                                    clearInterval(enemyMovement)
                                    console.log(parseInt(($invaders.css("marginTop"))))
                                }
                               
                                // if(parseInt($invaders.css("marginLeft"))>100){ 
                                //     console.log($invaders.css("marginLeft"))
                                //     clearInterval(enemyMovement)
                                //     console.log("end reached");
                                       
                                // } 
                                
                                
                            }
                        }
                    } 
                }         
            }
        }   
    }
        
}
    }
     
         $okBtn.on("click", hideInput);
         $startButton.on("click",showGame);
}


function bullet(e) {
    if (e.keyCode == "32"){
        console.log('move craft')

        var movement = setInterval(moveCraft, 20)
        function moveCraft(){
            $spaceCraft.css('marginTop', '-=2px');
            if(parseInt($spaceCraft.css('marginTop')) < -100){
                console.log($spaceCraft.css("marginTop"))
            clearInterval(movement)
            $spaceCraft.css('marginTop', '375px')
            // create a variable called moving where if bullet is already moving, don't run the move function again till bullet reaches border.
            }
        }
    }
}

window.addEventListener("keydown", bullet);

$okBtn.on("click", goButton);
$spaceCraft.css({'marginTop': '375px', 'marginLeft': '600px'});
$invaders.css({"marginTop":"0", "marginLeft": "0"});







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
