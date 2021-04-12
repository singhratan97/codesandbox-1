import { useState } from "react";

export const Color = () => {
  const [color, setColor] = useState("pink");
  const handler = (e) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <p>{color}</p>
      <input
        onChange={handler}
        type="text"
        style={{ backgroundColor: color || "red" }}
        placeholder="Choose color"
      />
    </div>
  );
};
