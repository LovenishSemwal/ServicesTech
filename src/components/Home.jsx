import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai"


const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in children.
          </p>
        </div>
      </div>


      <div className="home3" id='about'>
        <div>
          <h1>Who we are?</h1>
          <p>Facing technical queries or software challenges?
            We specialize in delivering expert solutions with speed and ease, ensuring your digital tools run smoothly.
            From fixing bugs to offering customized software services, we handle every issue with precision.
            Our dedicated team provides top-notch support, so your technology works seamlessly.
            With us, you can resolve problems efficiently, minimizing downtime and maximizing productivity.
            Let us take care of the tech while you focus on growing your business!</p>
        </div>
      </div>

      <div className="home4" id='brands'>
        <div>
          <h1>Brands</h1>
          <article>

            <div style={{
              animationDelay:"0.3s"
            }}
            >
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>

            <div style={{
              animationDelay:"0.5s"
            }}
            >
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>

            <div style={{
              animationDelay:"0.7s"
            }}
            >
              <AiFillYoutube/>
              <p>YouTube</p>
            </div>

            <div style={{
              animationDelay:"1s"
            }}
            >
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>

          </article>
        </div>
      </div>
    </>
  )
}

export default Home
