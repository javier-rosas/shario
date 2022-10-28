import Layout from './Layout'

const Landing = () => {


  return (
    <div className='App'>
      <img alt="group" src="/images/Group.png"></img>
      <Layout/>
      <div className='chat-container'>
      <h2 className='welcome-text'>
                        Welcome to Shario!
        Throw anything in the chat. We’ll take care of the rest.
      </h2>
      <form className='searchchat'>
        <input className='input-searchchat' type="text" placeholder="  Search chat..."></input>
      </form>
      <div className='chatbar'>
      <table className='chatbox-buttons'>
      <th><input type="image" alt="pencil" src="/images/pencil.png"/></th>
      <th><input type="image" alt="microphone" src="/images/microphone.png"/></th>
      <th><input type="image" alt="docup" src="/images/docup.png"/></th>
      <th><input type="image" alt="photo" src="/images/photo.png"/></th>
      <th>
      <form>
      <input className='inputbox' type="text" placeholder="type..."></input>
      </form>
      </th>
      <th><input type="image" alt="pencil" src="/images/pencil.png"/></th>
      </table>
      </div>
      </div>
    </div>
  )}

export default Landing