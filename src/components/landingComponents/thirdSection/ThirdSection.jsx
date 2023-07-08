import { AboutUs } from '.';

const ThirdSection = ({
    FourthSection,
    aboutSliderImgsData,
    aboutCardsData,
    servicesData,
    setTabIndex,
    tabIndex
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
                tabIndex={tabIndex}
            />
        </div>
        </>
    )
}

export default ThirdSection;
