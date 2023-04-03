import React from 'react'
import '../style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import profile from '../assets/profile.png'

function About(){
    return (
        <div className='bg'>
            <div className='text-center'>
                <img src={profile} className='rounded-circle profile'></img>
                <div className='title text-white'>About Me</div>
                <div className='description text-white mx-5'>I'm an upcoming and enthusiastic programmer! I've always wanted to create my own code to work around specific issues that can't be done normally. I highly believe that coding is our future, and that without it, we would not have progressed to what we have today. I have learned html, CSS, and JS. And with that, I can create websites, develop bots, and interpret code. However, I know my journey is never done, and I'll always be learning. This page here is showcasing my development with all my public work and all its functionalities. If you need to contact me, my phone number, social, and email are down below.</div>
            </div>
        </div>
    )
}

export default About