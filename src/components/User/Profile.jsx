import React, { useEffect, useRef, useState } from 'react';
import { GetProfileDetails, ProfileUpdateRequest } from "../../APIRequest/UserAPIRequest";
import { useSelector } from "react-redux";
import { ErrorToast, IsEmail, IsEmpty, IsMobile } from "../../helper/FormHelper";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    let emailRef, firstNameRef, lastNameRef, mobileRef, passwordRef, photoRef;
    const [userImgLink, setUserImgLink] = useState(""); // image link state
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            await GetProfileDetails();
        })();
    }, []);

    const ProfileData = useSelector((state) => state.profile.value);

    const UpdateMyProfile = async () => {
        const email = emailRef.value;
        const firstName = firstNameRef.value;
        const lastName = lastNameRef.value;
        const mobile = mobileRef.value;
        const password = passwordRef.value;
        const photo = photoRef.value || ProfileData['photo']; // use input value or fallback

        if (!IsEmail(email)) {
            ErrorToast("Valid Email Address Required!");
        } else if (IsEmpty(firstName)) {
            ErrorToast("First Name Required!");
        } else if (IsEmpty(lastName)) {
            ErrorToast("Last Name Required!");
        } else if (!IsMobile(mobile)) {
            ErrorToast("Valid Mobile Required!");
        } else if (IsEmpty(password)) {
            ErrorToast("Password Required!");
        } else {
            const result = await ProfileUpdateRequest(email, firstName, lastName, mobile, password, photo);
            if (result === true) {
                navigate("/");
            }
        }
    }

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <img className="icon-nav-img-lg" src={userImgLink || ProfileData['photo']} alt="Profile"/>
                                <hr/>
                                <div className="row">
                                    <div className="col-4 p-2">
                                        <label>Profile Picture URL</label>
                                        <input
                                            type="text"
                                            ref={(input) => photoRef = input}
                                            onChange={(e) => setUserImgLink(e.target.value)}
                                            defaultValue={ProfileData['photo']}
                                            placeholder="Paste image link"
                                            className="form-control animated fadeInUp"
                                        />
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Email Address</label>
                                        <input defaultValue={ProfileData['email']} readOnly ref={(input)=>emailRef=input} className="form-control animated fadeInUp" type="email"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>First Name</label>
                                        <input defaultValue={ProfileData['firstName']} ref={(input)=>firstNameRef=input} className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Last Name</label>
                                        <input defaultValue={ProfileData['lastName']} ref={(input)=>lastNameRef=input} className="form-control animated fadeInUp" type="text"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Mobile</label>
                                        <input defaultValue={ProfileData['mobile']} ref={(input)=>mobileRef=input} className="form-control animated fadeInUp" type="mobile"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Password</label>
                                        <input defaultValue={ProfileData['password']} ref={(input)=>passwordRef=input} className="form-control animated fadeInUp" type="password"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <button onClick={UpdateMyProfile} className="w-100 btn btn-success">Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
