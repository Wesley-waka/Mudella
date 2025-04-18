'use client'
import React from 'react'
import { FiFacebook,FiMapPin } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  const current_year = new Date().getFullYear();

  return (
    <footer className='sm:h-72 h-full bg-[#fc5c65]'>
    <div className='h-full bg-burgundy  text-white py-4 px-6 sm:py-8 sm:pl-52 '>
    <div className='flex flex-col space-x-0 sm:flex-row sm:space-x-40 space-y-4 sm:space-y-0'>
      {/* <div className='flex mx-auto mt-2'>
        <h5 className='hover:cursor-pointer' onClick={() => document.getElementById('about_us').scrollIntoView({ behavior: 'smooth' })}>About Us</h5> <span>|</span>
        <h5 className='hover:cursor-pointer'  onClick={() => document.getElementById('news').scrollIntoView({ behavior: 'smooth' })}>News</h5> <span>|</span>
        <h5 className='hover:cursor-pointer'  onClick={() => document.getElementById('contact_us').scrollIntoView({ behavior: 'smooth' })}>Contact</h5>
      </div> */}
      <div className='flex flex-col space-y-2'>
        <div>
          <Image
            height={100}
            width={100}
            src='/logo.png'
            alt=''
          />
        </div>
        <div className='flex space-x-2'>
          <FiFacebook size={25}/>
          <IoLogoInstagram size={25}/>
          <FaXTwitter size={25}/>
        </div>
      </div>

      <div className='flex flex-col space-y-3'>
        <div className='text-3xl font-extrabold'>Navigation</div>
        <Link href='/'>Home</Link>
        <Link href='/'>GBV</Link>
        <Link href='/'>Arbotion Care</Link>
        <Link href='/'>Consultation</Link>
        <Link href='/'>Sidi AI</Link>

        {/* <Link href='/services/pharmaceuticals'>Pharmaceuticals</Link>
        <Link href='/services/manufacturing'>Manufacturing</Link>
        <Link href='/services/real-estate'>Real Estate</Link>
        <Link href='/about-us'>About Us</Link>
        <Link href='/contact-us'>Contact Us</Link> */}
      </div>

      <div className='flex flex-col space-y-3'>
        <div className='text-3xl font-extrabold'>Get in touch</div>
        <div className='flex flex-row space-x-3'>
          <FiMapPin size={20}/>
          <div>Kenya,Nairobi</div>
        </div>
        <div className='flex flex-row space-x-3'>
          <IoCallOutline size={20}/>
          <div>+254729770574</div>
        </div>
        <div className='flex flex-row space-x-3'>
          <CiMail size={20}/>
          <div>info@mudella.com</div>
        </div>

      </div>
    </div>

  </div>
    <h2 className='text-sm text-center py-3 w-full bg-white text-burgundy'>Copyright © {current_year}, Mudella. All Rights Reserved.</h2>
  </footer>
  )
}

export default Footer