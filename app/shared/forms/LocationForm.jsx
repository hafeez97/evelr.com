"use client"
import React, {useEffect, useState} from 'react'
import {GetCitiesAction, GetStatesAction} from "@/app/shared/actions/locationAction";
import useFormStore from "@/app/shared/stores/useFormStore";



const LocationForm = ({countries}) => {
    const [states, setStates] = useState([])
    const [city, setCity] = useState([])

    const { formData,setFormData } = useFormStore();

    const onCountryChange = (e) => {
        setFormData({country_id:e.target.value})
        GetStatesAction(e.target.value).then((res) => {
            setStates(res.states)
        })
    }
    const onStateChange = (e) => {
        console.log(e.target.value)
        setFormData({state_id:e.target.value})
        GetCitiesAction(e.target.value).then((res) => {
            setCity(res.cities)
        })
    }

    const onCityChange = (e) => {
        console.log(e.target.value)
        setFormData({city_id:e.target.value})
    }

    // useEffect(() => {
    //     console.log(formData)
    // }, [ formData]);


    return (
        <section>
            <div className="container">
                <h1 className="new-listing-heading primary-hd">
                    Where’s your place located?
                </h1>
                <div className="row">
                    <div className="col-lg-6 pe-lg-5">
                        <form>
                            <div className="col-12">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address"
                                    placeholder="Address"
                                    onChange={(e) => setFormData({address:e.target.value})}
                                />
                            </div>
                            <div className="col-12 mt-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="alternate_address"
                                    placeholder="Alternate Address (if applicable)"
                                    onChange={(e) => setFormData({alternative_address:e.target.value})}
                                />
                            </div>
                            <div className="col-12 mt-4">
                                <div className="select-wrapper">
                                    <select id="country_id" defaultValue="0" className="form-select select-input"
                                            onChange={onCountryChange}>
                                        <option value="0">
                                            Select Country
                                        </option>
                                        {countries.countries.map((country) => (
                                            <option key={country.id} value={country.id}>
                                                {country.name}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="custom-arrow"/>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div id="stateSelect" className="select-wrapper">
                                    <select className="form-select select-input" defaultValue="0"
                                            onChange={onStateChange} disabled={states.length === 0}>
                                        <option value="0">
                                            Select State
                                        </option>
                                        {states.map((state) => (
                                            <option key={state.id} value={state.id}>
                                                {state.name}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="custom-arrow"/>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <div className="select-wrapper">
                                    <select defaultValue="0" id="city_id" className="form-select select-input"
                                            disabled={city.length === 0} onChange={onCityChange}>
                                        <option  value="0">
                                            Select City
                                        </option>
                                        {city.map((city) => (
                                            <option key={city.id} value={city.id}>
                                                {city.name}
                                            </option>
                                        ))}

                                    </select>
                                    <span className="custom-arrow"/>
                                </div>
                            </div>
                            <div className="col-12 mt-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Postal_code"
                                    placeholder="Postal Code"
                                    onChange={(e) => setFormData({postal_code:e.target.value})}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-6 ps-lg-5 mob-view-spacing">
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                id="location"
                                placeholder="Enter your location"
                            />
                        </div>
                        {/* Map will be created here */}
                        <div className="new-listing-map">
                            <img
                                className="position-absolute"
                                src="/assets/images/map.png"
                                style={{height: "100%", width: "100%"}}
                            />
                            <div className="col-12 map-btns-wrapper">
                                <div
                                    className="row align-items-center justify-content-center justify-content-md-between">
                                    <div className="col-12 col-xxl-7 position-relative">
                                        <input
                                            type="text"
                                            id="location"
                                            className="form-control"
                                            placeholder="Enter your location"
                                        />
                                        <a className="loc-feild-plus-btn">
                                            <img src="/assets/images/plus.png" alt=""/>
                                        </a>
                                    </div>
                                    <div className="col-12 col-xxl-5 mt-3 mt-xxl-0 text-center">
                                        <a className="map-btn">Use current location</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="loc-card">*/}
                        {/*    <div className="d-flex justify-content-between align-items-center">*/}
                        {/*        <div>*/}
                        {/*            <h4>Show your specific location</h4>*/}
                        {/*            <p>Only shared with guests after they had made a reservation</p>*/}
                        {/*        </div>*/}
                        {/*        <div className="form-check form-switch">*/}
                        {/*            <input*/}
                        {/*                className="form-check-input"*/}
                        {/*                type="checkbox"*/}
                        {/*                role="switch"*/}
                        {/*                id="flexSwitchCheckChecked"*/}
                        {/*            />*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default LocationForm
