"use client"
import React, { useEffect, useState } from 'react';
import useFormStore from "@/app/shared/stores/useFormStore";


const CategorySelection = ({ categories }) => {
    console.log(categories)
    const [activeCategory, setActiveCategory] = useState('');
    const { formData,setFormData } = useFormStore();

    const listingCategoryActive = (category) => {
        setActiveCategory(category);
        setFormData({category_id:activeCategory})
    };


    return (
        <div className="row justify-content-center">
            {categories.map((cat) => (
                <div className="col-lg-3 col-md-6" key={cat.id}>
                    <a>
                        <div
                            className={`new-listing-cat-btn ${activeCategory === cat.id.toString() ? 'category-active' : ''}`}
                            onClick={() => listingCategoryActive(cat.id.toString())}
                        >
                            {cat.title}
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default CategorySelection;
