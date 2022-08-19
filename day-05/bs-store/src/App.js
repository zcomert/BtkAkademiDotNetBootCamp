import { useContext, useState } from "react";
import data, { tobeAddBook } from "./data";
import Counter from "./Counter";
import BookList from "./components/bookList/BookList";
import Search from "./components/search/Search";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import { Routes, Route } from "react-router-dom";
import SimpleAppbar from "./components/simpleAppbar/SimpleAppbar";
import Home from "./pages/home/Home";
import BookDetails from "./components/book/BookDetails";
import BookAdd from "./components/book/BookAdd";
import AppContext from "./context/ContextApplication";
import Footer from "./components/footer/Footer";
import styles from "./App.module.css";
import { Alert, Snackbar, Stack } from "@mui/material";

function App() {
  const { snackbar, setSnackbar } = useContext(AppContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnackbar({
      ...snackbar,
      isOpen: false,
    });
  };
  return (
    <>
      <SimpleAppbar />
      <main className={styles.container}>
        <Routes>
          <Route path='/books/list' element={<BookList />} />
          <Route path='/books/details/:id' element={<BookDetails />} />
          <Route path='/books/add' element={<BookAdd />} />
          <Route path='/auth/login' element={<Login />} />
          <Route path='/search' element={<Search />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={snackbar.isOpen}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
}

export default App;
