import React from 'react';
import LoginIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

function About(props) {
    return (
        <div>
            About Page
            <Button startIcon={<LoginIcon />} color="primary" variant="contained">
            Login
            </Button>
        </div>
    );
}

export default About;