import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3>Contact Me</h3>
            <ul className="list-unstyled">
              <li>Email: <a href="mailto:Kyaerorgabootcamp@gmail.com"> Kyaerorgabootcamp@gmail.com</a></li>
              <li>  GitHub:<a href="https://github.com/Kyaeror"> https://github.com/Kyaeror</a></li>
              <li>Linked In:<a href="https://www.linkedin.com/in/brian-chiang-532194271/"> https://www.linkedin.com/in/brian-chiang-532194271/</a></li>
              <li>Facebook: <a href="https://www.facebook.com/kysiric">https://www.facebook.com/kysiric</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;