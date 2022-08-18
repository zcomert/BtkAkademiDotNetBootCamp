# İçerik

- React
- useEffect Hook
- Dependency Array
- Functional components
- Props
- Component Drilling
- Parameter spread syntax 
- React Router Dom
  - BrowserRoute
  - Routes
  - Route
    - path
    - element
  - useNavigate
  - useParams
  - React Suite


| Kavram                 | Açıklama |
| ---------------------- | -------- |
| **props**              | ...      |
| **Parameter spread**   | ...      |
| **Component Drilling** | ...      |
| **useNavigate**        | ...      |
| **useParams**          | ...      |

## useEffect için Örnek Kullanım

```js
useEffect(() => {
    setBook(data.find((book) => book.id === parseInt(id)) || initial);
  }, []);
```
