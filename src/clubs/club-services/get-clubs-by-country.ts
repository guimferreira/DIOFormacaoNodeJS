import { HttpStatusCode } from "../../utils/status-code";
import { findClubsByCountry } from "../club-repository/club-repository";

export const getClubByCountryService = async (country: string) => {
    const data = await findClubsByCountry(country);
    let statusCode = null;

    if (data.length > 0) {
        statusCode = HttpStatusCode.OK;
        return { data, statusCode };
    } else {
        statusCode = HttpStatusCode.NO_CONTENT;
        return { data, statusCode };
    };
};
