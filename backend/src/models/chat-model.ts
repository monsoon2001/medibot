// import mongoose from "mongoose";
// import { randomUUID } from "crypto";

// const chatSchema = new mongoose.Schema({
// 	id: {
// 		type: String,
// 		default: randomUUID(),
// 	},
// 	role: {
// 		type: String,
// 		required: true,
// 	},
// 	content: {
// 		type: String,
// 		required: true,
// 	},
// });

// export default chatSchema;


import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: function () {
            return new mongoose.Types.ObjectId();
        }
    },
    role: {
        type: String,
        enum: ["user", "assistant"],
        required: true
    },
    content: {
        type: String,
        required: true,
        maxlength: 1000 // Example: Limiting content to 1000 characters
    }
});

export default chatSchema;
