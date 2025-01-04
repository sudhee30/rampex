import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("http://localhost:3001/Login", {
                email: email,
                password: password,
            });

            console.log(response.data); // For debugging, check the response
            navigate("/Home"); // Redirect to the home page upon successful login
        } catch (error) {
            console.error(error.response.data.message);
            alert(error.response.data.message); // Show error message
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>Enter your Email:
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label><br />
                <label>Enter your Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label><br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
