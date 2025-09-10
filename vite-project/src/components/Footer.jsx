import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li>Help Center</li>
            <li>AirCover</li>
            <li>Safety information</li>
            <li>Supporting people with disabilities</li>
            <li>Cancellation options</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li>Airbnb.org: disaster relief housing</li>
            <li>Combating discrimination</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Hosting</h4>
          <ul>
            <li>Airbnb your home</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Airbnb</h4>
          <ul>
            <li>Newsroom</li>
            <li>New features</li>
            <li>Careers</li>
            <li>Investors</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-legal">
          <span>© 2024 Airbnb, Inc.</span>
          <span>· Privacy</span>
          <span>· Terms</span>
          <span>· Sitemap</span>
        </div>
        <div className="footer-options">
          <span>English (US)</span>
          <span>$ USD</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer