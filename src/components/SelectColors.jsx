import React from "react";
import { ColorCunsumer } from "../contexts/color";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];
const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorCunsumer>
        {({ actions }) => {
          return (
            <div style={{ display: "flex" }}>
              {colors.map((color) => {
                return (
                  <div
                    key={color}
                    style={{
                      backgroundColor: color,
                      width: "24px",
                      height: "24px",
                      cursor: "pointer",
                      margin: "0 10px",
                    }}
                    onClick={() => actions.setColor(color)}
                    onContextMenu={(e) => {
                      e.preventDefault();
                      actions.setSubcolor(color);
                    }}
                  />
                );
              })}
            </div>
          );
        }}
      </ColorCunsumer>

      <hr />
    </div>
  );
};

export default SelectColors;
