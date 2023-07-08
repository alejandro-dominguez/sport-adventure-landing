const Services = ({
    servicesData,
    tabIndex,
    setTabIndex
}) => {
    return (
        <section className='pt-[4.6rem] bg-[#0a0c20]'>
            <div className='h-screen flex flex-col items-center justify-start bg-[#070714] text-white px-16 z-0'>
                <h2 className='services-h2'>
                    soluciones a tu medida
                </h2>
                <div className='services-tabs-container'>
                    <ul className="services-tabs-ul">
                        <li className='services-tabs-li'>
                            <button
                                type='button'
                                className='services-tabs-li-btn'
                                onClick={setTabIndex(1)}
                            >
                                Nuestros vehículos
                            </button>
                        </li>
                        <li className='services-tabs-li middle'>
                            <button
                                type='button'
                                className='services-tabs-li-btn'
                                onClick={setTabIndex(1)}
                            >
                                Service & taller
                            </button>
                        </li>
                        <li className='services-tabs-li'>
                            <button
                                type='button'
                                className='services-tabs-li-btn'
                                onClick={setTabIndex(1)}
                            >
                                Usados
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Services;
