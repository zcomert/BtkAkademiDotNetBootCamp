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

function App() {
 
  return (
    <>
      <SimpleAppbar />
      <Routes>
        <Route
          path='/books/list'
          element={
            <BookList   />
          }
        />
        <Route path='/books/details/:id' element={<BookDetails />} />
        <Route path='/books/add' element={<BookAdd />} />
        <Route path='/auth/login' element={<Login />} />
        <Route path='/search' element={<Search />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <p>All rights reserved &copy; 2022 </p>
    </>
  );
}

export default App;
