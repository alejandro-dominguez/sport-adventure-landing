import {
    AboutUsSlider,
    AboutUsCards
} from '.';

const AboutUs = ({
    aboutSliderImgsData,
    aboutCardsData,
    setTabI,
    tabI
}) => {
    return (
        <div className='pt-[4.6rem] bg-[#B50016]'>
            <div className='h-screen flex flex-col justify-start items-center bg-[#0a0c20] text-white'>
                <AboutUsSlider aboutSliderImgsData={aboutSliderImgsData} />
                <div className='mt-[2.8rem] grid grid-cols-4 px-16 gap-12 place-content-between font-semibold'>
                    <div className='grid place-items-start gap-[.5rem]'>
                        <h3 className='about-us-h3'>
                            <span className='block w-full text-[1.5rem]'>
                                Encuentra tu
                            </span>
                            <span className='block w-full text-[1.37rem]'>
                                vehículo ideal
                            </span>
                            <span className='block w-full text-[1.411rem]'>
                                con nosotros
                            </span>
                        </h3>
                        <p className='about-us-p'>
                            Lorem ipsum dolor sit amet, consecradi pisicing elit. At doloremque, necessi tatibus 
                            repellendus debitis cumque culpa aliquam laborum, consecradi pisicing elit.
                        </p>
                    </div>
                        <AboutUsCards
                            aboutCardsData={aboutCardsData}
                            setTabI={setTabI}
                            tabI={tabI}
                        />
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
