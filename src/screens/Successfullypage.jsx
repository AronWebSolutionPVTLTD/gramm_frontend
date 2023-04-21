import React from "react";
import {BsCheckCircleFill} from 'react-icons/bs'

export default function Successfullypage(){
    return(
        <>
         <div className="login-block min-h-screen flex flex-wrap justify-center items-center relative bg-primary-color text-white">
				<div className="login-width w-full max-w-395px py-60 px-4 grid min-h-screen content-between relative">
                        <div className="empty-block">

                        </div>
                        <div className="eye-block flex flex-col items-center justify-center">
                            <span className="w-73px h-73px flex align-middle justify-center items-center border border-secondary-color rounded-full text-secondary-color text-26px"><BsCheckCircleFill /></span>
                            <p className="Sign-in__heading font-bold text-28px text-center pt-16">Your password has been changed successfully</p>
						    <p className="text-center pt-4 text-base font-normal leading-25px text-text-color">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit</p>   
                        </div>                 
						<form className="w-full">
							<button type="submitg" className="btn-primary rounded-10px login-btn w-full p-5 mt-4 text-lg font-medium">Sign In</button>
						</form> 
				</div>
			</div>         
        </>
    )
}