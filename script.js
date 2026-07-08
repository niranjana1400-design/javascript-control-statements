// ===============================
// Assignment 1 - Multiplication Table
// ===============================

function multiplicationTable() {

    let number = Number(document.getElementById("tableNumber").value);

    let output = "";

    for (let i = 1; i <= 10; i++) {

        output += number + " x " + i + " = " + (number * i) + "\n";

    }

    document.getElementById("result1").textContent = output;

}

// ===============================
// Assignment 2 - Prime Number
// ===============================

function checkPrime() {

    let number = Number(document.getElementById("primeNumber").value);

    let isPrime = true;

    if (number <= 1) {

        isPrime = false;

    }

    else {

        for (let i = 2; i < number; i++) {

            if (number % i === 0) {

                isPrime = false;

                break;

            }

        }

    }

    if (isPrime) {

        document.getElementById("result2").innerHTML =
            number + " is a Prime Number";

    }

    else {

        document.getElementById("result2").innerHTML =
            number + " is Not a Prime Number";

    }

}

// ===============================
// Assignment 3 - Sum of 1 to 100
// ===============================

function calculateSum() {

    let sum = 0;

    for (let i = 1; i <= 100; i++) {

        sum += i;

    }

    document.getElementById("result3").innerHTML =
        "Sum of numbers from 1 to 100 = " + sum;

}

// ===============================
// Assignment 4 - Number Guessing Game
// ===============================

function guessGame() {

    let secret = Math.floor(Math.random() * 10) + 1;

    let attempts = 5;

    while (attempts > 0) {

        let guess = prompt(
            "Guess a number between 1 and 10\nAttempts Left: " + attempts
        );

        if (guess == secret) {

            alert("🎉 Congratulations! You guessed the correct number.");

            return;

        }

        else if (guess > secret) {

            alert("Too High! Try Again.");

        }

        else {

            alert("Too Low! Try Again.");

        }

        attempts--;

    }

    alert("Game Over!\nThe Correct Number was " + secret);

}