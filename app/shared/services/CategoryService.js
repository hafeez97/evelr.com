import CONST from "@/app/shared/utils/Constants";
import {GET, POST} from "@/app/shared/utils/Api";

export async function fetchCategories() {
    const res = await fetch(`${CONST.BASE_URL}${CONST.CATEGORIES.GET}`, {
        next: { revalidate: 10 }, // optional: caching and revalidation
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }
    const categories = await res.json();
    return categories.response.data;
}

