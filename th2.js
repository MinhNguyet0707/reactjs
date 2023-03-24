import React, { useState } from "react";

const colors = [
  "#3498db",
  "#9b59b6",
  "#e74c3c",
  "#2c3e50",
  "#d35400",
];

function Boxes() {
  const [boxes, setBoxes] = useState([]);
  const [totalBox, setTotalBox] = useState(0);

  const addBox = () => {
    const newBoxes = colors.map((color, index) => ({
      id: index + boxes.length,
      color,
    }));
    setBoxes([...boxes, ...newBoxes]);
    setTotalBox(totalBox + 5);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
    setTotalBox(totalBox - 1);
  };

  return (
    <div className="wrap">
      <h1>JS DOM</h1>
      <button onClick={addBox}>More boxes</button>
      <h4>
        Total box: <span className="points">{totalBox}</span>
      </h4>
      <div className="boxes">
        {boxes.map((box) => (
          <div
            key={box.id}
            className="box"
            style={{ background: box.color }}
            onClick={() => removeBox(box.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Boxes;
