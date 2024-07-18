const CONST = {
    BASE_URL: "https://testcodex.com/elevr/public/api/",
    MEDIA_URL: "https://testcodex.com/elevr-uploads/",
    AUTH: {
        LOGIN: "login",
        REGISTER: "register"
    },
    LISTING: {
        GET: "post?",
        GET_ONE: "post/",
    },
    CATEGORIES:
        {
            GET: "categories",
            ADD: "categories/create"
        },
    HOST: {
        GET_POSTS: "post/owner-post/detail"
    },
    LOCATION: {
        GET_COUNTRIES: "location/country",
        GET_STATE: "location/state/",
        GET_CITY: "location/city/",
    },
    PLACE_OFFERS: {
        GET: "place_offers/",
        ADD: "place_offers/create"
    },
    MEDIA: {
        UPLOAD: "media/create"
    }
}
export default CONST;
