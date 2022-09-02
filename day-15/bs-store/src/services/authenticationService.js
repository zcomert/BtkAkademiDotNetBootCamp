import axios from "axios";

class AuthenticationService {
  constructor() {
    this.baseUrl = `${process.env.REACT_APP_BASEURL}/authentication`;
  }

  async login(login){
    const url = `${this.baseUrl}/login`;
    return await axios.post(url,login)
    .then(resp => { return {status: resp.status, data : resp.data}})
    .catch(err => { return {status : err.response.status}});
  }
}

export default AuthenticationService;
