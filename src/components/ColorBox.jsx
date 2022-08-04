import React, { useContext } from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  //개인적으로는 consumer를 이용한 구독보다 useContext를 이용한 구독방식이
  //redux와 비슷해서 그런지 더 편하고 친숙한 것 같다.
  //class형 컴포넌트가 아니라면 그냥 useContext 훅을 이용하는게 보기도 편할듯!
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "64px",
          height: "64px",
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
