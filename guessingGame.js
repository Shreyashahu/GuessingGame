let maxNum = prompt("Enter the maximum number : ");
let randomNum = Math.floor(Math.random() * maxNum) + 1;
alert("Number has been generated. Its your turn now!! Guess the number");
let num = prompt("Enter the guessed number : ");
if(maxNum == randomNum)
    alert("Woohh, you guessed it!!");
else    
    alert("Incorrect Guess!!");

