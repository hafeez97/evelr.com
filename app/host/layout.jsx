import React, {Suspense} from "react";
import {auth} from "@/auth"
import HostSidebar from "@/app/shared/components/HostSidebar";
import HeaderNoNav from "@/app/shared/components/HeaderNoNav";
import FooterNoNav from "@/app/shared/components/FooterNoNav";

const RootLayout = async ({children}) => {
    const session = await auth()

    return (
        <>
            <HeaderNoNav/>
            <main>
                <section className="h-dashboard py-3">
                    <div className="container">
                        <div className="row">
                            <HostSidebar/>
                            <div class="h-content col-10">
                                <Suspense fallback={<div>Loading...</div>}>
                                    {children}
                                </Suspense>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <FooterNoNav/>
        </>
    );
};

export default RootLayout;
