import React from 'react'
import logo from '../Assets/logo.png'
import pizza from '../Assets/pizza.png'
import Vector1 from '../Assets/Vector1.png'
import './Section1.scss'

export default function Section1() {
  return (
    <>
    <div className='section1'>
        <div className='content'>
            <img src={logo} alt='logo' className='logo'/>
            <h1> Discover the <span>Best</span> Food and Drinks</h1>
            <p>Naturally made Healthcare Products for the better care & support of your body.</p>
            <button>Explore Now!</button>
        </div>
        <div className='images'>
            <button>Get In Touch</button>
            <img src={pizza} id='pizza'/>
            <img src={Vector1} id='vector1'/>
        </div>
    </div>
    <div  className='blankdiv' style={{height: '186px', backgroundColor: "white"}}></div>
    </>
  )
}
