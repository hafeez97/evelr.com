import CONST from "@/app/shared/utils/Constants";
import {GET} from "@/app/shared/utils/Api";
export async function GetHostPostsAction() {
    console.log("called listing")
    try {
        const result = await GET(CONST.HOST.GET_POSTS);
        return  result.data.response.data ;
    } catch (error) {
        return { success: false, message: error };
    }
}
