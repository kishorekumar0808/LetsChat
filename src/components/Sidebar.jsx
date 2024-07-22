import React from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar data-testid="navbar" />
      <Search data-testid="search" />
      <Chats data-testid="chats" />
    </div>
  );
};

export default Sidebar;
