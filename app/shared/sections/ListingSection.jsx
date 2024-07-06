// app/shared/sections/ListingSection.jsx
"use client"; // Mark this component as a client component

import { useState } from "react";

function ListingSection({ initialListings, initialPage, lastPage }) {
  const [listings, setListings] = useState(initialListings);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);

  const loadMoreListings = async () => {
    setLoading(true);
    const nextPage = currentPage + 1;
    const res = await fetch(
      `https://testcodex.com/elevr/public/api/post?page=${nextPage}`,
    );
    const data = await res.json();
    setListings((prevListings) => [
      ...prevListings,
      ...data.response.data.posts,
    ]);
    setCurrentPage(nextPage);
    setLoading(false);
  };

  return (
    <section className="listings py-3">
      <div className="container">
        <div className="row">
          {listings.map((listing) => (
            <div key={listing.id} className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card">
                <div style={{ height: "100%", overflow: "hidden" }}>
                  <img
                    src={
                      listing.image_url
                        ? listing.image_url
                        : "/assets/images/listing.jpg"
                    }
                    className="card-img-top"
                    alt={listing.title}
                  />
                </div>
                <div className="favorite-wrapper active-favorite">
                  <img
                    className="favorite-icon"
                    src="/assets/images/favorite-icon.png"
                    alt="favorite-icon"
                  />
                </div>
                <div className="card-body position-relative">
                  <div className="col-12">
                    <div className="row">
                      <div className="col-10">
                        <p className="price card-text">{listing.rate}</p>
                        <h5 className="title card-title">{listing.title}</h5>
                        <p className="location card-text">{listing.address}</p>
                      </div>
                      <div className="col-2">
                        <div className="rate-wrapper">
                          <img
                            className="rate-icon"
                            style={{
                              filter:
                                "brightness(0) saturate(100%) invert(59%) sepia(100%) saturate(435%) hue-rotate(0deg) brightness(103%) contrast(106%)",
                            }}
                            src="/assets/icons/star-fill.svg"
                            alt="rate-icon"
                          />
                          <span>{listing.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="listing-btns">
        {currentPage < lastPage ? (
          <button onClick={loadMoreListings} disabled={loading}>
            {loading ? "Loading..." : "Load More"}
          </button>
        ) : (
          <button disabled>That's all!</button>
        )}
        <button>View Map</button>
      </div>
    </section>
  );
}

export default ListingSection;