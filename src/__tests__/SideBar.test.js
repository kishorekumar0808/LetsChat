import React from "react";
import { render, screen } from "@testing-library/react";
import Sidebar from "../components/Sidebar.jsx";

jest.mock("../components/Navbar", () => () => (
  <div data-testid="navbar">Navbar Component</div>
));
jest.mock("../components/Search", () => () => (
  <div data-testid="search">Search Component</div>
));
jest.mock("../components/Chats", () => () => (
  <div data-testid="chats">Chats Component</div>
));

describe("Sidebar Component", () => {
  test("renders Sidebar component without crashing", () => {
    render(<Sidebar />);

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("search")).toBeInTheDocument();
    expect(screen.getByTestId("chats")).toBeInTheDocument();
  });

  test("renders Navbar component", () => {
    render(<Sidebar />);
    expect(screen.getByTestId("navbar")).toBeInTheDocument();
  });

  test("renders Search component", () => {
    render(<Sidebar />);
    expect(screen.getByTestId("search")).toBeInTheDocument();
  });

  test("renders Chats component", () => {
    render(<Sidebar />);
    expect(screen.getByTestId("chats")).toBeInTheDocument();
  });
});
