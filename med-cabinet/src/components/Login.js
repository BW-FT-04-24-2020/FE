import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { authenticAxios } from '../utils/authenticAxios';

const Login = () => {

    //login state
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    //sign up state
    const [newUser, setNewUser] = useState({
        name: '',
        email: '',
        password: '',

    })

    const { push } = useHistory();


    //handle changes on login form
    const handleChange = event => {
        event.persist()
        setUser({

            ...user,
            [event.target.name]: event.target.value

        })


    }

    //handles changes on sign up form
    const handleSignChange = event => {
        event.persist()
        setNewUser({

            ...newUser,
            [event.target.name]: event.target.value

        })
    }

    //handles login request
    const handleLogin = event => {
        event.preventDefault();
        authenticAxios()
            .post('/', user)
            .then(res => {
                console.log(res)

            })
            .catch(err => console.log('Login Error:', err))
    }

    //handles sign up request
    const handleSignUp = event => {
        event.preventDefault();
        authenticAxios()
            .post('/', newUser)
            .then(res => {
                console.log(res)
                alert('Sign Up Sucsessful!')
                push('/')
            })
            .catch(err => console.log('Sign Up Error:', err))
    }

    return (
        <>
            <h1>MedCabinet</h1>
            <div className='credDiv'>


                <div className='login'>
                    <h2>Sign In</h2>
                    <form onSubmit={handleLogin}>
                        <label htmlFor='name' name='name' >Name*</label>
                        <br />
                        <input
                            type='text'
                            name='name'
                            value={user.name}
                            onChange={handleChange}
                        />
                        <br />
                        <label htmlFor='email' name='email' >Email*</label>
                        <br />
                        <input
                            type='text'
                            name='email'
                            value={user.email}
                            onChange={handleChange}
                        />
                        <br />
                        <label htmlFor='password' name='password' >Password*</label>
                        <br />
                        <input
                            type='password'
                            name='password'
                            value={user.password}
                            onChange={handleChange}
                        />
                        <br />
                        <button>Login</button>

                    </form>
                </div>
                <div className='sign'>
                    <h2>Not a Member? <br/> Sign Up Today!</h2>
                    <form onSubmit={handleSignUp}>
                        <label htmlFor='name' name='name' >Name*</label>
                        <br />
                        <input
                            type='text'
                            name='name'
                            value={newUser.name}
                            onChange={handleSignChange}
                        />
                        <br />
                        <label htmlFor='email' name='email' >Email*</label>
                        <br />
                        <input
                            type='text'
                            name='email'
                            value={newUser.email}
                            onChange={handleSignChange}
                        />
                        <br />
                        <label htmlFor='password' name='password' >Password*</label>
                        <br />

                        <input
                            type='password'
                            name='password'
                            value={newUser.password}
                            onChange={handleSignChange}
                        />
                        <br />
                        <button onClick={() => { push('/') }}>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login
