import React, { useState } from 'react'
import '../view/css/Login.css'
import SubHeading from '../view/SubHeading.jsx'
import Finish from './Finish.jsx'
import Loginmodel from '../model/Loginmodel.js'
import {auth} from '../Firebase.js'
import {provider} from '../Firebase.js'
import { signInWithPopup } from 'firebase/auth'

function Login() {
  const [value,setValue] = useState('')
  const handleClick = () => {
      signInWithPopup(auth,provider).then((data)=>{
      setValue(data.user.email)
      localStorage.setItem("email",data.user.email)
    })
  }
  <Loginmodel/>
  return (
    <div className='app_login section_padding' id='login'>
      <div className='app_login-heading'>
        <SubHeading title="Newsletter"/>
        <h1 className='headtext_cormorant'>Subscribe for exclusive update</h1>
      </div>
      <div className='app_login-input flext_center'>
        {value?<Finish/> :
        <button  onClick = {handleClick} type='button' className='custom_button'>Signin With Google</button>
        }
      </div>
    </div>
  )
}

export default Login
