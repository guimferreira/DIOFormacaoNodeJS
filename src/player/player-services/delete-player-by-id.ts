import { HttpStatusCode } from "../../utils/status-code";
import { deletePlayerById } from "../player-repository/player-repository";

export const deletePlayerService = async (id: number) => {
    const isDeleted = await deletePlayerById(id);
    let statusCode = null;
    let data = null;

    if (isDeleted) {
        data = ({message: "player deleted"})
        statusCode = HttpStatusCode.OK;
        return { data, statusCode };
    } else {
        statusCode = HttpStatusCode.BAD_REQUEST;
        return{ data, statusCode };
    }
};
