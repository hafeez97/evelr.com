import React from "react";
import CategorySelection from "@/app/shared/components/CategorySelection";
import CategoryCustomAddInput from "@/app/shared/components/CategoryCustomAddInput";
import {GetAllCategoriesAction} from "@/app/shared/actions/categoriesAction";
import Link from "next/link";


const Page = async ({searchParams}) => {
   const data = await GetAllCategoriesAction();
    const queryString = new URLSearchParams(searchParams).toString();
    console.log(searchParams)

    return (
       <>
           <section className="listing-category">
               <div className="container">
                   <h1 className="new-listing-heading primary-hd">
                       Which category describes your place?
                   </h1>
                   <CategorySelection categories={data}/>
                   <CategoryCustomAddInput/>
                   <section className="save-cont-btns-sec">
                       <div className="container">
                           <div className="row justify-content-between">
                               <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 d-flex justify-content-start">
                                   <a href="" className="save-exit-btn">
                                       Exit
                                   </a>
                               </div>
                               <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 d-flex justify-content-end">
                                   <Link
                                       href={`/create-post/place-location${queryString ? `?${queryString}` : ''}`}
                                       className="continue-btn"
                                   >
                                       Continue
                                   </Link>
                               </div>
                           </div>
                       </div>
                   </section>

               </div>
           </section>
       </>
    )
}
export default Page
