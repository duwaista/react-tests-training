import React from "react";

export default function TextList({ text }) {
  return (
    <div data-testid='text-component' className="text-container">
      <span>{text}</span>
    </div>
  );
}
