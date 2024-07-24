import React from 'react'
import Link from "next/link";

const HeaderNoNav = () => {
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-color py-3 border-bottom border-black">
                    <Link className="navbar-brand" href="/">
                        <img src="/assets/images/eve-logo-cropped.gif" alt="evelr logo"/>
                    </Link>
                </nav>
            </div>
        </header>
    )
}
export default HeaderNoNav
