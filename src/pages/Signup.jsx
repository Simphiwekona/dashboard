// Login.jsx
import React from 'react';
import './styles/Login.css';
import {useNavigate} from 'react-router-dom';

const Signup = ({ onLogin }) => {
    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const navigate = useNavigate();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await fetch("http://localhost:8085/api/v1/register", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                }, body: JSON.stringify(formData),
            });
            if (response.ok) {
                navigate('/login')
            }else{
                console.log("error");
            }
        }catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="login-container">
            <h2>Signup</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    {/*<label htmlFor="username">Username:</label>*/}
                    <input type="text" value={formData.firstName} name="firstName" placeholder="Enter First Name"/>
                </div>
                <div className="form-group">
                    {/*<label htmlFor="password">Password:</label>*/}
                    <input type="text" value={formData.lastName} name="lastName" placeholder="Enter Last Name"/>
                </div>
                <div className="form-group">
                    {/*<label htmlFor="username">Username:</label>*/}
                    <input type="email" value={formData.email} name="email" placeholder="Enter Email"/>
                </div>
                <div className="form-group">
                    {/*<label htmlFor="password">Password:</label>*/}
                    <input type="password" value={formData.password} name="password" placeholder="Enter password"/>
                </div>
                <div className="form-group">
                    {/*<label htmlFor="password">Password:</label>*/}
                    <input type="password" value={formData.confirmPassword} name="confirmpassword" placeholder="Enter Confirm Password"/>
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
