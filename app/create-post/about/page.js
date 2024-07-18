import React from 'react'
import AboutPlaceForm from "@/app/shared/forms/AboutPlaceForm";
import {GetAllPlaceOffersAction} from "@/app/shared/actions/placeOffersAction";
import {off} from "next/dist/client/components/react-dev-overlay/pages/bus";

const Page = async () => {
    const offerData = await GetAllPlaceOffersAction()
    return (
        <AboutPlaceForm offerData={offerData}/>
    )
}
export default Page
