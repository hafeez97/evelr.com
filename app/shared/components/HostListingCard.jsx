"use client"
import React, {useEffect} from 'react'

const HostListingCard = ({id, title ,address, rating }) => {
    return (
        <li className="h-my-listings-item || d-flex align-items-center" key={id}>
            <div className="h-my-listings-item-content-img || me-1">
                <img
                    src="/assets/images/h-listing-img.jpg"
                    className="|| h-my-listings-item-img"
                    alt="my listing image"
                />
            </div>
            <div className="h-my-listings-item-content || w-100">
                <h5 className="h-my-listings-item-title">{title}</h5>
                <div className="d-flex align-item-center justify-content-between">
                    <p className="h-my-listings-item-address">
                        {address}
                    </p>
                    <div className="d-flex align-items-end">
                        <div className="rates || d-flex align-items-center">
                            <img
                                className="rate-icon"
                                src="/assets/icons/star-fill.svg"
                            />
                            <span className="ms-1">{rating}</span>
                        </div>
                    </div>
                </div>
            </div>

        </li>
    )
}
export default HostListingCard
