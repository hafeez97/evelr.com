import React from 'react'
import DescriptionForm from "@/app/shared/forms/DescriptionForm";
import Link from "next/link";

const Page = () => {
    return (
        <>
            <DescriptionForm/>
            <section className="save-cont-btns-sec">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 d-flex justify-content-start">
                            <Link href="/" className="save-exit-btn">
                                Exit
                            </Link>
                        </div>
                        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 d-flex justify-content-end">
                            <Link
                                href="/create-post/guest"
                                className="continue-btn"
                            >
                                Continue
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default Page
