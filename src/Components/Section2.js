import React from 'react'
import section2img from '../Assets/section2img.png'
import './Section2.scss'

export default function Section2() {
    return (
        <div className='section2'>
            <img src={section2img} />
            <div className='content'>
                <h1>About Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    t has survived not only five centuries.
                </p>
                <button>Read More</button>
            </div>
        </div>
    )
}
