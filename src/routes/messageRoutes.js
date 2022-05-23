import { Router } from "express";
import verifyToken from "../middleware/authJWT";
import { updateMessage } from "../controllers/message/changeMessage";
import { createMessage } from "../controllers/message/createMessage";
import { deleteMessage } from "../controllers/message/deleteMessage";
import { getAllMessages } from "../controllers/message/getAllMessages";
import { getMessageById } from "../controllers/message/getMessageById";

const router = Router();

router.get('/',getAllMessages);

router.post('/', verifyToken,createMessage);

router.get('/:id', verifyToken,getMessageById);

router.put('/:id', verifyToken,updateMessage);

router.delete('/:id', verifyToken,deleteMessage);

export default router;