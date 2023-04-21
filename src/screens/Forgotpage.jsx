import React from "react";
import BackButton from "../component/BackButton";

export default function Forgotpage(){
    return(
        <>
         <div className="login-block min-h-screen flex flex-wrap justify-center items-start md:items-center relative bg-primary-color text-white">
					<div className="login-width w-full max-w-395px p-4 flex flex-col justify-center items-center relative">
                    <div className="w-full block md:hidden"><BackButton /></div>
						<p className="Sign-in__heading font-bold pt-4 text-28px">Forgot Password</p>
						<p className="text-center pt-4 text-base font-normal leading-25px text-text-color">Please, enter your email to receive a reset link </p>
						<form className="w-full mt-6">
								<div className="email-input flex flex-col pt-4">
									<label for="Email" className="text-base font-medium">Email</label>
									<input type="Email" id="Email" name="Email" className="bg-transparent focus:outline-none focus:border-secondary-color border-solid border-[1px] border-white/10 rounded-10px p-4 mt-2 text-white" />
								</div>
								<div className="forgot-password_text flex flex-col items-end py-4">
									<span className="text-secondary-color text-xs cursor-pointer">Forgot Password?</span>
								</div>
								<button type="submitg" className="btn-primary rounded-10px login-btn w-full p-5 mt-4 text-lg font-medium">Confirm</button>
						</form> 
					</div>
			</div>   
        </>
    )
}