import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home.jsx";

jest.mock("../components/Sidebar", () => () => (
  <div data-testid="sidebar">Sidebar</div>
));
jest.mock("../components/Chat", () => () => <div data-testid="chat">Chat</div>);

describe("Home Component", () => {
  test("renders Home component without crashing", () => {
    render(<Home />);
  });

  test("renders Sidebar component", () => {
    render(<Home />);
    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toBeInTheDocument();
  });

  test("renders Chat component", () => {
    render(<Home />);
    const chatElement = screen.getByTestId("chat");
    expect(chatElement).toBeInTheDocument();
  });
});
