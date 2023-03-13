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
        <div className="phraseContainer">
            <h1>DISCOVER YOURSELF</h1>
            <p>We help students to define their future based on information 
              provided by other students, teachers and companies</p>
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
