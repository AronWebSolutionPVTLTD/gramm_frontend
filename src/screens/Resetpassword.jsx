import React from "react";
import BackButton from "../component/BackButton";
import {AiFillEye} from 'react-icons/ai'

export default function Resetpassword(){
    return(
        <>
            <div className="login-block min-h-screen flex flex-wrap justify-center items-center relative bg-primary-color text-white">
				<div className="login-width w-full max-w-395px p-4 flex flex-col justify-center items-center relative">
                    <div className="w-full flex align-middle absolute top-4"><BackButton /></div>
                        <span className="mb-32 text-lg">Forgot Password</span>
                        <div className="eye-block pb-16">
                            <span className="w-73px h-73px flex align-middle justify-center items-center border border-secondary-color rounded-full text-secondary-color text-26px"><AiFillEye /></span>
                        </div>
						<p className="Sign-in__heading font-bold pt-4 text-28px">Reset Password</p>
						<p className="text-center pt-4 text-base font-normal leading-25px text-text-color">Please, check your email. We have sent you a reset password link to </p>
                        <span className="text-secondary-color text-sm cursor-pointer pt-4">samsmith67@gmail.com</span>
						<form className="w-full mt-6">
								<button type="submitg" className="btn-primary rounded-10px login-btn w-full p-5 mt-4 text-lg font-medium">Open mail box</button>
						</form> 
				</div>
			</div> 
        </>
    )
}