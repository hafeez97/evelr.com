"use client"
import React, {useEffect, useState} from "react";
import {Modal} from "react-bootstrap";
import useModalStore from "@/app/shared/stores/useModalStore";
import {SignUpAction} from "@/app/shared/actions/signupAction";
import {useFormState} from 'react-dom'
import FormSubmitButton from "@/app/shared/components/FormSubmitButton";




function SignUpModal() {
    const {isSignUpOpen, closeSignUpModal} = useModalStore()
    const [state, formAction] = useFormState( SignUpAction , '')

    useEffect(() => {
        console.log(state)
        if(state.success){
            closeSignUpModal()
        }
    }, [state]);

    return (
        <>
            <Modal show={isSignUpOpen} onHide={closeSignUpModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Welcome to Evelr</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form action={formAction}>
                        <div className="mb-4">
                            <input
                                type="text"
                                className="form-control"
                                id="FullName"
                                name="full_name"
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="number"
                                className="form-control"
                                id="GovernmentID"
                                placeholder="Government ID Card"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="Email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="tel"
                                className="form-control"
                                id="PhoneNumber"
                                placeholder="Phone Number"
                            />
                        </div>
                        {/*Currency etc tbe*/}
                        {/*<div className="mb-3">*/}
                        {/*    <div className="col-12 mt-4">*/}
                        {/*        <div className="select-wrapper">*/}
                        {/*            <select id="countrySelect" className="form-select select-input">*/}
                        {/*                <option selected disabled>Currency</option>*/}
                        {/*                <option value="$">Dollar ($)</option>*/}
                        {/*                <option value="Pkr">Pakistani Rupee</option>*/}
                        {/*                <option value="Inr">Indian Rupee</option>*/}
                        {/*            </select>*/}
                        {/*            <span className="custom-arrow"></span>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="d-flex justify-content-between">*/}
                        {/*        <label className="currency-text">Auto-Select according to your country</label>*/}
                        {/*        <div className="form-check form-switch">*/}
                        {/*            <input*/}
                        {/*                className="form-check-input"*/}
                        {/*                type="checkbox"*/}
                        {/*                role="switch"*/}
                        {/*                id="flexSwitchCheckChecked"*/}
                        {/*            />*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="mb-4">
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="Password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="mb-3">
                            <input
                                type="password"
                                className="form-control"
                                id="ReEnterPassword"
                                placeholder="Re-Enter Password"
                            />
                        </div>
                        {/*<div className="mb-4">*/}
                        {/*    <div className="d-flex flex-row">*/}
                        {/*        <button*/}
                        {/*            type="submit"*/}
                        {/*            className="btns-signup host-btn active"*/}
                        {/*            onClick={() => console.log("Be a Host clicked")}*/}
                        {/*        >*/}
                        {/*            Be a Host*/}
                        {/*        </button>*/}
                        {/*        <button*/}
                        {/*            type="submit"*/}
                        {/*            className="btns-signup guest-btn"*/}
                        {/*            onClick={() => console.log("Be a Guest clicked")}*/}
                        {/*        >*/}
                        {/*            Be a Guest*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="d-flex justify-content-center mb-2">
            <span className="privacy-policy">
                <a href="#">{state.message}</a>
            </span>
                        </div>
                        <div className="mb-3">
                            <FormSubmitButton labelPending="Signing Up..." label="Sign Up" state={state}/>
                        </div>
                        <div className="d-flex justify-content-center text-center mb-2">
            <span className="privacy-policy">
              By continuing I accept the
              <a href="#">Terms & Conditions</a><br/>
              and <a href="#">Privacy Policy</a>
            </span>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>

            {/* Conditionally render Login_TwoStepModal based on login state */}
            {/*{login && <Login_TwoStepModal handleClose={handleClose} />}*/}
        </>
    );
}

export default SignUpModal;
