import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { useEffect } from 'react'
export const ServerUrl="https://ai-interview-preparation-platform-69ep.onrender.com"
import axios from 'axios'
import { setUserData } from './redux/userSlice'
import {useDispatch} from 'react-redux'
import InterviewPage from './pages/InterviewPage'
import History from "./pages/InterviewHistory";

function App() {
  const dispatch=useDispatch()
 useEffect(()=>{
  const getUser=async()=>{
    try {
      const result = await axios.get(ServerUrl +"/api/user/current-user",{withCredentials:true})
      dispatch(setUserData(result.data))
      console.log(result.data)
    } catch (error) {
      console.log(error)
      dispatch(setUserData(null))
    }
  }
  getUser()
 },[dispatch])
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/interview' element={<InterviewPage/>}/>
      <Route path='/history' element={<History/>}/>
      

    </Routes>
    )
}

export default App
