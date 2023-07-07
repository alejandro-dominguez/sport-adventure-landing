import { AboutUs } from './';
import { FourthSection } from '../';

const ThirdSection = ({
    aboutSliderImgsData,
    aboutCardsData,
    servicesData
}) => {
    return (
        <>
        <main
            className='snap-start'
            id='about-us-section'
        >
            <AboutUs
                aboutSliderImgsData={aboutSliderImgsData}
                aboutCardsData={aboutCardsData}
            />
        </main>
        <div
            className='snap-start'
            id='services-section'
        >
            <FourthSection servicesData={servicesData} />
        </div>
        </>
    )
}

export default ThirdSection;
