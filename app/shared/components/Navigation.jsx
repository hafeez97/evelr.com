"use client"
import React, {useEffect} from "react";
import Link from "next/link";
import LoginModal from "@/app/shared/modals/LoginModal";
import useModalStore from "@/app/shared/stores/useModalStore";
import SignupModal from "@/app/shared/modals/SignupModal";

function Navigation() {
  const {openSignInModal, openSignUpModal} = useModalStore()


  return (
      <>
        {/*<LoginModal/>*/}
        {/*<SignupModal/>*/}
        <nav className="navbar navbar-expand-lg bg-light py-3">
          <div className="container">
            <Link className="navbar-brand" href="#">
              <img
                  width={20}
                  height={20}
                  src="../assets/images/eve-logo-cropped.gif"
                  alt="evelr logo"
              />
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" href="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Messages
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Notifications
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Wishlists
                  </Link>
                </li>
              </ul>
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
                    // type="button"
                    // data-bs-toggle="modal"
                    // data-bs-target="#signup-modal"
                >
                  Sign Up
                </button>
              </div>
            </div>
            <div
                className="offcanvas offcanvas-start d-lg-none"
                tabIndex={-1}
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <a className="navbar-brand" id="offcanvasNavbarLabel" href="#">
                  <img
                      src="../assets/images/eve-logo-cropped.gif"
                      alt="evelr logo"
                  />
                </a>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Messages
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Notifications
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Wishlist
                    </a>
                  </li>
                  <div className="row justify-content-between mt-2">
                    <div className="col-6">
                      <button
                          className="navbar-login-btn"
                          onClick={openSignInModal}
                      >
                        Sign In
                      </button>
                    </div>
                    <div className="col-6">
                      <button
                          className="navbar-signup-btn"
                          onClick={openSignUpModal}
                      >
                        Sign Up
                      </button>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </>

  );
}

export default Navigation;
