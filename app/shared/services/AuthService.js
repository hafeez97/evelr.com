import {signIn} from "@/auth";

export async function logIn(formData){
    await signIn('credentials', formData);
}
