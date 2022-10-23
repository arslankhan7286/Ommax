import React from 'react';
import Button from '@material-ui/core/Button';

function CustomBanner(props) {
    return (
        <div className='banner-section custom-banner'>
                <div className="banner-content">
                    <div className='banner-text'>
                        <h2>Customs clearance after Brexit</h2>
                        <p>Since 4 years we are successfully helping our customers to prepare their business for Brexit. 
                            Our Bexit customs agents are always up-to-date with the latest customs regulations after Brexit and 
                            look forward to support you with Brexit customs procedures.
                        </p>
                        <Button>Brexit and customs: get ready!</Button>
                    </div>
                </div>
            </div>
    );
}

export default CustomBanner;