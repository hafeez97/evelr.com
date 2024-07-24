'use client'
import React, {useState} from 'react'
import useFormStore from "@/app/shared/stores/useFormStore";

const SelectGuestForm = () => {
    const {setFormData, formData} = useFormStore();

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">{/* for spacing */}</div>
                    <div className="col-lg-6">
                        <h1
                            className="new-listing-heading primary-hd"
                            style={{marginBottom: 0}}
                        >
                            Choose who to welcome as your first guest
                        </h1>
                        <span className="instructions">
          After your first guest, anyone can book your place
        </span>
                        <div className="loc-card" style={{margin: "40px 0 20px 0"}}
                             onClick={() => setFormData({"first_reservation": "evelr_user"})}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="pe-3">
                                    <h4>Any Evelr User</h4>
                                    <p>
                                        Get reservation faster when you welcome anyone from Everly
                                        community.
                                    </p>
                                </div>
                                {/*<div className="check-guest check-guest-active">*/}
                                <div
                                    className={`check-guest  ${formData.first_reservation === "evelr_user" && "check-guest-active"}`}>
                                    <img src="/assets/images/check.png" alt="..."/>
                                </div>
                            </div>
                        </div>
                        <div className="loc-card" style={{marginBottom: 20}}
                             onClick={() => setFormData({"first_reservation": "experienced_user"})}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="pe-3">
                                    <h4>Any Experienced Guest</h4>
                                    <p>
                                        Welcome someone with a good track record on Evelry who can offer
                                        tips to a great lister.
                                    </p>
                                </div>
                                <div
                                    className={`check-guest  ${formData.first_reservation === "experienced_user" && "check-guest-active"}`}>
                                    <img src="/assets/images/check.png" alt="..."/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">{/* for spacing */}</div>
                </div>
            </div>
        </section>

    )
}
export default SelectGuestForm
