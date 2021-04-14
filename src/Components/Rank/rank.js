import React from 'react'


export const Rank = ({user}) => {
    return (
       <div>
        <div className='white f3'>
           {'Hi ,'} {user.name?user.name:''}{'! your current entries is ...'}
        </div>
        <div className='white f1'>
            {'#'}{user.entries}
        </div>
       </div>)
}
