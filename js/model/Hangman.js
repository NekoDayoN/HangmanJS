const Hangman = (function() {
    const core = {
        secret: null,
        words: ["banana", "apple", "pen", "sofa", "pineapple"],
        didGuess: false,
        didLose: false,
        attempts: 6,
        blankWord: ""
    }

    function play() {
        getWord();
        const length = core.secret.getNumberOfLetters();
        fillBlankWord(length);
    }

    function getWord() {
        word = core.words[Math.floor(Math.random() * core.words.length)];
        core.secret = new SecretWord(word);
    }

    function guessWord(word) {
        if(core.secret.guessWord(word)) {
            core.blankWord = word;
            core.didGuess = true;
        }

        core.attempts--;
        checkNoAttempts();
    }

    function getAttemptsLeft() {
        return core.attempts;
    }

    function guessLetter(letter) {
        const matches = core.secret.guessLetter(letter);
        let newWord = "",
            found = false;

        for(let i = 0; i < core.blankWord.length; i++) {
            for(let j = 0; j < matches.length; j++) {
                if(matches[j] === i) {
                    newWord += letter;
                    found = true;
                }
            }

            if(!found) {
                newWord += core.blankWord[i];
            }

            found = false;
        }

        core.attempts--;
        checkNoAttempts();
        
        core.blankWord = newWord;

        if(core.secret.guessWord(core.blankWord)) {
            core.didGuess = true;
        }
    }

    function fillBlankWord(numFill) {
        for(let counter = numFill; counter > 0; counter--) {
            core.blankWord += "_";
        } 
    }

    function getTip() {
        return core.blankWord;
    }

    function checkNoAttempts() {
        if(core.attempts === 0) {
            core.didLose = true;
        }
    }

    function didGuess() {
        return core.didGuess;
    }

    function didLose() {
        return core.didLose;
    }

    function getEndMessage() {
        return core.didGuess ? "Congratulations! You guessed it." : "Sorry... You couldn't guess it... Maybe next...";
    }

    function restart() {
        core.didGuess = false;
        core.didLose = false;
        core.blankWord = "";
        core.attempts = 6;
        play();
    }

    return {
        play,
        guessWord,
        guessLetter,
        didGuess,
        didLose,
        getEndMessage,
        getAttemptsLeft,
        getTip,
        restart
    }
})();