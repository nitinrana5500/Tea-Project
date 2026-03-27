import Logo from '../assets/images/solara_logo_1.webp';
function Footer () {
    return(
        <footer className="bg-[#b8b8b8] py-[50px]">
            <div className="nr-container w-[100%] max-w-[1600px] px-[50px] h-[100%] m-auto">
                <div className="nr-footer-flx-wr flex">
                    <div className="nr-footer-lft text-left w-[25%]">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="nr-footer-rght w-[75%]">
                        <div className='flex align-top w-[100%] gap-[20px]'>
                            <ul className="nr-footer-menu text-left w-[20%] flex flex-col gap-[10px]">
                                <li>
                                    <a href="" className="nr-footer-menu-item uppercase text-[16px] text-white">About</a>
                                </li>
                                <li>
                                    <a href="" className="nr-footer-menu-item uppercase text-[16px] text-white">Shop</a>
                                </li>
                                <li>
                                    <a href="" className="nr-footer-menu-item uppercase text-[16px] text-white">Rituals</a>
                                </li>
                            </ul>
                            <ul className="nr-footer-menu text-left w-[20%] flex flex-col gap-[10px]">
                                <li>
                                    <a href="" className="nr-footer-menu-item uppercase text-[16px] text-white">Learn</a>
                                </li>
                                <li>
                                    <a href="" className="nr-footer-menu-item uppercase text-[16px] text-white">origin</a>
                                </li>
                                <li>
                                    <a href="" className="nr-footer-menu-item uppercase text-[16px] text-white">Recipe</a>
                                </li>
                            </ul>
                            <ul className="nr-footer-menu text-left w-[35%] flex flex-col gap-[10px]">
                                <li>
                                    <a href="" className="nr-footer-menu-item uppercase text-[16px] text-white">support</a>
                                </li>
                                <li>
                                    <a href="" className="nr-footer-menu-item uppercase text-[16px] text-white">returns and refunds</a>
                                </li>
                                <li>
                                    <a href="" className="nr-footer-menu-item uppercase text-[16px] text-white">shipping policy</a>
                                </li>
                                <li>
                                    <a href="" className="nr-footer-menu-item uppercase text-[16px] text-white">order fulfilment and tracking</a>
                                </li>
                            </ul>
                            <div className="nr-footer-brand-info text-left w-[25%] flex flex-col gap-[10px]">
                                <p className="nr-footer-label text-white text-[16px] uppercase">Contact us</p>
                                <p className="text-white">Do you have questions about your order?  If so, please email us at
                                    <a href="#">test@gmail.com</a>
                                </p>
                            </div>
                        </div>
                        <div className="nr-footer-btm-bar flex flex-col gap-[20px] pt-[30px]">
                            <p className='text-white text-[16px] border-white border-t-[1px] border-b-[1px] text-start py-[10px]'>The support team responds to email requests between the hours of 8 AM to 1 PM GMT, Monday through Friday.
                                Please give us 48 hours to respond to your requests. 
                            </p>
                            <p className='text-left text-[16px] text-white'>© All Copyright Nitin Project</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};
export default Footer;