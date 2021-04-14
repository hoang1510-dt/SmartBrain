import React from 'react'
import Tilt from 'react-tilt'
import './logo.css'
import brain from './brain.png'

export const Logo = () => {
    return (
       <div className='ma4 mt0'>
        <Tilt className="Tilt br2 shadow-2" options={{ max : 25 }} style={{ height: 150, width: 150 }} >
            <div style={{ padding:'3em'}}  className="Tilt-inner"> <img src={brain} alt='SmartBrain' /> </div>
        </Tilt>
       </div>)
}
