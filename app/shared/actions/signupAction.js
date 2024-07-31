"use server"
import { POST } from "@/app/shared/utils/Api"
import CONST from "@/app/shared/utils/Constants"
export async function SignUpAction(prevState ,formData){
    console.log("Sign Up Action called");
    formData.append("device_type", "web");
    try {
        const result = await POST(CONST.AUTH.REGISTER, formData);
        return { success: true, message: "Sign Up Successful", data: result.data.response };
    } catch (error) {
        console.log(error.message)
        return { success: false, message: error.message};
    }
}
