function getFourthDownDecision(distance) {
    if (typeof distance !== 'number' || distance < 1 || distance > 15) {
        throw new Error('Distance must be between 1 and 15 yards');
    }

    if (distance <= 2) {
        return { decision: 'Go for it', recommendedPlay: 'QB sneak' };
    } else if (distance <= 5) {
        return { decision: 'Go for it', recommendedPlay: 'Short run or pass' };
    } else if (distance <= 10) {
        return { decision: 'Punt', recommendedPlay: 'Punt the ball' };
    } else {
        return { decision: 'Punt', recommendedPlay: 'Punt the ball' };
    }
}

document.getElementById('decideButton').addEventListener('click', function () {
    const output = document.getElementById('output');
    const value = parseInt(document.getElementById('distanceInput').value, 10);

    if (isNaN(value) || value < 1 || value > 15) {
        output.textContent = 'Please enter a valid distance between 1 and 15.';
        return;
    }

    try {
        const result = getFourthDownDecision(value);
        output.textContent = `Decision: ${result.decision}, Recommended Play: ${result.recommendedPlay}`;
    } catch (err) {
        output.textContent = err.message;
    }
});

