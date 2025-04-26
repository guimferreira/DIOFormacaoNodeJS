import { HttpStatusCode } from "../../utils/status-code";
import { findAllCLubs } from "../club-repository/club-repository";

export const getAllClubsService = async () => {
    const data = await findAllCLubs();
    let statusCode = null;

    if (data) {
        statusCode = HttpStatusCode.OK;
        return {data, statusCode};
    } else {
        statusCode = HttpStatusCode.NO_CONTENT;
        return {data, statusCode};
    }
};
