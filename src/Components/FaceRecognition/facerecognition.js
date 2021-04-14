import React from 'react'
import './facerecognition.css'

export const FaceRecognition = ({box,imageUrl}) => {
    return (
        <div className='center'>
           <div className='absolute mt2'>
               <img id="inputimage" alt='' src={imageUrl} style={{width: '500px',height:'auto'}} />
                <div className='bounding-box' style={{top: box.topRow,
                 right: box.rightCol, bottom: box.bottomRow, left: box.leftCol  }}>
                 </div>
           </div>
        </div>)
}
