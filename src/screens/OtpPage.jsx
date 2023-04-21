import React from "react";
import BackButton from "../component/BackButton";
import {IoMdLock} from "react-icons/io"

export default function OtpPage(){
    return(
        <>
          <div className="login-block min-h-screen flex flex-wrap justify-center items-start md:items-center relative bg-primary-color text-white">
					<div className="login-width w-full max-w-395px pt-16 px-4 pb-4 md:p-4 flex flex-col justify-center items-center relative">
                    <div className="w-full block md:hidden"><BackButton /></div>
                    <div className="eye-block flex flex-col items-center justify-center">
                            <span className="w-73px h-73px flex align-middle justify-center items-center border border-secondary-color rounded-full text-secondary-color text-26px"><IoMdLock /></span>
                    </div>
						<p className="Sign-in__heading font-bold pt-16 text-28px">Enter code</p>
						<p className="text-center pt-5 text-base font-normal leading-25px text-text-color">We sent OTP to your email</p>
						<form className="w-full mt-5">
								<div className="otp-input flex gap-4 justify-center">
                                    <input type="number" className="w-43px h-43px flex text-center bg-light-blue text-white rounded-md" placeholder="9" />
                                    <input type="number" className="w-43px h-43px flex text-center bg-light-blue text-white rounded-md" placeholder="2" />
                                    <input type="number" className="w-43px h-43px flex text-center bg-light-blue text-white rounded-md" placeholder="0" />
                                    <input type="number" className="w-43px h-43px flex text-center bg-light-blue text-white rounded-md" placeholder="1" />
                                    <input type="number" className="w-43px h-43px flex text-center bg-light-blue text-white rounded-md" placeholder="2" />
                                </div>
								<button type="submit" className="btn-primary rounded-10px login-btn w-full md:max-w-full max-w-345px h-64px mt-10 text-lg font-medium">Verify email</button>
						</form> 
					</div>
			</div>  
        </>
    )
}