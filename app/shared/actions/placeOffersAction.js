"use server"
import CONST from "@/app/shared/utils/Constants";
import {GET, POST} from "@/app/shared/utils/Api";

export async function GetAllPlaceOffersAction() {
    try {
        const result = await GET(CONST.PLACE_OFFERS.GET);
        return result.data.response.data;
    } catch (error) {
        return {success: false, message: error};
    }
}
