"use server"
import CONST from "@/app/shared/utils/Constants";
import {GET, POST} from "@/app/shared/utils/Api";
export async function GetAllCategoriesAction() {
    try {
        const result = await GET(CONST.CATEGORIES.GET);
        return  result.data.response.data ;
    } catch (error) {
        return { success: false, message: error };
    }
}
export async function CreateCategoryAction(prevState, formData) {
    console.log("Create Category Action called");
    const category = formData.get('title');
    console.log(category)
    return

    try {
        const result = await POST(CONST.CATEGORIES.ADD, formData);
        return result.data.response
    } catch (error) {
        return { success: false, message: JSON.parse(error.message).messages };
    }
}
