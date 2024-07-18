"use server"

import { auth } from "@/auth";
import CONST from "@/app/shared/utils/Constants";

export const POST = async (url, formData = {}) => {
    const session = await auth();
    const token = session?.user.token || "null";

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    try {
        const response = await fetch(`${CONST.BASE_URL}${url}`, {
            method: 'POST',
            headers: myHeaders,
            body: formData,
            redirect: 'follow'
        });

        const contentType = response.headers.get('content-type');
        const isJSON = contentType && contentType.includes('application/json');

        if (!response.ok) {
            const errorData = isJSON ? await response.json() : await response.text();
            throw new Error(JSON.stringify(isJSON ? errorData : { error: errorData }));
        }

        const responseData = isJSON ? await response.json() : await response.text();
        return { data: { response: responseData } };
    } catch (error) {
        const errorMessage = error.message ? JSON.parse(error.message).error.messages : "An unexpected error occurred.";
        throw new Error(JSON.stringify({ messages: errorMessage }));
    }
};



export const GET = async (url, params = {}) => {
    const session = await auth();
    const token = session?.user.token || "null";

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", `Bearer ${token}`);

    // Construct query string from params object
    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${CONST.BASE_URL}${url}${queryString ? `?${queryString}` : ''}`;

    try {
        const response = await fetch(fullUrl, {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        });

        const contentType = response.headers.get('content-type');
        const isJSON = contentType && contentType.includes('application/json');

        if (!response.ok) {
            const errorData = isJSON ? await response.json() : await response.text();
            throw new Error(JSON.stringify(isJSON ? errorData : { error: errorData }));
        }

        const responseData = isJSON ? await response.json() : await response.text();


        // Extracting the nested data
        const nestedData = responseData?.data?.response?.data || responseData;
        return { data: nestedData };
    } catch (error) {
        let errorMessage = "An unexpected error occurred.";
        try {
            const parsedError = JSON.parse(error.message);
            if (parsedError && parsedError.error && parsedError.error.messages) {
                errorMessage = parsedError.error.messages.join(', ');
            }
        } catch (parseError) {
            console.error('Error parsing error message:', parseError);
        }
        throw new Error(errorMessage);
    }
};
