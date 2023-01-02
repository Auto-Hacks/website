import React, { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
      <div className="footer">

      <div className="footer-items">
          <div className="footer-item">
              <h3><b>Socials</b></h3>
              <h5><a target="_blank" href="https://www.instagram.com/autohackspsn/">Instagram</a></h5>
              <h5><a target="_blank" href="https://auto-hacks.devpost.com">Devpost</a></h5>
              <h5><a target="_blank" href="https://github.com/Auto-Hacks">GitHub</a></h5>
        </div>
          <div className="footer-item">
              <h3><b>Navigation</b></h3>
              <h5><Link href="/about"><a>About Us</a></Link></h5>
              <h5><Link href="/about#sponsors"><a>Sponsors</a></Link></h5>
              <h5><a target="_blank" href="https://info.devpost.com/guidelines">Code of Conduct</a></h5>
        </div>
          <div className="footer-item">
              <h3><b>Contact Us</b></h3>
              <h5><a href="mailto:autohackspsn@gmail.com">autohackspsn@gmail.com</a></h5>
          </div>
    </div>
      <style jsx>{`
        .footer-items {
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 50px;
        }
        .footer-item {
            display: flex;
            flex-direction: column;
            margin-top: 20px;
        }
        .footer {
            bottom: 0;
            background-color: white;
            position: relative
        }
        h3 {
            text-align: center;
        }
        h5 {
            text-align: center;
        }
        a {
            color: black;
            text-decoration: none;
        }



        @media (min-width: 600px) {
        }

        @media (max-width: 599px){
        }


      `}</style>
        </div>
  );
};

export default Footer;

