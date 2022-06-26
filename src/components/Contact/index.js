import React from 'react';

function Contact() {
    return (
        <div className='row justify-content-center mt-5'>
        <div className='card bg-black'>
        <section className='card-body text-center'>
            <h1>Contact Me</h1>
            <p>Feel free to send me an email at <a id='emailLink' href="mailto:matthabbo45@gmail.com"> matthabbo45@gmail.com</a></p>
            <p>Or reach out to me by the links below!</p>
            <div>
                <a className='fa-brands fa-linkedin fa-2x' href="https://www.linkedin.com/in/matthew-habbo-978736187/" target='_blank' ></a> <br></br>
                <a className='fa-brands fa-github fa-2x' href='https://github.com/mhabbo01' target='_blank'></a>
            </div>
        </section>
        </div>
        </div>
    )
}

export default Contact;