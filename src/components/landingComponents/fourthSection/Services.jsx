const Services = ({
    servicesData,
    tabIndex,
    setTabIndex
}) => {
    return (
        <section className='pt-[4.6rem] bg-[#0a0c20]'>
            <div className='h-screen flex flex-col items-center justify-start bg-[#070714] text-white px-16'>
                <h2 className='self-start font-AirBnbCerealBold uppercase leading-[1.99rem] tracking-wide text-[1.99rem] mt-5'>
                    Nuestros<br />
                    <span className='text-[2rem]'>
                        Servicios
                    </span>
                </h2>
                <div className='services-tabs-container'>
                    <ul className='services-tabs-ul'>
                        <li className='services-tabs-li'>
                            <span className='services-tabs-li-span'>
                                Ventas
                            </span>
                        </li>
                        <li className='services-tabs-li'>
                            <span className='services-tabs-li-span'>
                                Asesoramiento
                            </span>
                        </li>
                        <li className='services-tabs-li'>
                            <span className='services-tabs-li-span'>
                                Usados
                            </span>
                        </li>
                    </ul>
                    <div className='services-tabs-divisor' />
                </div>
            </div>
        </section>
    )
}

export default Services;
