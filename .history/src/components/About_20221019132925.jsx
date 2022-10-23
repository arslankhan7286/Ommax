import React from 'react';
import LoginIcon from '@material-ui/icons/AccountCircle';


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