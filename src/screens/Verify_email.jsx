import React from "react";
import BackButton from "../component/BackButton";
import {AiFillEye} from 'react-icons/ai'
import {MdMail} from 'react-icons/md'

export default function Verify_email(){
    return(
        <>
         <div className="login-block min-h-screen flex flex-wrap justify-center items-center relative bg-primary-color text-white">
				<div className="login-width w-full max-w-395px py-60px px-4 grid min-h-screen content-between relative">
                        <span className="text-lg grid place-items-center relative opacity-100 visible md:opacity-0 md:invisible"><span className="w-full flex items-center absolute"><BackButton /></span> Forgot Password</span>
                        <div className="eye-block flex flex-col items-center justify-center">
                            <span className="w-73px h-73px flex align-middle justify-center items-center border border-secondary-color rounded-full text-secondary-color text-26px"><MdMail /></span>
                            <p className="Sign-in__heading font-bold pt-16 text-28px">Verify your email</p>
                            <p className="text-center pt-4 text-base font-normal leading-25px text-text-color">Please, check your email. We have sent you a reset password link to </p>
                            <span className="text-secondary-color text-sm cursor-pointer pt-4">samsmith67@gmail.com</span>
                        </div>
						<form className="w-full">
								<button type="submitg" className="btn-primary rounded-10px login-btn w-full p-5 mt-4 text-lg font-medium">Open mail box</button>
						</form> 
				</div>
			</div> 
        </>
    )
}