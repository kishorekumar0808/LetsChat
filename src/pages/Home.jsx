import React from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <div className="home" data-testid="home">
      <div className="container">
        <Sidebar testId="container" />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
