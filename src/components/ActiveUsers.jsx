import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const ActiveUsers = () => {
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      const users = snapshot.docs
        .map((doc) => doc.data())
        .filter((user) => user.isOnline); // Filter only online users
      setActiveUsers(users);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="activeUsers">
      <h2>Active Users</h2>
      {activeUsers.map((user) => (
        <div key={user.uid}>
          <img src={user.photoURL} alt={user.displayName} />
          <span>{user.displayName}</span>
        </div>
      ))}
    </div>
  );
};

export default ActiveUsers;
