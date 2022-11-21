import React, { useState } from 'react'

export default function Search(props) {

  const [text, setText] = useState('');

     const formhandle =(a) => {
      a.preventDefault();
      if(text===''){
         props.onalert('plesr');
      }
      else{
         props.onSearchbtn(text)
      setText("")
      }
     
     }
   
  return (
    <>
      <form className='sumbit' onSubmit={formhandle}>
        <input type="text" name="text" placeholder='SEARCH USER..................' value={text}
         onChange={(e) => setText(e.target.value)} />
        <input type="submit" name="submit" placeholder='Submit'  />
        {props.showUsers && ( <button onClick={props.clear}>Clear</button>)}
       
      </form>
    </>
  )
}
