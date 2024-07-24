import React from 'react'
import ReviewListingSection from "@/app/shared/forms/ReviewListingSection";
import ListingSubmitButtons from "@/app/shared/components/ListingSubmitButtons";

const Page = () => {
    return (
        <>
            <ReviewListingSection/>
            <ListingSubmitButtons forwardText="Let's get Started" nextLink={"host/listings"}/>
        </>
    )
}
export default Page
