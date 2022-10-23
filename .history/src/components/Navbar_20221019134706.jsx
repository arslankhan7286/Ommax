import React from "react";
import LoginIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
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
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div className='header'>
            <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                Navbar
                
                </Typography>
                {isMobile ? (
                <DrawerComponent />
                ) : (
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
                    <Link to="/login" className={classes.link}>
                        <Button startIcon={<LoginIcon />} color="primary" variant="contained">
                        Login
                        </Button>
                    </Link>
                </div>
                )}
            </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;