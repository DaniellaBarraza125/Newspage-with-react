import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
   <div>
      <footer>
        <div>
        <a href="https://www.instagram.com" target="_blank" >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/900px-Instagram_icon.png?20200512141346" alt="Instagram"  />
        </a>
        <a href="https://www.facebook.com" target="_blank" >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/900px-Facebook_logo_%28square%29.png" alt="Facebook"  />
        </a>
        <a href="https://www.twitter.com" target="_blank" >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/450px-X_logo_2023.svg.png" alt="Twitter"  />
        </a>
        </div>
        <div>
          <div>
          <img src="https://cdn-icons-png.flaticon.com/128/646/646094.png" alt="Email" className="contact-icon" />
          <a href="mailto:example@example.com" className="mail-link">example@example.com</a>
          </div>
          </div>
          <div>

          <div> <img src="https://cdn-icons-png.flaticon.com/128/597/597177.png" alt="Phone" className="contact-icon" /> +1234567890</div>
       
      </div>
      </footer>
   </div>
  )
}

export default Footer