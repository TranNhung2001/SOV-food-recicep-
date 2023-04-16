import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { LoginSocialGoogle } from 'reactjs-social-login';
import { useEffect } from "react";
import { getUsers } from "src/api/apiLogin";
import "src/assets/css/page/login.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassw] = useState("");
	// useEffect(() => {
		// const res = getUsers();
		    // setUsername(res);
		    // setPassw(res);
    // });

	const navigate = useNavigate();
	function handleLogin() {
		axios.post('http://localhost:3000/login', {username, password})
		  .then(response => {
			// Lưu token vào local storage
			localStorage.setItem('token', response.data.token);
	
			// Chuyển đến trang home
			navigate('/auth/dashboard');
		  })
		  .catch(error => {
			console.log(error);
		  });
	  }
	return (
		<div className='login-form'>
			<h2>Login</h2>
			<div className='content'>
				<form action="" >
					<div className="input-field">
						<input type="username" placeholder="Username" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
					</div>
					<div className='input-field'>
						<input type="password" placeholder="password" name="password" id="password" value={password} onChange={(e) => setPassw(e.target.value)} />
					</div>
					<div className="forgot">
						<Link to="/forgot" className="forgot">
							Forgot Password?
						</Link>
					</div>
					<div class="action">
						<button type="submit" onClick={handleLogin}>Login</button>
					</div>
					<div className='login1'> 
						<p style={{ textAlign: "center", marginTop: "15px", fontSize: "15px", marginBottom:"15px", color:"white" }}>Or log in with</p>
					</div>
					<div class="action">
						<button type="button" class="el-button social-login__button google el-button--default el-button--medium"><a href="#" class="social-button" id="google-connect"> <span>Google</span></a></button>
					</div>
				</form>
			</div>


			<div className="signup">
				<span className="alternative">
					Don't have an account?{' '}
					<Link to="/register" className="register">
						Sign up
					</Link>
				</span>
			</div>
		</div>
	)
}
export default Login;