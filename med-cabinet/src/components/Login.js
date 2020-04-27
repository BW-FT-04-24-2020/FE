import React, { useState } from 'react'


const Login = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })
    
    const handleChange = event => {
        setUser({
    
          ...user,
          [event.target.name]: event.target.value
    
        })
    return (
        <>
            <h1>MedCabinet</h1>
            <form>
                <label htmlFor='name' name='name' >Name*</label>
                <input
                    type='text'
                    name='name'
                    value={user.name}
                />
                <br />
                <label htmlFor='email' name='email' >email*</label>
                <input
                    type='text'
                    name='email'
                    value={user.email}
                />
                <br/>
                <label htmlFor='password' name='password' >Password*</label>

                <input
                    type='password'
                    name='password'
                    value={user.password}
                />
                <br/>
            </form>
        </>
    )
}
export default Login