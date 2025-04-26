import { HttpStatusCode } from "../../utils/status-code";
import { postNewClub } from "../club-repository/club-repository";
import { ClubModel } from "../models/club-model";

export const postNewClubService = async (club: ClubModel) => {
    const data = await postNewClub(club);
    let statusCode = null;

    if (Object.keys(club).length !== 0) {
        statusCode = HttpStatusCode.CREATED;
        return { data, statusCode }
    } else {
        statusCode = HttpStatusCode.BAD_REQUEST;
        return { data, statusCode }
    };
};
