import React from 'react'
import { Spotify } from '../components/Spotify'
import rosalia from '../assets/img/bkg.webp'
export const Home = () => {
  return (
    <section className='home'>
        <div>
            <h1>rosalia</h1>
            <img src={rosalia}/>
        </div>
        <div>
            
            <Spotify/>
            <Spotify/>
            <Spotify/>
            <Spotify/>
            <Spotify/>
        </div>
    </section>
  )
}
