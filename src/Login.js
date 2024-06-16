import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

const LoginPage = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleLogin = () => {
        const message = `Logging in with: Username - ${username}, Password - ${password}`;
        window.alert(message);

        if (rememberMe) {
            localStorage.setItem('rememberedUsername', username);
            localStorage.setItem('rememberedPassword', password);
        } else {
            localStorage.removeItem('rememberedUsername');
            localStorage.removeItem('rememberedPassword');
        }

        setUsername('');
        setPassword('');

        onLoginSuccess();
        navigate('/home');
    };

    const handleSignUp = () => {
        console.log("Signing Up");
    };

    const handleForgotPassword = () => {
        console.log("Handling Forgot Password");
    };

    const handleRememberMeChange = () => {
        setRememberMe(!rememberMe);
    };

    React.useEffect(() => {
        const rememberedUsername = localStorage.getItem('rememberedUsername');
        const rememberedPassword = localStorage.getItem('rememberedPassword');

        if (rememberedUsername && rememberedPassword) {
            setUsername(rememberedUsername);
            setPassword(rememberedPassword);
            setRememberMe(true);
        }
    }, []);

    return (
        <div className='alphaContainerBox'>
            <div className='sideA'>
                <h2 className='titleA'>Sign In</h2>
                <form>
                    <div>
                        <label>Username:</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <div className='buttonContainer'>
                        <button type="button" className='loginBtn' onClick={handleLogin}>Log In</button>
                        <button type="button" className='forgotPasswordBtn' onClick={handleForgotPassword}>Forgot Password?</button>
                    </div>
                </form>
            </div>
            <div className='sideB'>
                <h2 className='titleB'>Welcome Back</h2>
                <h3 className="subtitleB">Don't have an account?</h3>
                <button type="button" onClick={handleSignUp}>Sign Up</button>
            </div>
        </div>
    );
};

export default LoginPage;
