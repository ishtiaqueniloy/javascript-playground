let upper = 10000;
let randomNumber = getRandomNumber(upper);
let guess;
let attempts = 0;

function getRandomNumber(upper){
    return Math.floor(Math.random() * upper) + 1;
}

while(guess !== randomNumber){
    guess = getRandomNumber(upper);
    attempts++;
}

document.write("<p>The random number was: " + randomNumber + "</p>")
document.write("<p>It took computer to : " + attempts + " attempts to get it right.")