import axios from "axios";

class AuthorService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/authors`;
  }

  async getAllAuthors() {
    return await axios.get(this.baseUrl).then(resp => resp.data);
  }
}
export default AuthorService;
