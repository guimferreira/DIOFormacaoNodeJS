import { HttpStatusCode } from "../../utils/status-code";
import { StatisticsModel } from "../models/statistics-model";
import { updatePlayerById } from "../player-repository/player-repository";

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
    const data = await updatePlayerById(id, statistics);
    let statusCode = null;

    statusCode = HttpStatusCode.OK;
    return { data, statusCode };
};
