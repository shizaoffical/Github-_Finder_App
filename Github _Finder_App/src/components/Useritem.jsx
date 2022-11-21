import React from 'react'
import Loding from './Loding';
import Useritems from './Useritems'

export default function Useritem({users, loding}) 
{
   if(loding){
    return <Loding/>
   }
else{
  return (
    <>
    <div className="main">
    <div className='usermap'>
        {users.map((item) => {
            return (
                <Useritems  
                 key={item.id}
                 avater={item.avatar_url}
                 login={item.login}
                 html={item.html_url}
                />
            );
        })}

    </div>
    </div>
    </>
  )
}

 
}
