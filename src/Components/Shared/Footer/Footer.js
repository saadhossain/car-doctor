import React from 'react';
import logo from '../../../assets/logo.svg';
import {FaFacebookSquare, FaTwitterSquare, FaInstagram, FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-car2nd py-10 mt-10'>
            <div className='w-10/12 mx-auto grid grid-cols-4 gap-5 text-white'>
                <div>
                    <img src={logo} alt="" />
                    <p>
                        Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .
                    </p>
                    <span className='flex gap-2 my-2'>
                        <FaFacebookSquare className='w-6 h-6'></FaFacebookSquare>
                        <FaTwitterSquare className='w-6 h-6'></FaTwitterSquare>
                        <FaInstagram className='w-6 h-6'></FaInstagram>
                        <FaLinkedin className='w-6 h-6'></FaLinkedin>
                    </span>
                </div>
                <div>
                    <h2 className='tex-xl font-bold text-car'>About Us</h2>
                    <ul className='flex flex-col gap-2 mt-5'>
                        <li><Link>What We Offer?</Link></li>
                        <li><Link>Which Area We Can Reach?</Link></li>
                        <li><Link>Terms of Service</Link></li>
                        <li><Link>Warrenty Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className='tex-xl font-bold text-car'>About Company</h2>
                    <ul className='flex flex-col gap-2 mt-5'>
                        <li><Link>Our Clients</Link></li>
                        <li><Link>Service Records</Link></li>
                        <li><Link>Engineers Profile</Link></li>
                        <li><Link>Other Services</Link></li>
                    </ul>
                </div>
                <div>
                    <h2 className='tex-xl font-bold text-car'>Customer Support</h2>
                    <ul className='flex flex-col gap-2 mt-5'>
                        <li><Link>Support/Sales Center</Link></li>
                        <li><Link>Support Policy</Link></li>
                        <li><Link>Premium Member</Link></li>
                        <li><Link>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;