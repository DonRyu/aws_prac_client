import axios from "axios";
const API_HOST = process.env.REACT_APP_API_HOST;

console.log('API_HOST',API_HOST)

class Api {
  static async requestToServer(path: string, data?: any) {
    let res = await axios({
      baseURL: `${API_HOST}`,
      url: `${path}`,
      method: "POST",
      data: data,
      // headers: {
      //   "Content-Type": "multipart/form-data",
      // },
    });
    if (res) {
      return res.data;
    }
  }
}

export default Api;
