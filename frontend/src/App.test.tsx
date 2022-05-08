import { render, screen } from "@testing-library/react";

import App from "./App";
import React from "react";

test("renders Ponder Orb button", () => {
  render(<App />);
  const buttonElement = screen.getByText(/Ponder Orb/i);
  expect(buttonElement).toBeInTheDocument();
});
