import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signin.css'; // 

const SignIn: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSignIn = () => {
       
        navigate('/dashboard'); // Redirect to dashboard after sign in
    };

    const navigateToSignUp = () => {
        navigate('/signup'); // Navigate to the sign-up page
    };

    return (
        <div className="sign-in-container">
            <div className="form">
                <h2>Sign In</h2>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSignIn}>Sign In</button>
                <button onClick={navigateToSignUp} className="secondary-button">Sign Up</button>
            </div>
        </div>
    );
};

export default SignIn;
