import React from 'react'
import './Home.css'
import homeLogo from '../../assets/loginblog.png'

const Home = () => {
  return (
    <>
        <h1 className='titulo'>Home</h1>

        <img src={homeLogo} className='img'  alt="Imagem Tela inicial" />
    </>

  )
}

export default Home