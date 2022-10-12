import { Router } from "express";
import userCreateController from "./controllers/user/userCreate.controller";
import userListController from "./controllers/user/userList.controller";
import userGetByIdController from "./controllers/user/userGetById.controller";
import userDeleteController from "./controllers/user/userDeleted.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.get("/users", userListController);
routes.get("/users/:id", userGetByIdController);
routes.delete("/users/:id", userDeleteController);

export default routes;
