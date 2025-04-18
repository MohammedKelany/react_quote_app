import { useState } from 'react'
import './App.css'

function App() {

  const [quote, setQuote] = useState({});

  // Using Existing List 
  // const handleQuote=()=>{
  //   setQuote(quotesList[Math.floor(Math.random() *93)]);
  // }

  
  // Using External API 
  const handleQuote= async ()=>{
    await fetch("https://api.api-ninjas.com/v1/quotes" ,{
      headers:{
        'X-Api-Key': "3r//KqVxaVjMTo7cIY0Xcg==WSzmSdzmywPylpvK",
      }
    }).
    then((response)=>response.json()).
    then((data)=>setQuote(data[0]));
  }

  return (
    <>
    <h1>{quote.author ?? "Click The Button to get Quote"}</h1>
    <h1>{quote.quote}</h1>
    <button onClick={handleQuote}>Change Quote</button>
    </>
  )
}

export default App
