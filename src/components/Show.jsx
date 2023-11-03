export const Show = ({ createdAt, hearts, message}) => {

  function timeAgo(fromTime) {
    
    const createdAt = new Date(fromTime)
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
  
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    
    if (minutesAgo < 1) {
      return "Just now";
    } else if (minutesAgo === 1) {
      return "1 minute ago";
    } else if (minutesAgo < 60) {
      return `${minutesAgo} minutes ago`;
    } else {
      const hoursAgo = Math.floor(minutesAgo / 60);
      if (hoursAgo === 1) {
      return "1 hour ago";
      } else {
        return `${hoursAgo} hours ago`;
      }
    }
  }
  
  
   const timeAgoString = timeAgo(createdAt);
  
  
  return (
    <div className="message">
    <p>
      {message}
    </p>
    <div className="info-wrapper">
      <div className="info-like">
        <button type="button" id="likeBtn" className="like-button liked">
          <span className="emoji" aria-label="like button">
            ❤️
          </span>
        </button>
        <span className="num-likes">
          x {hearts}
        </span>
      </div>
      <div className="info-time">
         {timeAgoString}
      </div>
      <div id="container"></div>
    </div>
  </div>
  
  )
}
