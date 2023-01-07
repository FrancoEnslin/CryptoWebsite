import React from 'react'
import dev from '../assets/dev.svg';


export const DevSection = () => {

    return (
        <div className='dev-section-container'>
            <h1 className='dev-section-title'>
                Building Cross Chain <span className='highlighted'>Together</span></h1>
            <div className='dev-section-wrapper'>
                <div className='dev-section-text'>
                    <h2>API SDK</h2>
                    <p className='dev-section-description'>
                        Our goal is to provide a full ecosystem that makes it easy for
                        developers create and deploy cross-chain applications.
                    </p>
                    <div className='btm-wrapper'>
                        <button className='primay'>
                            <span>Learn More</span>
                        </button>
                        <button className='primay'>
                            <span>Get in touch</span>
                        </button>
                    </div>
                </div>
                <div className='dev-section-image'>
                    <img src={dev} alt='Dev tools' />
                </div>
            </div>
        </div>
    )
}
