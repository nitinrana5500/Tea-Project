import Banner from '@/components/banner';
import banner from '@/assets/Images/banner.jpg'
function Rituals() {
    return (
        <>
            <Banner 
                Heading="Your new ritual"
                Description="Solara ceremonial cacao revives ancient benefits to support your body, clear your mind, and make space for what matters."
                buttonText="Start your rituals"
                align="center"
                bannerImg={banner}
            />
        </>
    )
};
export default Rituals;