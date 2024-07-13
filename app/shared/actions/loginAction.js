"use server"
import {signIn, signOut} from "@/auth";

export async function LoginAction(formData){
    await signIn("credentials", {
        email : formData.email,
        password : formData.password,
        redirect: false,
    }
    )
}
export async function LogoutAction(){
    await signOut()
}
