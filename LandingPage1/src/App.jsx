import './App.css'
import sun from './assets/sun.png';
import suitcase from './assets/suitcase.jpg';
function App() {

  return (
    <>
    <div className="cadre">
      <div className="navbar">
      <div className="content-left"><img src={sun} alt="" className="" /><h1>Logo</h1>
      </div>
           <ul className="nav-menu">
          <li>Book & Plan</li>
          <li>Find a Flight</li>
          <li>Booking</li>
          <li>Partner</li>
          <li>My Booking</li>
        </ul>
      </div>
      <div className="hero">
        <div className="hero-left">
          <h1>Everything you need to know about your flight</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
          </p>
          <div className='hero-order'>ORDER NOW</div>
        </div>
        <img src={suitcase} alt="" className="hero-right" />
      </div>
      </div>
    </>
  )
}

export default App
