import Logo from '../assets/Images/Solara_logo_1.webp';
function Header () {
    return (
        <header className="nr-header bg-black py-[10px] absolute w-[100%] bg-transparent z-10">
            <div className="nr-container">
                <div className="nr-header-flx-wr flex items-center flex-col gap-[20px]">
                    <div className="nr-header-logo-wr">
                        <img className='h-[100%] w-[100%] max-h-[50px] object-contain' src={Logo} alt="Vite logo" width="32" height="32" />
                    </div>
                    <div className="nr-header-nav">
                        <ul className='nr-nav-inner flex items-center gap-[20px] justify-center'>
                            <li className='nr-nav-item'>
                                <a href="" className='nr-item-inner uppercase text-[14px] text-white'>About</a>
                            </li>
                            <li className='nr-nav-item'>
                                <a href="" className='nr-item-inner uppercase text-[14px] text-white'>Cacao</a>
                            </li>
                            <li className='nr-nav-item'>
                                <a href="" className='nr-item-inner uppercase text-[14px] text-white'>Rituals</a>
                            </li>
                            <li className='nr-nav-item'>
                                <a href="" className='nr-item-inner uppercase text-[14px] text-white'>Learn</a>
                            </li>
                            <li className='nr-nav-item'>
                                <a href="" className='nr-item-inner uppercase text-[14px] text-white'>Origin</a>
                            </li>
                            <li className='nr-nav-item'>
                                <a href="" className='nr-item-inner uppercase text-[14px] text-white'>Recipes</a>
                            </li>
                            <li className='nr-nav-item'>
                                <a href="" className='nr-item-inner uppercase text-[14px] text-white'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
};
export default Header;