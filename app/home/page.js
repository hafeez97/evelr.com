// app/listings/ListingsPage.jsx
import ListingSection from "@/app/shared/sections/ListingSection";
import SearchSection from "@/app/shared/sections/SearchSection";
import CategorySection from "@/app/shared/sections/CategorySection";
import { fetchListing } from "@/app/shared/services/ListingService";
import { fetchCategories } from "@/app/shared/services/CategoryService";

const ListingPage = async ({ searchParams }) => {
    const params = { ...searchParams, page: searchParams.page || 1 };
    const data = await fetchListing(params);
    const listings = data.posts;
    const lastPage = data.last_page;
    const categoryData = await fetchCategories();

    return (
        <div>
            <SearchSection />
            <CategorySection categoryData={categoryData} />
            <ListingSection
                initialListings={listings}
                initialPage={parseInt(params.page)}
                lastPage={lastPage}

            />
        </div>
    );
};

export default ListingPage;
