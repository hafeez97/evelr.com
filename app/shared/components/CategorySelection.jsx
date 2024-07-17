"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Updated import to use the new app router

const CategorySelection = ({ categories }) => {
    const [activeCategory, setActiveCategory] = useState('');
    const router = useRouter();

    const listingCategoryActive = (category) => {
        setActiveCategory(category);

        // Construct the query string manually
        // const query = new URLSearchParams(window.location.search);
        // query.set('category_id', category);
        //
        // // Use router.replace instead of router.push to avoid full page reload
        // router.replace(`${window.location.pathname}?${query.toString()}`);
    };

    useEffect(() => {
        // Check if there's a category in the query parameters and set it as active
        const queryParams = new URLSearchParams(window.location.search);
        const category = queryParams.get('category');
        if (category) {
            setActiveCategory(category);
        }
    }, [categories]);

    return (
        <div className="row justify-content-center">
            {categories.map((cat) => (
                <div className="col-lg-3 col-md-6" key={cat.id}>
                    <a href="#">
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
