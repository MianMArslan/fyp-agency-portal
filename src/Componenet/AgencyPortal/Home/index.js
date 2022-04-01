import React from 'react'
import Deals from '../Deals'
import './home.css'

export const Home = () => {
  return (
    <div className='home'>
        <div className='listContainer'>
            <div className='listTitle'> 
                new destination entry
            </div> 
            <Deals />
        </div>
         </div>
  )
}
