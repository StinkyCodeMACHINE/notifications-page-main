import { useState } from "react";

function Notification({
  name,
  profilePic,
  type,
  attachment,
  recieved,
  unread,
}) {
  let notificationTypePlaceHolder;

  switch (type) {
    case "postReact":
      notificationTypePlaceHolder = "reacted to your recent post";
      break;
    case "following":
      notificationTypePlaceHolder = "followed you";
      break;
    case "groupJoined":
      notificationTypePlaceHolder = "has joined your group";
      break;
    case "groupLeft":
      notificationTypePlaceHolder = "left the group";
      break;
    case "pm":
      notificationTypePlaceHolder = "sent you a private message";
      break;
    case "picCom":
      notificationTypePlaceHolder = "commented on your picture";
      break;
  }

  return (
    <div
      className={`notification-container ${
        unread ? "notification-unread" : ""
      }`}
    >
      <div className="notification-main-part">
        <img className="notification-profile-pic" src={profilePic} alt="someone's face" />
        <div className="notification-message-container">
          <div className="notification-message">
            <div>
              <span className="notification-name">{name}</span>
              <span>{" " + notificationTypePlaceHolder + " "}</span>
              {(type === "postReact" ||
                type === "groupJoined" ||
                type === "groupLeft") && (
                <span
                  className={
                    type === "postReact"
                      ? "notification-post-title"
                      : "notification-group-name"
                  }
                >
                  {attachment}
                </span>
              )}
            </div>
            <div className="notification-time-recieved">{recieved}</div>
            {type === "pm" && (
              <div className="notification-private-message">{attachment}</div>
            )}
          </div>
          {type === "picCom" && <img className="notification-attached-pic" src={attachment} alt="an attached image of some sort" />}
        </div>
      </div>
    </div>
  );
}

export default Notification;
