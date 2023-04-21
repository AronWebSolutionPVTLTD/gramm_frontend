const Banner =()=>{
    return(
        <>
            <div className="Banner_wrapper">
                <div className="page-width">
                    <div className="banner-content text-white flex flex-col justify-center items-center md:h-[700px] h-[300px]">
                        <h1 className="text-3xl md:text-6xl text-center font-bold mb-6">Where content blends with your reality</h1>
                        <span className="text-center md:text-lg text-sm font-normal text-text-color">Unblock boundless interaction with your fav creator</span>
                        <div className="banner-button mt-10 flex gap-4">
                            <button className="rounded-lg btn-primary w-[150px] h-[51px] text-sm font-medium">Sign up as a fan</button>
                            <button className="rounded-lg btn-primary w-[150px] h-[51px] text-sm font-medium bg-white/90 border border-white/30">Become a creator</button>
                        </div>
                    </div>
                </div>    
            </div>        
        
        
        </>

    )
}

export default Banner;