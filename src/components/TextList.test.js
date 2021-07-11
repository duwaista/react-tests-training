import { render, screen } from "@testing-library/react";
import TextList from "./TextList";

test("Text List test", () => {
  const text = "Test text";

  render(<TextList text={text} />);
  const element = screen.getByTestId("text-component");
  
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent(text);
});
