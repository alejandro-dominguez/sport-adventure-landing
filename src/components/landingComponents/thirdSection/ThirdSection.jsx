import { AboutUs } from '.';

const ThirdSection = ({
    FourthSection,
    aboutSliderImgsData,
    aboutCardsData,
    servicesData,
    setTabI,
    tabI
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
                setTabI={setTabI}
                tabI={tabI}
            />
        </main>
        <div
            className='snap-start'
            id='services-section'
        >
            <FourthSection
                servicesData={servicesData}
                setTabI={setTabI}
                tabI={tabI}
            />
        </div>
        </>
    )
}

export default ThirdSection;
