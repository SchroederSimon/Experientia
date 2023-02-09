import '../../pages/Home/Home.css'

function Home() {

  return (
    <>
      <div className="containerHome">
        <div className="searchBarContainer">
          <div className="searchBar">
            <h1>SEARCH YOUR CITY TO FIND UNIVERSITIES</h1>
            <div className="input-wrapper">
              <input type="text" placeholder="Search"/>
              <label><i className="fa-solid fa-magnifying-glass"></i></label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
