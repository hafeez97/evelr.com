import React from 'react'
import ListingDetailSection from "@/app/shared/sections/ListingDetailSection";
import {fetchPostById} from "@/app/shared/services/ListingService";
import {auth} from "@/auth";

const Page = async ({params}) => {
    const { id } = params;
    console.log(id)
    const data = await fetchPostById(id)
    const session = await auth()

    return (
        <div>
            <ListingDetailSection detailData={data} session={session}/>
        </div>

    )
}
export default Page
