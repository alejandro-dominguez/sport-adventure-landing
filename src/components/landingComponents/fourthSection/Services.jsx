const Services = ({
    servicesData,
    tabI,
    setTabI
}) => {
    const setTabs = (e) => {
        const elIndex = Number(e.target.id.slice(-1))
        console.log(elIndex);
        const checkedIndex = checkCondition(elIndex)
        setTabI(checkedIndex)
    }
    
    const checkCondition = (n) => {
        let index
        const condition = tabI !== n
        condition ? index = n : index = tabI
        return index
    }

    return (
        <section className='pt-[4.6rem] bg-[#0a0c20]'>
            <div className='h-screen flex flex-col items-center justify-start bg-[#070714] text-white px-16 z-0'>
                <h2 className='services-h2'>
                    soluciones a tu medida
                </h2>
                <div className='services-tabs-container'>
                    <ul className={
                        tabI === 1 ? 'services-tabs-ul left'
                        : tabI === 2 ? 'services-tabs-ul center'
                        : tabI === 3 ? 'services-tabs-ul right'
                        : null}
                    >
                        <button
                            id='services-tabs-1' 
                            type='button'
                            className='services-tabs-li-btn'
                            onClick={(e) => setTabs(e)}
                        >
                            <li className='services-tabs-li'>
                                Nuestros vehículos
                            </li>
                        </button>
                        <button
                            id='services-tabs-2'
                            type='button'
                            className='services-tabs-li-btn middle'
                            onClick={(e) => setTabs(e)}
                        >
                            <li className='services-tabs-li'>
                                Taller & service
                            </li>
                        </button>
                        <button
                            id='services-tabs-3'
                            type='button'
                            className='services-tabs-li-btn'
                            onClick={(e) => setTabs(e)}
                        >
                            <li className='services-tabs-li'>
                                Domina el camino
                            </li>
                        </button>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Services;
