# İçerik

- React JS UI Frameworks 
- Getting started with MUI
  - Installation
  - Components
  - Container
  - Appbar API
  - Stack API
  - TextField API
  - Button API
  - IconButton API
  - Floating action button API
  - Card API
  - Typography API

| Kavram               | Açıklama |
| -------------------- | -------- |
| **createContext**    | ...      |
| **useContext**       | ...      |
| **context.Provider** | ...      |


## AppContext için Örnek Kullanım

```js
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

```
