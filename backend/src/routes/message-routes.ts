import express from "express";
import { createMessage, getAllMessages, getMessage } from "../controllers/message-controllers.js";
import { verifyToken } from "../utils/token-manager.js";

const messageRoutes = express.Router(); 

// messageRoutes.post("/", verifyToken, createMessage);
// messageRoutes.get("/", verifyToken, getAllMessages);

messageRoutes.post("/log", verifyToken, getMessage);

export default messageRoutes;
