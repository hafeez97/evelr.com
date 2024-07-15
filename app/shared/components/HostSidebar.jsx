"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from "next/link";


const HostSidebar = () => {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <aside className="h-dashboard-asidebar col-2">
            <nav className="h-dashboard-asidebar-nav">
                <ul className="h-dashboard-asidebar-list">
                    <Link  className="nav-link"  href="/host/dashboard">
                    <li className={`h-dashboard-asidebar-list-item nav__link  ${pathname==="/host/dashboard" && "h-dashboard-asidebar-active-tab"} `}>
                            <div className="nav-icon">
                                <img
                                    className="nav-icon-grey"
                                    src="/assets/images/dashboard-logo.svg"
                                    alt=""
                                />
                                <img
                                    className="nav-icon-white"
                                    src="/assets/images/dashboard-logo-white.svg"
                                    alt=""
                                />
                            </div>
                            <div className="nav__link__content">
                                <div className="nav__link__title">Dashboard</div>
                            </div>
                    </li>
                    </Link>
                    <Link  className="nav-link"  href="/host/inbox">
                        <li className={`h-dashboard-asidebar-list-item nav__link  ${pathname === "/host/inbox" && "h-dashboard-asidebar-active-tab"} `}>
                            <div className="nav-icon dot">
                                <img
                                    className="nav-icon-grey"
                                    src="/assets/images/inbox-logo.svg"
                                    alt=""
                                />
                                <img
                                    className="nav-icon-white"
                                    src="/assets/images/inbox-logo-white.svg"
                                    alt=""
                                />
                            </div>
                            <div className="nav__link__content">
                                <div className="nav__link__title">Inbox</div>
                            </div>
                        </li>
                    </Link>
                    <Link className="nav-link" href="/host/insights">
                        <li className={`h-dashboard-asidebar-list-item nav__link  ${pathname === "/host/insights" && "h-dashboard-asidebar-active-tab"} `}>
                            <div className="nav-icon">
                                <img
                                    className="nav-icon-grey"
                                    src="/assets/images/insights-logo.svg"
                                    alt=""
                                />
                                <img
                                    className="nav-icon-white"
                                    src="/assets/images/insights-logo-white.svg"
                                    alt=""
                                />
                            </div>
                            <div className="nav__link__content">
                                <div className="nav__link__title">Insights</div>
                            </div>
                        </li>
                    </Link>
                    <Link className="nav-link" href="/host/listings">
                        <li className={`h-dashboard-asidebar-list-item nav__link  ${pathname === "/host/listings" && "h-dashboard-asidebar-active-tab"} `}>
                            <div className="nav-icon">
                                <img
                                    className="nav-icon-grey"
                                    src="/assets/images/mylistings-logo.svg"
                                    alt=""
                                />
                                <img
                                    className="nav-icon-white"
                                    src="/assets/images/mylistings-logo-white.svg"
                                    alt=""
                                />
                            </div>
                            <div className="nav__link__content">
                                <div className="nav__link__title">My Listing</div>
                            </div>
                        </li>
                    </Link>
                    <Link className="nav-link" href="/host/earnings">
                        <li className={`h-dashboard-asidebar-list-item nav__link  ${pathname === "/host/earnings" && "h-dashboard-asidebar-active-tab"} `}>
                            <div className="nav-icon">
                                <img
                                    className="nav-icon-grey"
                                    src="/assets/images/earnings-logo.svg"
                                    alt=""
                                />
                                <img
                                    className="nav-icon-white"
                                    src="/assets/images/earnings-logo-white.svg"
                                    alt=""
                                />
                            </div>
                            <div className="nav__link__content">
                                <div className="nav__link__title">Earnings</div>
                            </div>
                        </li>
                    </Link>
                    <Link className="nav-link" href="/host/notifications">
                        <li className={`h-dashboard-asidebar-list-item nav__link  ${pathname === "/host/notifications" && "h-dashboard-asidebar-active-tab"} `}>
                            <div className="nav-icon">
                                <img
                                    className="nav-icon-grey"
                                    src="/assets/images/notificatons-logo.svg"
                                    alt=""
                                />
                                <img
                                    className="nav-icon-white"
                                    src="/assets/images/notificatons-logo-white.svg"
                                    alt=""
                                />
                            </div>
                            <div className="nav__link__content">
                                <div className="nav__link__title">Notification</div>
                            </div>
                        </li>
                    </Link>
                </ul>
            </nav>
        </aside>

    )
}
export default HostSidebar
