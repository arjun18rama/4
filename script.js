function getFourthDownDecision(distance) {
    const yards = Number(distance);
    if (isNaN(yards) || yards < 1 || yards > 15) {
        return 'INVALID';
    }

    return yards <= 10 ? 'YES' : 'NO';
}

document.getElementById('decideButton').addEventListener('click', function () {
    const output = document.getElementById('output');
    const value = parseInt(document.getElementById('distanceInput').value, 10);

    const decision = getFourthDownDecision(value);

    if (decision === 'INVALID') {
        output.textContent = 'Please enter a valid distance between 1 and 15.';
    } else if (decision === 'YES') {
        output.textContent = 'GO';
    } else {
        output.textContent = 'KICK';
    }
});

