import { useState } from "react";
import Notification from "./components/Notification";

function App() {
  const [notifications, setNotifications] = useState({
    unreadCount: 3,
    notificationsArray: [
      {
        name: "Mark Webber",
        profilePic: "/assets/images/avatar-mark-webber.webp",
        type: "postReact",
        attachment: "My first tournament today!",
        recieved: "1m ago",
        unread: true,
      },
      {
        name: "Angela Gray",
        profilePic: "/assets/images/avatar-angela-gray.webp",
        type: "following",
        attachment: "",
        recieved: "5m ago",
        unread: true,
      },
      {
        name: "Jacob Thompson",
        profilePic: "/assets/images/avatar-jacob-thompson.webp",
        type: "groupJoined",
        attachment: "Chess Club",
        recieved: "1day ago",
        unread: true,
      },
      {
        name: "Rizky Hasanuddin",
        profilePic: "/assets/images/avatar-rizky-hasanuddin.webp",
        type: "pm",
        attachment: `Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
  I'm already having lots of fun and improving my game.`,
        recieved: "5days ago",
        unread: false,
      },
      {
        name: "Kimberly Smith",
        profilePic: "/assets/images/avatar-kimberly-smith.webp",
        type: "picCom",
        attachment: "/assets/images/image-chess.webp",
        recieved: "1week ago",
        unread: false,
      },
      {
        name: "Nathan Peterson",
        profilePic: "/assets/images/avatar-nathan-peterson.webp",
        type: "postReact",
        attachment: "5 end-game strategies to increase your win rate",
        recieved: "2weeks ago",
        unread: false,
      },
      {
        name: "Anna Kim",
        profilePic: "/assets/images/avatar-anna-kim.webp",
        type: "groupLeft",
        attachment: "Chess Club",
        recieved: "2weeks ago",
        unread: false,
      },
    ],
  });

  return (
    <main className="notifications-container">
      <h1 class="sr-only">Notifications component</h1>

      <div className="notifications-top-options">
        <div className="notifications-counter-container">
          <h2>Notifications</h2>
          <div>{notifications.unreadCount}</div>
        </div>
        <div
          onClick={() => {
            setNotifications((oldNotifications) => ({
              unreadCount: 0,
              notificationsArray: oldNotifications.notificationsArray.map(
                (notification) => ({ ...notification, unread: false })
              ),
            }));
          }}
          className="notifications-mark-as-read-button"
        >
          Mark all as read
        </div>
      </div>
      <div className="notifications-list-container">
        {notifications.notificationsArray.map((notification) => (
          <Notification
            name={notification.name}
            profilePic={notification.profilePic}
            type={notification.type}
            attachment={notification.attachment}
            recieved={notification.recieved}
            unread={notification.unread}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
