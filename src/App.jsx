import { useState,useEffect } from "react";
import { Send } from "./components/Send"; 
import { Show } from "./components/Show";
export const App = () => {
  
const [messages, setMessages] = useState([])
useEffect(() => {
  fetchMessages()

},[])

const fetchMessages = async() => {
  const url ="https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"
  const messagesResponse =  await fetch(url);
  const messagesData = await messagesResponse.json();

  setMessages(messagesData);
  
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
const renderContent = renderMessages();
 
 return <div className="main-wrapper" >
            <Send/>
            <div className="list-wrapper">
            {renderContent}
            </div>
            
          </div>;
};
