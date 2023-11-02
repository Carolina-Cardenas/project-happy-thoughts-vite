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
    alert("in fetch")
  const messagesResponse =  await fetch(url);
  const messagesData = await messagesResponse.json();

  setMessages(messagesData);
}

const sendMessage = async(message) => {
 alert(newMessage)
 const response = await fetch(url , {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ message: newMessage }),
});
alert(response.status)
if (response.status === 201) {
  // Mensaje enviado con éxito, puedes actualizar la lista de mensajes
  // o realizar alguna otra acción aquí
  alert(message)
  fetchMessages();
  setNewMessage("");
} else {
  // Manejar errores
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
 const renderContent = renderMessages() 

 return (
   <div className="main-wrapper">
      <Send updateNewMessage={setNewMessage} sendMessage={sendMessage} />
     <div className="list-wrapper">
       {renderContent}
     </div>
   </div>
 );
};



