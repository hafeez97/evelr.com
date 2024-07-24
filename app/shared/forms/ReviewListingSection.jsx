'use client'
import React, {useEffect} from 'react'
import useFormStore from "@/app/shared/stores/useFormStore";
import CONST from "@/app/shared/utils/Constants";

const ReviewListingSection = () => {
    const {setFormData, formData} = useFormStore();

    useEffect(() => {
        console.log(formData)
    }, [formData]);

    return (
        <section style={{marginBottom: 60}}>
            <div className="container">
                <h1 className="new-listing-heading primary-hd" style={{marginBottom: 0}}>
                    Review your listing
                </h1>
                <span className="instructions">
      This is what we will show to your guests. Make sure it looks great.
    </span>
                <div className="row align-items-center" style={{marginTop: 40}}>
                    <div className="col-lg-6 pe-lg-5">
                        <div className="card">
                            <img
                                // src="/assets/images/listing.jpg"
                                src={formData.media.length > 0 ? CONST.MEDIA_URL + formData.media[0] : "/assets/images/listing.jpg"}
                                className="card-img-top"
                                style={{height: "310px !important"}}
                                alt="listing cover image"
                            />
                            <div className="card-body position-relative">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-10">
                                            <p className="price card-text">Rs {formData.rate} per night</p>
                                            <h5 className="title card-title">{formData.title}</h5>
                                            <p className="location card-text">
                                                {formData.address}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mob-view-spacing ps-lg-5">
                        <h2 className="sub-hd" style={{fontSize: 35}}>
                            What’s next?
                        </h2>
                        <div className="d-flex align-items-center" style={{marginTop: 34}}>
                            <div>
                                <img
                                    src="/assets/icons/calender-icon.png"
                                    style={{height: 54, width: 48}}
                                />
                            </div>
                            <div style={{paddingLeft: 25}}>
            <span style={{fontSize: 25, fontWeight: 600}}>
              Set up your calender
            </span>
                                <br/>
                                <span style={{fontSize: 20}}>
              Choose which dates your listing is available. It will be visible
              24hrs after you publish.
            </span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center" style={{marginTop: 30}}>
                            <div>
                                <img
                                    src="../assets/icons/edit-icon.png"
                                    style={{height: 54, width: 48}}
                                />
                            </div>
                            <div style={{paddingLeft: 25}}>
            <span style={{fontSize: 25, fontWeight: 600}}>
              Adjust your settings
            </span>
                                <br/>
                                <span style={{fontSize: 20}}>
              Set house rules, a cancellation policy, choose how guests book or
              more.
            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default ReviewListingSection
