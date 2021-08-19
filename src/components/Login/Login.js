import React, { useState } from "react";
import "./login.css";
import Card from "./Card";
import openEye from "./openeye.svg";
import closeEye from "./closeeye.svg";
import Media from "react-media";

const Login = () => {
	const [emailFocused, setEmailFocus] = useState(false);
	const [PasswordFocused, setPasswordFocus] = useState(false);
	const [eyeOpened, setEyeState] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const EmailFocusChanged = (e) => {
		setEmailFocus(!emailFocused);
	};
	const PasswordFocusChanged = (e) => {
		setPasswordFocus(!PasswordFocused);
	};
	const ChangeEyeState = (e) => {
		setEyeState(!eyeOpened);
	};
	const SubmitHandler = (e) => {
		console.log(email, password);
	};
	return (
		<div className='login-main'>
			<div className='login-card'>
				<Media query='(min-width: 845px)'>
					{(matches) => {
						return matches ? (
							<div className='card-holder'>
								<div className='login-profile'>
									<div className='login-profile-cards'></div>
									<div className='login-profile-cards'></div>
									<Card />
								</div>
							</div>
						) : null;
					}}
				</Media>
				<div className='login-form'>
					<div className='login-header'>
						<p className='login-head'>Login</p>
						<div className='google-login'>
							<img
								alt='google'
								className='google-logo'
								src='https://img.icons8.com/color/240/000000/google-logo.png'
							/>
							<div className='google-login-head'>
								Login with Google
							</div>
						</div>
					</div>
					<div className='login-divisor'>
						<div className='divisor-line'></div>
						<div className='divisor-line'></div>
						<p className='email-login-text'>or login with email</p>
					</div>
					<div className='manual-login'>
						<label
							for='login-email'
							style={
								emailFocused
									? {
											transformOrigin: "left",
											transform: "scale(1.2)",
									  }
									: {}
							}>
							Email
						</label>
						<input
							type='text'
							id='login-email'
							Maxlength='35'
							onFocus={(e) => EmailFocusChanged(e)}
							onBlur={(e) => EmailFocusChanged(e)}
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							autoComplete='off'
						/>
						<label
							for='login-password'
							style={
								PasswordFocused
									? {
											transformOrigin: "left",
											transform: "scale(1.2)",
									  }
									: {}
							}>
							Password
						</label>
						<div className='login-password-div'>
							<input
								type={eyeOpened ? "text" : "password"}
								id='login-password'
								Maxlength='35'
								onFocus={(e) => PasswordFocusChanged(e)}
								onBlur={(e) => PasswordFocusChanged(e)}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								autoComplete='off'
							/>
							{eyeOpened ? (
								<img
									alt='open eye'
									src={openEye}
									className='login-eye'
									onClick={(e) => ChangeEyeState(e)}
								/>
							) : (
								<img
									alt='close eye'
									src={closeEye}
									className='login-eye'
									onClick={(e) => ChangeEyeState(e)}
								/>
							)}
						</div>
						<div
							className='login-button'
							onClick={(e) => SubmitHandler(e)}>
							Login
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
