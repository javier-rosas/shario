import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { useState } from "react"
import './Layout.css'


const Layout = () => {
  const { collapseSidebar } = useProSidebar()
  const width= useState(window.screen.width)

  console.log(width)

  return (
    <div style={{ display: 'flex', height: '100%' }} className="side-bar-div">
      <Sidebar className='side-bar'>
        <Menu className='side-bar-menu'>
          <MenuItem className="menu-item"># personal</MenuItem>
          <MenuItem className="menu-item"># business</MenuItem>
          <MenuItem className="menu-item"># photos</MenuItem>
          <MenuItem className="menu-item"># videos</MenuItem>
          <MenuItem className="menu-item"># pdfs</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button className='collapse-btn' onClick={() => collapseSidebar()}>Menu</button>
      </main>
    </div>
  );
}

export default Layout