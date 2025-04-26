import { Request, Response } from "express";
import { getAllPlayersService } from "../player-services/get-all-players";
import { getPlayersByIdService } from "../player-services/get-player-by-id";
import { postNewPlayerService } from "../player-services/post-player";
import { deletePlayerService } from "../player-services/delete-player-by-id";
import { updatePlayerService } from "../player-services/patch-player-by-id";
import { StatisticsModel } from "../models/statistics-model";


export const getPlayersController = async (request: Request, response: Response) => {
    const player = await getAllPlayersService();
    response.status(player.statusCode).json(player.data);
};

export const getPlayerByIdController = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const player = await getPlayersByIdService(id);
    response.status(player.statusCode).json(player.data);
};

export const postNewPlayerController = async(request: Request, response: Response) => {
    const bodyValue = request.body;
    const newPlayer = await postNewPlayerService(bodyValue);
    response.status(newPlayer.statusCode).json(newPlayer.data);
};

export const deletePlayerController = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const deletedPlayer = await deletePlayerService(id);
    response.status(deletedPlayer.statusCode).json(deletedPlayer.data);
};

export const updatePlayerController = async(request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const body: StatisticsModel = request.body;
    const player = await updatePlayerService(id, body);
    response.status(player.statusCode).json(player.data);
};
