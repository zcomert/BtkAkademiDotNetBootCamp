import axios from "axios";

class AuthenticationService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/authentication`;
  }

  async login(login){
    const url = `${this.baseUrl}/login`;
    const {status, data} = await axios.post(url,login);
    return {status,data};
  }
}

export default AuthenticationService;
