import banner from '../assets/images/banner.jpg'
function Banner() {
    return (
        <section className="nr-banner bg-cover bg-center h-[100vh] pt-[168px] before:absolute before:content before:h-[100%] before:w-[100%] before:bg-[rgba(0,0,0,0.1)] before:left-0 before:top-0" style={{ backgroundImage: `url(${banner})` }}>
            <div className="nr-container w-[100%] max-w-[1300px] px-[50px] h-[100%] m-auto">
                <div className="nr-banner-flx-wr flex items-center h-[100%] relative z-10">
                    <div className="nr-banner-cntnt-wr text-left">
                        <h2 className='text-[80px] leading-[1] text-[#e8b25d] italic uppercase max-w-[500px]'>Your new ritual</h2>
                        <p className='text-[#e8b25d] text-[18px] max-w-[500px] my-[20px]'>Solara ceremonial cacao revives ancient benefits to support your body, clear your mind, and make space for what matters.</p>
                        <a href="#" className='bg-[#e8b25d] py-[10px] px-[50px] leading-[1.1] text-[#693623] text-[16px] capitalize rounded-[50px] w-[max-content] h-[53px] flex items-center justify-center hover:bg-white transition duration-[0.4s]'>Start your rituals</a>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Banner;