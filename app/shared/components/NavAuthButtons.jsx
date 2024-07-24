import React, {useState} from 'react'
import {LogoutAction} from "@/app/shared/actions/loginAction";
import Link from "next/link";


const NavAuthButtons = ({session}) => {
    const [isOpen, setIsOpen] = useState(false);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="d-flex flex-row justify-content-between">
            <Link href="/host/dashboard" className="navbar-login-btn" type="button"> Switch to listing </Link>
            <div className="dropdown" onClick={toggleDropdown}>
                <a
                    className="rounded-circle"
                    style={{border: '3px solid var(--bs-primary-color)'}}
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={isOpen ? 'true' : 'false'}
                >
                    <img
                        style={{height: '56px', width: '56px'}}
                        src="/assets/images/user.png"
                        alt="user profile image"
                    />
                </a>
                <div
                    className={`dropdown-menu dropdown-menu-right ${isOpen ? 'show' : ''}`}
                    aria-labelledby="dropdownMenuButton"
                    style={{fontSize: '16px'}}
                >
                    <li className="mt-2">
                        <a className="dropdown-item d-flex align-items-center justify-content-between" href="#">
                      <span>
                        <img style={{height: '56px', width: '56px'}} src="/assets/images/user.png"
                             alt="user profile image"/>
                      </span>
                            <span style={{marginLeft: '12px'}}>{session.user.full_name}</span>
                        </a>
                    </li>
                    <li className="mt-3">
                        <Link className="dropdown-item d-flex align-items-center" href="/my_reservations">My
                            Reservation</Link>
                    </li>
                    <li className="mt-3">
                        <Link className="dropdown-item d-flex align-items-center" href="/personal-information">Personal
                            Information</Link>
                    </li>
                    <li className="mt-3">
                        <Link className="dropdown-item d-flex align-items-center" href="/account-settings">Account
                            Settings</Link>
                    </li>
                    <li className="mt-3">
                        <Link className="dropdown-item d-flex align-items-center" href="/gift_card">Gift Cards</Link>
                    </li>
                    <li className="mt-3">
                        <Link className="dropdown-item d-flex align-items-center" href="/help_center">Help Center</Link>
                    </li>
                    <li className="mt-3 mb-2">
                        <button className="dropdown-item d-flex align-items-center" onClick={() => LogoutAction()}>
                            <span style={{color: 'var(--bs-primary-color)', fontWeight: '600'}}>Log Out</span>
                        </button>
                    </li>
                </div>
            </div>
        </div>
    )
}
export default NavAuthButtons
