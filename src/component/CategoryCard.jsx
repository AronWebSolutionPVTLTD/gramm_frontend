import React from "react";

const CategoryCard =()=>{
    return(
        <div className="rounded-10px pt-4 pb-5 px-5 bg-black-1">
            <div className="flex flex-wrap items-center">
                <div className="w-14 h-14 mr-4 rounded-full border border-secondary-color p-[2px]"><img className="block object-cover w-full h-full rounded-full" src="images/garin-chadwick-XNf_s_upjso-unsplash 1.png" alt="card1" /></div>
                <div>
                    <p className="sm:text-xl text-xs font-medium text-white">Veronica Collins</p>
                    <p className="text-grey-color sm:text-base text-10px ">@liblaizz</p>
                </div>
            </div>
            <div className="mt-5"><img className="rounded-md block w-full" src="images/julia-rekamie-Z72YujnOrlY-unsplash 1.png" alt="main-card-image" /></div>
        </div>
    )
}
export default CategoryCard; 