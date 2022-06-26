import React from 'react';
import './style.css';

function About() {
    return (
    <div className='container'>
        <div className='text-center'>
            <div className='about-container'>
                <div className='about-me'>
                    <h1 className='about-me-title'>About Me</h1>
                    <div className='about-text-container'>
                        <p>
                            Hello! Thank you for visiting my portfolio built with React!
                            My name is Matthew Habbo and I am a fresh, emphasis on the fresh, full stack developer.
                            I have been in customer service for almost 16 years now, working in mortgages and banking.
                            Working in customer service has tought me patience, kindness, hard work and discipline.  All of which I hope to bring into a career of web development!
                            <br></br>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About;