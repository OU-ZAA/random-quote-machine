import { useEffect, useState } from 'react'
import { FaTwitter } from 'react-icons/fa'

function App() {
  return (
    <>
      <QuoteBox />
    </>
  )
}

function QuoteBox() {
  const [quote, setQuote] = useState({})

  function fetchData() {
    fetch("https://api.quotable.io/random")
      .then(res => res.json())
      .then(data => setQuote(data))
  }
  
  function handleClick() {
    fetchData()
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="grid place-items-center h-screen bg-slate-900">
      <div className="w-[500px] bg-slate-100 p-6 rounded-lg">
        <p className="text-2xl">
          {quote.content}
        </p>
        <p className="text-right text-lg pb-2">~ {quote.author}</p>
        <div className="flex justify-between">
          <a 
            className="p-3 rounded-md bg-slate-900"
            target="_top"
            href={`https://twitter.com/intent/tweet?text="${quote.content}" ${quote.author}`}
          >
            <FaTwitter className="text-white" />
          </a>
          <button 
            onClick={handleClick}
            className="p-2 rounded-md bg-slate-900 text-white"
          >
            New Quote
          </button>
        </div>
      </div>
    </div>
  )
}

export default App