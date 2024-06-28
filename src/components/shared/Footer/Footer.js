import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaRegPaperPlane, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <div className='p-10 bg-[#001919] text-white md:px-20'>
                <footer className="footer">
                    <aside>
                        <p className='font-bold text-2xl' >Tutor<span className="text-[#00A5A7]">Connect</span></p>
                        <p className='font-light text-sm'>Enriching Minds, Empowering Futures
                        </p>
                        <div className='flex gap-2 mt-4'>
                            <div className='bg-[#0a2828] p-3'><FaFacebookF/></div>
                            <div className='bg-[#0a2828] p-3'><FaTwitter/></div>
                            <div className='bg-[#0a2828] p-3'><FaInstagram/></div>
                        </div>
                    </aside>
                    <nav className='text-sm' >
                        <header className="footer-title">Quick Links</header>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">Blog</a>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">Find tutor</a>
                        <a className="link link-hover">Contact</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Contact Us</header>
                        <p className="">Mirpur, Dhaka, Bangladesh</p>
                        <p className="">(+880)17264821</p>
                        <p className="">info@tutorconnect.com</p>
                    </nav>
                    <nav>
                        <header className="footer-title">Subscribe</header>
                        <p>Subscribe to our newsletter to get our <br /> latest updates</p>
                        <div className='flex gap-2 items-center'>
                            <input type="text" placeholder="Your Email" className="input input-sm bg-transparent input-bordered border-white w-50 max-w-sm " />
                            <button className='btn btn-sm border-none primary-btn'><FaRegPaperPlane /></button>
                        </div>
                    </nav>
                </footer>
                <div className="divider before:bg-[#3a5252] after:bg-[#3a5252] before:h-[0.02rem] after:h-[0.02rem]"></div>
                <div className='flex justify-between font-light text-xs'>
                    <p>&copy; Tutor Connect 2023 | All rights reserved.</p>
                    <div className='flex gap-5'>
                        <a className="link link-hover">Terms & Conditions</a>
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Contact Us</a>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Footer;