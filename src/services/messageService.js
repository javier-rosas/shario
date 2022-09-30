import axios from 'axios'

const audience = 'http://localhost:5001/api/v1/messages'

class MessageDataService {

  static async authenticateUser(userData) {
    return axios.post(`${audience}/authenticate`, {userData});
  }

  static async getMessages(token) {
    return axios.get(`${audience}/${token}`, 
                      { headers: { 'Authorization': `${token}` }})
  }

  static async addMessage(data, token) {
    return axios.put(`${audience}/message`,
                       { 
                        token: token,
                        message: data.message 
                       },
                       { headers: { "Authorization": `${token}` }})
  }

  static async deleteMessage(data, token) {
    return axios.delete(`${ audience }/message/${token}/${ data.messageId }`, 
                          { headers: { "Authorization": `${token}` }})
  }

}

export default MessageDataService
