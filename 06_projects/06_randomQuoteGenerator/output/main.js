"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const generateQuoteButton = document.getElementById('generate-quote-btn');
generateQuoteButton === null || generateQuoteButton === void 0 ? void 0 : generateQuoteButton.addEventListener('click', () => {
    const getQuote = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const response = yield fetch('https://dummyjson.com/quotes/random');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            else {
                const data = yield response.json();
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
        }
        catch (err) {
            // console.error('Error:', err);
            alert('An error occurred while fetching the quote. Please try again later.');
        }
    });
    getQuote();
});
