import React from "react";
import Script from 'next/script'
import {auth} from "@/auth"
import HostHeader from "@/app/shared/components/HostHeader";

const RootLayout = async ({ children }) => {
    const session = await auth()

    return (
        <>
            <HostHeader/>
            <main>
                {children}</main>
            <footer>
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

export default RootLayout;
