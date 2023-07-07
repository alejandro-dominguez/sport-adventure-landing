import {
    NavBar,
    HeroSlider
} from './';

const FirstSection = ({
    heroCarouselImgsData,
    heroSliderImgsData 
}) => {
    return (
        <header
            className='relative h-screen top-0'
            id='header-section'
        >
            <NavBar heroCarouselImgsData={heroCarouselImgsData} />
            <HeroSlider heroSliderImgsData={heroSliderImgsData} />
        </header>
    )
}

export default FirstSection;
