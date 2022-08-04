import { createContext, useState } from "react";

const ColorContext = createContext({
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: null,
    setSubcolor: null,
    ///????뭔데 왜 이렇게 함????
    //처음에 빈 함수라고 표현해주기 위함인거같다!
  },
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
    //이친구들은 setColor:setColor, setSubColor:setSubcolor의 약자임!!!
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    //ColorProvier가  value라는 props를 가진 ColorContext.Provider를 return해줌
    //이렇게 안 할거면 위의 return 한 코드를 데이터를 주입할때 사용해야함!
    //Consumer는 ~~Context.Provider의 value를 구독하기 때문에
  );
};
const { Consumer: ColorCunsumer } = ColorContext;
//ColorCunsumer = ColorContext.Consumer라는 말!

export { ColorProvider, ColorCunsumer };

export default ColorContext;
