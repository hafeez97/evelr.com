"use client"
import React from 'react'
import useModalStore from "@/app/shared/stores/useModalStore";
import Link from "next/link";


const NavButtons = () => {
    const {openSignInModal, openSignUpModal} = useModalStore()
    return (
        <div className="nav-btns">
            <button
                className="navbar-login-btn"
                onClick={openSignInModal}
            >
                Log In
            </button>
            <button
                className="navbar-signup-btn"
                onClick={openSignUpModal}
            >
                Sign Up
            </button>
        </div>
    )
}
export default NavButtons
