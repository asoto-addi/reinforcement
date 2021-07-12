import React from 'react'

export const Login = () => {






    return (
        <div>
            <h3>Login</h3>
            <div className='alert alert-info'>
                Loading...
            </div>
            <div className='alert alert-danger'>
                Not authenticated
            </div>
            <div className='alert alert-success'>
                Authenticated
            </div>

            <button className='btn btn-primary'>Log In</button>
            &nbsp;
            <button className='btn btn-danger'>Log Out</button>


        </div>
    )
}
