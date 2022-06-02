import React from 'react'
import { displayNumberContext } from './Main'
import { useContext } from 'react'
// import data from '../data'

export const DisplayNumber = () => {

    const {count, dataLength} = useContext(displayNumberContext)

  return (
    <div>
        {count + 1}/{dataLength}
    </div>
  )
}

