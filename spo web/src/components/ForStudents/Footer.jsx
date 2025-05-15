import React from 'react'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/linkedin'
import 'react-social-icons/facebook'
import 'react-social-icons/mailto'
const Footer = () => {
  return (
    <>
    <footer className='bg-gray-900 text-white'>
    <div className='grid p-5 grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 mx-28'>
      <div className='font-extrabold text-2xl mt-20'>
        IITK Links
        <br></br>
        <br></br>
        <div className='text-lg font-normal text-gray-300'>
          <a>IITK Homepage</a> <br></br>
          <a>DoAA</a> <br></br>
          <a>DoSA</a> <br></br>
          <a>Students' Gymkhana</a>
        </div>
      </div>
      <div className='font-extrabold text-2xl mt-20'>
        For Companies
        <br></br>
        <br></br>
        <div className='text-lg font-normal text-gray-300'>
          <a>Steps - Company registration</a> <br></br>
          <a>Recruitment Procedure and Policy</a> <br></br>
          <a>Brochures</a> <br></br>
          <a>Departmental Brochures</a><br></br>
          <a>FAQs</a>
        </div>
      </div>

      <div className='font-extrabold text-2xl mt-20'>
       For Students
        <br></br>
        <br></br>
        <div className='text-lg font-normal text-gray-300'>
          <a>Steps - Students Registration</a> <br></br>
          <a>Policy</a> <br></br>
          <a>Preparation Portal</a> <br></br>
          <a>Insights</a><br></br>
          <a>FAQs</a>
        </div>
      </div>

      <div className='font-extrabold text-2xl mt-20'>
        Contact
        <br></br>
        <br></br>
        <div className='text-lg font-normal text-gray-300'>
          Students' Placement office
          109, outreach building
          IIT Kanpur, Kanpur-208016
          Phone no.: <a href='tel:+915122594433'>+91 512 259 44 33</a>/<a href='tel:+915122594434'>34</a><br></br>
          <a href='mailto:spo@iitk.ac.in'>Email:spo@iitk.ac.in</a>
        </div>
      </div>
      </div>
       <div className='p-4 h-full w-full flex flex-col items-center justify-center mt-16 space-y-2'>
          <div className='space-x-3'>
          <SocialIcon href="mailto:spo@iitk.ac.in" url="mailto" />
          <SocialIcon href="https://www.facebook.com/spo.iitkanpur" url="www.facebook.com" />
          <SocialIcon href="https://www.linkedin.com/in/iitkanpurplacement/" url="www.linkedin.com" />
          </div>
          <div className='space-x-3'>
          © Copyright 2025 SPO, IIT Kanpur
          </div>
          
          </div>


    </footer>
    </>
  )
}

export default Footer