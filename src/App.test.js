import { render, screen } from "@testing-library/react";
import App from "./App";

test("App test", () => {
  render(<App />);

  const element = screen.getByTestId("App");

  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Text");
});
