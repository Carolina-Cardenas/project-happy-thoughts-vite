import { useState,useEffect } from "react";
import { Send } from "./components/Send"; 
import { Show } from "./components/Show";
export const App = () => {
const [messages, setMessages] = useState([])
const [newMessage, setNewMessage] = useState ("")
const url ="https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

  useEffect(() => {
  fetchMessages()
},[])
  const fetchMessages = async() => {
  const messagesResponse =  await fetch(url);
  const messagesData = await messagesResponse.json();
  setMessages(messagesData);
}

const handleSend = async(event) => {
  event.preventDefault()
  

  if (newMessage) {
   await postMessage();
    setNewMessage("");
  }
}
 const postMessage = async() => { 
  alert(newMessage)
 const response = await fetch(url , {
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

}
 const renderMessages = () => {
  return messages.map(
    ({ _id, createdAt, hearts, message }) => {
      return(
        <Show key={_id} createdAt={createdAt} hearts={hearts} message={message}/>
      )
    }
  );
}


 return (
   <div className="main-wrapper">
    <div>
        <h1>
          Happy thoughts
        </h1>
      </div>
      <Send  setNewMessage={setNewMessage} handleSend={handleSend} newMessage={newMessage}/>
     <div className="list-wrapper">
     {renderMessages()}
     </div>
   </div>
 );
};



