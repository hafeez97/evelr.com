"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

function CategorySection({ categoryData }) {
  const [activeLink, setActiveLink] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const scrollerRef = useRef(null);


  const handleLinkClick = (id) => {
    setActiveLink(id);
    const params = new URLSearchParams(searchParams);
    params.set('category_id', id);
    params.set('page', '1');
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const scrollLeft = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollerRef.current) {
      scrollerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
      <section className="py-3">
        <div className="container">
          <div className="nav-scroller">
            <button
                type="button"
                className="nav-scroller-btn nav-scroller-btn--left active"
                aria-label="Scroll left"
                onClick={scrollLeft}
            >
              <img src="/assets/icons/arrow-left.svg" alt="Scroll left" />
            </button>

            <nav className="nav-scroller-nav" ref={scrollerRef}>
              <div className="nav-scroller-content">
                {categoryData.map((item) => (
                    <Link
                        key={item.id}
                        href="#"
                        className={`nav-scroller-item nav__link ${
                            activeLink === item.id ? "active-tab" : ""
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleLinkClick(item.id);
                        }}
                    >
                      <img src="/assets/icons/airplane-engines.svg" alt={item.title} />
                      <div className="nav__link__content">
                        <div className="nav__link__title">{item.title}</div>
                      </div>
                    </Link>
                ))}
              </div>
            </nav>

            <button
                type="button"
                className="nav-scroller-btn nav-scroller-btn--right active"
                aria-label="Scroll right"
                onClick={scrollRight}
            >
              <img src="/assets/icons/arrow-right.svg" alt="Scroll right" />
            </button>
          </div>
        </div>
      </section>
  );
}

export default CategorySection;
