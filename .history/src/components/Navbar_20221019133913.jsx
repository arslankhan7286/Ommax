import React from 'react';
import {
    AppBar,
    Toolbar,
    CssBaseline,
    Typography,
    makeStyles,
  } from "@material-ui/core";
import { Link } from "react-router-dom";
import LoginIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    navlinks: {
      marginLeft: theme.spacing(10),
      display: "flex",
    },
   logo: {
      flexGrow: "1",
      cursor: "pointer",
    },
    link: {
      textDecoration: "none",
      color: "white",
      fontSize: "20px",
      marginLeft: theme.spacing(20),
      "&:hover": {
        color: "yellow",
        borderBottom: "1px solid white",
      },
    },
}));

function Navbar(props) {
    const classes = useStyles();

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
                        <Link to="/login" className={classes.link}>
                            <Button startIcon={<LoginIcon />} color="primary" variant="contained">
                            Login
                            </Button>
                        </Link>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;