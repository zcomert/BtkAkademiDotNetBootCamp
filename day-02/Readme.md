# İçerik

- React
- State
- useState
- JavaScript
  - Array operations
    - map
    - filter
  - Access modifiers
    - export
      - default export
      - name export
    - import
  - Rest (...) operator - spread syntax
    > script

| Hook         | Açıklama                                                                        |
| ------------ | ------------------------------------------------------------------------------- |
| **useState** | React içerisinde state tanımı yapmak ve ilgili state yönetmek üzere kullanılır. |

## useState için Örnek Kullanım

```js
const [books, setBooks] = useState(data);

// Arrow (ok)
const clearAll = () => {
  setBooks([]);
  console.log(books);
};

const addBook = (book) => {
  setBooks([...books, book]);
  console.log(books);
};

const removeBook = (id) => {
  setBooks(books.filter((book) => book.id !== id));
};

const addAllBooks = () => {
  setBooks([...books, ...tobeAddBook]);
};
```
