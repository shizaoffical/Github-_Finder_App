import React from 'react'
import { Link } from 'react-router-dom'
export default function Useritems(props) {
  return (
    <div className='user01'>
     <img src={props.avater} alt="" />
    <h4>{props.login}</h4>
    <Link to={`/${props.login}`}>Profile</Link>
    </div>
  )
}
