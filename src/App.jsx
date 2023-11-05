import { useState, useEffect } from "react";
import { Send } from "./components/Send";
import { Show } from "./components/Show";
export const App = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [likes, setLikes] = useState({});
  const url = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts";

  useEffect(() => {
    fetchMessages();
  }, []);
  const fetchMessages = async () => {
    const messagesResponse = await fetch(url);
    const messagesData = await messagesResponse.json();
    setMessages(messagesData);
  };

  const handleSend = async (event) => {
    event.preventDefault();

    if (newMessage) {
      await postMessage();
      setNewMessage("");
    }
  };

  const handleLike = (_id) => {
    const newLikes = setLikes(async (prevLikes) => {
      const updatedLikes = { ...prevLikes };
      updatedLikes[_id] = (await (updatedLikes[_id] || 0)) + 1;

      return updatedLikes[_id];
    });

    postLike(_id, newLikes);
  };

  const postLike = async (_id, updatedLikes) => {
    const likeUrl = `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${_id}/like`;

    const response = await fetch(likeUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id, likes: updatedLikes }),
    });

    if (response.status === 200) {
      fetchMessages();
    } else {
      console.error("Error al actualizar los likes del mensaje");
    }
  };
  const postMessage = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newMessage }),
    });

    if (response.status === 201) {
      fetchMessages();
      setNewMessage("");
    } else {
      console.error("Error al enviar el mensaje");
    }
  };
  return (
    <div className="main-wrapper">
      <div>
        <h1>Happy thoughts</h1>
      </div>
      <Send
        setNewMessage={setNewMessage}
        handleSend={handleSend}
        newMessage={newMessage}
      />
      <div className="list-wrapper">
        {messages.map(({ _id, createdAt, hearts, message }) => (
          <Show
            _id={_id}
            key={_id}
            createdAt={createdAt}
            hearts={hearts}
            message={message}
            handleLike={handleLike}
          />
        ))}
      </div>
    </div>
  );
};
