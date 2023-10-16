import React from 'react';
import quotes from "../db/quotes.json"
import { getRandomElement } from '../utils/random';
import "./Quote.css"


const Quote = ({quote, setQuote, setCurrentBg, backgrounds}) => {
    const handleChangeQuote= () =>{
        setQuote(getRandomElement(quotes))
        setCurrentBg(getRandomElement(backgrounds))
    }
    return (
        <section className='quoteCard'>
            <article className='quoteCard__container'>
                <h1 className='quoteCard__title'>Infogalax</h1>
                <p className='quoteCard__phrase'>{quote.phrase}</p>
                <button className='quoteCard__btn'onClick={handleChangeQuote}>Change</button>
            </article>
            <footer className='quoteCard__footer'>
            Author:{quote.author}
            </footer>
            <div className='planet'></div>
        </section>
    );
};

export default Quote;