import axios from "axios";
import { createContext, useEffect, useState } from "react";
import data from "../data";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [books, setBooks] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const [snackbar, setSnackbar] = useState({
      isOpen : false,
      message:'Selam..',
      severity:'success'
    });

  useEffect(() => {
    const url = "http://localhost:44299/api/books/getallbookswithdetails";

    axios
    .get(url)
    .then(resp => setBooks(resp.data));
  },[])

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
