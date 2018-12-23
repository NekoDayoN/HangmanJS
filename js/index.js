const MainController = (function(hng, ui) {

    function init() {
        hng.play();
        ui.setAttemptsLeft(hng.getAttemptsLeft());
        ui.showTip(hng.getTip());
        bindEvents();
    }

    function didGameEnd() {
        if(hng.didGuess() || hng.didLose()) {
            ui.setAttemptsLeft(hng.getEndMessage());
            ui.showRestartButton();
            return true;
        }

        return false;
    }

    function bindEvents() {
        ui.getForm().addEventListener('submit', function(evt) {
            evt.preventDefault();

            hng.guessWord(ui.getGuess());
            ui.clearInput();
            ui.showTip(hng.getTip());

            if(didGameEnd()) return;

            const attempts = hng.getAttemptsLeft();

            if(attempts === 1) {
                ui.hideLetterGuessing();
                return;
            }

            ui.setAttemptsLeft(attempts);
        });
    
        ui.getLetters().addEventListener('click', function(evt) {
            if(evt.target.classList.contains('letter')) {
                hng.guessLetter(evt.target.textContent);
                ui.showTip(hng.getTip());

                if(didGameEnd()) return;

                const attempts = hng.getAttemptsLeft();

                if(attempts === 1) {
                    ui.hideLetterGuessing();
                    return;
                }

                ui.setAttemptsLeft(attempts);
            }
        });

        ui.getRestartButton().addEventListener('click', function() {
            hng.restart();
            ui.setAttemptsLeft(hng.getAttemptsLeft());
            ui.hideRestartButton();
            ui.showLetterGuessing();
            ui.showTip(hng.getTip());
        });
    }

    return {
        init
    }
})(Hangman, UIController);

MainController.init();