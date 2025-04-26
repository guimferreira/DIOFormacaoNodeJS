import { Request, Response } from "express";
import { getAllClubsService } from "../club-services/get-all-clubs";
import { postNewClubService } from "../club-services/post-club";
import { deleteClubService } from "../club-services/delete-club-by-id";
import { getClubByIdService } from "../club-services/get-club-by-id";
import { getClubByCountryService } from "../club-services/get-clubs-by-country";

export const getClubsController = async (request: Request, response: Response) => {
    const club = await getAllClubsService();
    response.status(club.statusCode).json(club.data);
};

export const getClubByIdController = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const club = await getClubByIdService(id);
    response.status(club.statusCode).json(club.data);
};

export const getClubsByCountryController = async (request: Request, response: Response) => {
    const country = request.params.country;
    const clubs = await getClubByCountryService(country);
    response.status(clubs.statusCode).json(clubs.data);
};

export const postNewClubController = async(request: Request, response: Response) => {
    const bodyValue = request.body;
    const newClub = await postNewClubService(bodyValue);
    response.status(newClub.statusCode).json(newClub.data);
};

export const deleteClubController = async (request: Request, response: Response) => {
    const id = parseInt(request.params.id);
    const deletedClub = await deleteClubService(id);
    response.status(deletedClub.statusCode).json(deletedClub.data);
};
