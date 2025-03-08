import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signup.css'; // Make sure the CSS is correctly imported

const SignUp: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();

    const handleSignUp = () => {
        // Add sign-up logic here
        navigate('/signup'); // Redirect to sign-up confirmation or another page
    };

    const navigateBack = () => {
        navigate('/signin'); // Navigate back to the sign-in page
    };

    return (
        <div className="sign-up-container">
            <div className="form">
                <h2>Sign Up</h2>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={handleSignUp}>Sign Up</button>
                <button onClick={navigateBack} className="secondary-button">Back to Sign In</button>
            </div>
        </div>
    );
};

export default SignUp;
