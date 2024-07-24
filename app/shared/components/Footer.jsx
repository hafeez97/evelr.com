import React from 'react'
import Link from "next/link";

const Footer = () => {
    return (
        <footer style={{marginTop: 52}}>
            <div className="container">
                <div className="footer">
                    <div className="row">
                        <div className="col-xl-4 col-lg-3 col-md-6 col-12">
                            <h5>Support</h5>
                            <ul>
                                <li>
                                    <Link href="/">Help Center</Link>
                                </li>
                                <li>
                                    <Link href="/">Get help with a safety issue</Link>
                                </li>
                                <li>
                                    <Link href="/">Anti-discrimination</Link>
                                </li>
                                <li>
                                    <Link href="/">Disability support</Link>
                                </li>
                                <li>
                                    <Link href="/">Cancellation options</Link>
                                </li>
                                <li>
                                    <Link href="/">Report neighborhood concern</Link>
                                </li>
                            </ul>
                        </div>
                        <hr className="d-lg-none d-md-none"/>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-12">
                            <h5>Hosting</h5>
                            <ul>
                                <li>
                                    <Link href="/">List your home</Link>
                                </li>
                                <li>
                                    <Link href="/">Hosting Resources</Link>
                                </li>
                                <li>
                                    <Link href="/">Community Forum</Link>
                                </li>
                                <li>
                                    <Link href="/">Hosting responsibly</Link>
                                </li>
                                <li>
                                    <Link href="/">Evelr-friendly Apartments</Link>
                                </li>
                            </ul>
                        </div>
                        <hr className="d-lg-none d-md-none"/>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-12 mt-md-5 mt-lg-0">
                            <h5>Evelr</h5>
                            <ul>
                                <li>
                                    <Link href="/">News Room</Link>
                                </li>
                                <li>
                                    <Link href="/">New Features</Link>
                                </li>
                                <li>
                                    <Link href="/">Careers</Link>
                                </li>
                                <li>
                                    <Link href="/">Investors</Link>
                                </li>
                                <li>
                                    <Link href="/">Gift Cards</Link>
                                </li>
                                <li>
                                    <Link href="/">Emergency Stays</Link>
                                </li>
                            </ul>
                        </div>
                        <hr className="d-lg-none d-md-none"/>
                        <div className="col-xl-2 col-lg-3 col-md-6 col-12 mt-md-5 mt-lg-0">
                            <h5>Get the app</h5>
                            <Link href="/">
                                <img
                                    className="footer-app-store"
                                    src="/assets/images/app-store.png"
                                />
                            </Link>
                            <br/>
                            <Link href="/">
                                <img
                                    className="footer-play-store"
                                    src="/assets/images/google-play.png"
                                />
                            </Link>
                        </div>
                    </div>
                    <hr/>
                    <div className="footer-last">
                        <div className="row align-items-center justify-content-center justify-content-md-between">
                            <div className="col-md-6 p-2 m-0">
                                <p className="m-0">© 2024 Evelr Corporation. All rights reserved</p>
                            </div>
                            <div className="col-md-6 p-2 m-0 text-md-end">
                                <Link href="">Terms &amp; Condition</Link>
                                <Link className="m-lg-3" href="">
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}
export default Footer
