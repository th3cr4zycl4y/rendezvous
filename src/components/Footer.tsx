const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <div className="left">
          <h3 className='footer-logo'>rendezvous</h3>
          <p>Your Personal Event Sherpa: Curating Awesome, One Click at a Time.</p>
        </div>
        <div className="right">

          <div className="links">
            <h3>Feature</h3>
            <ul>
              <li>Events discovery</li>
              <li>Ticketing</li>

            </ul>
          </div>
          <div className="links">
            <h3>Company</h3>
            <ul>
              <li>About us</li>
              <li>FAQs</li>
              <li>Careers</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="links">
            <h3>Contact us</h3>
            <ul>
              <li>info@events.com</li>
              <li>+234 701 345 6789</li>
              <li className='address' >Race Course, 8/9 Marina, Onikan, Lagos Lagos, 4aa Force Rd, Lagos Island 102273, Lagos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer