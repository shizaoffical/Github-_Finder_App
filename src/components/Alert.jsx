import React from 'react'

export default function Alert(props) {
  return (
    props.alert && (
        <div className='alert'><span><i class="fa-solid fa-circle-info"/>{props.alert}</span></div>
  )
  
  )
}
