"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchListing } from "@/app/shared/services/ListingService";
import Link from "next/link";

function ListingSection({ initialListings, initialPage, lastPage }) {

  const [listings, setListings] = useState(initialListings);
  const [PageState, setPageState] = useState(lastPage)
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    if (params.page && (parseInt(params.page) !== currentPage || params.category_id)) {
      setCurrentPage(parseInt(params.page));
      loadListings(params, params.page === '1');
    }
  }, [searchParams]);

  const loadListings = async (params, resetListings = false) => {
    setLoading(true);
    const data = await fetchListing(params);
    setListings((prevListings) =>
        resetListings ? data.posts : [...prevListings, ...data.posts]
    );
    setPageState(data.last_page)
    setCurrentPage(parseInt(params.page));
    setLoading(false);
  };

  const loadMoreListings = async () => {
    const newPage = currentPage + 1;
    const params = { ...Object.fromEntries(searchParams.entries()), page: newPage.toString() };
    loadListings(params);
    const newSearchParams = new URLSearchParams(params);
    // router.push(`?${newSearchParams.toString()}`, undefined, { shallow: true });
    router.push(`?${newSearchParams.toString()}`, {scroll:false });
  };
  const routeToDetails = (id) => {
    router.push(`/listing/${id}`)
  }

  return (
      <section className="listings py-3">
        <div className="container">
          <div className="row">
            {listings.map((listing) => (

                <div key={listing.id} className="col-lg-4 col-md-6 col-12 mb-4">
                  <div className="card" onClick={()=>routeToDetails(listing.id)}>
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
          {currentPage < PageState ? (
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
