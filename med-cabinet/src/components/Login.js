import React, { useState } from 'react'
import { useHistory} from "react-router-dom"
import { authenticAxios } from '../utils/authenticAxios';

const Login = () => {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',

    })
    const { push } = useHistory();

    const handleChange = event => {
        event.persist()
        setUser({
    
          ...user,
          [event.target.name]: event.target.value
    
        })

        
    }

    const handleSignChange = event =>{
        event.persist()
        setNewUser({
    
            ...newUser,
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

      const handleSignUp = event => {
        event.preventDefault();
        authenticAxios()
          .post('/', newUser)
          .then(res => {
            console.log(res)
            push('/')
          })
          .catch(err => console.log('Sign Up Error:', err))
      }
    
    return (
        <>
            <h1>MedCabinet</h1>

            <div className= 'login'>
                <h2>Sign In</h2>
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
            </div>
            <div classname= 'sign'>
                <h2>Not a Member? Sign Up Today!</h2>
            <form onSubmit={handleSignUp}>
                <label htmlFor='name' name='name' >Name*</label>
                <input
                    type='text'
                    name='name'
                    value={newUser.name}
                    onChange={handleSignChange}
                />
                <br />
                <label htmlFor='email' name='email' >email*</label>
                <input
                    type='text'
                    name='email'
                    value={newUser.email}
                    onChange={handleSignChange}
                />
                <br/>
                <label htmlFor='password' name='password' >Password*</label>

                <input
                    type='password'
                    name='password'
                    value={newUser.password}
                    onChange={handleSignChange}
                />
                <br/>
                <button onClick= {() => {push('/')}}>Submit</button>
                </form>
            </div>
        </>
    )
    }
    export default Login
