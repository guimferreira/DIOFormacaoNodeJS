import { playerDAO } from "../models/player-dao";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return playerDAO;
};

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return playerDAO.find(player => player.id === id);
};

export const postNewPlayer = async (player: PlayerModel) => {
    playerDAO.push(player);
};

export const deletePlayerById = async(id: number): Promise<boolean | undefined> => {
    const index = playerDAO.findIndex(player => player.id === id);

    if (index !== -1) {
        playerDAO.splice(index, 1);
        return true;
    }

    return false;
};

export const updatePlayerById = async(id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
    const playerIndex = playerDAO.findIndex(player => player.id === id);

    if (playerIndex !== -1) {
        playerDAO[playerIndex].statistics = statistics;
    };

    return playerDAO[playerIndex];
};
