import axios from "axios";

export default {
  sendMessage: function(data) {
    return axios.post("api/message", data);
  },
};
