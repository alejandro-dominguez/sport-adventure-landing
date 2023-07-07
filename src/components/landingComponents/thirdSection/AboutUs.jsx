import { AboutUsSlider, AboutUsCards } from './';

const AboutUs = ({
    aboutSliderImgsData,
    aboutCardsData
}) => {
    return (
        <div className='pt-[4.6rem] bg-[#B50016]'>
            <div
                className='h-screen flex flex-col justify-start items-center bg-[#0a0c20] text-white'
            >
                <AboutUsSlider aboutSliderImgsData={aboutSliderImgsData} />
                <div className='mt-[2.1rem] grid grid-cols-4 px-16 gap-16 place-content-between font-semibold'>
                    <div className='grid place-items-start gap-[.7rem]'>
                        <h3 className='about-us-h3'>
                            <span className='block w-full text-[1.5rem]'>
                                Encuentra tu
                            </span>
                            <span className='block w-full text-[1.387rem]'>
                                vehículo ideal
                            </span>
                            <span className='block w-full text-[1.411rem]'>
                                con nosotros
                            </span>
                        </h3>
                        <p className='font-light text-[.959rem] leading-[1.44]'>
                            Lorem ipsum dolor sit amet, consecradi pisicing elit. At doloremque, necessi tatibus 
                            repellendus debitis cumque culpa aliquam laborum.
                        </p>
                    </div>
                    {aboutCardsData.map(data => {
                        return (
                            <AboutUsCards data={data} key={data.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default AboutUs;