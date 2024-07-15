import React from 'react'
import Link from "next/link";

const HostHeader = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-color py-3 border-bottom border-black">
                    <a className="navbar-brand" href="#">
                        <img src="../assets/images/eve-logo-cropped.gif" alt="evelr logo"/>
                    </a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex ms-auto">
                                <Link className="navbar-login-btn" type="button" href="/">
                                    Switch to travelling
                                </Link>


                            <div className="dropdown">
                                <a
                                    className="rounded-circle"
                                    style={{border: "3px solid var(--bs-primary-color)"}}
                                    type="button"
                                    id="userDropdownHost"
                                    data-bs-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    <img
                                        style={{height: 56, width: 56}}
                                        src="../assets/images/user.png"
                                        alt="user profile image"
                                    />
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-right"
                                    aria-labelledby="userDropdownHost"
                                    style={{fontSize: 16}}
                                >
                                    <li className="mt-2">
                                        <a
                                            className="dropdown-item d-flex align-items-center justify-content-between"
                                            href="#"
                                        >
                  <span>
                    <img
                        style={{height: 56, width: 56}}
                        src="../assets/images/user.png"
                        alt="user profile image"
                    />
                  </span>
                                            <span style={{marginLeft: 12}}>Ubaid Ahmed</span>
                                        </a>
                                    </li>
                                    <li className="mt-3">
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <span>My Reservations</span>
                                        </a>
                                    </li>
                                    <li className="mt-3">
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <span>Personal Information</span>
                                        </a>
                                    </li>
                                    <li className="mt-3">
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <span>Account Settings</span>
                                        </a>
                                    </li>
                                    <li className="mt-3">
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <span>Gift Cards</span>
                                        </a>
                                    </li>
                                    <li className="mt-3">
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <span>Help Center</span>
                                        </a>
                                    </li>
                                    <li className="mt-3 mb-2">
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                  <span
                      style={{
                          color: "var(--bs-primary-color)",
                          fontWeight: 600
                      }}
                  >
                    Log Out
                  </span>
                                        </a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>

    )
}
export default HostHeader
