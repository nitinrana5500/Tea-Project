import Banner from '../components/banner';
import Icon1 from '../assets/Images/icons-1.png';
import Icon2 from '../assets/Images/icons-2.png';
import Icon3 from '../assets/Images/icons-3.png';
import Icon4 from '../assets/Images/icons-4.png';
import Videobanner from '../components/video-banner'; 
function Home () {
    return (
        <>
            <Banner/>
            <section className="nr-rich-text py-[70px] bg-[#e4e2e2]">
                <div className="nr-container w-[100%] max-w-[1600px] px-[50px] h-[100%] m-auto">
                    <div className="nr-rich-flx-wr flex flex-col w-[100%] max-w-[700px] m-auto">
                        <h2 className='nr-hed text-[60px] text-[#693623] pb-[10px] leading-[1]'>What is Ceremonial Cacao?</h2>
                        <p className='nr-des text-[#693623] text-[16px]'>Most cocoa and cacao products today are heavily processed. Solara uses pure, minimally processed cacao from heirloom criollo varieties, chosen for their rich flavor and naturally high theobromine content.</p>
                    </div>
                </div>
            </section>
            <section className='nr-fir-mullticol bg-[#e8b25d] py-[50px]'>
                <div className="nr-container max-w-[1300px] px-[50px] mx-[auto]">
                    <div className="nr-hed-wr">
                        <h2 className='text-[60px] uppercase text-white leading-[1] italic pb-[20px]'>Benefits</h2>
                    </div>
                    <div className="nr-flx-wr flex justify-between gap-[20px]">
                        <div className="nr-multi-col-inner w-[25%] items-center flex flex-col text-center">
                            <img src={Icon2} alt="icons" className='h-[120px] w-[300px] object-contain'/>
                            <p className='text-[#693623] text-[20px] font-[600]'>Smooth, steady energy</p>
                        </div>
                        <div className="nr-multi-col-inner w-[25%] items-center flex flex-col text-center">
                            <img src={Icon3} alt="icons" className='h-[120px] w-[300px] object-contain'/>
                            <p className='text-[#693623] text-[20px] font-[600]'>Supports mood & creativity</p>
                        </div>
                        <div className="nr-multi-col-inner w-[25%] items-center flex flex-col text-center">
                            <img src={Icon4} alt="icons" className='h-[120px] w-[300px] object-contain'/>
                            <p className='text-[#693623] text-[20px] font-[600]'>Encourages calm focus</p>
                        </div>
                        <div className="nr-multi-col-inner w-[25%] items-center flex flex-col text-center">
                            <img src={Icon1} alt="icons" className='h-[120px] w-[300px] object-contain'/>
                            <p className='text-[#693623] text-[20px] font-[600]'>Rich in natural antioxidants</p>
                        </div>
                    </div>
                </div>
            </section>
            <Videobanner/>
        </>
        
    )
};
export default Home;