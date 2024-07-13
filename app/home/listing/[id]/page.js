import React from 'react'
import ListingDetailSection from "@/app/shared/sections/ListingDetailSection";
import {fetchPostById} from "@/app/shared/services/ListingService";

const Page = async ({params}) => {
    const { id } = params;
    console.log(id)
    const data = await fetchPostById(id)




    return (
        <div>
            <ListingDetailSection detailData={data}/>
        </div>

    )
}
export default Page
