import React from 'react'
import { useParams } from 'react-router-dom'

const ParamCop = () => {
    let {id} = useParams()
  return (
    <div> student id is {id}</div>
  )
}

export default ParamCop