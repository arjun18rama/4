function getFourthDownDecision(distance) {
    const yards = Number(distance);
    if (isNaN(yards) || yards < 1 || yards > 15) {
        return 'INVALID';
    }

    return yards <= 10 ? 'YES' : 'NO';
}

document.getElementById('decideBtn').addEventListener('click', function () {
    const distanceInput = document.getElementById('distance');
    const outputDiv = document.getElementById('output');
    const decision = getFourthDownDecision(distanceInput.value);

    if (decision === 'INVALID') {
        outputDiv.textContent = 'Please enter a valid distance between 1 and 15.';
    } else if (decision === 'YES') {
        outputDiv.textContent = 'GO';
    } else {
        outputDiv.textContent = 'KICK';
    }
});
