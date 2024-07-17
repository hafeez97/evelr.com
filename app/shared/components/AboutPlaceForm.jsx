"use client"
import React, { useState } from 'react';

const AboutPlaceForm = () => {
    const [counts, setCounts] = useState({
        adultsCount: 0,
        teenagersCount: 0,
        kidsCount: 0,
        petsCount: 0,
        bedroomsCount: 0,
        bathroomsCount: 0,
        diningroomsCount: 0,
        livingroomsCount: 0,
    });

    const increment = (key) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [key]: prevCounts[key] + 1,
        }));
    };

    const decrement = (key) => {
        setCounts((prevCounts) => ({
            ...prevCounts,
            [key]: prevCounts[key] > 0 ? prevCounts[key] - 1 : 0,
        }));
    };

    const offerButtonActive = (e) => {
        e.currentTarget.classList.toggle('active');
    };

    const offers = [
        'TV',
        'Air Conditioning',
        'Beach Access',
        'Smoke Alarm',
        'Carbon Alarm',
        'Wifi',
    ];

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
                                    const key = `${label.toLowerCase()}Count`;
                                    return (
                                        <div className="row justify-content-between align-items-center" key={index}>
                                            <div className="col-6">
                                                <h6 className="list-title">{label}</h6>
                                            </div>
                                            <div className="col-6 d-flex justify-content-end">
                                                <div className="counter">
                                                    <div className="counter-btn" onClick={() => decrement(key)}>
                                                        <img src="../assets/images/minus.png" alt="" />
                                                    </div>
                                                    <input type="number" className="counter-input text-center" value={counts[key]} readOnly />
                                                    <div className="counter-btn" onClick={() => increment(key)}>
                                                        <img src="../assets/images/plus.png" alt="" />
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
                                    const key = `${label.toLowerCase().replace(' ', '')}Count`;
                                    return (
                                        <div className="row justify-content-between align-items-center" key={index}>
                                            <div className="col">
                                                <h6 className="list-title">{label}</h6>
                                            </div>
                                            <div className="col d-flex justify-content-end">
                                                <div className="counter">
                                                    <div className="counter-btn" onClick={() => decrement(key)}>
                                                        <img src="../assets/images/minus.png" alt="" />
                                                    </div>
                                                    <input type="number" className="counter-input" value={counts[key]} readOnly />
                                                    <div className="counter-btn" onClick={() => increment(key)}>
                                                        <img src="../assets/images/plus.png" alt="" />
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
                                {offers.map((offer, index) => (
                                    <div className="col-6 col-lg-4 ps-0" key={index}>
                                        <a>
                                            <div className="place-offer-btn" onClick={offerButtonActive}>
                                                {offer}
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
