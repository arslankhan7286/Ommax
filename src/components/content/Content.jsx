import React from 'react';
import Button from '@material-ui/core/Button';

function Content(props) {
    return (
        <div className='content-section'>
            <div className='content'>
                <div className='social-card'>
                    <img src='assets/social-icons.png' alt='' />
                </div>
                <div className='social-text'>
                    <h3>Who we work with</h3>
                    <p>We are the trusted partner for customs matters of more than 7000 companies
                        across Europe. Since 20 years we successfully operate with customers from
                        small and large good owners to freight forwarders and digital platforms across various industries.
                    </p>
                </div>
            </div>

            <div className='testimonial-content'>
                <h3>The leading customs agent in Europe and UK</h3>
                <div className='testimonial-block'>
                    <div className='testimnial'>
                        <h2>20 +</h2>
                        <span>years of experience</span>
                    </div>
                    <div className='testimnial'>
                        <h2>400</h2>
                        <span>qualified customs specialists</span>
                    </div>
                    <div className='testimnial'>
                        <h2>20</h2>
                        <span>strategic locations</span>
                    </div>
                    <div className='testimnial'>
                        <h2>5</h2>
                        <span>countries</span>
                    </div>
                </div>
                <Button>Get in touch</Button>
            </div>
        </div>
    );
}

export default Content;