import { clubDAO } from "../models/club-dao";
import { ClubModel } from "../models/club-model";

export const findAllCLubs = async (): Promise<ClubModel[]> => {
    return clubDAO;
};

export const findClubById = async (id: number): Promise<ClubModel | undefined> => {
    return clubDAO.find(club => club.id === id);
};

export const findClubsByCountry = async (country: string): Promise<ClubModel[]> => {
    const sanitizedCountry = country.trim().toLowerCase();
    return clubDAO.filter(club => club.country.trim().toLowerCase() === sanitizedCountry);
};

export const postNewClub = async (club: ClubModel) => {
    clubDAO.push(club);
};

export const deleteClubById = async(id: number): Promise<boolean | undefined> => {
    const index = clubDAO.findIndex(club => club.id === id);

    if (index !== -1) {
        clubDAO.splice(index, 1);
        return true;
    }
    return false;
};