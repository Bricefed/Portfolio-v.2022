import { createContext, useState } from "react";

export const CursorContext = createContext();

const CursorContextProvider = (props) => {
  const [text, setText] = useState("Copier");

  const copyText = () => {
    setText("Fait 👍");
    setTimeout(() => {
      setText("Copier");
    }, 5000);
  };

  return (
    <CursorContext.Provider value={{ text, copyText }}>
      {props.children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;
