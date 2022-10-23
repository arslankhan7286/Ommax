import React from 'react';
import Button from '@material-ui/core/Button';

function ContentServiceCard(props) {
    return (
        <div className='content-service'>
            <div className='content-service-card'>
                <div className='service-title'>
                    <h2>We offer end-to-end customs services with fast, accurate and compliant customs in multiple countries</h2>
                    <Button>Get in touch</Button>
                </div>
                <div className='service-card'>
                    <img src='assets/Komponente1.svg' alt='' />
                    <img src='assets/Komponente2.svg' alt='' />
                    <img src='assets/Komponente3.svg' alt='' />
                </div>
                <div className='service-card'>
                    <img src='assets/Komponente4.svg' alt='' />
                    <img src='assets/Komponente5.svg' alt='' />
                    <img src='assets/Komponente6.svg' alt='' />
                </div>
            </div>
            <div className='banner-img'>
                <img src="assets/Gruppe-maskieren.png" alt="" />
            </div>
        </div>
    );
}

export default ContentServiceCard;