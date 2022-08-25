import { createContext, useState } from "react";
import data from "../data";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [books, setBooks] = useState(data);
    const [isLogin, setIsLogin] = useState(false);
    const [snackbar, setSnackbar] = useState({
      isOpen : false,
      message:'Selam..',
      severity:'success'
    });

  const values = {
    books,
    setBooks,
    isLogin,
    setIsLogin,
    snackbar,
    setSnackbar
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
