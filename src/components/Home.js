import io from "socket.io-client"
import { useState } from "react"
import ChatApp from "./ChatApp.js"
import './Home.css'
const socket = io.connect("http://192.168.4.23:5001")


const Home = () => {

  const [username, setUsername] = useState("")
  const [room, setRoom] = useState("")
  const [showChat, setShowChat] = useState(false)

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room)
      setShowChat(true)
    }
  }

  return (
    <div className="Home">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join A Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(event) => {
              setUsername(event.target.value)
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(event) => {
              setRoom(event.target.value)
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
        </div>
      ) : (
        <ChatApp socket={socket} username={username} room={room} />
      )}
    </div>
  )
}

export default Home