import { HttpStatusCode } from "../../utils/status-code";
import { findClubById } from "../club-repository/club-repository";

export const getClubByIdService = async (id: number) => {
    const data = await findClubById(id);
    let statusCode = null;

    if (data) {
        statusCode = HttpStatusCode.OK;
        return { data, statusCode };
    } else {
        statusCode = HttpStatusCode.NO_CONTENT;
        return { data, statusCode };
    };
};
