var buttonColours=["green","red","yellow","blue"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var i=0;
var flag=0;
function nextSequence(){
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    var button=$('#'+randomChosenColour);
    button.fadeOut(100).fadeIn(100);
    console.log("To Be Clicked "+randomChosenColour);
    console.log(gamePattern);
    playSound(randomChosenColour);
    
}
$(".btn").on("click",function(){
    var userChosenColour=$(this).attr("id");
    if(flag===1){
        animatePress(userChosenColour);
        playSound(userChosenColour);
        checkAnswer(userChosenColour);
    }
});

function animatePress(currentColour) {
    $('.'+currentColour).addClass("pressed");
    setTimeout(function(){
        $('.'+currentColour).removeClass("pressed");
    }, "100");
}
$("button").click(function(){
    flag=1;
    nextSequence();
});

function checkAnswer(userChosenColour) {
    if(userChosenColour===gamePattern[i]){
        i++;
    }else{
        i=0;
        level=0;
        playSound("wrong");
        $("body").css("background-color","red");
        setTimeout(function(){
            $("body").css("background-color", "#011F3F");
        }, "400");
        $("h1").text("START");
        gamePattern=[];
        flag=0;
    }
    if(i===gamePattern.length && flag===1){
        i=0;
        level++;
        $("h1").text("Level " + level +" Completed.");
        setTimeout(function(){
            nextSequence();
        }, "1000");
        
    }
}
function playSound(name) {
    var audio;
    switch (name) {
        case "green":
            audio=new Audio("sounds/green.mp3");
            audio.play();
            break;
        case "red":
            audio=new Audio("sounds/red.mp3");
            audio.play();
            break;
        case "yellow":
            audio=new Audio("sounds/yellow.mp3");
            audio.play();
            break;
        case "blue":
            audio=new Audio("sounds/blue.mp3");
            audio.play();
            break;
        case "wrong":
            audio=new Audio("sounds/wrong.mp3")
            break;
        default:
            break;
    }
}