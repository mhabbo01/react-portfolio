import React from 'react';
import "./style.css";

function Footer() {
    return (
        <footer className='text-center footer'>
            <span className='text-center p-3 fa-solid fa-copyright'> 2022 Matthew Habbo</span>
            <a className='fa-brands fa-linkedin fa-2x' href="https://www.linkedin.com/in/matthew-habbo-978736187/" target='_blank' ></a>
            <a className='fa-brands fa-github fa-2x' href='https://github.com/mhabbo01' target='_blank'></a>
        </footer>

    )
}

export default Footer;