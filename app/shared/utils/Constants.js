const CONST = {
    BASE_URL: "https://testcodex.com/elevr/public/api/",
    LISTING: {
        GET: "post?",
        GET_ONE: "post/",
    },
    AUTH: {
        LOGIN: "login",
        REGISTER: "register"
    },
    CATEGORIES:
        {
            GET: "categories",
            ADD: "categories/create"
        },
    HOST:{
        GET_POSTS: "post/owner-post/detail"
    },
    LOCATION:{
        GET_COUNTRIES: "location/country",
        GET_STATE: "location/state/",
        GET_CITY: "location/city/",
    }
}
export default CONST;
