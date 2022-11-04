import React, { useEffect, useState } from "react"
import './Home.css'
import '../App.css'

const ChatApp = ({ socket, username, room }) => {

  const [currentMessage, setCurrentMessage] = useState("")
  const [messageList, setMessageList] = useState([])

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      }
      await socket.emit("send_message", messageData)
      setMessageList((list) => [...list, messageData])
      setCurrentMessage("")
    }
  }

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data])
    })
  }, [])

  return (
    <div className="main">
      <div className="messageList">
          {messageList.map((messageContent) => {
            return (
             
              <div className="msg-sent"
                id={username === messageContent.author ? "you" : "other"}
              >
                <p className="chat-text">{messageContent.message}</p>
                <p className="chat-text-time" id="time">{messageContent.time}</p>
                <p className="chat-text-name" id="author">{messageContent.author}</p>
              </div>
            )
          })}
      </div>

      <div className="chatbar" >
      <table className='chatbox-buttons'>
      <th><input type="image" alt="pencil" src="/images/pencil.png"/></th>
      <th><input type="image" alt="microphone" src="/images/microphone.png"/></th>
      <th><input type="image" alt="docup" src="/images/docup.png"/></th>
      <th><input type="image" alt="photo" src="/images/photo.png"/></th>
      <th className="inputbox-tablecell">
      <input
          className="inputbox"
          type="text"
          value={currentMessage}
          placeholder="type..."
          onChange={(event) => {
            setCurrentMessage(event.target.value)
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage()
          }}
        />
      </th>
      <th><button className="submit-btn" onClick={sendMessage}><img className="submit-btn-img" src="/images/submit.png"></img></button></th>
      </table>
      </div>
    </div>
  );
}

export default ChatApp;