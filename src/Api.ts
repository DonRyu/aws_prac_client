import axios from "axios";
const API_HOST = process.env.NODE_ENV === 'production' ? 'http://54.236.16.200:8080' : 'http://localhost:8080';

class Api {
  static async requestToServer(path: string, data?: any) {
    let res = await axios({
      baseURL: `${API_HOST}/api`,
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
