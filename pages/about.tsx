import React from "react"
import Layout from "../components/Layout"
import sponsors from "../data/sponsors"



export async function getStaticProps(){
    return {
        props: {sponsors} 
    }
}
const Homepage: React.FC = props => {
  return (
      <Layout>
  <div className="sections-container">
  <div className="section-container">
      <h3>What is AutoHacks?</h3>
      <p>AutoHacks is a 48-hour <a href="https://www.rasmussen.edu/degrees/technology/blog/what-is-a-hackathon/" target="_blank">hackathon</a> organized by PSN Hack Club for high school students from diverse backgrounds. Whether you're a programmer, graphic designer, or game developer, you're welcome to participate in this event. We also have workshops, activities, and mentorship sessions planned throughout the weekend. Check out our <a href="/schedule">schedule</a> for more information.</p>
    </div>
    <div className="section-container">
      <h3>What can I make for AutoHacks? Is there a theme?</h3>
      <p>This year's theme for AutoHacks is automation. You can create any hardware or software project that automates away repetitive tasks in your life! Some ideas might include building a robot that automatically toggles your non-smart geyser to save electricity, or creating a mobile app that converts written notes to a OneNote notebook.</p>
    </div>
    <div className="section-container">
      <h3>Who can attend AutoHacks? Is it online or in-person?</h3>
      <p>AutoHacks is open to all high school students from India. Teams can have 1-3 members, but all team members must be from the same school. The hackathon will be hybrid, with the opening ceremony and events held online and the closing ceremony held in person at Pathways School Noida. However, attendance at the closing ceremony is optional and you can participate in the hackathon entirely online if you prefer. The closing ceremony will be streamed online on Twitch.</p>
    </div>
    <div className="section-container">
      <h3>How can I contact/sponsor AutoHacks?</h3>
      <p>If you're interested in contacting or sponsoring AutoHacks, please email us at <a href="mailto:autohackspsn@gmail.com">autohackspsn@gmail.com</a>. We'll get back to you as soon as possible.</p>
    </div>
    <div id="sponsors" className="sponsors">
        <h1>Our Sponsors</h1>
        <div className="sponsor-logos">
            { props["sponsors"].map(sponsor=><a key={sponsor.name} href={sponsor.url}><img className="logo-img" src={`/static/img/sponsors/${sponsor.name}.png`} /></a>
)}
        </div>
    </div>
  </div>
  <style jsx>{`
    .sponsors {
        margin-top: 100px;
    }
    .sections-container {
      display: flex;
      flex-direction: column;
    }
    .section-container {
      margin-top: 50px;
    }
    h2 {
      text-align: left;
    }
    a {
      color: black;
    }
    .sponsor-logos {
      display: grid;
      grid-template-columns: repeat(auto-fill, min(150px, 35vw));
      grid-gap: 2rem;
      justify-content: space-between;
    }
    .logo-img {
        max-width: 100%;
        max-height: 100%;
    }
    h1 {
        margin-bottom: 50px;
    }
    .logo-img:hover {
      transform: scale(1.05);
      filter: brightness(80%);
      transition: transform 0.2s ease-in-out, filter 0.2s ease-in-out;
    }

  `}</style>
</Layout>
  )
}

export default Homepage

