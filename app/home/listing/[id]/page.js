import React from 'react'
import ListingDetailSection from "@/app/shared/sections/ListingDetailSection";
import {fetchPostById} from "@/app/shared/services/ListingService";

const Page = async ({params}) => {
    const { id } = params;
    console.log(id)
    const data = await fetchPostById(id)


    return (
        <ListingDetailSection detailData={data}/>
    )
}
export default Page
