import React from 'react';
import Button from '@material-ui/core/Button';

function Banner(props) {
    return (
        <div className='banner-section'>
            <div className="banner-content">
                <div className='banner-text'>
                    <h2>Headache on complex customs matters for your business?</h2>
                    <p>Customs Support is your neutral full-service customs broker for complex customs matters with 20+ years of expertise in Europe and over 400 customs specialists who are happy to take the load off your mind!</p>
                    <Button>Get your quote now</Button>
                </div>
                <div className='banner-list'>
                    <ul>
                        <li> Fast and accurate customs clearance delivery</li>
                        <li>EU-wide customs coverage</li>
                        <li>Online and real-time control of customs processes</li>
                    </ul>
            </div>
            </div>
        </div>
    );
}

export default Banner;