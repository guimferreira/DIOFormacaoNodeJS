import { HttpStatusCode } from "../../utils/status-code";
import { findPlayerById } from "../player-repository/player-repository";


export const getPlayersByIdService = async (id: number) => {
    const data = await findPlayerById(id);
    let statusCode = null;

    if (data) {
        statusCode = HttpStatusCode.OK;
        return {data, statusCode};
    } else {
        statusCode = HttpStatusCode.NO_CONTENT;
        return {data, statusCode};
    };
};
