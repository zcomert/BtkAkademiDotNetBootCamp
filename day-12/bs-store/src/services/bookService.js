import axios from "axios";

class BookService {
  constructor() {
    this.baseUrl = "http://localhost:44299/api/books";
  }

  async getAllBooks() {
    return await axios.get(this.baseUrl).then((resp) => resp.data);
  }

  async getAllBooksWithDetails() {
    const url = `${this.baseUrl}/getallbookswithdetails`;
    return await axios.get(url).then((resp) => resp.data);
  }

  async deleteOneBook(id) {
    const url = `${this.baseUrl}/${id}`;
    return await axios.delete(url).then((resp) => resp);
  }
}
export default BookService;
