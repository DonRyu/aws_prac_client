import axios from "axios";
const API_HOST = process.env.REACT_APP_API_HOST;

class Api {
  static async requestToServer(path: string, data?: any) {
    let res = await axios({
      baseURL: API_HOST,
      url: `${API_HOST}/${path}`,
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
