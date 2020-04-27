import React, { useState } from 'react'


const SignUp = () => {
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
        <div>
            <h1>MedCabinet</h1>
            <form>
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
                <button>Submit</button>
            </form>
        </div>
    )
}
}
export default SignUp