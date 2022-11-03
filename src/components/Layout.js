import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { useState, useEffect, useLayoutEffect } from "react"
import './Layout.css'
import React from 'react'



const Layout = () => {
  const { collapseSidebar } = useProSidebar()
  const width= useState(window.screen.width)

  console.log(width)

  return (
    <div style={{ display: 'flex', height: '100%' }} className="side-bar-div">
      <Sidebar className='side-bar'>
        <Menu className='side-bar-menu'>
          <MenuItem className="menu-item">#Personal</MenuItem>
          <MenuItem className="menu-item">#Business</MenuItem>
          <MenuItem className="menu-item">#Photos</MenuItem>
          <MenuItem className="menu-item">#Videos</MenuItem>
          <MenuItem className="menu-item">#PDFs</MenuItem>
        </Menu>
      </Sidebar>
      <main>
        <button className='collapse-btn' onClick={() => collapseSidebar()}>Menu</button>
      </main>
    </div>
  );
}

export default Layout