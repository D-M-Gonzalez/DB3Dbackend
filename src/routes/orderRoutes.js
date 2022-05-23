import { Router } from "express";
import verifyToken from "../middleware/authJWT";
import { createOrder } from "../controllers/order/createOrder";
import { deleteOrder } from "../controllers/order/deleteOrder";
import { getAllOrders } from "../controllers/order/getAllOrders";
import { getOrderById } from "../controllers/order/getOrderById";
import { updateOrder } from "../controllers/order/updateOrder";

const router = Router();

router.get('/', verifyToken, getAllOrders);

router.post('/', verifyToken, createOrder);

router.put('/:id', verifyToken, updateOrder);

router.delete('/:id', verifyToken, deleteOrder);

router.get('/:id', verifyToken, getOrderById);

export default router;