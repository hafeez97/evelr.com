import React from 'react'
import {GetHostPostsAction} from "@/app/shared/actions/hostAction";
import HostListingCard from "@/app/shared/components/HostListingCard";
import Link from "next/link";

const Page = async () => {
    const data = await GetHostPostsAction();
    return (
        <div className="row">
            <div className="col-8 h-my-listing-side-border">
                <Link href="/create-post/select-category"
                    type="button"
                    className="h-my-listing-add-btn h-btn h-btn-secondary || mb-4"
                >
                    <i className="fa-regular fa-plus me-2"/> Add a new listing
                </Link>
                <div className="mb-4 pt-2 pb-1">
                    <h1 className="h-dashboard-content-title mb-0">My Listings</h1>
                </div>
                <ul className="h-my-listings-list">
                    {/*<HostListingCard data={data}/>*/}
                    {data.posts.map((post) =>
                        <Link className="nav-link mt-2" key={post.id} href={`/listing/${post.id}`}>
                            <HostListingCard
                                id={post.id}
                                title={post.title}
                                address={post.address}
                                rating={post.rating}
                            />
                        </Link>

                    )
                    }
                </ul>
            </div>
        </div>

    )
}


export default Page
