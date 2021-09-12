
const quotes = './assets/js/quotes.json';
const blockquote = document.getElementById('quote');

const getRandomQuote = () => fetch(quotes)
                                .then(response => response.json())
                                .then(data => data[Math.floor(Math.random()*data.length)]);

setInterval(() => {
    getRandomQuote().then(quote => {
        blockquote.classList.remove('fade');
        setTimeout(() => {
            blockquote.innerHTML = `<p class="quote-body">${quote.quote}</p>
                                <p class="quote-footer">${quote.author}</p>`;
            blockquote.classList.add('fade');
        }, 255);
    });
}, 300000);


