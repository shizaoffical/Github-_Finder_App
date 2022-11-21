import React from 'react'

export default function Alert(props) {
  return (
    props.alert && (
        <div className='alert'>
          {props.alert}
        <i class="fa-solid fa-circle-info"></i>
    </div>
  )
  
  )
}
