import React from "react";
import CategorySelection from "@/app/shared/components/CategorySelection";
import CategoryCustomAddInput from "@/app/shared/components/CategoryCustomAddInput";
import {GetAllCategoriesAction} from "@/app/shared/actions/categoriesAction";


const Page = async ({searchParams}) => {
   const data = await GetAllCategoriesAction();
    console.log(searchParams)
    return (
       <>
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
                                       id="streetAddress"
                                       placeholder="Street Address"
                                   />
                               </div>
                               <div className="col-12 mt-4">
                                   <input
                                       type="text"
                                       className="form-control"
                                       id="AddressLine3"
                                       placeholder="Address Line (if applicable)"
                                   />
                               </div>
                               <div className="col-12 mt-4">
                                   <div className="select-wrapper">
                                       <select id="countrySelect" className="form-select select-input">
                                           <option selected="" disabled="">
                                               Country
                                           </option>
                                           <option value="Pak">Pakistan</option>
                                           <option value="Ind">India</option>
                                           <option value="Ban">Bangladesh</option>
                                       </select>
                                       <span className="custom-arrow"/>
                                   </div>
                               </div>
                               <div className="col-12 mt-4">
                                   <div id="stateSelect" className="select-wrapper">
                                       <select className="form-select select-input">
                                           <option selected="" disabled="">
                                               State/Province
                                           </option>
                                           <option value="Sindh">Sindh</option>
                                           <option value="Punjba">Punjab</option>
                                           <option value="KPK">KPK</option>
                                       </select>
                                       <span className="custom-arrow"/>
                                   </div>
                               </div>
                               <div className="col-12 mt-4">
                                   <div className="select-wrapper">
                                       <select id="citySelect" className="form-select select-input">
                                           <option selected="" disabled="">
                                               City
                                           </option>
                                           <option value="Karachi">Karachi</option>
                                           <option value="Rawalpindi">Rawalpindi</option>
                                           <option value="Lahore">Lahore</option>
                                       </select>
                                       <span className="custom-arrow"/>
                                   </div>
                               </div>
                               <div className="col-12 mt-4">
                                   <div className="select-wrapper">
                                       <select id="areaSelect" className="form-select select-input">
                                           <option selected="" disabled="">
                                               Area
                                           </option>
                                           <option value="Gulshan">Gulshan-e-Hadeed</option>
                                           <option value="DHA">DHA</option>
                                           <option value="Nazimabad">Nazimabad</option>
                                       </select>
                                       <span className="custom-arrow"/>
                                   </div>
                               </div>
                               <div className="col-12 mt-4">
                                   <input
                                       type="text"
                                       className="form-control"
                                       id="PostalCode"
                                       placeholder="Postal Code"
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
                           <div className="loc-card">
                               <div className="d-flex justify-content-between align-items-center">
                                   <div>
                                       <h4>Show your specific location</h4>
                                       <p>Only shared with guests after they had made a reservation</p>
                                   </div>
                                   <div className="form-check form-switch">
                                       <input
                                           className="form-check-input"
                                           type="checkbox"
                                           role="switch"
                                           id="flexSwitchCheckChecked"
                                       />
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </section>

       </>
    )
}
export default Page
