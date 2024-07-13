"use client"
import React, {useEffect} from 'react'
import DateRangeCalender from "@/app/shared/components/DateRangeCalender";


const ListingDetailSection = ({detailData}) => {
    const postDetails = detailData

    const increment = (id) => {
        const input = document.getElementById(id);
        input.value = parseInt(input.value) + 1;
    };

    const decrement = (id) => {
        const input = document.getElementById(id);
        const value = parseInt(input.value);
        if (value > 0) {
            input.value = value - 1;
        }
    };

    return (
        <>
        <section>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className="new-listing-heading primary-hd">
                        {postDetails?.title}
                    </h1>
                    <span style={{fontSize: '18px'}}>
              <img
                  className="rate-icon"
                  style={{
                      filter: 'brightness(0) saturate(100%) invert(59%) sepia(100%) saturate(435%) hue-rotate(0deg) brightness(103%) contrast(106%)',
                  }}
                  src="../assets/icons/star-fill.svg"
              />
              <span>4.6</span>&nbsp;&nbsp;&nbsp; 1k+ Reviews
            </span>
                </div>

                <div className="row" style={{position: 'relative'}}>
                    <div className="col-lg-7">
                        <div
                            className="appartment-details-hero-img"
                            style={{backgroundImage: "url('../assets/images/listing.jpg')",}}
                        ></div>
                    </div>
                    <div className="col-lg-5 d-none d-lg-block">
                        <div
                            style={{
                                height: '255px',
                                marginBottom: '20px',
                                background: 'center/cover',
                                backgroundImage: "url('../assets/images/listing.jpg')",
                                borderRadius: '0 25px 25px 0',
                            }}
                        ></div>
                        <div
                            style={{
                                height: '255px',
                                background: 'center/cover',
                                backgroundImage: "url('../assets/images/listing.jpg')",
                                borderRadius: '0 25px 25px 0',
                            }}
                        ></div>
                    </div>
                    <div className="apartment-details-grid-btn">
                        <div className="d-flex flex-row">
                            <img src="../assets/icons/grid-3x3-gap-fill.svg" width="30" alt=""/>
                            <span className="ms-3">See all photos</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    <section>
        <div className="container">
            <div className="row">
                <div className="col-lg-7 pe-lg-3">
                    <h2 className="sub-hd" style={{marginTop: '40px', fontSize: '38px'}}>
                        Salam Towers in Malir
                    </h2>
                    <h3 style={{marginTop: '60px', fontSize: '30px', fontWeight: '500'}}>
                        About This Apartment
                    </h3>
                    <p style={{marginTop: '15px', fontSize: '21px'}}>
                        {postDetails?.description}
                    </p>
                    <div
                        className="card-wrapper"
                        style={{
                            backgroundColor: 'var(--bs-primary-color)',
                            marginTop: '35px',
                            color: 'var(--bs-main-color)',
                            borderColor: 'transparent',
                        }}
                    >
                        <h3 style={{fontSize: '30px', fontWeight: '500'}}>What this Apartment Offers?</h3>
                        <div className="row">
                            {postDetails?.place_offer?.map((offer) => (
                                <div className="col-6" style={{fontSize: '22px', marginTop: '4px'}} key={offer.id}>
                                    {offer.title}
                                </div>
                            ))}
                        </div>
                    </div>
                    <h3 style={{marginTop: '35px', fontSize: '30px', fontWeight: '600'}}>Where you will be</h3>
                    <p style={{marginTop: '0px', fontSize: '22px', fontWeight: '500'}}>{postDetails?.address}</p>

                    <div style={{height: '241px', marginTop: '26px'}}>
                        <img src="/assets/images/map.png" style={{height: '100%', width: '100%'}} alt="map-location"/>
                    </div>

                    <div
                        className="d-flex align-items-center justify-content-between"
                        style={{marginTop: '35px'}}
                    >
                        <div className="d-flex align-items-center">
                            <img
                                className="rounded-circle"
                                style={{height: '68px', width: '68px'}}
                                src="/assets/images/user-profile.svg"
                                alt="user profile image"
                            />
                            <span style={{fontSize: '20px', marginLeft: '12px'}}>
                    Listed by <span style={{fontWeight: '600'}}>{postDetails?.user?.full_name}</span>
                    <span style={{fontSize: '14px', display: 'block'}}>1 year listing</span>
                  </span>
                        </div>

                        <button className="primary-button row_btns">Contact</button>
                    </div>
                </div>
                <hr className="d-lg-none" style={{marginTop: '54px'}}/>
                <div
                    className="col-lg-5 mob-view-spacing ps-lg-3"
                    style={{marginTop: '40px'}}
                >
                    <div className="d-flex align-items-center justify-content-between">
                        <div>
                            <span style={{fontSize: '30px', fontWeight: '600'}}>Rs {postDetails?.rate}</span>
                        </div>
                        <div>
                            <button className="primary-button row_btns" >Book Now</button>
                        </div>
                    </div>
                    <h3 style={{marginTop: '50px', fontSize: '30px', fontWeight: '600'}}>Select Check In Date</h3>
                    <p style={{marginTop: '0px', fontSize: '22px', fontWeight: '500'}}>Add your dates for exact
                        pricing</p>
                    <div className="apartment-details-calender">
                        <DateRangeCalender/>
                    </div>
                    <h3 style={{marginTop: '35px', fontSize: '30px', fontWeight: '600'}}>Select No. of person</h3>
                    <p style={{marginTop: '0px', fontSize: '22px', fontWeight: '500'}}>Input how many person will be
                        staying</p>
                    <div
                        className="card-wrapper"
                        style={{
                            boxShadow: 'var(--bs-box-shadow-all-sides)',
                            border: 'none',
                            padding: '10px 20px 10px 20px',
                        }}
                    >
                        <div className="row justify-content-between align-items-center">
                            <div className="col-6">
                                <h6 className="list-title">Adults</h6>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <div className="counter">
                                    <div className="counter-btn" onClick={() => decrement('adultsCount')}>
                                        <img src="../assets/images/minus.png" alt=""/>
                                    </div>
                                    <input
                                        type="number"
                                        className="counter-input text-center"
                                        id="adultsCount"
                                        value="0"
                                        readOnly
                                    />
                                    <div className="counter-btn" onClick={() => increment('adultsCount')}>
                                        <img src="../assets/images/plus.png" alt=""/>
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
                                    <div className="counter-btn" onClick={() => decrement('teenagersCount')}>
                                        <img src="../assets/images/minus.png" alt=""/>
                                    </div>
                                    <input
                                        type="number"
                                        className="counter-input"
                                        id="teenagersCount"
                                        value="0"
                                        readOnly
                                    />
                                    <div className="counter-btn" onClick={() => increment('teenagersCount')}>
                                        <img src="../assets/images/plus.png" alt=""/>
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
                                    <div className="counter-btn" onClick={() => decrement('kidsCount')}>
                                        <img src="../assets/images/minus.png" alt=""/>
                                    </div>
                                    <input
                                        type="number"
                                        className="counter-input"
                                        id="kidsCount"
                                        value="0"
                                        readOnly
                                    />
                                    <div className="counter-btn" onClick={() => increment('kidsCount')}>
                                        <img src="../assets/images/plus.png" alt=""/>
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
                                    <div className="counter-btn" onClick={() => decrement('petsCount')}>
                                        <img src="../assets/images/minus.png" alt=""/>
                                    </div>
                                    <input
                                        type="number"
                                        className="counter-input"
                                        id="petsCount"
                                        value="0"
                                        readOnly
                                    />
                                    <div className="counter-btn" onClick={() => increment('petsCount')}>
                                        <img src="../assets/images/plus.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{marginTop: '54px'}}/>
        </div>
    </section>
        </>
)
}
export default ListingDetailSection

