import React, {Suspense} from "react";
import Link from "next/link";
import LocationForm from "@/app/shared/forms/LocationForm";
import {GetAllCountriesAction} from "@/app/shared/actions/locationAction";

const Page = async () => {
    // const countries = await GetAllCountriesAction();

    return (
        <>
                {/*<LocationForm countries={countries.countries} />*/}
            <section className="save-cont-btns-sec">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 d-flex justify-content-start">
                            <a href="" className="save-exit-btn">
                                Back
                            </a>
                        </div>
                        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 d-flex justify-content-end">
                            <Link
                                href={`/create-post/about`}
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
