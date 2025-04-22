import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Loding from '../components/Loding';

function User() {
    const params  = useParams();
    const [user, setUser]  = React.useState(null);
    const [repos, setRepos]  = React.useState([]);
  
    const fetchUser = async (text) => {
        console.log(params.userId)
        try{
    
          const res = await axios.get(`https://api.github.com/users/${params.userId}?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
          const resRepo = await axios.get(`https://api.github.com/users/${params.userId}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
          setUser(res.data);
          setRepos(resRepo.data);

        }
         catch(e){
            
         }
     }

     React.useEffect(() => {
        fetchUser()
     }, []);
if(!user){
    return <Loding/>
}
console.log(repos)

  return (
    <>
      <Navbar/>


      <div className='user'>
          <div className='user1'>
              <div >
                    <button><Link to="/">Back to search</Link></button>
               </div> 
          </div>
          <div className='user2'>
              <div className='user2-1'>
                <img src={user.avatar_url} alt="" />  <h2>{user.name}</h2><p>Location: {user.location}</p>
              </div>
              <div className='user2-2'>
                <h4>Bio</h4>
                <p>{user.bio}</p>
                <button className='btn btn-dark'>view Github profile</button>
                <h6>Username: <dfn> {user.login}</dfn></h6>
                <h6>Comapny: <dfn>{user.company}</dfn></h6>
                <p>Website<span>{user.blog}</span></p>

              </div>
          </div>
               <div className='user3'>
                   <div className='user3-1'>
                    <button className='btn btn-danger me-2  '>followers: {user.followers}</button>
                    <button className='btn btn-success me-2 '>following: {user.following} </button>
                    <button className='btn btn-light  me-2    btn btn-outline-secondary'>Public repo: {user.public_repos}</button>
                    <button className='btn btn-dark  '>Public Gists : {user.public_gists}</button>
                   </div>
               </div>

               

              {repos.map((repo) => {
                return <div className='user3'>
                <p>{repo.name}</p>
            </div>
              })}
              
                 {/* <div className='user3'>
                 <p>{user.gravatar_id}</p>
                 </div>
                 <div className='user3'>
                  <p>react</p>
                 </div>
                 <div className='user3'>
                 <p>node js</p>
                 </div> */}
     </div>      
    </>
  )
}

export default User