import React from "react";

export default function TextList({ list }) {
  return (
    <>
      <div data-testid="text-component" className="text-container">
        {list.map((item, index) => (
          <span key={index} data-testid="list-item">
            {item}
          </span>
        ))}
      </div>
      {!list.length && <span data-testid="empty-list">No text</span>}
    </>
  );
}
