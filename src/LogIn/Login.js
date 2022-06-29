import React, { useState, useRef, useEffect, useContext } from 'react'
import AuthContext from './context/AuthProvider';
import './Login.css'
import axios from './api/axios';
const LOGIN_URL = '/auth';


export default function Login() {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // set focus on user input when components load
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content=Type': 'application/json' },
                    withCredentials: true
                });
            console.log(JSON.stringify(response?.data));
            const assessToken = response?.data?.assessToken;
            const roles = response?.data?.roles; // roles are array
            setAuth({ user, pwd, roles, assessToken });
            setUser("");
            setPwd("");
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorised');
            } else {
                setErrMsg('Log in Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href='#'>Go to basket</a>
                    </p>
                </section>
            ) : (
                <section className='loginsection'>
                    {/* error message, aria-live assertive have the screen reader sets to error message as soon as the error occurs */}
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
                    <h1 className='signinslogn'>Sign In</h1>
                    <form onSubmit={handleSubmit} className='login-wrapper'>
                        <label htmlFor='username'>Username:</label>
                        <input
                            type="text"
                            id='username'
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => { setUser(e.target.value) }}
                            value={user}
                            required
                        />
                        <label htmlFor='password'>Password:</label>
                        <input
                            type="password"
                            id='password'
                            onChange={(e) => { setPwd(e.target.value) }}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className='line'>
                            <a href='#'>Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

