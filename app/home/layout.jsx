import React from "react";
import Navigation from "@/app/shared/components/Navigation";
import Script from 'next/script'

const HomeLayout = ({ children }) => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>{children}</main>
            <footer>Default Footer</footer>
            {/*<Script src="/assets/js/custom.js" />*/}
        </>
    );
};

export default HomeLayout;
