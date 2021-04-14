import React from 'react'
import './imagelinkfrom.css'

export const ImageLinkFrom = ({onInputChange,onButtonSubmit}) => {
    return (
        <div>
            <p className="f3">
                {'This Smart Brain will dectect faces in your picture. Git it a try!'}
            </p>
            <div className="center">
            <div className="pa4 center br3 shadow-5 form">
            <input className="f4 pa2 w-70 center" type='tex' onChange={onInputChange} />
                <button 
                onClick={onButtonSubmit}
                className="w-30 grow f4 link ph3 pv2 white bg-light-purple">Dectect</button>
            </div>
            </div>
        </div>)
}
