var audio0 = new Audio('sounds/tom-1.mp3');
var audio1 = new Audio('sounds/tom-2.mp3');
var audio2 = new Audio('sounds/tom-3.mp3');
var audio3 = new Audio("sounds/tom-4.mp3");
var audio4 = new Audio('sounds/snare.mp3');
var audio5 = new Audio('sounds/crash.mp3');
var audio6 = new Audio('sounds/kick-bass.mp3');

for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var keyPressed = this.innerHTML;
        
        makeSound(keyPressed);
        buttonAnimation(keyPressed);
    });

}

                            // We can also use "keypress"
var keyboardKey = document.addEventListener("keydown",function(event)
{
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(keyPressed)
{
    switch(keyPressed)
        {
            case "w":
                audio0.play();
                break;
            case "a":
                audio1.play();
                break;
            case "s":
                audio2.play();
                break;
            case "d":
                audio3.play();
                break;
            case "j":
                audio4.play();
                break;
            case "k":
                audio5.play();
                break;
            case "l":
                audio6.play();
                break;
        }
}

function buttonAnimation(currentKey)
{
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed");
    setTimeout(function()
    {
        activeKey.classList.remove("pressed");
    },100);
}


document.querySelector(".game-over-button").addEventListener("click",gameOver);

function gameOver()
{
    document.querySelector("body").style.backgroundColor = "#f05454";
    setTimeout(function()
    {
        alert("Game Over");
        backToOriginal();

    },800);   
}

function backToOriginal()
{
    return document.querySelector("body").style.backgroundColor = "#060930";
}