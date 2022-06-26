import React from 'react';
import resume from '../../assets/Resume.docx';

function Resume() {
    return (
        <div className='row justify-content-center mt-5'>
        <div className='card bg-black'>
        <section className='card-body text-center'>
            <h1>My Resume</h1>
            <p>Here is my downloadable resume!</p>
            <div>
                <a className='fa-solid fa-download fa-2x' href={resume} target='_blank'></a>
            </div>
        </section>
        </div>
        </div>
    )
}

export default Resume;