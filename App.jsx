import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {

  //https://i.ibb.co/yFh7n1Q/slime.png https://i.ibb.co/mX6PMHf/sky2.webp
  
  return (
    <div class="pussy">
      <Parallax pages={2}>
        <ParallaxLayer speed={1} factor={1} style={{
          backgroundImage: `url(https://i.ibb.co/yFh7n1Q/slime.png)`,
          backgroundSize: 'cover',
        }}>
          <h1>Dev Group</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={.4} speed={2} factor={1}>
          <h2>Members: Zaman, and Luke.</h2>
        </ParallaxLayer>

        <ParallaxLayer offset={.9} factor={3} speed={2} >
          <h2>High-Dev Team.</h2>
          <p></p>
        </ParallaxLayer>

        <ParallaxLayer offset={.8} speed={5} factor={3} style={{
          backgroundColor: `green`,
          backgroundSize: 'cover',
          height: '400%',
          padding: '40px',
        }}>
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfWgATG93GmJLvj6z89D5E_DIFAPZ0KpvyUCu4iuUNUqx3MLw/viewform?embedded=true" width="640" height="939" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default App






