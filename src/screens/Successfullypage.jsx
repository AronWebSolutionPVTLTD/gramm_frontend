import React from "react";
import {BsCheckCircleFill} from 'react-icons/bs'

export default function Successfullypage(){
    return(
        <>
         <div className="login-block min-h-screen flex flex-wrap justify-center items-center relative bg-primary-color text-white">
				<div className="login-width w-full max-w-395px p-4 flex flex-col justify-center items-center relative">
                        <div className="eye-block pb-16">
                            <span className="w-73px h-73px flex align-middle justify-center items-center border border-secondary-color rounded-full text-secondary-color text-26px"><BsCheckCircleFill /></span>
                        </div>
						<p className="Sign-in__heading font-bold text-28px text-center">Your password has been changed successfully</p>
						<p className="text-center pt-4 text-base font-normal leading-25px mb-60 text-text-color">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit</p>                    
						<form className="w-full mt-6">
							<button type="submitg" className="btn-primary rounded-10px login-btn w-full p-5 mt-4 text-lg font-medium">Sign In</button>
						</form> 
				</div>
			</div>         
        </>
    )
}