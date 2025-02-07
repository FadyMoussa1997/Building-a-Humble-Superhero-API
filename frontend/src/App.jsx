import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify';
import './App.css'

import { AddHero } from './AddHero'
import { HeroList } from './HeroList'

function App() {
  

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />


      <div className='intro'>
        <h1>Super Heroes</h1>
      </div>

      <AddHero />

      <HeroList />

    </>
  )
}

export default App
