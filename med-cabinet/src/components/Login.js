import React, { useState } from 'react'
import { useHistory} from "react-router-dom"
import { authenticAxios } from '../utils/authenticAxios';

const Login = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })
    const { push } = useHistory();

    const handleChange = event => {
        setUser({
    
          ...user,
          [event.target.name]: event.target.value
    
        })
    }
    const handleLogin = event => {
        event.preventDefault();
        authenticAxios()
          .post('/', user)
          .then(res => {
            console.log(res)
            
          })
          .catch(err => console.log('Login Error:', err))
      }
    
    return (
        <>
            <h1>MedCabinet</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor='name' name='name' >Name*</label>
                <input
                    type='text'
                    name='name'
                    value={user.name}
                    onChange={handleChange}
                />
                <br />
                <label htmlFor='email' name='email' >email*</label>
                <input
                    type='text'
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                />
                <br/>
                <label htmlFor='password' name='password' >Password*</label>

                <input
                    type='password'
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                />
                <br/>
                <button>Login</button>
                
            </form>
            <button onClick={() => push('/signup')} >Sign Up</button>
        </>
    )
    }
    export default Login
