import React, { useContext , useEffect,useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'
import UploadFiles from './UploadFiles'
import  {database} from '../firebase'

function Feed() {
    const navigate = useNavigate()
    const locate= ()=>{
        navigate("/login")
    }
    const {user} = useContext(AuthContext)
    const [userData, setUserData] = useState('')

    useEffect
    (()=>{
       const unsub = database.users.doc(user.uid).onSnapshot((snapshot)=>{
           setUserData(snapshot.data())

       })
       return()=>{unsub()}
    },[user])
  return (
      <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <div className="comp" style={{width:'50%'}}>
        <h1>Welcome to Feeed</h1>
        <button onClick={locate
        }>Log out</button>
        </div>
        <UploadFiles user={userData}/>
    </div>
     
     </>
  )
}

export default Feed