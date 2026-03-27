import Banner from '../components/banner';
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
        </>
        
    )
};
export default Home;