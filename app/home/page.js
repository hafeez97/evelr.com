// app/listings/ListingsPage.jsx
import ListingSection from "@/app/shared/sections/ListingSection";
import SearchSection from "@/app/shared/sections/SearchSection";
import CategorySection from "@/app/shared/sections/CategorySection";

async function fetchData(page) {
  const res = await fetch(
    `https://testcodex.com/elevr/public/api/post?page=${page}`,
    {
      next: { revalidate: 10 }, // optional: caching and revalidation
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data;
}
async function fetchCategories() {
  const res = await fetch(`https://testcodex.com/elevr/public/api/categories`, {
    next: { revalidate: 10 }, // optional: caching and revalidation
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const categories = await res.json();
  return categories.response.data;
}

const ListingPage = async ({ searchParams }) => {
  const page = searchParams.page || 1;
  const data = await fetchData(page);
  const listings = data.response.data.posts;
  const lastPage = data.response.data.last_page;
  const categoryData = await fetchCategories();

  return (
    <div>
      <SearchSection />
      <CategorySection categoryData={categoryData} />
      <ListingSection
        initialListings={listings}
        initialPage={page}
        lastPage={lastPage}
      />
    </div>
  );
};

export default ListingPage;
