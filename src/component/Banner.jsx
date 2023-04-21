const Banner =()=>{
    return(
        <>
            <div className="Banner_wrapper">
                <div className="page-width">
                    <div className="banner-content md:max-w-700px max-w-345px mx-auto text-white flex flex-col justify-center items-center py-10 md:pt-32">
                        <h1 className="text-32px leading-10 md:leading-none md:text-6xl text-center font-bold mb-6">Where content blends with your reality</h1>
                        <span className="text-center md:text-lg text-sm font-normal text-text-color">Unblock boundless interaction with your fav creator</span>
                        <div className="banner-button mt-10 flex gap-4 flex-wrap justify-center">
                            <button className="rounded-lg btn-primary w-[150px] h-[51px] text-sm font-medium">Sign up as a fan</button>
                            <button className="rounded-lg btn-secondary w-[150px] h-[51px] text-sm font-medium">Become a creator</button>
                        </div>
                    </div>
                </div>     
            </div>        
        
        
        </>

    )
}

export default Banner;