function getFourthDownDecision(distance) {
    if (typeof distance !== 'number' || distance < 1 || distance > 15) {
        return {
            decision: 'INVALID',
            recommendedPlay: 'Distance must be between 1 and 15 yards.'
        };
    }

    if (distance <= 2) {
        return {
            decision: 'GO FOR IT',
            recommendedPlay: 'Inside Zone / QB Sneak'
        };
    } else if (distance <= 5) {
        return {
            decision: 'GO FOR IT',
            recommendedPlay: 'Slants / Quick Out / RPO'
        };
    } else if (distance <= 8) {
        return {
            decision: 'GO FOR IT',
            recommendedPlay: 'PA Crosser / Levels / Post Wheel'
        };
    } else if (distance <= 10) {
        return {
            decision: 'GO FOR IT',
            recommendedPlay: 'Bunch Trail / Mesh Spot / Deep Corner'
        };
    } else if (distance <= 12) {
        return {
            decision: 'RISKY – Optional Go',
            recommendedPlay: 'Deep In / Crossers / Four Verticals'
        };
    } else if (distance <= 15) {
        return {
            decision: 'PUNT (unless desperate)',
            recommendedPlay: 'None – Only go if desperate or game is on the line.'
        };
    }
}

document.getElementById('decideButton').addEventListener('click', function () {
    const output = document.getElementById('output');
    const value = parseInt(document.getElementById('distanceInput').value, 10);

    if (isNaN(value) || value < 1 || value > 15) {
        output.textContent = 'Please enter a valid distance between 1 and 15.';
        return;
    }

    const result = getFourthDownDecision(value);
    if (result.decision === 'INVALID') {
        output.textContent = result.recommendedPlay;
    } else {
        output.textContent = `Decision: ${result.decision}, Recommended Play: ${result.recommendedPlay}`;
    }
});

