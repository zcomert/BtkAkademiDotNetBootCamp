import axios from "axios";
import { createContext, useEffect, useState } from "react";
import data from "../data";
import BookService from "../services/bookService";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const bookService = new BookService();

    const [books, setBooks] = useState([]);
    const [isLogin, setIsLogin] = useState(false);
    const [snackbar, setSnackbar] = useState({
      isOpen : false,
      message:'Selam..',
      severity:'success'
    });

  useEffect(() => {
     bookService
     .getAllBooksWithDetails()
     .then(resp => setBooks(resp));
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
