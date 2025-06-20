import { navigate } from './modules/router.js';

/**
 * Determine whether to go for it on fourth down based on yards to go and
 * field position. Ported from the Python reference implementation.
 * @param {number} yardsToGo - Yards needed for a first down.
 * @param {number} fieldPosition - Yards from the team's own end zone (0-100).
 * @returns {{decision: string, recommendations: string[]}|{decision: 'INVALID'}}
 */
function shouldGoForIt(yardsToGo, fieldPosition) {
    const yards = Number(yardsToGo);
    const position = Number(fieldPosition);

    if (
        isNaN(yards) || yards < 1 || yards > 15 ||
        isNaN(position) || position < 0 || position > 100
    ) {
        return { decision: 'INVALID', recommendations: [] };
    }

    let decision = 'PUNT';
    let recommendations = [];

    if (position >= 90) {
        if (yards <= 1) {
            decision = 'GO FOR IT';
            recommendations = ['QB Sneak', 'Fullback Dive'];
        }
    } else if (position >= 70) {
        if (yards <= 2) {
            decision = 'GO FOR IT';
            recommendations = ['Inside Zone', 'TE Stick'];
        } else if (yards <= 5) {
            decision = 'CONSIDER';
        }
    } else if (position >= 50) {
        if (yards <= 5) {
            decision = 'GO FOR IT';
            recommendations = ['Slant Flat', 'Mesh', 'RPO'];
        } else if (yards <= 10) {
            decision = 'CONSIDER';
        }
    } else if (position >= 30) {
        if (yards <= 7) {
            decision = 'GO FOR IT';
            recommendations = ['Double Post', 'PA Crossers'];
        } else {
            decision = 'FIELD GOAL or GO FOR IT';
        }
    } else if (position < 30) {
        if (yards <= 5) {
            decision = 'GO FOR IT';
            recommendations = ['Quick Out', 'Fade', 'HB Draw'];
        } else {
            decision = 'FIELD GOAL';
        }
    } else {
        decision = 'ERROR: Invalid field position';
    }

    return { decision, recommendations };
}

function updateDecision() {
    const yardsRange = document.getElementById('distanceRange');
    const fieldRange = document.getElementById('fieldRange');
    const outputDiv = document.getElementById('output');
    const distanceValue = document.getElementById('distanceValue');
    const fieldValue = document.getElementById('fieldValue');

    distanceValue.textContent = yardsRange.value;
    fieldValue.textContent = fieldRange.value;

    outputDiv.classList.remove('go', 'kick');
    outputDiv.innerHTML = '';

    const result = shouldGoForIt(yardsRange.value, fieldRange.value);

    if (result.decision === 'INVALID') {
        outputDiv.textContent = 'Please enter valid values.';
        return;
    }

    outputDiv.textContent = result.decision;
    if (result.decision.includes('GO')) {
        outputDiv.classList.add('go');
    } else if (result.decision.includes('PUNT') || result.decision.includes('FIELD')) {
        outputDiv.classList.add('kick');
    }

    if (result.recommendations.length) {
        const list = document.createElement('ul');
        list.className = 'recommendations';
        result.recommendations.forEach((play) => {
            const li = document.createElement('li');
            li.textContent = play;
            list.appendChild(li);
        });
        outputDiv.appendChild(list);
    }
}

const rangeEl = document.getElementById('distanceRange');
const fieldEl = document.getElementById('fieldRange');

rangeEl.addEventListener('input', () => {
    localStorage.setItem('distanceRange', rangeEl.value);
    updateDecision();
});

fieldEl.addEventListener('input', () => {
    localStorage.setItem('fieldRange', fieldEl.value);
    updateDecision();
});

document.getElementById('decideBtn').addEventListener('click', updateDecision);

