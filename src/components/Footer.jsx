import React from 'react';

function Footer(props) {
    return (
        <div className='footer'>
            <div className='footer-list'>
                <ul>
                    <li><a href="#"> Imprint </a></li>
                    <li><a href="#"> Data Security </a></li>
                    <li><a href="#"> Conditions </a></li>
                    <li><a href="#">Cookies </a></li>
                    <li><a href="#"> Customer support </a></li>
                </ul>
            </div>
            <p>© 2021 Customs Support Group. All rights reserved.</p>
        </div>
    );
}

export default Footer;