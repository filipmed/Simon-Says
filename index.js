var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];



var level = 0;
var executed = false;



$(document).keypress(function () {

    if (!executed) {
        $('#level-title').text("Level " + level)
        nextSequence();

        executed = true;
    }
}
)
$(".btn").click(function () {
    var userChosenColor = $(this).attr('id');
    userClickedPattern.push(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);

    animatePress(userChosenColor);
    playSound(userChosenColor);



});


function nextSequence() {
    userClickedPattern = [];
    level++;
    $('#level-title').text("Level " + level);
    //creates random number
    var randomNumber = Math.floor(Math.random() * 4);
    //uses random number to create a randomly chosen color in a list
    var randomChosenColour = buttonColors[randomNumber];
    //adds random color to list
    gamePattern.push(randomChosenColour);


    $('#' + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

   


}
function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}


function animatePress(currentColor) {
    $('#' + currentColor).addClass('pressed');
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        console.log("success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000)
        }

    } else {
        console.log("wrong");   
        playSound("wrong");
        $('body').addClass("game-over");
        setTimeout( function(){
            $('body').removeClass("game-over");
        },100)
     $("#level-title").text("Game Over! Press Any button to continue")
     startOver();
     $(document).keypress(function () {

        if (!executed) {
            $('#level-title').text("Level " + level)
            nextSequence();
    
            executed = true;
        }
    }
    )
    }

}
//function below wipes the list that contains the game data as to not interfere with next games
function startOver(){
    level =0;
    gamePattern =[];
    userClickedPattern= [];   
    executed=false;
}







