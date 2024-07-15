import CONST from "@/app/shared/utils/Constants"

export async function fetchListing(params) {
    const queryString = new URLSearchParams(params).toString();
    const res = await fetch(
        `${CONST.BASE_URL}${CONST.LISTING.GET}${queryString}`,
        {
            next: { revalidate: 0 }, // optional: caching and revalidation
        },
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data.response.data;
}

export async function fetchPostById(id) {
    const res = await fetch(
        `${CONST.BASE_URL}${CONST.LISTING.GET_ONE}${id}`,
        {
            next: { revalidate: 10 },
        },
    );

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data.response.data;
}
