import { Router } from "express";
import { createUser } from "../controllers/users/createUser";
import { deleteUser } from "../controllers/users/deleteUser";
import { findAllUsers } from "../controllers/users/findAllUsers";
import { logInUser } from "../controllers/users/logInUser";
import { updateUser } from "../controllers/users/updateUser";
import { validateUser } from "../controllers/users/validateUser";
import verifyToken from "../middleware/authJWT";

//User routes definition
const router = Router();

router.get('/',findAllUsers); //Gets all the users stored in the DB

router.post('/',createUser); //Creates a new user

router.put('/:id',verifyToken,updateUser); //Modifies an user by it's id as a parameter, requires token

router.delete('/:id',verifyToken,deleteUser); //Deletes an user by it's id as a parameter, requires token

router.post('/validate',verifyToken,validateUser); //Validates the token stored in the client

router.post('/login/user',logInUser); //Validates and logs an user, if it is admin, generates a token

export default router;