import { Request, Response, NextFunction } from "express";
import Message from "../models/message-model.js";

export const createMessage = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { text } = req.body;
        const message = new Message({ text });
        await message.save();
        return res.status(201).json({ message: "OK", text });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
};

export const getAllMessages = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const messages = await Message.find();
        return res.status(200).json({ message: "OK", messages });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
};

export const getMessage = async (req, res) => {
    const {text} = req.body();
    console.log(text);
}
