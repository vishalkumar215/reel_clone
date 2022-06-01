import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import {useNavigate} from 'react-router-dom'

function Feed() {
    const navigate = useNavigate()
    const locate= ()=>{
        navigate("/login")
    }
    // const {logout} = useContext(AuthContext)
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <h1>Welcome to Feeed</h1>
        <button onClick={locate
        }>Log out</button>
    </div>
  )
}

export default Feed