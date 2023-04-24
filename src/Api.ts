import axios from "axios";
export const API_HOST =
  process.env.NODE_ENV === "production"
    ? "http://54.197.128.126:8080"
    : "http://localhost:8080";

class Api {
  static async requestToServer(path: string, data?: any) {
    try {
      let res: { msg?: string; data: any } = await axios({
        baseURL: `${API_HOST}/api`,
        url: `${path}`,
        method: "POST",
        data: data,
        withCredentials: true
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
      });
      if (res?.msg) {
        console.log("error", res?.msg);
        return;
      }
      return res.data;
    } catch (e) {
      console.log("error", e);
    }
  }
}

export default Api;
