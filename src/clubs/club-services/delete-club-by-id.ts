import { HttpStatusCode } from "../../utils/status-code";
import { deleteClubById } from "../club-repository/club-repository";

export const deleteClubService = async (id: number) => {
    const isDeleted = await deleteClubById(id);
    let statusCode = null;
    let data = null;

    if (isDeleted) {
        data = ({ message: "club deleted" })
        statusCode = HttpStatusCode.OK;
        return { data, statusCode };
    } else {
        statusCode = HttpStatusCode.BAD_REQUEST;
        return { data, statusCode };
    }
};
