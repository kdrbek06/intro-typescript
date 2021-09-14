(function() {
    document.getElementById('guess-form').addEventListener("submit", compareUserGuess);

    // function with void can't return anything
    function compareUserGuess (event : any) :void {
        event.preventDefault();

        const secretNumber = generateSecretNumber();
        const userNumber = parseInt((document.getElementById('guess') as HTMLInputElement).value);

        if (secretNumber == userNumber) {
            alert("Awesome! You number " + userNumber + " was correct./////// You can be named many things, hungry not being one of them.");
        } else {
            alert("Bummer... You guessed " + userNumber + " and the secret number was " + secretNumber + ".");
        }

    }

    function generateSecretNumber():number {
        const secretNumber = getRandomArbitrary(1, 22);

        return secretNumber;
    }

    function getRandomArbitrary(min:number, max:number):number {
        return Math.round(Math.random() * (max - min) + min);
    }
})();