"use server"
import CONST from "@/app/shared/utils/Constants";
import {GET, POST} from "@/app/shared/utils/Api";

export async function GetAllCountriesAction() {
    console.log("countries action called")
    try {
        const result = await GET(CONST.LOCATION.GET_COUNTRIES);
        return  result.data.response.data ;
    } catch (error) {
        return { success: false, message: error };
    }
}

export async function GetStatesAction(countryId) {
    try {
        const result = await GET(CONST.LOCATION.GET_STATE + countryId);
        return  result.data.response.data ;
    } catch (error) {
        return { success: false, message: error };
    }
}
export async function GetCitiesAction(stateId)  {
    try {
        const result = await GET(CONST.LOCATION.GET_CITY + stateId);
        return  result.data.response.data ;
    } catch (error) {
        return { success: false, message: error };
    }
}
