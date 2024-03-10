import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const data = await axios.get("http://localhost:5000/api/chat");
    setChats(data.data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <>
        {chats.map(chat => 
        <div key={chat._id}>
            {chat.chatName}
        </div>)}
    </>
  );
};

export default Chat;
