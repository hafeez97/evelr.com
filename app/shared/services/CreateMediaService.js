import CONST from "@/app/shared/utils/Constants";
import {auth} from "@/auth";

export async function CreateMedia(formData) {
    const session = await auth();
    const token = session?.user.token || "null";

    try {
        const response = await fetch(`${CONST.BASE_URL}media/create`, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}` // replace with actual token or dynamic token logic
            },
            body: formData,
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(JSON.stringify(errorData));
        }

        const responseData = await response.json();
        return {data: {response: responseData}};
    } catch (error) {
        const errorMessage = error.message ? JSON.parse(error.message).error.messages : "An unexpected error occurred.";
        throw new Error(JSON.stringify({messages: errorMessage}));
    }

}
