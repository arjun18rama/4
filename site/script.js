function getFourthDownDecision(distance) {
    const yards = Number(distance);

    if (isNaN(yards) || yards < 1 || yards > 15) {
        return {
            decision: 'INVALID',
            recommendedPlay: 'Distance must be between 1 and 15 yards.'
        };
    }

    if (yards <= 2) {
        return {
            decision: 'GO FOR IT',
            recommendedPlay: 'Inside Zone / QB Sneak'
        };
    } else if (yards <= 5) {
        return {
            decision: 'GO FOR IT',
            recommendedPlay: 'Slants / Quick Out / RPO'
        };
    } else if (yards <= 8) {
        return {
            decision: 'GO FOR IT',
            recommendedPlay: 'PA Crosser / Levels / Post Wheel'
        };
    } else if (yards <= 10) {
        return {
            decision: 'GO FOR IT',
            recommendedPlay: 'Bunch Trail / Mesh Spot / Deep Corner'
        };
    } else if (yards <= 12) {
        return {
            decision: 'RISKY – Optional Go',
            recommendedPlay: 'Deep In / Crossers / Four Verticals'
        };
    } else if (yards <= 15) {
        return {
            decision: 'PUNT (unless desperate)',
            recommendedPlay: 'None – Only go if desperate or game is on the line.'
        };
    }
}

document.getElementById('decideBtn').addEventListener('click', function () {
    const distanceInput = document.getElementById('distance');
    const outputDiv = document.getElementById('output');
    const result = getFourthDownDecision(distanceInput.value);

    if (result.decision === 'INVALID') {
        outputDiv.textContent = result.recommendedPlay;
    } else {
        outputDiv.innerHTML = `<strong>${result.decision}</strong> - ${result.recommendedPlay}`;
    }
});
