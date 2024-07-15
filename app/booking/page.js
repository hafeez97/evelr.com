import {fetchPostById} from "@/app/shared/services/ListingService";

const Page = async ({searchParams}) => {
    const postData = await fetchPostById(searchParams.post_id)

    const totalDays= Math.abs(new Date(searchParams.end_date) - new Date(searchParams.start_date)) / (1000 * 60 * 60 * 24)
    const subTotal = postData.rate * totalDays + postData.service_charges


    return (
        <section>
            <div className="container">
                <h1 className="new-listing-heading primary-hd">Request to book</h1>
                <div className="row">
                    <div className="col-lg-6 pe-lg-3">
                        <h3 style={{fontSize: 30, fontWeight: 600}}>Your Stay</h3>
                        <div
                            className="row align-items-center"
                            style={{
                                marginTop: 16,
                                padding: 22,
                                boxShadow: "var(--bs-box-shadow-all-sides)",
                                borderRadius: 34
                            }}
                        >
                            <div className="col-6 col-lg-12 col-xxl-6">
                                <div className="d-flex align-items-center" style={{fontSize: 14}}>
                                    <h5
                                        style={{
                                            fontSize: "14px !important",
                                            fontWeight: "var(--bs-font-weight-primary)",
                                            margin: 0,
                                            marginRight: 24
                                        }}
                                    >
                                        Dates
                                    </h5>
                                    <span>{searchParams.start_date}</span>&nbsp;-&nbsp;<span>{searchParams.end_date}</span>
                                </div>
                            </div>
                            <div className="col-6 col-lg-12 col-xxl-6">
                                <div className="d-flex align-items-center" style={{fontSize: 14}}>
                                    <h5
                                        style={{
                                            fontSize: "14px !important",
                                            fontWeight: "var(--bs-font-weight-primary)",
                                            margin: 0,
                                            marginRight: 24
                                        }}
                                    >
                                        Guests
                                    </h5>
                                    <span>{searchParams.adults} Adults</span>,<span>{searchParams.kids} Kids</span>,<span>{searchParams.teenagers} Teenagers</span>
                                </div>
                            </div>
                        </div>
                        <hr style={{marginTop: 54}}/>
                        <h3
                            style={{
                                fontSize: 30,
                                fontWeight: 600,
                                marginTop: 40,
                                marginBottom: 16
                            }}
                        >
                            Pay With Jazz Cash
                        </h3>
                        {/*<form action="">*/}
                        {/*    <div className="mb-4">*/}
                        {/*        <select className="form-select" style={{width: "100%"}}>*/}
                        {/*            <option selected="" disabled="">*/}
                        {/*                Credit/Debit Card*/}
                        {/*            </option>*/}
                        {/*            <option value="$">Dollar ($)</option>*/}
                        {/*            <option value="Pkr">Pakistani Rupee</option>*/}
                        {/*            <option value="Inr">Indian Rupee</option>*/}
                        {/*        </select>*/}
                        {/*    </div>*/}
                        {/*    <div className="mb-4">*/}
                        {/*        <input*/}
                        {/*            type="text"*/}
                        {/*            className="form-control"*/}
                        {/*            style={{background: "none"}}*/}
                        {/*            id="card_number"*/}
                        {/*            placeholder="Card Number"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*    <div className="row">*/}
                        {/*        <div className="col-6 mb-4">*/}
                        {/*            <input*/}
                        {/*                type="text"*/}
                        {/*                className="form-control"*/}
                        {/*                style={{background: "none"}}*/}
                        {/*                id="expiration_date"*/}
                        {/*                placeholder="Expiration Date"*/}
                        {/*            />*/}
                        {/*        </div>*/}
                        {/*        <div className="col-6 mb-4">*/}
                        {/*            <input*/}
                        {/*                type="text"*/}
                        {/*                className="form-control"*/}
                        {/*                style={{background: "none"}}*/}
                        {/*                id="cvv"*/}
                        {/*                placeholder="CVV"*/}
                        {/*            />*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <h3 style={{fontSize: 30, fontWeight: 600, marginBottom: 16}}>*/}
                        {/*        Billing address*/}
                        {/*    </h3>*/}
                        {/*    <div className="mb-4">*/}
                        {/*        <input*/}
                        {/*            type="text"*/}
                        {/*            className="form-control"*/}
                        {/*            style={{background: "none"}}*/}
                        {/*            id="street_address"*/}
                        {/*            placeholder="Street Address"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*    <div className="mb-4">*/}
                        {/*        <input*/}
                        {/*            type="text"*/}
                        {/*            className="form-control"*/}
                        {/*            style={{background: "none"}}*/}
                        {/*            id="spt_number"*/}
                        {/*            placeholder="Apt or Suite Number"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*    <div className="mb-3">*/}
                        {/*        <input*/}
                        {/*            type="text"*/}
                        {/*            className="form-control"*/}
                        {/*            style={{background: "none"}}*/}
                        {/*            id="city"*/}
                        {/*            placeholder="City"*/}
                        {/*        />*/}
                        {/*    </div>*/}
                        {/*    <div className="row mb-3">*/}
                        {/*        <div className="col-6">*/}
                        {/*            <input*/}
                        {/*                type="text"*/}
                        {/*                className="form-control"*/}
                        {/*                style={{background: "none"}}*/}
                        {/*                id="state"*/}
                        {/*                placeholder="State"*/}
                        {/*            />*/}
                        {/*        </div>*/}
                        {/*        <div className="col-6">*/}
                        {/*            <input*/}
                        {/*                type="text"*/}
                        {/*                className="form-control"*/}
                        {/*                style={{background: "none"}}*/}
                        {/*                id="zip_code"*/}
                        {/*                placeholder="Zip code"*/}
                        {/*            />*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="mb-4">*/}
                        {/*        <select className="form-select" style={{width: "100%"}}>*/}
                        {/*            <option selected="" disabled="">*/}
                        {/*                Country*/}
                        {/*            </option>*/}
                        {/*            <option value="$">Dollar ($)</option>*/}
                        {/*            <option value="Pkr">Pakistani Rupee</option>*/}
                        {/*            <option value="Inr">Indian Rupee</option>*/}
                        {/*        </select>*/}
                        {/*    </div>*/}
                        {/*</form>*/}
                        <hr style={{marginTop: 40}}/>
                        <h3 style={{fontSize: 30, fontWeight: 600, marginTop: 30}}>
                            Cancellation Policy
                        </h3>
                        <p style={{fontSize: 20}}>
                            Full refund if cancellation 1 week before check-in and Partial Refund
                            if cancel 72 hours before check-in.
                        </p>
                        <h3 style={{fontSize: 30, fontWeight: 600, marginTop: 40}}>
                            Rules &amp; Regulations
                        </h3>
                        <p style={{fontSize: 20}}>
                            We ask every guests to follow a few simple things.
                        </p>
                        <ol style={{fontSize: 20, listStyle: "disc"}}>
                            <li>Follow the house rules</li>
                            <li>Treat this house as yours</li>
                        </ol>
                        <hr style={{marginTop: 40}}/>
                        <p style={{fontSize: 15, marginTop: 30}}>
                            By selecting the button below, I agree to the
                            <span style={{fontWeight: 600}}>
            Terms &amp; Conditions, Privacy Policy
          </span>
                            and that can landlord can
                            <span style={{fontWeight: 600}}> charge my payment method </span>
                            for any damage.
                        </p>
                        <div className="mb-3">
                            <a
                                type="button"
                                className="primary-button"
                                style={{padding: "25px 0", borderRadius: 12, marginTop: 40}}
                            >
                                Confirm and Pay
                            </a>
                        </div>
                    </div>
                    <hr className="d-lg-none" style={{marginTop: 54}}/>
                    <div
                        className="col-lg-6 mob-view-spacing ps-lg-3"
                        style={{marginTop: 40}}
                    >
                        <div
                            className="card-wrapper"
                            style={{
                                boxShadow: "var(--bs-box-shadow-all-sides)",
                                border: "1px solid transparent"
                            }}
                        >
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <img
                                        src="/assets/images/cover.png"
                                        style={{
                                            height: 141,
                                            width: "100%",
                                            objectFit: "cover",
                                            borderRadius: 10
                                        }}
                                        alt="Apartment picture"
                                    />
                                </div>
                                <div className="col-6">
                                    {/*<h3 style={{fontSize: 18, fontWeight: 600}}>Apartment</h3>*/}
                                    <h3 style={{fontSize: 20, fontWeight: 600}}>
                                        {postData.title}
                                    </h3>
                                    <span style={{fontSize: 12}}>* 4.8 1k+ reviews</span>
                                </div>
                            </div>
                            <h3 style={{fontSize: 22, fontWeight: 600, marginTop: 30}}>
                                Bill Summary
                            </h3>
                            <div style={{fontSize: 18}}>
                                <div
                                    className="d-flex justify-content-between align-items-center"
                                    style={{marginTop: 16}}
                                >
                                    <span>Per Night Rate</span>
                                    <span style={{fontWeight: 600}}>PKR {postData.rate}</span>
                                </div>
                                <div
                                    className="d-flex justify-content-between align-items-center"
                                    style={{marginTop: 16}}
                                >
                                    <span>Service Charges</span>
                                    <span style={{fontWeight: 600}}>PKR {postData.service_charges}</span>
                                </div>
                                <div
                                    className="d-flex justify-content-between align-items-center"
                                    style={{marginTop: 16}}
                                >
                                    <span>Fees</span>
                                    <span style={{fontWeight: 600}}>PKR 0</span>
                                </div>
                                <div
                                    className="d-flex justify-content-between align-items-center"
                                    style={{marginTop: 16}}
                                >
                                    <span>Days of Stay</span>
                                    <span style={{fontWeight: 600}}>{totalDays}</span>
                                </div>
                                <hr/>
                            </div>
                            <div
                                className="d-flex justify-content-between align-items-center"
                                style={{fontSize: 20}}
                            >
                                <span style={{fontWeight: 500}}>Sub Total</span>
                                <span style={{fontWeight: 600}}>PKR {subTotal}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{marginTop: 54}}/>
            </div>
        </section>

    )
}
export default Page
