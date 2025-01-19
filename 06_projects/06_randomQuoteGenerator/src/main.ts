const generateQuoteButton = document.getElementById('generate-quote-btn');

generateQuoteButton?.addEventListener('click', ():void => {
    const getQuote = async () => {
        try {
            const response = await fetch('https://dummyjson.com/quotes/random');
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                const data = await response.json();
                // console.log(data);
                const quoteDisplay = document.getElementById('quote-display');
                if (quoteDisplay) {
                    quoteDisplay.innerText = data.quote;
                }
                const quoteAuthor = document.getElementById('quote-author');
                if (quoteAuthor) {
                    quoteAuthor.innerText = `- ${data.author}`;
                }
            }
            
        } catch (err) {
            // console.error('Error:', err);
            alert('An error occurred while fetching the quote. Please try again later.');
        }
    }
    getQuote();
})