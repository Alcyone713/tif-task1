import React from 'react'
import './ArticleCard.scss'

export default function ArticleCard(props) {
    return (
        <div className='articleCard'>
            <img src={props.img} />
            <div className='content'>
                <h1>{props.heading}</h1>
                <p>PLorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard...
                </p>
                <button>Read More</button>
            </div>
        </div>
    )
}
