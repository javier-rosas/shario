import Home from './Home'

function Landing () {

  return (
    <div className='App'>
      <div className='top-container'>
       <img className='logo' alt="group" src="/images/shario-logo (2).png"></img>
      </div>
      <div className='side-bar-new'>
       <div class="vertical-menu">
         <a href="#" class="active"># personal</a>
         <a href="#"># business</a>
         <a href="#"># photos</a>
         <a href="#"># videos</a>
         <a href="#"># pdfs</a>
       </div>
      </div>
      <div className='chat-container'>
      <form className='searchchat'>
        <input className='input-searchchat' type="text" placeholder="  Search chat..."></input>
      </form>
      <Home/>
      </div>
    </div>
  )
}

export default Landing