import { Router } from "express";
import userCreateController from "./controllers/user/userCreate.controller";
import userListController from "./controllers/user/userList.controller";
import userGetByIdController from "./controllers/user/userGetById.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users", userListController);
routes.get("/users/:id", userGetByIdController);

export default routes;
