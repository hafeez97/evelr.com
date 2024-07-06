"use client";
import React, { useState } from "react";

function CategorySection({ categoryData }) {
  const [activeLink, setActiveLink] = useState(null); // State to manage active link

  React.useEffect(() => {
    return () => {
      console.log(categoryData);
    };
  }, [categoryData]);

  const handleLinkClick = (id) => {
    setActiveLink(id);
    // onCategorySelect(id);
    // https://testcodex.com/elevr/public/api/post?page=${nextPage}
    console.log(id);
    // {{base_url}}post/?category_id=1
  };
  return (
    <section className="py-3">
      <div className="container">
        <div className="nav-scroller">
          {/* Left scroll button */}
          <button
            type="button"
            className="nav-scroller-btn nav-scroller-btn--left"
            aria-label="Scroll left"
          >
            {/* Left arrow SVG */}
          </button>

          {/* Navigation links */}
          <nav className="nav-scroller-nav">
            <div className="nav-scroller-content">
              {/* Map over items to create links */}
              {categoryData.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className={`nav-scroller-item nav__link ${
                    activeLink === item.id ? "active-tab" : ""
                  }`}
                  onClick={() => handleLinkClick(item.id)}
                >
                  <img src="/assets/icons/airplane-engines.svg" />
                  <div className="nav__link__content">
                    <div className="nav__link__title">{item.title}</div>
                  </div>
                </a>
              ))}
            </div>
          </nav>

          {/* Right scroll button */}
          <button
            type="button"
            className="nav-scroller-btn nav-scroller-btn--right"
            aria-label="Scroll right"
          >
            {/* Right arrow SVG */}
          </button>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
