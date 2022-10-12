import { Router } from "express";
import userCreateController from "../controllers/user/userCreate.controller";
import userListController from "../controllers/user/userList.controller";
import userGetByIdController from "../controllers/user/userGetById.controller";
import userDeleteController from "../controllers/user/userDeleted.controller";
import userLoginController from "../controllers/user/userLogin.controller";
import userListOneController from "../controllers/user/userListOne.controller";
import authUser from "../middlewares/authUser.middleware";
import userDeleteSelfController from "../controllers/user/userDeleteSelf.controller";
import userUpdatePasswordController from "../controllers/user/userUpdatePassword.controller";

const routes = Router();

routes.post("/users", userCreateController);
routes.post("/users/login", userLoginController);
routes.get("/users", authUser, userListController);
routes.get("/users/:id", userGetByIdController);
routes.get("/users/me", authUser, userListOneController);
routes.patch(
  "/users/me/updatepassword",
  authUser,
  userUpdatePasswordController
);
routes.delete("/users/:id", userDeleteController);
routes.delete("/users/me", authUser, userDeleteSelfController);

export default routes;
