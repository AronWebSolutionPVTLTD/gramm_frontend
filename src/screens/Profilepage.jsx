import React from "react";
import {BsUpload} from "react-icons/bs"
export default function Profilepage(){
    return(
        <>
            <div className="login-block min-h-screen flex justify-center items-center relative bg-primary-color text-white">
					<div className="login-width w-full max-w-395px p-4 flex flex-col justify-center items-center relative">						
						<p className="Sign-in__heading font-bold pt-4 text-28px">Complete Profile</p>
						<p className="text-center pt-4 text-base font-normal leading-25px text-text-color">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint Velit </p>
                        <div className="choose_file flex flex-col justify-center gap-10 items-center bg-black-20 w-full max-w-333px h-197px mt-9 rounded-3xl">
                            <span className="text-4xl font-bold text-dark-3c"><img src="/images/upload.png" alt="" /></span>
                            <label for="myFile" className="btn-primary rounded-10px login-btn w-full text-base font-medium max-w-285px h-44px flex justify-center items-center">Choose Profile Picture
                                <input type="file" id="myFile" name="filename" className="hidden"/>
                            </label>
                        </div>
                        <form className="w-full mt-6">
                                <div className="Name-input flex flex-col">
									<label for="Name" className="text-base font-medium">Username</label>
									<input type="Name" id="Name" name="Name" className="bg-transparent focus:outline-none focus:border-secondary-color border-solid border-[1px] border-white/10 rounded-10px p-4 mt-2 text-white" />
								</div>
                                <div className="Bio-input flex flex-col pt-3">
									<label for="Bio" className="text-base font-medium">Bio</label>
									<textarea rows="7" cols="50" name="comment" form="usrform" className="mb-4 bg-transparent focus:outline-none focus:border-secondary-color border-solid border-[1px] border-white/10 rounded-10px p-4 mt-2 text-light-black">
                                    Lorem ipsum dolor sit
                                    </textarea>
                                </div>                                                               
								<button type="submitg" className="btn-primary rounded-10px login-btn w-full max-w-full h-64px text-lg font-medium">Get Started</button>							
								<div className="account_block pt-4">
									<p className="text-center text-sm font-medium cursor-pointer leading-16px"><span className="text-secondary-color ps-1">Skip</span></p>
								</div>
						</form> 
					</div>
			</div>
        </>
    )
}