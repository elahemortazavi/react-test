import React, { useEffect } from 'react';

const Login = () => {

     useEffect(() => {
        document.title = "login page"

    }, [])

    return (
        <div>
            <h1>Login page</h1>
        </div>
    );
};

export default Login;