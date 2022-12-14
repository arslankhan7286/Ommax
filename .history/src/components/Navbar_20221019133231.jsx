import React from 'react';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
  } from "@material-ui/core";
  import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <div className='header'>
            <AppBar position="static">
                <CssBaseline />
                <Toolbar>
                    <Typography variant="h4" className={classes.logo}>
                    Navbar
                    </Typography>
                    <div className={classes.navlinks}>
                        <Link to="/" className={classes.link}>
                        Home
                        </Link>
                        <Link to="/about" className={classes.link}>
                        About
                        </Link>
                        <Link to="/contact" className={classes.link}>
                        Contact
                        </Link>
                        <Link to="/faq" className={classes.link}>
                        FAQ
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;