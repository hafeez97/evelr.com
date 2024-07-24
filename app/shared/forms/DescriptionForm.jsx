'use client'
import React, {useEffect, useState} from 'react'
import useFormStore from "@/app/shared/stores/useFormStore";

const DescriptionForm = () => {
    const {setFormData, formData} = useFormStore();

    // useEffect(() => {
    //     console.log(formData)
    // }, [formData]);

    return (
        <section style={{marginBottom: 60}}>
            <div className="container">
                <h1 className="new-listing-heading primary-hd">Describe your place</h1>
                <form>
                    <div className="row">
                        <div className="col-lg-6 pe-lg-4">
                            <h2 className="sub-hd">Give your place a title</h2>
                            <span className="instructions">
            Short titles work best. Have fun with it, you can always change it
            later.
          </span>
                            <div style={{margin: "20px 0"}}>
            <textarea
                className="form-control border border-black"
                placeholder="Enter your title"
                id="describe-listing-title"
                style={{resize: "none"}}
                defaultValue={""}
                onChange={(e) => {
                    setFormData({"title": e.target.value})
                }}
            />
                                <span>
              {/*<span id="charCount">0</span>/32*/}
            </span>
                            </div>
                            <h2 className="sub-hd">How’s your place</h2>
                            <span className="instructions">
            Choose up to 3 highlights. We'll use these to get your description
            started.
          </span>
                            <div className="row" style={{marginTop: 15}}>
                                <div className="col-6 col-lg-4">
                                    <a>
                                        <div className="place-highlights-btn">Stylish</div>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <a>
                                        <div className="place-highlights-btn">Central</div>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <a>
                                        <div className="place-highlights-btn">Spacious</div>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <a>
                                        <div className="place-highlights-btn">Unique</div>
                                    </a>
                                </div>
                                <div className="col-6 col-lg-4">
                                    <a>
                                        <div className="place-highlights-btn">Peace full</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-4 mob-view-spacing">
                            <h2 className="sub-hd">Create your Description</h2>
                            <span className="instructions">
            Share what makes your place special.
          </span>
                            <div style={{margin: "20px 0", height: "80%"}}>
            <textarea
                className="form-control border border-black"
                placeholder="Enter your description"
                id="floatingTextarea"
                style={{resize: "none", height: "100%"}}
                defaultValue={""}
                onChange={(e) => {
                    setFormData({"description": e.target.value})
                }}
            />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>

    )
}
export default DescriptionForm
