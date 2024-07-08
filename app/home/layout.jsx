import React from "react";
import Navigation from "@/app/shared/components/Navigation";
import Script from 'next/script'
import ModalHOC from "@/app/shared/modals/ModalHOC";


const HomeLayout = ({ children }) => {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main>
                <ModalHOC/>
                {children}</main>
            <footer>Default Footer</footer>
            {/*<Script src="/assets/js/custom.js" />*/}
        </>
    );
};

export default HomeLayout;
