import React from "react";
import{useState} from "react"
export const Send = ({ setNewMessage, handleSend, newMessage }) => {
  const [charCount, setCharCount] = useState(0);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setNewMessage(inputValue);
    setCharCount(inputValue.length);

  
    if (inputValue.length > 140) {
      setNewMessage(inputValue.slice(0, 140));
      setCharCount(140);
    }
  };
  return (
    <div className="post-wrapper">
      <h2>What is making you happy right now?</h2>
      <form>
        <textarea
          rows="3"
          placeholder="Send your happy thoughts here"
          value={newMessage}
          onChange={handleInputChange}
          maxLength={140}
        ></textarea>
        <div className="post-length">
          <p className="error"></p>
          <p className="length">{`${charCount}/140`}</p>
        </div>
        <button
          type="submit"
          id="submitPostBtn"
          onClick={handleSend}
          aria-label="button for submiting your post"
          disabled={charCount === 0 || charCount > 140}
        >
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
  );
};
