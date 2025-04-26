import { HttpStatusCode } from "../../utils/status-code";
import { findAllPlayers } from "../player-repository/player-repository";

export const getAllPlayersService = async () => {
    const data = await findAllPlayers();
    let statusCode = null;

    if (data) {
        statusCode = HttpStatusCode.OK;
        return {data, statusCode};
    } else {
        statusCode = HttpStatusCode.NO_CONTENT;
        return {data, statusCode};
    }
};
