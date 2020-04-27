import React, { useState } from 'react'
import { useHistory} from "react-router-dom"
import { authenticAxios } from '../utils/authenticAxios';

const SignUp = () => {
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

    const handleSignUp = event => {
        event.preventDefault();
        authenticAxios()
          .post('/', user)
          .then(res => {
            console.log(res)
            push('/')
            push('/')
          })
          .catch(err => console.log('Login Error:', err))
      }

    return (
        <div>
            <h1>MedCabinet</h1>
            <form onSubmit={handleSignUp}>
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
                <button onClick= {() => push('/')}>Submit</button>
            </form>
        </div>
    )
}

export default SignUp