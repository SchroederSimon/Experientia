import '../../pages/Home/Home.css'
import { useEffect, useState } from 'react';

//Interface
import { quotesInterface } from '../../models/quotesInterface';

//Array
import QUOTES from '../../arrayData/quotesArray';


function Home() {


  const [quotes, setQuotes] = useState<quotesInterface[]>([])

  useEffect(() => {
    setQuotes(QUOTES)
  }, []);


  return (
    <>
      <div className="containerHome">
        <div className="searchBarContainer">
          <div className="searchBar">
            <h1>SEARCH YOUR CITY TO FIND UNIVERSITIES</h1>
            <div className="input-wrapper">
              <input type="text" placeholder="Search" />
              <label><i className="fa-solid fa-magnifying-glass"></i></label>
            </div>
          </div>
        </div>
        <div className="quotesContainer">
          <div className="quotesTitle">
            <h2>Did you know that 50% of students in Argentina drop out
              of university?
            </h2>
          </div>
          {
            quotes.map(quote => {
              return (
                <div className="quotes" key={quote.id}>
                  <img src={quote.profilePicture} alt="" />
                  <p>
                    {quote.quote}
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Home
