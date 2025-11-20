const quotes = [
    "The secret of getting ahead is getting started.",
    "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    "Truth is mighty and will prevail. There is nothing wrong with this, except that it ain't so.",
    "The human race has one really effective weapon, and that is laughter."
];

let index = 0;
const quoteElement = document.getElementById("quote");

function showQuote() {
    if (quoteElement) {
        quoteElement.textContent = quotes[index];
        index = (index + 1) % quotes.length;
    }
}

setInterval(showQuote, 3000);
showQuote();
