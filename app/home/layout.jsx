import React from "react";
import Navigation from "@/app/shared/components/Navigation";
import ModalHOC from "@/app/shared/modals/ModalHOC";
import {auth} from "@/auth"
import Footer from "@/app/shared/components/Footer";

const HomeLayout = async ({children}) => {
    const session = await auth()

    return (
        <>
            <header>
                <Navigation session={session}/>
            </header>
            <main>
                <ModalHOC/>
                {children}</main>
            <Footer/>
            {/*<Script src="/assets/js/custom.js" />*/}
        </>
    );
};

export default HomeLayout;
