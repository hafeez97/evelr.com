"use server"
import CONST from "@/app/shared/utils/Constants";
import {GET, POST} from "@/app/shared/utils/Api";


export async function CreateMediaAction(formData) {
    console.log("Create Media Action called");
    console.log(formData)

    try {
        const result = await POST(CONST.MEDIA.UPLOAD, formData);
        return result.data.response.response
    } catch (error) {
        return {success: false, message: error.message};
    }
}
