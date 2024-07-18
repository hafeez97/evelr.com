import React from "react";
import ModalHOC from "@/app/shared/modals/ModalHOC";
import {auth} from "@/auth"

const CreatePostLayout = async ({ children }) => {
    return (
        <>
            <header className="header">
                <div className="container">
                    <nav className="navbar navbar-expand-lg bg-color py-3 border-bottom border-black">
                        <a className="navbar-brand" href="#">
                            <img src="/assets/images/eve-logo-cropped.gif" alt="evelr logo"/>
                        </a>
                    </nav>
                </div>
            </header>

            <main>
                {children}</main>
            <footer>
                <hr/>
                <div className="container">
                    <div className="footer-end">
                        <div className="row align-items-center justify-content-center justify-content-md-between">
                            <div className="col-md-6 p-2 m-0">
                                <p className="m-0">© 2024 Evelr Corporation. All rights reserved</p>
                            </div>
                            <div className="col-md-6 p-2 m-0 text-md-end">
                                <a href="">Terms &amp; Condition</a>
                                <a className="m-lg-3" href="">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default CreatePostLayout
