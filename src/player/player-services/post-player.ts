import { PlayerModel } from "../models/player-model";
import { HttpStatusCode } from "../../utils/status-code";
import { postNewPlayer } from "../player-repository/player-repository";

export const postNewPlayerService = async (player: PlayerModel) => {
    const data = await postNewPlayer(player);
    let statusCode = null;

    if(Object.keys(player).length !== 0) {
        statusCode = HttpStatusCode.CREATED;
        return {data, statusCode}
    } else {
        statusCode = HttpStatusCode.BAD_REQUEST;
        return {data, statusCode}
    };
};
