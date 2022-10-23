import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import DrawerComponent from "./Drawer";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(5),
    display: "flex",
  },
  navLink: {
    display: "flex",
    alignItems: "center",
    width: "400px",
    justifyContent: "space-between",
  }
}));

function Navbar(props) {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div className="navbar">
            <AppBar position="static">
            <CssBaseline />
            <Toolbar>
                <div className="logo">
                <a href="/"><img src='assets/logo.png' alt='' /></a>
                </div>
             
                {isMobile ? (
                <DrawerComponent />
                ) : (
                <div className={classes.navLink}>
                  <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Quick Facts
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/quickfacts">Action</a></li>
                      <li><a className="dropdown-item" href="/quickfacts">Another action</a></li>
                      <li><a className="dropdown-item" href="/quickfacts">Something else here</a></li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Benefits
                    </button>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="/benefits">Action</a></li>
                      <li><a className="dropdown-item" href="/benefits">Another action</a></li>
                      <li><a className="dropdown-item" href="benefits">Something else here</a></li>
                    </ul>
                  </div>
                  <div className="dropdown">
                    {/* <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                      <Link className="dropdown-item" to="/contact">Contact</Link>
                    {/* </button> */}
                  </div>
                </div>
                )}
            </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;