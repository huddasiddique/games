function guessnumber() {
    var randomNum = Math.floor(Math.random() * 23);

    console.log(randomNum);
    
    var guess;
    guess = prompt("Please enter a number between 1 and 100000")

    if (guess < randomNum) {
        alert("Correct");
    } else if (guess > randomNum) {
        alert("Try again");
    } else if (guess == randomNum) {
       alert("Your close to the answer,try again")
    }
}