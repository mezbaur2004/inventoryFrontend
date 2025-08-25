import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {ErrorToast, IsEmail, IsEmpty, IsMobile} from "../../helper/FormHelper";
import {RegistrationRequest} from "../../APIRequest/UserAPIRequest";

const Registration = () => {

    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef=useRef();
    let navigate=useNavigate();

    const onRegistration = async () => {
        let email = emailRef.value;
        let fastName = firstNameRef.value;
        let lastName = lastNameRef.value;
        let mobile = mobileRef.value;
        let password = passwordRef.value;
        let photo = "https://i.postimg.cc/CxGGmvbn/491356548-679795234547457-6482980502957883213-n.jpg"
        if (!IsEmail(email)) {
            ErrorToast("Valid Email Address Required !")
        } else if (IsEmpty(fastName)) {
            ErrorToast("First Name Required !")
        } else if (IsEmpty(lastName)) {
            ErrorToast("Last Name Required !")
        } else if (!IsMobile(mobile)) {
            ErrorToast("Valid Mobile Required !")
        } else if (IsEmpty(password)) {
            ErrorToast("Password Required !")
        } else {
            let result = await RegistrationRequest(email, fastName, lastName, mobile, password, photo)
            if (result === true) {
                navigate("/login")
            }
        }
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-lg-10 center-screen">
                    <div className="card w-100">
                        <div className="card-body">
                            <h4 className="text-start">Sign Up</h4>
                            <hr/>
                            <div className="row m-0 p-0">
                                <div className="col-md-4 text-start p-2">
                                    <label>Email Address</label>
                                    <input ref={(input)=>emailRef=input}  placeholder="User Email" className="form-control" type="email"/>
                                </div>
                                <div className="col-md-4 text-start p-2">
                                    <label>First Name</label>
                                    <input ref={(input)=>firstNameRef=input} placeholder="First Name" className="form-control" type="text"/>
                                </div>
                                <div className="col-md-4 text-start p-2">
                                    <label>Last Name</label>
                                    <input ref={(input)=>lastNameRef=input} placeholder="Last Name" className="form-control" type="text"/>
                                </div>
                                <div className="col-md-4 text-start p-2">
                                    <label>Mobile Number</label>
                                    <input ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control" type="tel"/>
                                </div>
                                <div className="col-md-4 text-start p-2">
                                    <label>Password</label>
                                    <input ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control" type="password"/>
                                </div>

                            </div>
                            <div className="row m-0  p-0">
                                <div className="col-md-4 text-start p-2">
                                    <button onClick={onRegistration} className="btn w-100 mt-2 btn-success">Complete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Registration;