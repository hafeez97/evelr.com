import React from "react";
import Navigation from "@/app/shared/components/Navigation";
import Script from 'next/script'
import ModalHOC from "@/app/shared/modals/ModalHOC";
import {auth} from "@/auth"

const HomeLayout = async ({ children }) => {
    const session = await auth()

    return (
        <>
            <header>
                    <Navigation session={session} />
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
