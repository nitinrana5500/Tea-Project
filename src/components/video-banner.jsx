import Video from '../assets/videos/d26aa98c3f714133a5a7b64e3424e64d.mp4';
function Videobanner (){
    return(
        <section className="nr-video-banner relative before:absolute before:content before:top-0 before:left-0 before:bg-[rgba(0,0,0,0.4)] before:h-[100%] before:w-[100%]">
            <div className="nr-container">
                <div className="nr-video-wr relative">
                    <video  autoPlay loop muted playsInline className='h-[500px] w-[100%] object-cover'>
                        <source src={Video} type="video/mp4" />
                    </video>
                    <div className="nr-cntnt-wr absolute translate-[-50%] left-[50%] top-[50%] flex flex-col items-center gap-[50px]">
                        <h2 className='nr-video-banner-hed-wr text-[60px] text-white italic leading-[1]'>How do you like your cup?</h2>
                        <button className='nr-video-banner-btn block leading-1 bg-[#e8b25d] text-white h-[50px] w-[250px] rounded-[50px] cursor-pointer items-center justify-center'>How you might brew</button>
                    </div>
                </div>
            </div>
        </section>
    )
};
export default Videobanner;