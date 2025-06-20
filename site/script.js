import { navigate } from './modules/router.js';

function getFourthDownDecision(distance) {
    const yards = Number(distance);
    if (isNaN(yards) || yards < 1 || yards > 15) {
        return 'INVALID';
    }

    return yards <= 10 ? 'YES' : 'NO';
}

function updateDecision() {
    const range = document.getElementById('distanceRange');
    const outputDiv = document.getElementById('output');
    const distanceValue = document.getElementById('distanceValue');

    distanceValue.textContent = range.value;
    const decision = getFourthDownDecision(range.value);

    outputDiv.classList.remove('go', 'kick');

    if (decision === 'INVALID') {
        outputDiv.textContent = 'Please enter a valid distance between 1 and 15.';
    } else if (decision === 'YES') {
        outputDiv.textContent = 'GO';
        outputDiv.classList.add('go');
    } else {
        outputDiv.textContent = 'KICK';
        outputDiv.classList.add('kick');
    }
}

const rangeEl = document.getElementById('distanceRange');

rangeEl.addEventListener('input', () => {
    localStorage.setItem('distanceRange', rangeEl.value);
    updateDecision();
});

document.getElementById('decideBtn').addEventListener('click', updateDecision);

