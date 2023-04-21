import React from "react";
import BackButton from "../component/BackButton";

export default function Setnewpassword(){
    return(
        <>
         <div className="login-block min-h-screen flex flex-wrap justify-center items-start md:items-center relative bg-primary-color text-white">
					<div className="login-width w-full max-w-395px pt-16 px-4 pb-4 md:p-4 flex flex-col justify-center items-center relative">
                    <div className="w-full block md:hidden"><BackButton /></div>
						<p className="Sign-in__heading font-bold pt-4 text-28px">Set new password</p>
						<p className="text-center pt-4 text-base font-normal leading-25px text-text-color">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit</p>
						<form className="w-full mt-20">
								<div className="email-input flex flex-col pt-4">
									<label for="Email" className="text-base font-medium">Email</label>
									<input type="Email" id="Email" name="Email" className="bg-transparent focus:outline-none focus:border-secondary-color border-solid border-[1px] border-white/10 rounded-10px p-4 mt-2 text-white" />
								</div>
                                <div className="password-input flex flex-col pt-4 mt-4">
									<label for="Password" className="text-base font-medium">Password</label>
									<input type="Password" id="Password" name="Password" className="bg-transparent focus:outline-none focus:border-secondary-color border-solid border-[1px] border-white/10 rounded-10px p-4 mt-2 text-white" />
								</div>
								<button type="submitg" className="btn-primary rounded-10px login-btn w-full p-5 mt-4 text-lg font-medium">Confirm</button>
						</form> 
					</div>
			</div>       
        </>
    )
}