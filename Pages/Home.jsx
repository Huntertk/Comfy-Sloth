import React from 'react'
import './home.css'
import Feature from '../Components/Feature'

const Home = () => {
  return (
    <section className='home-top-container'>
        <div className="home-text-container">
            <h1 className='home-heading'>Design Your Comfort Zone</h1>
            <p className="home-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?
            </p>
            <button className='btn btn-buy rotate-scale-up'>SHOP NOW</button>
        </div>
        <Feature />
    </section>
  )
}

export default Home
