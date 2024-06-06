import mongoose from "mongoose";
import chatSchema from "./chat-model.js";

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
	chats: [chatSchema],
});

export default mongoose.model("User", userSchema);


// import mongoose from "mongoose";
// import chatSchema from "./chat-model.js";

// const ratingSchema = new mongoose.Schema({
//     value: {
//         type: Number,
//         required: true
//     },
//     timestamp: {
//         type: Date,
//         default: Date.now
//     }
// });

// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
//     chats: [chatSchema],
//     ratings: [ratingSchema] // Include the ratings field
// });

// export default mongoose.model("User", userSchema);
