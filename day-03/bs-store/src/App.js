import { useState } from "react";
import data,{ tobeAddBook } from "./data";
import Counter from "./Counter";
import BookList from "./components/bookList/BookList";
import Search from "./components/search/Search";
import Login from "./components/login/Login"
import Contact from "./components/contact/Contact";


function App() {
 
  const [books, setBooks] = useState(data);

  // Arrow (ok)
  const clearAll = () => {
    setBooks([]);
    console.log(books);
  };

  const addBook = (book) => {
    setBooks([...books, book])
    console.log(books);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const addAllBooks = () =>{
    setBooks([...books, ...tobeAddBook])
  }
  return (
    <>
      <div>Merhaba React.</div>
      {/* prop (books) tanımı yapıldı */}
      <BookList books={books}  />
      
      <Counter />
      <Search/>
      <Login />
      <Contact />
    </>
  );
}

export default App;
