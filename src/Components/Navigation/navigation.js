import React from 'react'

export const Navigation = ({onRouteChange,routeState}) => {
    return (
        routeState === 'home'&&
        <nav style={{display: 'flex',justifyContent:'flex-end'}}>
            <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'> 
                Sign Out
            </p>
        </nav>)
}
