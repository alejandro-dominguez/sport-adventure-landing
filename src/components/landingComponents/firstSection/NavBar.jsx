import { useState } from 'react';
import { BsCaretDownFill } from 'react-icons/bs';
import { HeroCarousel } from '.';
import { scrollToElement } from '../../../utilities';
import logo from '../../../assets/logo-sport-W-stacked.svg';

const NavBar = ({ heroCarouselImgsData }) => {
    const [firstDropDown, setFirstDropDown] = useState(false)
    const [secondDropDown, setSecondDropDown] = useState(false)
    const [dropDownLayer, setDropDownLayer] = useState(false)
    const [thirdDropDown, setThirdDropDown] = useState(false)

    const openFirstMenu = () => {
        if (secondDropDown) {
            setSecondDropDown(false)
            setFirstDropDown(true)
            document.querySelector('.app-container').style.overflowY = 'hidden'
            document.querySelector('.hero-carousel-slider').style.pointerEvents = 'none'
            document.querySelector('.featured-products-container').style.pointerEvents = 'none'
        }
        if (thirdDropDown) {
            setThirdDropDown(false)
            setFirstDropDown(true)
            document.querySelector('.app-container').style.overflowY = 'hidden'
            document.querySelector('.hero-carousel-slider').style.pointerEvents = 'none'
            document.querySelector('.featured-products-container').style.pointerEvents = 'none'
        }
        if (firstDropDown) {
            setFirstDropDown(false)
            document.querySelector('.app-container').style.overflowY = 'scroll'
            document.querySelector('.hero-carousel-slider').style.pointerEvents = "auto"
            document.querySelector('.featured-products-container').style.pointerEvents = 'auto'
        }
        if (dropDownLayer) {
            setDropDownLayer(false)
            setFirstDropDown(false)
            document.querySelector('.app-container').style.overflowY = 'scroll'
            document.querySelector('.hero-carousel-slider').style.pointerEvents = 'auto'
            document.querySelector('.featured-products-container').style.pointerEvents = 'auto'
        }
        if (!firstDropDown) {
            setFirstDropDown(true)
            document.querySelector('.app-container').style.overflowY = 'hidden'
            document.querySelector('.hero-carousel-slider').style.pointerEvents = 'none'
            document.querySelector('.featured-products-container').style.pointerEvents = 'none'
        }
    }

    const closeFirstMenu = () => {
        if (dropDownLayer) {
            setDropDownLayer(false)
        }
        setFirstDropDown(false)
        document.querySelector('.app-container').style.overflowY = 'scroll'
        document.querySelector('.hero-carousel-slider').style.pointerEvents = 'auto'
        document.querySelector('.featured-products-container').style.pointerEvents = 'auto'
    }

    const openSecondMenu = () => {
        if (dropDownLayer) {
            setDropDownLayer(false)
        }
        if (firstDropDown) {
            setFirstDropDown(false)
            setSecondDropDown(true)
            document.querySelector('.app-container').style.overflowY = 'hidden'
            document.querySelector('.hero-carousel-slider').style.pointerEvents = 'none'
            document.querySelector('.featured-products-container').style.pointerEvents = 'none'
        }
        if (thirdDropDown) {
            setThirdDropDown(false)
            setSecondDropDown(true)
            document.querySelector('.app-container').style.overflowY = 'hidden'
            document.querySelector('.hero-carousel-slider').style.pointerEvents = 'none'
            document.querySelector('.featured-products-container').style.pointerEvents = 'none'
        }
        if (secondDropDown) {
            setSecondDropDown(false)
            document.querySelector('.app-container').style.overflowY = 'scroll'
            document.querySelector('.hero-carousel-slider').style.pointerEvents = 'auto'
            document.querySelector('.featured-products-container').style.pointerEvents = 'auto'
        } else {
            setSecondDropDown(true)
            document.querySelector('.app-container').style.overflowY = 'hidden'
            document.querySelector('.hero-carousel-slider').style.pointerEvents = 'none'
            document.querySelector('.featured-products-container').style.pointerEvents = 'none'
        }
    }
    
    const closeSecondMenu = () => {
        setSecondDropDown(false)
        document.querySelector('.app-container').style.overflowY = 'scroll'
        document.querySelector('.hero-carousel-slider').style.pointerEvents = 'auto'
        document.querySelector('.featured-products-container').style.pointerEvents = 'auto'
    }

    const openThirdMenu = () => {
        if (dropDownLayer) {
            setDropDownLayer(false)
        }
        if (firstDropDown) {
            setFirstDropDown(false)
            setThirdDropDown(true)
            document.querySelector('.app-container').style.overflowY = 'hidden'
            document.querySelector('.hero-carousel-slider').style.pointerEvents = 'none'
            document.querySelector('.featured-products-container').style.pointerEvents = 'none'
        }
        if (secondDropDown) {
            setSecondDropDown(false)
            setThirdDropDown(true)
            document.querySelector('.app-container').style.overflowY = 'hidden'
            document.querySelector('.hero-carousel-slider').style.pointerEvents = 'none'
            document.querySelector('.featured-products-container').style.pointerEvents = 'none'
        }
        if (thirdDropDown) {
            setThirdDropDown(false)
            document.querySelector('.app-container').style.overflowY = 'scroll'
            document.querySelector('.hero-carousel-slider').style.pointerEvents = 'auto'
            document.querySelector('.featured-products-container').style.pointerEvents = 'auto'
        } else {
            setThirdDropDown(true)
            document.querySelector('.app-container').style.overflowY = 'hidden'
            document.querySelector('.hero-carousel-slider').style.pointerEvents = 'none'
            document.querySelector('.featured-products-container').style.pointerEvents = 'none'
        }
    }

    const closeThirdMenu = () => {
        setThirdDropDown(false)
        document.querySelector('.app-container').style.overflowY = 'scroll'
        document.querySelector('.hero-carousel-slider').style.pointerEvents = 'auto'
        document.querySelector('.featured-products-container').style.pointerEvents = 'auto'
    }

    const handleDropdownBtn = () => {
        if (dropDownLayer) {
            setDropDownLayer(false)
        } else {
            setDropDownLayer(true)
        }
    }
    
    const handleLogo = () => {
        if (firstDropDown) {
            closeFirstMenu()
        }
        if (secondDropDown) {
            closeSecondMenu()
        }
        if (thirdDropDown) {
            closeThirdMenu()
        }
        scrollToElement('header-section')
    }

    const handleAbout = () => {
        if (firstDropDown) {
            closeFirstMenu()
        }
        if (secondDropDown) {
            closeSecondMenu()
        }
        if (thirdDropDown) {
            closeThirdMenu()
        }
        scrollToElement('about-us-section')
    }

    return (
        <>
        <nav className='landing-nav'>
            <div className='w-36 h-full grid place-items-center cursor-pointer' onClick={() => handleLogo()}>
                <img
                    src={logo}
                    alt='Logo Sport Adventure'
                    className='block w-full'
                />
            </div>
            <ul className='flex items-center h-full'>
                <li className='landing-nav-li nav-item px-5' onClick={() => handleAbout()}>
                    <span>
                        nosotros
                    </span>
                </li>
                <li className='landing-nav-li'>
                    <div className="nav-item" onClick={() => openFirstMenu()}>
                        <span>
                            Motos
                        </span>
                        <BsCaretDownFill
                            className={firstDropDown ? 'rotate-0 text-white'
                            : 'text-white/60 -rotate-90'}
                        />
                    </div>
                    <div 
                        className={firstDropDown ? 'nav-dropdown-container bikes flex flex-col'
                        : "nav-dropdown-container bikes hidden"}
                    >
                        <span className='nav-dropdown-item' onClick={() => closeFirstMenu()}>
                            <span className='nav-dropdown-item-text'>
                                KTM
                            </span>
                        </span>
                        <div className='nav-dropdown-item relative'>
                            <div>
                                <span className='nav-dropdown-item-text' onClick={() => handleDropdownBtn()}>
                                    <div className='flex items-center justify-center'>
                                        Moto<br />Plex
                                        <BsCaretDownFill
                                            className={!dropDownLayer ? 'rotate-0 text-white/60 ml-1'
                                            : 'ml-1 text-white'}
                                        />
                                    </div>
                                </span>
                            </div>
                            <div
                                className={!dropDownLayer ? 'nav-dropdown-item-layer hidden'
                                : 'nav-dropdown-item-layer flex flex-col'}
                            >
                                <span className='nav-dropdown-item'>
                                    <span className='nav-dropdown-item-text px-7' onClick={() => closeFirstMenu()}>
                                        Vespa
                                    </span>
                                </span>
                                <span className='nav-dropdown-item'>
                                    <span className='nav-dropdown-item-text px-7' onClick={() => closeFirstMenu()}>
                                        Aprilia
                                    </span> 
                                </span>
                                <span className='nav-dropdown-item'>
                                    <span className='nav-dropdown-item-text px-7' onClick={() => closeFirstMenu()}>
                                        Moto<br />Guzzi
                                    </span> 
                                </span>
                            </div>
                        </div>
                        <span className='nav-dropdown-item' onClick={() => closeFirstMenu()}>
                            <span className='nav-dropdown-item-text'>
                                Husqvarna
                            </span>
                        </span>
                        <span className='nav-dropdown-item' onClick={() => closeFirstMenu()}>
                            <span className='nav-dropdown-item-text'>
                                Moto<br />Morini
                            </span>
                        </span>
                        <span className='nav-dropdown-item' onClick={() => closeFirstMenu()}>
                            <span className='nav-dropdown-item-text'>
                                Royal<br />Enfield
                            </span>
                        </span>
                        <span className='nav-dropdown-item' onClick={() => closeFirstMenu()}>
                            <span className='nav-dropdown-item-text'>
                                Super<br />Soco
                            </span>
                        </span>
                    </div>
                </li>
                <li className='landing-nav-li'>
                    <div className="nav-item" onClick={() => openSecondMenu()}>
                        <span>
                            ATV /<br />UTV / SSV
                        </span>
                        <BsCaretDownFill
                            className={secondDropDown ? 'rotate-0 text-white'
                            : 'text-white/60 -rotate-90'}
                        />
                    </div>
                    <div
                        className={secondDropDown ? 'nav-dropdown-container off-road flex flex-col'
                        : 'nav-dropdown-container off-road hidden'}
                    >
                        <span className='nav-dropdown-item' onClick={() => closeSecondMenu()}>
                            <span className='nav-dropdown-item-text'>
                                Can-am
                            </span>
                        </span>
                        <span className='nav-dropdown-item' onClick={() => closeSecondMenu()}>
                            <span className='nav-dropdown-item-text'>
                                Cf moto
                            </span>
                        </span>
                    </div>
                </li>
                <li className='landing-nav-li'>
                    <div className='nav-item' onClick={() => openThirdMenu()}>
                        <span>
                            Concesionaria
                        </span>
                        <BsCaretDownFill 
                            className={thirdDropDown ? 'rotate-0 text-white'
                            : 'text-white/60 -rotate-90'}
                        />
                    </div>
                    <div 
                        className={thirdDropDown ? 'nav-dropdown-container inst flex flex-col'
                        : 'nav-dropdown-container off-road hidden'}
                    >
                        <span className='nav-dropdown-item' onClick={() => closeThirdMenu()}>
                            <span className='nav-dropdown-item-text'>
                                Postventa
                            </span>
                        </span>
                        <span className='nav-dropdown-item' onClick={() => closeThirdMenu()}>
                            <span className='nav-dropdown-item-text'>
                                Shop
                            </span>
                        </span>
                        <span className='nav-dropdown-item' onClick={() => closeThirdMenu()}>
                            <span className='nav-dropdown-item-text'>
                                Usados
                            </span>
                        </span>
                        <span className='nav-dropdown-item' onClick={() => closeThirdMenu()}>
                            <span className='nav-dropdown-item-text'>
                                Eventos
                            </span>
                        </span>
                    </div>
                </li>
            </ul>
        </nav>
        <HeroCarousel heroCarouselImgsData={heroCarouselImgsData} />
        </>
    )
}

export default NavBar;
