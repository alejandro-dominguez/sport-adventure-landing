import img from '../../../assets/about-us-1.png';

const Services = ({
    servicesData,
    tabI,
    setTabI
}) => {
    const setTabs = (e) => {
        const elIndex = Number(e.target.id.slice(-1))
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
            <div className='h-screen flex flex-col items-center justify-start bg-[#070714] text-white px-16'>
                <h2 className='services-h2'>
                    soluciones a tu medida
                </h2>
                <div className='services-tabs-container'>
                    <ul className={
                            tabI === 1 ? 'services-tabs-ul left'
                            : tabI === 2 ? 'services-tabs-ul center'
                            : tabI === 3 ? 'services-tabs-ul right'
                            : null
                        }
                    >
                        <button
                            id='services-tabs-1' 
                            type='button'
                            tabIndex='0'
                            className={
                                tabI === 1 ? 'services-tabs-li-btn'
                                : tabI === 2 ? 'services-tabs-li-btn active'
                                : tabI === 3 ? 'services-tabs-li-btn active'
                                : null
                            }
                            onClick={(e) => setTabs(e)}
                        >
                            <li className='services-tabs-li'>
                                Nuestros vehículos
                            </li>
                        </button>
                        <button
                            id='services-tabs-2'
                            type='button'
                            tabIndex='0'
                            className={
                                tabI === 1 ? 'services-tabs-li-btn active'
                                : tabI === 2 ? 'services-tabs-li-btn'
                                : tabI === 3 ? 'services-tabs-li-btn active'
                                : null
                            }
                            onClick={(e) => setTabs(e)}
                        >
                            <li className='services-tabs-li'>
                                Taller & service
                            </li>
                        </button>
                        <button
                            id='services-tabs-3'
                            type='button'
                            tabIndex='0'
                            className={
                                tabI === 1 ? 'services-tabs-li-btn active'
                                : tabI === 2 ? 'services-tabs-li-btn active'
                                : tabI === 3 ? 'services-tabs-li-btn'
                                : null
                            }
                            onClick={(e) => setTabs(e)}
                        >
                            <li className='services-tabs-li'>
                                <span className='services-tabs-li-span'>
                                    Domina el camino
                                </span>
                            </li>
                        </button>
                    </ul>
                    <div className='services-tab first-tab-container'>
                        <div className='grid place-content-start'>
                            <h3>Lorem ipsum dolor sit amet.</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus dolore, quaerat 
                                consequuntur at labore deleniti. Fugiat nam amet quisquam eum dolore maiores quos nemo, 
                                libero sint possimus numquam sit! Corrupti eaque ratione minima voluptates sit rerum modi 
                                beatae ut sint atque distinctio dolorem suscipit ipsam, illo provident, placeat ea numquam 
                                quam fugiat maxime? Id veritatis sed enim recusandae? Totam ea facilis obcaecati pariatur 
                                placeat ducimus accusamus, similique natus hic rerum assumenda qui nam odio praesentium 
                                repudiandae nobis, voluptatem iure esse incidunt consequuntur deleniti? Tempora dolor officiis 
                                voluptas expedita et quo molestiae doloremque. Saepe natus explicabo corporis nostrum neque libero, 
                                accusantium tenetur in quia.
                            </p>
                        </div>
                        <div className="w-32">
                            <img src={img} alt="asdasd" className='block w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services;
