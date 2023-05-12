import React from 'react'
import Sidebar from './sidebar/Sidebar'

function Wraper({children}) {
  return (
    <div className='container'>
        <Sidebar/>
        {children}</div>
  )
}

export default Wraper