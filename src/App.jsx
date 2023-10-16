import  quotes from "./db/quotes.json"
import {getRandomElement} from "./utils/random"
import './App.css'
import { useState } from "react"
import Quote from "./components/Quote"

const backgrounds = ["bg1","bg2","bg3", "bg4"]

function App() {
  const randomQuote = getRandomElement(quotes);
  const [quote, setQuote] = useState(randomQuote);

  const [currentBg, setCurrentBg]= useState(getRandomElement(backgrounds))
  
  return (
    <main className={`app ${currentBg}`}>
     <Quote quote={quote} setQuote={setQuote} setCurrentBg={setCurrentBg} backgrounds={backgrounds}/>
    </main>
  )
}

export default App
