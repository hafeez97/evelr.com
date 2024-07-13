"use client"
import React from "react";
import Link from "next/link";
import useModalStore from "@/app/shared/stores/useModalStore";
import NavButtons from "@/app/shared/components/NavButtons";
import NavAuthButtons from "@/app/shared/components/NavAuthButtons";


function Navigation({session}) {
  console.log(session)

  return (
      <>
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
              {
                session ?<NavAuthButtons session={session} /> :<NavButtons/>
              }
            </div>
          </div>
        </nav>
      </>

  );
}

export default Navigation;
