import React from 'react';
import Button from '@material-ui/core/Button';

function ContentCard(props) {
    return (
        <div className='content-card'>
            <div className='content-img'>
            <img src='assets/Bildschirmfoto.png' alt='' />
            </div>
            <div className='content-text'>
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr.
                </p>
                <Button>More informations</Button>
            </div>
        </div>
    );
}

export default ContentCard;