import React from "react";
import { useNavigate } from "react-router-dom";



export default function Login(){
const navigate = useNavigate();
	return(
		<>
			<div className="login-block min-h-screen flex justify-center items-center relative bg-primary-color text-white">
					<div className="login-width w-full max-w-395px p-4 flex flex-col justify-center items-center relative">
						<img src="images/login-logo.png" alt="login-logo" />
						<p className="Sign-in__heading font-bold pt-4 text-28px">Sign in</p>
						<p className="text-center pt-4 text-base font-normal leading-25px text-text-color">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit </p>
						<form className="w-full mt-6">
								<div className="email-input flex flex-col pt-4">
									<label for="Email" className="text-base font-medium">Email</label>
									<input type="Email" id="Email" name="Email" className="bg-transparent focus:outline-none focus:border-secondary-color border-solid border-[1px] border-white/10 rounded-10px p-4 mt-2 text-white" />
								</div>
								<div className="password-input flex flex-col pt-4 mt-4">
									<label for="Password" className="text-base font-medium">Password</label>
									<input type="Password" id="Password" name="Password" className="bg-transparent focus:outline-none focus:border-secondary-color border-solid border-[1px] border-white/10 rounded-10px p-4 mt-2 text-white" />
								</div>
								<div className="forgot-password_text flex flex-col items-end py-4">
									<span className="text-secondary-color text-xs cursor-pointer" onClick={()=>navigate('/forgot')}>Forgot Password?</span>
								</div>
								<button type="submitg" className="btn-primary rounded-10px login-btn w-full p-5 mt-4 text-lg font-medium">Login</button>
								<div className="flex gap-2 items-center my-4">
									<span className="block w-full h-[1px] bg-white/10"></span>
									<span className="font-medium">or</span>
									<span className="block w-full h-[1px] bg-white/10"></span>
								</div>
								<div className="social-icon-box flex justify-center items-center gap-4 pb-4">
									<div className="twitter-icon__box bg-light-blue p-5 rounded-10px cursor-pointer">
										<img src="images/twitter.png" alt="twitter" />
									</div>
									<div className="facebook-icon__box bg-light-blue p-5 rounded-10px cursor-pointer">
										<img src="images/facebook.png" alt="facebook" />
									</div>
								</div>
								<div className="account_block">
									<p className="text-center text-sm font-medium cursor-pointer leading-16px">Don’t have an account? <span className="text-secondary-color">Sign Up</span></p>
								</div>
						</form> 
						<div className="message-box fixed w-full px-4 left-50 flex justify-end bottom-6 mx-auto">
							<span className="p-4 bg-secondary-color rounded-full cursor-pointer"><img src="/images/message.png" alt="message-icon" /></span>
						</div>
					</div>
			</div>
		</>
	)
}


