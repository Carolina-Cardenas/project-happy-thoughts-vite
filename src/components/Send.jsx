export const Send = ({ setNewMessage, handleSend, newMessage}) => {
  

   
  return (
      
    <div className="post-wrapper">
    <h2>
      What is making you happy right now?
    </h2>
    <form>
      <textarea rows="3" 
                placeholder="Send your happy thoughts here"  
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}>
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




