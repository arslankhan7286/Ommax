import React from 'react';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

function ContactForm(props) {
    const [value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
    return (
        <div className='form'>
            <div className='banner-text'>
                <h2>Customs Support - Take the load off your mind</h2>
                <p><span>Get in touch with one of our customs experts!</span><br/> Fill in the contact form or use the
                    chat function on the website.
                </p>
            </div>
            <div className="contact-form">
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Are you a new or returning customer? *</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="new"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="new" control={<Radio />} label="New" />
                        <FormControlLabel value="returning" control={<Radio />} label="Returning" />
                    </RadioGroup>
                    <div className='select-field'>
                        <InputLabel id="demo-select-small">Choice of service *</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={value}
                            label="Choice of service *"
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </div>
                    <div className="contact-input-form">
                        <div className="input-form">
                            <input className="form-control" type="text" placeholder="First name *" aria-label="default input example" />
                            <input className="form-control" type="text" placeholder="Last name *" aria-label="default input example" />
                        </div>
                        <div className="input-form">
                            <input className="form-control" type="text" placeholder="Company" aria-label="default input example" />
                            <input className="form-control" type="email" placeholder="E-Mail *" aria-label="default input example" />
                        </div>
                        <div className="input-form">
                            <div className="form-group">
                                <input type="text" className="form-control" id="ec-mobile-number" aria-describedby="emailHelp"
                                placeholder="+44 | Phone number *" />
                            </div>
                            <div className='select-input-field'>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Select country</option>
                                    <option value="1">Pakistan</option>
                                    <option value="2">United Kingdom</option>
                                    <option value="3">United state</option>
                                </select>
                            </div>
                        </div>
                        <div className="input-form">
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="term"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="term" control={<Radio />} label="I agree with the Terms and Conditions *" />
                                <FormControlLabel value="sign" control={<Radio />} label="I want to sign up for the newsletter" />
                            </RadioGroup>
                        </div>
                        <Button>Request a quote</Button>
                    </div>
                </FormControl>
                <div className="personel-contact">
                    <div className='banner-text'>
                        <p><span>You prefer a personal contact?</span><br/> Please find the phone 
                            numbers of our locations below.
                        </p> 
                    </div>
                    <div className='select-input-field'>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Customs Support</option>
                            <option value="1">Pakistan</option>
                            <option value="2">United Kingdom</option>
                            <option value="3">United state</option>
                        </select>
                    </div>
                    <Button>Go</Button>
                    <div className="profile">
                        <h3>„Let’s grow together!“</h3>
                        <div className="profile-img">
                            <img src='assets/Gruppe-482.png' alt='' />
                            <div>
                                <h3>Michael Doe</h3>
                                <p>Customer Support Lead CSG</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;