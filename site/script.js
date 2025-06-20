function getFourthDownDecision(distance) {
    const yards = Number(distance);
    if (isNaN(yards) || yards < 1 || yards > 15) {
        return { decision: 'Invalid', play: 'Distance must be between 1 and 15' };
    }

    if (yards <= 3) {
        return { decision: 'Go for it', play: 'Run up the middle' };
    } else if (yards <= 6) {
        return { decision: 'Attempt Field Goal', play: 'Kick a field goal' };
    } else if (yards <= 10) {
        return { decision: 'Consider Punt', play: 'Coffin corner punt' };
    } else {
        return { decision: 'Punt', play: 'Punt deep' };
    }
}

document.getElementById('decideBtn').addEventListener('click', function () {
    const distanceInput = document.getElementById('distance');
    const outputDiv = document.getElementById('output');
    const result = getFourthDownDecision(distanceInput.value);

    if (result.decision === 'Invalid') {
        outputDiv.textContent = result.play;
    } else {
        outputDiv.innerHTML = `<strong>${result.decision}</strong> - ${result.play}`;
    }
});
