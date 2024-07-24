import React from "react";
import HeaderNoNav from "@/app/shared/components/HeaderNoNav";
import FooterNoNav from "@/app/shared/components/FooterNoNav";

const CreatePostLayout = async ({children}) => {
    return (
        <>
            <HeaderNoNav/>
            <main>
                {children}
            </main>
            <FooterNoNav/>
        </>
    );
};

export default CreatePostLayout
