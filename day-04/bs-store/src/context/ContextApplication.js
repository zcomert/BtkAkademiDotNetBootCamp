import { createContext, useState } from "react";
import data from "../data";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [books, setBooks] = useState(data);

  const values = {
    books,
    setBooks,
    message: "Selam",
    theme: "light",
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
