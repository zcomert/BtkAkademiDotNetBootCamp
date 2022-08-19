import { createContext, useState } from "react";
import data from "../data";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [books, setBooks] = useState(data);
    const [isLogin, setIsLogin] = useState(false);

  const values = {
    books,
    setBooks,
    isLogin,
    setIsLogin
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
