import { Router } from "express";
import { deletePlayerController, getPlayerByIdController, getPlayersController, postNewPlayerController, updatePlayerController } from "./player/player-controller/player-controller";
import { deleteClubController, getClubsByCountryController, getClubByIdController, getClubsController, postNewClubController } from "./clubs/club-controller/club-controller";

const router = Router();

// GET all players
router.get("/players", getPlayersController);
// GET player by ID
router.get("/players/:id", getPlayerByIdController);
// POST new player
router.post("/players/new", postNewPlayerController);
// DELETE player by ID
router.delete("/players/:id", deletePlayerController);
// PATCH player
router.patch("/players/:id", updatePlayerController);

// GET all clubs
router.get("/clubs", getClubsController);
// GET club by ID
router.get("/clubs/:id", getClubByIdController);
// GET club by Country
router.get("/clubs/:country", getClubsByCountryController);
// POST new club
router.post("/clubs/new", postNewClubController);
// DELETE club by ID
router.delete("/clubs/:id", deleteClubController);

export default router;
