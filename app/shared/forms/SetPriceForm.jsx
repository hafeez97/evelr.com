'use client'
import React from 'react'
import useFormStore from "@/app/shared/stores/useFormStore";

const SetPriceForm = () => {
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
                            Now, Set your Price
                        </h1>
                        <span className="instructions">You can change it anytime</span>
                        <div className="text-center">
                            <div className="listing-amount d-flex justify-content-center align-items-center">
                                <span>PKR</span>
                                <input
                                    id="priceInput"
                                    type="number"
                                    placeholder="Enter Amount"
                                    onChange={(e) => {
                                        setFormData({"rate": e.target.value})
                                    }}
                                />
                                <br/>
                            </div>
                            <span className="amount-per_night">Per night</span>
                            <div className="loc-card" style={{margin: "40px 0 20px 0"}}>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>Monthly Rent</div>
                                    <div>
                                        PKR&nbsp;<span id="monthlyRent">{formData.rate * 30}</span>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div>Service Charges</div>
                                    <div>
                                        PKR&nbsp;<span id="serviceCharges">1000</span>
                                    </div>
                                </div>
                                <hr/>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>You get</div>
                                    <div>
                                        PKR&nbsp;<span id="youGet">{formData.rate - formData.service_charges}</span>
                                    </div>
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
export default SetPriceForm
