import React from 'react';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { Routes, Route, Navigate } from 'react-router';
import { UserContext } from '../../UserContext';
import styles from './Login.module.css'

const Login = () => {
    const { login } = React.useContext(UserContext)

    if (login === true) return <Navigate to="/conta" />
    return (
        <div className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path='/' element={<LoginForm />} />
                    <Route path='criar' element={<LoginCreate />} />
                    <Route path='perdeu' element={<LoginPasswordLost />} />
                    <Route path='/resetar' element={<LoginPasswordReset />} />
                </Routes>
            </div>
        </div>
    );
};

export default Login;
