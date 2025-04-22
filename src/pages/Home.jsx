
import axios from 'axios';
import React, { useState } from 'react';
import '../App.css';
import Alert from '../components/Alert';
import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Useritem from '../components/Useritem';

function Home() {
  const [loding, setLoding] = useState(false)
  const [state, setState] = useState([])
 const[alert, setAlert] = useState(null)
//  const myfunction = async () => {
  // try{
  //   setLoding(true);
  //   const res = await axios.get("https://api.github.com/users");
  //   setState(res.data);
  //   setLoding(false);
  // }
  //  catch(e){}
  //  };

  //  React.useEffect(() => {myfunction();} ,[])
     const searchBtn = async(text) => {
      try{
        setLoding(true);
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        setState(res.data.items);
        setLoding(false);
      }
       catch(e){}
   }
  //  clear btn
  const clearbtn= () => {
  setState([])
  }

   const hello = () => {
    setAlert('Please fill the input!')
    setTimeout(() => {setAlert()}, 2000)
  }
 
  return (
    <>
    <Navbar />
    <Alert alert={alert}/>
    <Search onSearchbtn={searchBtn} clear={clearbtn} showUsers={state.length > 0 ? true : false}  onalert={hello}  />
    <Useritem users={state} loding={loding}/>
    </>
  );
}

export default Home;
 