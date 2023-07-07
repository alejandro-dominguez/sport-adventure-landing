import { useState, useEffect } from 'react';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import { scrollToElement } from '../../../utilities/';

const HeroCarousel = ({ heroCarouselImgsData }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImg, setSelectedImg] = useState(heroCarouselImgsData[0])

    useEffect(() => {
        const slideImg = setInterval(() => {
            selectNewImg(selectedIndex, heroCarouselImgsData)
        }, 4250)
        return () => clearInterval(slideImg)
    })
    
    const selectNewImg = (selectedIndex, heroCarouselImgsData, next = true) => {
        const condition = next ? selectedIndex < heroCarouselImgsData.length - 1 : selectedIndex > 0
        const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : heroCarouselImgsData.length - 1
        setSelectedImg(heroCarouselImgsData[nextIndex])
        setSelectedIndex(nextIndex)
    }

    const prevImg = () => {
        selectNewImg(selectedIndex, heroCarouselImgsData, false)
    }
    
    const nextImg = () => {
        selectNewImg(selectedIndex, heroCarouselImgsData)
    }

    return (
        <div className='relative bg-[#1A192B] pt-[4.6rem]'>
            <div className='absolute top-0 left-0 right-0'>
                <div
                    style={{ backgroundImage: `url(${require(`../../../assets/${selectedImg}`)})` }}
                    className='hero-carousel-slider'
                >
                    {
                        selectedIndex === 0 ?
                            <button
                                type='button'
                                className='landing-h1-btn'
                                onClick={() => scrollToElement('featured-products-section')}
                            >
                                <h1 className='landing-h1'>
                                    Vive la experiencia
                                    <br />
                                    sport adventure
                                </h1>
                            </button>
                        : selectedIndex === 1 ?
                            <button
                                type='button'
                                className='hero-carousel-scrolling-btn'
                                onClick={() => scrollToElement('services-section')}
                            >
                                <span>
                                    servicios                  
                                </span>
                            </button>
                        : null
                    }
                </div>
                <button
                    type='button'
                    className='hero-carousel-btn left'
                    onClick={() => prevImg()}
                >
                    <BsCaretLeftFill className='hero-carousel-icon' />
                </button>
                <button
                    type='button'
                    className='hero-carousel-btn right'
                    onClick={() => nextImg()}
                >
                    <BsCaretRightFill className='hero-carousel-icon' />
                </button>
            </div>
        </div>
    )
}

export default HeroCarousel;
