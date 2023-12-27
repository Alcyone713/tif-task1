import React from 'react'
import logo from '../Assets/logo.png'
import './Section4.scss'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Section4() {
    return (
        <div className='section4'>
            <img src={logo} />
            <div className='contactus'>
                <h3>
                    Contact Us
                </h3>
                <p>
                    Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
                </p>
                <p>
                    example2020@gmail.com
                </p>
                <p>(904) 443-0343</p>
            </div>
            <div className='more'>
                <h3> More </h3>
                <p>About Us</p>
                <p>Products</p>
                <p>Career</p>
                <p>Contact Us</p>
            </div>
            <div className='socials'>
                <h3>Social Links</h3>
                <p className='cc1'>© 2022 Food Truck Example</p>
                <div className='icons'>
                    <FaInstagram />
                    <FaTwitter />
                    <FaFacebookF />
                </div>
                <p className='cc2'>© 2022 Food Truck Example</p>
            </div>
        </div>
    )
}
