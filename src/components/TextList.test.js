import { render, screen } from "@testing-library/react";
import TextList from "./TextList";

test("Text list test", () => {
  const list = ["Booba", "Ooba", "Dooba", "Aboba"];

  render(<TextList list={list} />);
  const elements = screen.getAllByTestId("list-item");

  expect(elements).toHaveLength(list.length);
  
  for (let i; i <= elements.length; i++) {
    expect(elements[i]).toBeInTheDocument();
    expect(elements[i]).toHaveTextContent(list[i]);
  }
});
test("Empty list test", () => {
  const list = [];

  render(<TextList list={list} />);
  const element = screen.getByTestId("empty-list");

  expect(element).toHaveTextContent("No text");
});
