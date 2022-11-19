import React from 'react'
import{Navbar,Container}from"react-bootstrap"

import './App.css';
const Bar = () => {
  return (
    <div>
        <Navbar>
      <Container>
        <Navbar className='title' href="#home">PORTFOLIO</Navbar>
        <Navbar />
        <Navbar className="justify-content-end">
          <Navbar>
            Signed in as: <a href="#login">Mustaph aNaffeti</a>
          </Navbar>
        </Navbar>
      </Container>
    </Navbar>
    </div>
  )
}

export default Bar