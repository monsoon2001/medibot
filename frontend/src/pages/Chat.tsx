import { useRef, useState, useEffect, useLayoutEffect } from "react";
import {useNavigate} from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion";

import styles from "./Chat.module.css";
import ChatItem from "../components/chat/ChatItem";
import {
	deleteAllChats,
	getAllChats,
	postChatRequest,
} from "../../helpers/api-functions";

import sendIcon from "/logos/send-icon.png";
import noMsgBot from "/logos/no-msg2.png";
import upArrow from "/logos/up-arrow.png";
import ChatLoading from "../components/chat/ChatLoading";

import { useAuth } from "../context/context";
import SpinnerOverlay from "../components/shared/SpinnerOverlay";
import toast from "react-hot-toast";

type Message = {
	role: "user" | "assistant";
	content: string;
};

const Chat = () => {
	const auth = useAuth();
    const navigate = useNavigate()

	const [chatMessages, setChatMessages] = useState<Message[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isLoadingChats, setIsLoadingChats] = useState<boolean>(true);
	const [deleteChatToggle, setDeleteChatToggle] = useState<boolean>(false);

	const inputRef = useRef<HTMLInputElement | null>(null);
	const messageContainerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (messageContainerRef.current) {
			messageContainerRef.current.scrollTop =
				messageContainerRef.current.scrollHeight;
		}
	}, [chatMessages]);

	useLayoutEffect(() => {
		const getChats = async () => {
			try {
				if (auth?.isLoggedIn && auth.user) {
					const data = await getAllChats();
					setChatMessages([...data.chats]);
				}
				setIsLoadingChats(false);
			} catch (err) {
				console.log(err);
				setIsLoadingChats(false);
			}
		};
		getChats();
	}, [auth]);

    useEffect(() => {
        if(!auth?.user){
            return navigate("/login")
        }
    } , [auth])

	const sendMsgHandler = async () => {
		const content = inputRef.current?.value as string;

		if (inputRef.current) inputRef.current.value = "";

		const newMessage: Message = { role: "user", content };
		setChatMessages((prev) => [...prev, newMessage]);

		// send request to backend
		setIsLoading(true);
		const chatData = await postChatRequest(content);
		setChatMessages([...chatData.chats]);
		setIsLoading(false);
	};

	const deleteChatsToggle = () => {
		setDeleteChatToggle((prevState) => !prevState);
	};

	const clearChatsHandler = async () => {
		try {
			toast.loading("Deleting Messages ...", { id: "delete-msgs" });
			const data = await deleteAllChats();
			setChatMessages(data.chats);
			setDeleteChatToggle(false);
			toast.success("Deleted Messages Successfully", { id: "delete-msgs" });
		} catch (error: any) {
			toast.error(error.message, { id: "delete-msgs" });
		}
	};

	const variants = {
		animate: {
			y: [0, -10, 0, -10, 0],
			transition: {
				type: "spring",
				y: { repeat: Infinity, duration: 4, stiffness: 100, damping: 5 },
			},
		},
	};

	const logo = {
		animate: {
			y: [0, -5, 0, -5, 0],
			transition: {
				type: "spring",
				y: {
					repeat: Infinity,
					duration: 4,
					stiffness: 100,
					damping: 5,
				},
			},
		},
		animateReverse: {
			transform: "rotate(180deg)",
			y: "-4",
			transition: {
				duration: 0.5,
			},
		},
		initialBtn: {
			y: "4",
			opacity: 0,
		},
		animateBtn: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
		exitBtn: {
			y: "-20",
			opacity: 0,
			transition: {
				duration: 0.5,
			},
		},
	};

	const placeHolder = (
		<div className={styles.no_msgs}>
			<h3>GPT 3.5 TURBO</h3>
			<motion.div
				className={styles.no_msg_logo}
				variants={variants}
				animate='animate'>
				<img alt='no msg bot' src={noMsgBot}></img>
			</motion.div>
			<p>
				It's quiet in here! Be the first to break the silence and send a message
				to get the conversation going.
			</p>
		</div>
	);

	const chats = chatMessages.map((chat) => (
		<ChatItem //@ts-ignore
			key={`${chat.content}${Math.random()}`} //@ts-ignore
			content={chat.content} //@ts-ignore
			role={chat.role}
		/>
	));

	return (
		<div className={styles.parent}>
			<div className={styles.chat} ref={messageContainerRef}>
				{isLoadingChats && <SpinnerOverlay />}
				{!isLoadingChats && (
					<>
						{chatMessages.length === 0 && placeHolder}
						{chatMessages.length !== 0 && chats}
						{isLoading && <ChatLoading />}
					</>
				)}
			</div>
			<div className={styles.inputContainer}>
				<div className={styles.inputArea}>
					<div className={styles.eraseMsgs}>
						<motion.img
							variants={logo}
							animate={!deleteChatToggle ? "animate" : "animateReverse"}
							src={upArrow}
							alt='top icon'
							onClick={deleteChatsToggle}
						/>
						<AnimatePresence>
							{deleteChatToggle && (
								<motion.button
									className={styles.eraseBtn}
									onClick={clearChatsHandler}
									variants={logo}
									initial='initialBtn'
									animate='animateBtn'
									exit='exitBtn'>
									CLEAR CHATS
								</motion.button>
							)}
						</AnimatePresence>
					</div>
					<input
						type='text'
						maxLength={1500}
						ref={inputRef}
						disabled={isLoadingChats || isLoading ? true : false}
                        placeholder="Enter your query here"
					/>
					<button className={styles.icon} onClick={sendMsgHandler}>
						<img alt='icon' src={sendIcon} />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Chat;


//ChatPage.tsx
// import axios from 'axios';
// import React, { useState } from 'react';

// interface Message {
//   sender: 'bot' | 'user';
//   text: string;
// }

// const ChatPage: React.FC = () => {
//   const [messages, setMessages] = useState<Message[]>([
//     { sender: 'bot', text: 'Welcome to our medical chatbot!' }
//   ]);
//   const [input, setInput] = useState<string>('');
//   const [rating, setRating] = useState<string | null>(null);

//   const handleSend = async () => {
//     if (input.toLowerCase() === 'quit' || input.toLowerCase() === 'end') {
//       setMessages([...messages, { sender: 'user', text: input }]);
//       setRating('Please rate your experience:');
//       return;
//     }

//     setMessages([...messages, { sender: 'user', text: input }]);
//     setInput('');

// 	try {
// 		await axios.post('/message', {message: input});
// 	} catch (error) {
// 		console.log('Error sending message to backend:')
// 	}

//   };

//   const handleRating = (rate: number) => {
//     setRating(`Thank you for your rating: ${rate}`);
//     // Clear the conversation and reset the rating after giving the rating
//     setTimeout(() => {
//       setMessages([{ sender: 'bot', text: 'Welcome to our medical chatbot!' }]);
//       setRating(null);
//     }, 2000); // Adjust the timeout duration as needed
//   };

//   return (
//     <div className="flex flex-col h-screen bg-gray-100 p-4 pt-10">
//       <div className="flex-1 overflow-auto bg-white rounded-lg shadow-md p-4">
//         {messages.map((message, index) => (
//           <div
//             key={index}
//             className={`my-2 p-2 rounded ${
//               message.sender === 'bot' ? 'bg-blue-100 text-left' : 'bg-green-100 text-right'
//             }`}
//           >
//             {message.text}
//           </div>
//         ))}
//         {rating && (
//           <div className="mt-4 p-2 bg-yellow-100 text-center rounded">
//             {rating === 'Please rate your experience:' ? (
//               <>
//                 <p>{rating}</p>
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded m-1"
//                   onClick={() => handleRating(1)}
//                 >
//                   1
//                 </button>
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded m-1"
//                   onClick={() => handleRating(2)}
//                 >
//                   2
//                 </button>
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded m-1"
//                   onClick={() => handleRating(3)}
//                 >
//                   3
//                 </button>
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded m-1"
//                   onClick={() => handleRating(4)}
//                 >
//                   4
//                 </button>
//                 <button
//                   className="bg-blue-500 text-white px-4 py-2 rounded m-1"
//                   onClick={() => handleRating(5)}
//                 >
//                   5
//                 </button>
//               </>
//             ) : (
//               <p>{rating}</p>
//             )}
//           </div>
//         )}
//       </div>
//       <div className="mt-4 flex">
//         <input
//           type="text"
//           className="flex-1 p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your message..."
//         />
//         <button
//           className="bg-blue-500 text-white p-2 rounded-r-lg"
//           onClick={handleSend}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ChatPage;





