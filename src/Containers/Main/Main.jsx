import React from 'react'
import './Main.css'
import mainimage from '../../Assests/image-web-3-desktop.jpg'

const Main = () => {

  return (

    <div className='main__container'>
      
      <div className='center__container'>

        <img className='center__container-image' src={mainimage} alt="Center_Image"/>

        <article className='center__container-informations'>
        <h1 className='informations-title'>The Bright Future of Web 3.0?</h1>

        <div className='informations_details'>
          <p className='informations_details-text'>We dive into the next evolution of the web that claims to put the power of the platforms back into the handsof the people.But is it really fulfilling its promise?</p>
          <button className='informations_details-button'> Read More</button>
        </div>

        </article>

      </div>

      <div className='side__container'>

        <h1 className='side__container-title'>New</h1>
        
        <div className='side__container-card'>
          <h2 className='card-title'>Hydrogen VS Electric Cars</h2>
          <p className='card-text'>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>

        <div className='side__container-card'>
          <h2 className='card-title'>The Downsides of AI Artistry</h2>
          <p className='card-text'>What are the possible adverse effects of on-demand AI image generation?</p>
        </div>

        <div className='side__container-card'>
          <h2 className='card-title'>Is VC Funding Drying Up?</h2>
          <p className='card-text'>Private funding by VC firms is down 50% YOY.We take a look at what that means.</p>
        </div>
        
      </div>

    </div>
  )
}

export default Main