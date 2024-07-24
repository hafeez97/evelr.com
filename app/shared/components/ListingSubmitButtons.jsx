'use client'
import React, {useEffect, useState} from 'react'
import Link from "next/link";
import {useRouter} from "next/navigation";
import {CreateListingAction} from "@/app/shared/actions/hostAction";
import useFormStore from "@/app/shared/stores/useFormStore";

const ListingSubmitButtons = ({nextLink, forwardText, backText}) => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const {setFormData, formData} = useFormStore();

    const onForward = async () => {
        setLoading(true)
        await CreateListingAction(formData).then((response) => {
            console.log(response)
        })
        // router.push(nextLink)
        setLoading(false)


    }

    useEffect(() => {
        console.log(formData)
    }, [formData]);
    return (
        <section className="save-cont-btns-sec">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 d-flex justify-content-start">
                        <Link href="/" className="save-exit-btn">
                            {backText ? backText : 'Exit'}
                        </Link>
                    </div>
                    <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3 d-flex justify-content-end">
                        <button
                            className="continue-btn"
                            onClick={onForward}
                        >
                            {loading ? 'Loading...' : forwardText ? forwardText : 'Continue'}

                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ListingSubmitButtons
