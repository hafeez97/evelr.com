'use client';

import React, {useEffect, useState} from 'react';
import useFormStore from "@/app/shared/stores/useFormStore";

const AboutPlaceForm = ({offerData}) => {
    const [offers, setOffers] = useState([])
    const {formData, setFormData} = useFormStore();

    const increment = (key) => {
        setFormData({[key]: (formData[key] || 0) + 1});
    };

    const decrement = (key) => {
        setFormData({[key]: (formData[key] || 0) > 0 ? (formData[key] || 0) - 1 : 0});
    };

    const offerButtonActive = (offerId) => {
        const currentOffers = formData.place_offers || [];
        if (currentOffers.includes(offerId)) {
            setFormData({place_offers: currentOffers.filter((id) => id !== offerId)});
        } else {
            setFormData({place_offers: [...currentOffers, offerId]});
        }
    };

    useEffect(() => {
        setOffers(offerData)
    }, []);

    return (
        <section className="about-place-sec">
            <div className="container">
                <h1 className="new-listing-heading primary-hd">About your place</h1>
                <form action="#">
                    <div className="row">
                        <div className="col-lg-6 pe-lg-5">
                            <h2 className="sub-hd">Guests</h2>
                            <div className="listing-card-wrapper">
                                {['Adults', 'Teenagers', 'Kids', 'Pets'].map((label, index) => {
                                    const key = `${label.toLowerCase()}_count`;
                                    return (
                                        <div className="row justify-content-between align-items-center" key={index}>
                                            <div className="col-6">
                                                <h6 className="list-title">{label}</h6>
                                            </div>
                                            <div className="col-6 d-flex justify-content-end">
                                                <div className="counter">
                                                    <div className="counter-btn" onClick={() => decrement(key)}>
                                                        <img src="../assets/images/minus.png" alt=""/>
                                                    </div>
                                                    <input type="number" className="counter-input text-center"
                                                           value={formData[key] || 0} readOnly/>
                                                    <div className="counter-btn" onClick={() => increment(key)}>
                                                        <img src="../assets/images/plus.png" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            <h2 className="sub-hd">Rooms</h2>
                            <div className="listing-card-wrapper">
                                {['Bedrooms', 'Bathrooms', 'Dining Room', 'Living Room'].map((label, index) => {
                                    const key = `${label.toLowerCase().replace(' ', '')}_count`;
                                    return (
                                        <div className="row justify-content-between align-items-center" key={index}>
                                            <div className="col">
                                                <h6 className="list-title">{label}</h6>
                                            </div>
                                            <div className="col d-flex justify-content-end">
                                                <div className="counter">
                                                    <div className="counter-btn" onClick={() => decrement(key)}>
                                                        <img src="../assets/images/minus.png" alt=""/>
                                                    </div>
                                                    <input type="number" className="counter-input"
                                                           value={formData[key] || 0}
                                                           readOnly/>
                                                    <div className="counter-btn" onClick={() => increment(key)}>
                                                        <img src="../assets/images/plus.png" alt=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="col-lg-6 ps-lg-5 mob-view-spacing">
                            <h2 className="sub-hd">What your place offers</h2>
                            <div className="row justify-content-center">
                                {offers.map((offer) => (
                                    <div className="col-6 col-lg-4 ps-0" key={offer.id}>
                                        <a>
                                            <div
                                                className={`place-offer-btn ${formData.place_offers?.includes(offer.id) ? 'offer-active' : ''}`}
                                                onClick={() => offerButtonActive(offer.id)}
                                            >
                                                {offer.title}
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AboutPlaceForm;
