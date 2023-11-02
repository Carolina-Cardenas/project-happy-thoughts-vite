import { useState } from "react";
export const Send = ({sendMessage, updateNewMessage }) => {
   
    const [message, setMessage] = useState("");
    const handleSend = (event) => {
        event.preventDefault()
        alert(message)
        if (message) {
          sendMessage(message);
          updateNewMessage(message);
          setMessage("");
        }
    }
  return (
    <div className="post-wrapper">
    <h2>
      What is making you happy right now?
    </h2>
    <form>
      <textarea rows="3" 
                placeholder="Send your happy thoughts here"  
                onChange={(e) => setMessage(e.target.value)}>
      </textarea>
      <div className="post-length">
        <p className="error">
        </p>
        <p className="length ">
          0/140
        </p>
      </div>
      <button type="submit" id="submitPostBtn" onClick={handleSend} aria-label="button for submiting your post">
        <span className="emoji" aria-label="heart emoji">
          ❤️
        </span>
        Send Happy Thought 
        <span className="emoji" aria-label="heart emoji">
          ❤️
        </span>
      </button>
    </form>
  </div>
  )
}




// import React, { useState } from "react";

// function Send(props) {
//   // Definimos un estado para el mensaje que se va a enviar
//   const [newMessage, setNewMessage] = useState("");

//   // Manejamos el evento de cambio en el textarea
//   const handleInputChange = (event) => {
//     setNewMessage(event.target.value);
//   };

//   // Manejamos el evento de envío del mensaje
//   const handleSendClick = () => {
//     // Aquí puedes enviar el mensaje a la API utilizando fetch o cualquier otro método
//     // Por ejemplo, puedes hacer una solicitud POST a la API para agregar un nuevo mensaje
//     // Luego, puedes actualizar la lista de mensajes llamando a una función proporcionada por App.js para recargar los mensajes

//     // Después de enviar el mensaje, puedes borrar el textarea
//     setNewMessage("");
//   };

//   return (
//     <div className="send">
//       <textarea
//         rows="3"
//         placeholder="Escribe tu mensaje..."
//         value={newMessage}
//         onChange={handleInputChange}
//       ></textarea>
//       <button onClick={handleSendClick}>Enviar</button>
//     </div>
//   );
// }

// export default Send;
