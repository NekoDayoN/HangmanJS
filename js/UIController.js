const UIController = (function() {

    function getForm() {
        return document.getElementById('guessWord');
    }

    function getGuess() {
        return getForm().txtGuess.value;
    }

    function setAttemptsLeft(attempts) {
        const el = document.getElementById('attempts');

        if(attempts.toString().length === 1) {
            el.textContent = 'Attempts left: ' + attempts;
            return;
        }

        el.textContent = attempts;
    }

    function getLetters() {
        return document.getElementById('letterList');
    }

    function showTip(tip) {
        const el = document.getElementById('tip');
        el.textContent = tip;
        el.classList.add('showTip');
    }

    function clearInput() {
        getForm().reset();
    }

    function hideLetterGuessing() {
        document.getElementById('letterList').style.display = "none";
        setAttemptsLeft("Last Chance...");
    }

    function showLetterGuessing() {
        document.getElementById('letterList').style.display = "block";
    }

    function showRestartButton() {
        document.getElementById('restart').classList.add('showRestart');
    }

    function hideRestartButton() {
        document.getElementById('restart').classList.remove('showRestart');
    }

    function getRestartButton() {
        return document.getElementById('restart');
    }

    return {
        getForm,
        getGuess,
        setAttemptsLeft,
        clearInput,
        showTip,
        getLetters,
        hideLetterGuessing,
        showRestartButton,
        getRestartButton,
        hideRestartButton,
        showLetterGuessing
    }

})();