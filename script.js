function flipCoin() {
    const coin = document.getElementById('coin');
    const outcomeElement = document.getElementById('outcome');
    coin.classList.remove('flip');
    outcomeElement.textContent = '';

    // Trigger reflow
    void coin.offsetWidth;

    const outcome = Math.random() < 0.5 ? 'heads' : 'tails';
    coin.style.animationName = outcome;
    coin.classList.add('flip');

    setTimeout(() => {
        outcomeElement.textContent = `Outcome: ${outcome}`;
    }, 600); // Same duration as the flip animation
}
