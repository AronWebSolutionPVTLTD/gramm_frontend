import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai"

export default function Signup(){
    const navigate = useNavigate();
    return (
        <>
            <div className="login-block min-h-screen flex justify-center items-center relative bg-primary-color text-white">
					<div className="login-width w-full max-w-395px p-4 flex flex-col justify-center items-center relative">						
						<p className="Sign-in__heading font-bold pt-4 text-28px">Create an account</p>
						<p className="text-center pt-4 text-base font-normal leading-25px text-text-color">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit </p>
						<form className="w-full mt-6">
                                <div className="Name-input flex flex-col">
									<label for="Name" className="text-base font-medium">Name</label>
									<input type="Name" id="Name" name="Name" className="bg-transparent focus:outline-none focus:border-secondary-color border-solid border-[1px] border-white/10 rounded-10px p-4 mt-2 text-white" />
								</div>
								<div className="email-input flex flex-col pt-3">
									<label for="Email" className="text-base font-medium">Email</label>
									<input type="Email" id="Email" name="Email"  placeholder="samsmith67@gmail.com" className="bg-transparent focus:outline-none focus:border-secondary-color border-solid border-[1px] border-white/10 rounded-10px p-4 mt-2 text-white" />
								</div>
                                <span className="text-secondary-color flex gap-3 items-center my-3 text-base font-medium"> <FaPhoneAlt /> Use phone instead</span>
								<div className="password-input flex flex-col ">
									<label for="Password" className="text-base font-medium">Password</label>
									<div className="relative w-full">
                                    <input type="Password" id="Password" name="Password" placeholder="abc@123"  className="w-full bg-transparent focus:outline-none focus:border-secondary-color border-solid border-[1px] border-white/10 rounded-10px p-4 mt-2 text-white" />
                                    <span className="absolute top-2/4 right-3 text-light-black"><AiFillEye /></span>
                                    </div>
                                </div>
                                <div className="birthday-input flex flex-col pt-3">
									<label for="birthday" className="text-base font-medium">DOB</label>
									<input type="date" id="birthday" name="birthday" className="bg-transparent focus:outline-none focus:border-secondary-color border-solid border-[1px] border-white/10 rounded-10px p-4 mt-2 text-white" />
								</div>
                                <div className="Referral-input flex flex-col pt-3">
									<label for="Referral" className="text-base font-medium">Referral Code (Optional)</label>
									<input type="Name" id="Referral" name="Referral" className="bg-transparent focus:outline-none focus:border-secondary-color border-solid border-[1px] border-white/10 rounded-10px p-4 mt-2 text-white" />
								</div>
                                <span className="text-secondary-color block mt-3 text-xs">Check referral</span>
                                <div className="Referral-input flex items-center gap-2 text-xs pt-3 pb-5">
									<input type="checkbox" id="Referral" name="Referral" className="bg-transparent focus:outline-none focus:border-secondary-color border-solid border-[1px] border-white/10 rounded-10px p-4 text-white" />
                                    <span>I agree to all T&C and Privacy Policy</span>
                                </div>                                
								<button type="submitg" className="btn-primary rounded-10px login-btn w-full p-5 text-lg font-medium">Continue</button>							
								<div className="account_block pt-4">
									<p className="text-center text-sm font-medium cursor-pointer leading-16px">Already have an account?<span className="text-secondary-color ps-1">Log In</span></p>
								</div>
						</form> 
					</div>
			</div>
        </>
    )
}