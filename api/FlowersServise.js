import { api } from "@/api/index";

  export default class UseGateData {
    static async FlowersGetService() {
      return api({
        method: "GET",
        url: "https://639ac8b431877e43d676109f.mockapi.io/test",
      });
    }
  }