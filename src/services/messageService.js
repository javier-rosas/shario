import axios from 'axios'

const API_ROUTE = process.env.API

class MessageDataService {

  static async authenticateUser(userData) {
    return axios.post(`${ API_ROUTE }/authenticate`, { userData });
  }

  static async getMessages(token) {
    return axios.get(`${ API_ROUTE }/${ token }`, 
                       { headers: { "Authorization": `${token}` }})
  }

  static async addMessage(data, token) {
    return axios.put(`${ API_ROUTE }/message`,
                       { token: token, 
                         message: data.message },
                       { headers: { "Authorization": `${token}` }})
  }

  static async deleteMessage(data, token) {
    return axios.delete(`${ API_ROUTE }/message/${token}/${ data.messageId }`, 
                          { headers: { "Authorization": `${token}` }})
  }

}

export default MessageDataService
