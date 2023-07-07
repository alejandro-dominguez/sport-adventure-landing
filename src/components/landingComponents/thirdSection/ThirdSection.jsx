import { useState } from 'react';
import { AboutUs } from '.';

const ThirdSection = ({
    FourthSection,
    aboutSliderImgsData,
    aboutCardsData,
    servicesData
}) => {
    const [tabIndex, setTabIndex] = useState(1)

    return (
        <>
        <main
            className='snap-start'
            id='about-us-section'
        >
            <AboutUs
                aboutSliderImgsData={aboutSliderImgsData}
                aboutCardsData={aboutCardsData}
                setTabIndex={setTabIndex}
            />
        </main>
        <div
            className='snap-start'
            id='services-section'
        >
            <FourthSection
                servicesData={servicesData}
                setTabIndex={setTabIndex}
            />
        </div>
        </>
    )
}

export default ThirdSection;
