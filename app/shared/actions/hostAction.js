"use server"
import CONST from "@/app/shared/utils/Constants";
import {GET, POST} from "@/app/shared/utils/Api";


export async function GetHostPostsAction() {
    console.log("called listing")
    try {
        const result = await GET(CONST.HOST.GET_POSTS);
        return result.data.response.data;
    } catch (error) {
        return {success: false, message: error};
    }
}

export async function CreateListingAction(formData) {
    console.log(formData)

    const formDataObj = new FormData();


    Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            value.forEach(item => formDataObj.append(key, item));
        } else {
            formDataObj.append(key, value);
        }
    });

    console.log(formDataObj)


    try {
        const result = await POST(CONST.HOST.ADD_POST, formData);
        return result.data.response;
    } catch (error) {
        return {success: false, message: error};
    }
}
