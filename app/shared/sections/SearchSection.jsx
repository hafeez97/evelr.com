// app/shared/components/SearchSection.jsx
"use client"; // Mark this component as a client component

import React, {useState} from "react";
import flatpickr from "flatpickr";

const SearchSection = () => {
    const [showGuestCard, setShowGuestCard] = useState(false);
    const [showSearchCard, setShowSearchCard] = useState(false);
    const [showWhereCard, setShowWhereCard] = useState(false);
    const [showCheckInCard, setShowCheckInCard] = useState(false); // Add state for Check-in card
    const [showCheckOutCard, setShowCheckOutCard] = useState(false); // Add state for Check-out card


    const handleFocusGuestCard = () => setShowGuestCard(true);
    const handleBlurGuestCard = () => setShowGuestCard(false);

    const handleFocusSearchCard = () => setShowSearchCard(true);
    const handleBlurSearchCard = () => setShowSearchCard(false);

    const handleFocusWhereCard = () => setShowWhereCard(true);
    const handleBlurWhereCard = () => setShowWhereCard(false);

    const handleFocusCheckInCard = () => setShowCheckInCard(true);
    const handleBlurCheckInCard = () => setShowCheckInCard(false);

    const handleFocusCheckOutCard = () => setShowCheckOutCard(true);
    const handleBlurCheckOutCard = () => setShowCheckOutCard(false);

    const increment = (id) => {
        document.getElementById(id).stepUp();
    };

    const decrement = (id) => {
        document.getElementById(id).stepDown();
    };

    return (
        <section className="py-3">
            <div className="container">
                <div
                    style={{
                        backgroundImage: "url('/assets/images/cover.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                        borderRadius: "25px",
                    }}
                >
                    <div className="hero col-12">
                        <div className="col-lg-7">
                            <h1>
                                Find your dream
                                <br/>
                                <span>Accommodation</span>
                            </h1>
                            <p>
                                Discover your perfect space—a place that feels <br/>
                                just right, tailored to your every need and desire.
                            </p>
                            <div className="container position-relative p-0">
                                <button className="search-btn" type="button">
                                    Search
                                </button>
                                <div className="hero-search">
                                    <div className="row">
                                        <div className="col-lg-3 p-1 m-0">
                                            <label htmlFor="Where" className="form-label">
                                                Where
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="Where"
                                                placeholder="Search"
                                                onFocus={handleFocusWhereCard}
                                                onBlur={handleBlurWhereCard}
                                            />
                                            {showWhereCard && (
                                                <div className="search-where-card position-absolute">
                                                    {/* Content of the Where card */}
                                                    <div className="search-card">
                                                        <div className="row">
                                                            <div
                                                                className="col-6 col-lg-4"
                                                                style={{padding: "0 6px !important"}}
                                                            >
                                                                <img
                                                                    src="/assets/images/temp-map.jpeg"
                                                                    alt=""
                                                                />
                                                                <div>
                                                                    <label>I am Flexible</label>
                                                                </div>
                                                            </div>
                                                            {/* Add more items as needed */}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        <div className="col-lg-3 p-1 m-0">
                                            <label htmlFor="Check-in" className="form-label">
                                                Check-in
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="Check-in"
                                                placeholder="Add Dates"
                                                onFocus={handleFocusCheckInCard}
                                                onBlur={handleBlurCheckInCard}
                                            />
                                            {showCheckInCard && (
                                                <div className="check-in-card position-absolute">
                                                    {/* Content of the Check-in card */}
                                                    <div className="search-card">
                                                        {/* Add your check-in date picker or content here */}
                                                        Check-in content here
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-lg-3 p-1 m-0">
                                            <label htmlFor="Check-out" className="form-label">
                                                Check-out
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="Check-out"
                                                placeholder="Add Dates"
                                                onFocus={handleFocusCheckOutCard}
                                                onBlur={handleBlurCheckOutCard}
                                            />
                                            {showCheckOutCard && (
                                                <div className="check-out-card position-absolute">
                                                    {/* Content of the Check-out card */}
                                                    <div className="search-card">
                                                        {/* Add your check-out date picker or content here */}
                                                        Check-out content here
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        <div className="col-lg-3 p-1 m-0">
                                            <label htmlFor="Guests" className="form-label">
                                                Guests
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="Guests"
                                                placeholder="Add Guests"
                                                onFocus={handleFocusGuestCard}
                                                onBlur={handleBlurGuestCard}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Guest Card Pop-Up  */}
                                {showGuestCard && (
                                    <div
                                        id="hero-guest-card"
                                        className="col-12 col-lg-10 col-xl-9 col-xxl-8 position-absolute"
                                    >
                                        <div className="card-wrapper text-black">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-6">
                                                    <h6 className="list-title">Adults</h6>
                                                </div>
                                                <div className="col-6 d-flex justify-content-end">
                                                    <div className="counter">
                                                        <div
                                                            className="counter-btn"
                                                            onClick={() => decrement("adultsCount")}
                                                        >
                                                            <img src="/assets/images/minus.png" alt=""/>
                                                        </div>
                                                        <input
                                                            type="number"
                                                            className="counter-input text-center"
                                                            style={{
                                                                borderRadius: "0 !important",
                                                                padding: "5px 12px !important",
                                                            }}
                                                            id="adultsCount"
                                                            defaultValue="0"
                                                            readOnly
                                                        />
                                                        <div
                                                            className="counter-btn"
                                                            onClick={() => increment("adultsCount")}
                                                        >
                                                            <img src="/assets/images/plus.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row justify-content-between align-items-center">
                                                <div className="col">
                                                    <h6 className="list-title">Teenagers</h6>
                                                </div>
                                                <div className="col d-flex justify-content-end">
                                                    <div className="counter">
                                                        <div
                                                            className="counter-btn"
                                                            onClick={() => decrement("teenagersCount")}
                                                        >
                                                            <img src="/assets/images/minus.png" alt=""/>
                                                        </div>
                                                        <input
                                                            type="number"
                                                            className="counter-input"
                                                            style={{
                                                                borderRadius: "0 !important",
                                                                padding: "5px 12px !important",
                                                            }}
                                                            id="teenagersCount"
                                                            defaultValue="0"
                                                            readOnly
                                                        />
                                                        <div
                                                            className="counter-btn"
                                                            onClick={() => increment("teenagersCount")}
                                                        >
                                                            <img src="/assets/images/plus.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row justify-content-between align-items-center">
                                                <div className="col">
                                                    <h6 className="list-title">Kids</h6>
                                                </div>
                                                <div className="col d-flex justify-content-end">
                                                    <div className="counter">
                                                        <div
                                                            className="counter-btn"
                                                            onClick={() => decrement("kidsCount")}
                                                        >
                                                            <img src="/assets/images/minus.png" alt=""/>
                                                        </div>
                                                        <input
                                                            type="number"
                                                            className="counter-input"
                                                            style={{
                                                                borderRadius: "0 !important",
                                                                padding: "5px 12px !important",
                                                            }}
                                                            id="kidsCount"
                                                            defaultValue="0"
                                                            readOnly
                                                        />
                                                        <div
                                                            className="counter-btn"
                                                            onClick={() => increment("kidsCount")}
                                                        >
                                                            <img src="/assets/images/plus.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row justify-content-between align-items-center">
                                                <div className="col">
                                                    <h6 className="list-title">Pets</h6>
                                                </div>
                                                <div className="col d-flex justify-content-end">
                                                    <div className="counter">
                                                        <div
                                                            className="counter-btn"
                                                            onClick={() => decrement("petsCount")}
                                                        >
                                                            <img src="/assets/images/minus.png" alt=""/>
                                                        </div>
                                                        <input
                                                            type="number"
                                                            className="counter-input"
                                                            style={{
                                                                borderRadius: "0 !important",
                                                                padding: "5px 12px !important",
                                                            }}
                                                            id="petsCount"
                                                            defaultValue="0"
                                                            readOnly
                                                        />
                                                        <div
                                                            className="counter-btn"
                                                            onClick={() => increment("petsCount")}
                                                        >
                                                            <img src="/assets/images/plus.png" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {/* Search Card Pop-Up  */}
                                {showSearchCard && (
                                    <div
                                        id="hero-search-card"
                                        className="col-12 col-sm-9 col-md-6 col-lg-10 col-xl-9 col-xxl-8 position-absolute"
                                    >
                                        <div className="search-card">
                                            <div className="row">
                                                <div
                                                    className="col-6 col-lg-4"
                                                    style={{padding: "0 6px !important"}}
                                                >
                                                    <img src="/assets/images/temp-map.jpeg" alt=""/>
                                                    <div>
                                                        <label>I am Flexible</label>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-6 col-lg-4"
                                                    style={{padding: "0 6px !important"}}
                                                >
                                                    <img src="/assets/images/temp-map.jpeg" alt=""/>
                                                    <div>
                                                        <label>I am Flexible</label>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-6 col-lg-4"
                                                    style={{padding: "0 6px !important"}}
                                                >
                                                    <img src="/assets/images/temp-map.jpeg" alt=""/>
                                                    <div>
                                                        <label>I am Flexible</label>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-6 col-lg-4"
                                                    style={{padding: "0 6px !important"}}
                                                >
                                                    <img src="/assets/images/temp-map.jpeg" alt=""/>
                                                    <div>
                                                        <label>I am Flexible</label>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-6 col-lg-4"
                                                    style={{padding: "0 6px !important"}}
                                                >
                                                    <img src="/assets/images/temp-map.jpeg" alt=""/>
                                                    <div>
                                                        <label>I am Flexible</label>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-6 col-lg-4"
                                                    style={{padding: "0 6px !important"}}
                                                >
                                                    <img src="/assets/images/temp-map.jpeg" alt=""/>
                                                    <div>
                                                        <label>I am Flexible</label>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-6 col-lg-4"
                                                    style={{padding: "0 6px !important"}}
                                                >
                                                    <img src="/assets/images/temp-map.jpeg" alt=""/>
                                                    <div>
                                                        <label>I am Flexible</label>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-6 col-lg-4"
                                                    style={{padding: "0 6px !important"}}
                                                >
                                                    <img src="/assets/images/temp-map.jpeg" alt=""/>
                                                    <div>
                                                        <label>I am Flexible</label>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-6 col-lg-4"
                                                    style={{padding: "0 6px !important"}}
                                                >
                                                    <img src="/assets/images/temp-map.jpeg" alt=""/>
                                                    <div>
                                                        <label>I am Flexible</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchSection;
