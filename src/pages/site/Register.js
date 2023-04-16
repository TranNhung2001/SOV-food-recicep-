import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import { getUsers } from "../api/apiLogin";
import "src/assets/css/page/register.css";

//import React from "react";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            name: '',
            email: '',
            dob: '',
            sex: 'select',
            phonenumber: '',
            formErrors: {}
        };

        this.initialState = this.state;
    }

    handleFormValidation() {
        const { username, password, name, email, dob, sex, phonenumber } = this.state;
        let formErrors = {};
        let formIsValid = true;

        //user name     
        if (!username) {
            formIsValid = false;
            formErrors["usernameErr"] = "Username is required.";
        }

        if (!password) {
            formIsValid = false;
            formErrors["passwordErr"] = "Password is required.";
        }

        if (!name) {
            formIsValid = false;
            formErrors["nameErr"] = "Name is required.";
        }

        //Email    
        if (!email) {
            formIsValid = false;
            formErrors["emailErr"] = "Email id is required.";
        }
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {

            formIsValid = false;
            formErrors["emailErr"] = "Invalid email id.";
        }

        //DOB    
        if (!dob) {
            formIsValid = false;
            formErrors["dobErr"] = "Date of birth is required.";
        }
        else {
            var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
            if (!pattern.test(dob)) {
                formIsValid = false;
                formErrors["dobErr"] = "Invalid date of birth";
            }
        }

        //Gender    
        if (sex === '' || sex === "select") {
            formIsValid = false;
            formErrors["sexErr"] = "Select gender.";
        }

        //Phone number    
        if (!phonenumber) {
            formIsValid = false;
            formErrors["phonenumberErr"] = "Phone number is required.";
        }
        else {
            var mobPattern = /^(?:(?:\\+|0{0,2})91(\s*[\\-]\s*)?|[0]?)?[789]\d{9}$/;
            if (!mobPattern.test(phonenumber)) {
                formIsValid = false;
                formErrors["phonenumberErr"] = "Invalid phone number.";
            }
        }

        this.setState({ formErrors: formErrors });
        return formIsValid;
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.handleFormValidation()) {
            alert('You have been successfully registered.')
            this.setState(this.initialState)
        }
    }

    render() {

        const { usernameErr, nameErr, passwordErr, emailErr, dobErr, sexErr, phonenumberErr } = this.state.formErrors;

        return (
            <div className="formDiv">
                <h2 style={{ textAlign: "center", color:"white" }} > Sign up </ h2>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="name" style={{ color:"white" }}>Name</label>
                            <input type="text" name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                                placeholder="Your name.."
                                className={nameErr ? ' showError' : ''} />
                            {nameErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{nameErr}</div>
                            }

                        </div>
                        <div>
                            <label htmlFor="username" style={{ color:"white" }}>Username</label>
                            <input type="text" name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                                placeholder="Your username.."
                                className={usernameErr ? ' showError' : ''} />
                            {usernameErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{usernameErr}</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="password" style={{ color:"white" }}>Password</label>
                            <input type="text" name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                placeholder="Your password.."
                                className={passwordErr ? ' showError' : ''} />
                            {passwordErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{passwordErr}</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="email" style={{ color:"white" }}>Email </label>
                            <input type="text" name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                placeholder="Your email .."
                                className={emailErr ? ' showError' : ''} />
                            {emailErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailErr}</div>
                            }

                        </div>
                        <div>
                            <label htmlFor="dob" style={{ color:"white" }}>Birthday</label>
                            <input type="date" name="dob"
                                value={this.state.dob}
                                onChange={this.handleChange}
                                placeholder="DD/MM/YYYY.."
                                className={dobErr ? ' showError' : ''} />
                            {dobErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{dobErr}</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="sex" style={{ color:"white" }}>Gender</label>
                            <select name="sex" onChange={this.handleChange}
                                className={sexErr ? ' showError' : ''}
                                value={this.state.gender} >
                                <option value="select">--Select--</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            {sexErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{sexErr}</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="phonenumber" style={{ color:"white" }}>Phone Number</label>
                            <input type="text" name="phonenumber"
                                onChange={this.handleChange}
                                value={this.state.phonenumber}
                                placeholder="Your phone number.."
                                className={phonenumberErr ? ' showError' : ''} />
                            {phonenumberErr &&
                                <div style={{ color: "red", paddingBottom: 10 }}>{phonenumberErr}</div>
                            }
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div >
        )
    }
}

export default Register;







