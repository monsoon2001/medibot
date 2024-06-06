// import express from "express";
// import mongoose from "mongoose";
// import morgan from "morgan";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import bodyParser = require('body-parser');

// import userRoutes from "./routes/user-routes.js";
// import chatRoutes from "./routes/chat-routes.js";
// import messageRoutes from "./routes/message-routes.js";

// const { router: conversationRoutes } = require('./routes/conversations');
// // import ratingRoutes from './routes/rate-routes.js'

// import { config } from "dotenv";

// config();

// const app = express();

// app.get('/', (req, res) => {
// 	res.send("Hello from server");
// });

// // Middlewares

// app.use(bodyParser.json());

// app.use(cors({origin:"http://localhost:5173", credentials: true}));
// app.use(express.json());
// app.use(cookieParser(process.env.COOKIE_SECRET))
// app.use(morgan("dev")); // for development

// // routes
// app.use("/api/user/", userRoutes);
// app.use("/api/chat/", chatRoutes);

// // Route to handle POST requests to /api/message
// app.use("/api/message", messageRoutes);


// // Connections and Listeners
// mongoose
// 	.connect(
// 		`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@new-cluster.syllbdh.mongodb.net/ai-chat-bot`
// 	)
// 	.then(() => {
// 		app.listen(process.env.PORT || 5000);
// 		console.log(
// 			`Server started on port ${
// 				process.env.PORT || 5000
// 			} and Mongo DB is connected`
// 		);
// 	})
// 	.catch((err) => {
// 		console.log(err);
// 	});

const express = require("express")
const app = express()

app.get("/", (req, res) => {
	res.send("Hello");
})

app.listen(process.env.PORT, () => {
	console.log("Listening to port ${process.env.PORT}");
});