function SecretWord(word) {
    this.word = word;

    this.getNumberOfLetters = function() {
        return this.word.length;
    }

    this.guessWord = function(word) {
        return this.word === word;
    }

    this.guessLetter = function(letter) {
        const matches = [];

        for(let i = 0; i < this.word.length; i++) {
            if(this.word[i] == letter) {
                matches.push(i);
            }
        }
        
        return matches;
    }
}