var gamePattern =[];

var buttonColors =["red", "blue", "green", "yellow"]

var randomChosenColour = buttonColors[nextSequence()];

gamePattern.push(randomChosenColour);//adds a randomly generated color to
function nextSequence(){
    var randomNumber = Math.floor(Math.random()*4);
    return randomNumber;
}
$("#green").click(function(){
    $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var green =new Audio("sounds/green.mp3");
    green.play();
});
$("#red").click(function(){
    $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var red =new Audio("sounds/green.mp3");
    red.play();
});
$("#blue").click(function(){
    $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var blue =new Audio("sounds/green.mp3");
    blue.play();
});
$("#yellow").click(function(){
    $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var yellow =new Audio("sounds/green.mp3");
    yellow.play();
});

console.log(randomChosenColour);
console.log(gamePattern);
    if ($('#green').click){
            
        $("#green").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
        var green =new Audio("sounds/green.mp3");
        green.play();
        
    }
    else if(gamePattern == 'red'){
        $("#red").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }
    else if(gamePattern == 'yellow'){
        $("#yellow").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }
    else if(gamePattern == 'blue'){
        $("#blue").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    }
    else{
        console.log('error');
    }

