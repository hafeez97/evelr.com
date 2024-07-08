"use client"
import React from 'react'
import LoginModal from "@/app/shared/modals/LoginModal";
import SignUpModal from "@/app/shared/modals/SignupModal";

const ModalHoc = () => {
    return (
        <>
        <LoginModal/>
    <SignUpModal/>
        </>
    )
}
export default ModalHoc
