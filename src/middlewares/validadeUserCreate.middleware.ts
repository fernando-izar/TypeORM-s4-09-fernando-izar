// import { Request, Response, NextFunction } from "express";
// import { ICreateUser } from "../interfaces/user";
// import * as yup from "yup";
// import { SchemaOf } from "yup";

// export const userCreateSchema: SchemaOf<ICreateUser> = yup.object().shape({
//   name: yup.string().required(),
//   email: yup.string().email().required(),
//   age: yup.number().required(),
//   password: yup.string().required(),
// });

// export const validateUserCreate = (schema: SchemaOf<ICreateUser>) =>
//     async (
//         req: Request,
//         res: Response,
//         next: NextFunction) => {
//             try {
//                 const data = req.body;

//                 try {
//                     const validateData = await schema.validate(
//                         data,
//                         {abortEarly: false,
//                         stripUnknown: true}
//                     )
//                     req.newUser = validateData;
//                     next();

//                 } catch (error) {

//                 }
//             } catch (error) {

//             }
//         }
