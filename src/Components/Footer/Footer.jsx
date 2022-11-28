import React from 'react'
import './Footer.css'
import retropc from '../../Assests/image-retro-pcs.jpg'
import pckeybord from '../../Assests/image-top-laptops.jpg'
import controller from '../../Assests/image-gaming-growth.jpg'

const Footer = () => {
  return (

    <div className='footer__container'>

          <div className='footer__container-card'>
            <img className='card-image' src={retropc} alt="retropc" />
            <div className='card__informations'>
            <h2 className='card__informations-title'>Reviving Retro PCs</h2>
            <p className='card__informations-text'>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>

          <div className='footer__container-card'>
            <img className='card-image' src={pckeybord} alt="pckeyboard" />
            <div className='card__informations'>
            <h2 className='card__informations-title'>Top 10 Laptops of 2022</h2>
            <p className='card__informations-text'>Our best picks for various needs and budgets.</p>
            </div>
          </div>

          <div className='footer__container-card'>
            <img className='card-image' src={controller} alt="controller" />
            <div className='card__informations'>
            <h2 className='card__informations-title'>The Growth of Gaming</h2>
            <p className='card__informations-text'>How the pandemic has sparked fresh opportunities</p>
            </div>
          </div>
          
    </div>
  )
}

export default Footer