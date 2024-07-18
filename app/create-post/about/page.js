import React from 'react'
import AboutPlaceForm from "@/app/shared/forms/AboutPlaceForm";
import {GetAllPlaceOffersAction} from "@/app/shared/actions/placeOffersAction";
import {off} from "next/dist/client/components/react-dev-overlay/pages/bus";
import Link from "next/link";

const Page = async () => {
    const offerData = await GetAllPlaceOffersAction()
    return (
        <>
            <AboutPlaceForm offerData={offerData.data}/>
            <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 d-flex justify-content-end">
                <Link
                    href={`/create-post/photos`}
                    className="continue-btn"
                >
                    Continue
                </Link>
            </div>
        </>

    )
}
export default Page
