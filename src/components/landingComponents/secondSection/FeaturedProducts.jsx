import {
    useEffect,
    useRef,
    useState
} from 'react';
import { FeaturedProductsCards } from '.';

const FeaturedProducts = ({ productCardsData }) => {
    const [isVisible, setIsVisible] = useState(false)
    const textContent = useRef(null)

    const animateOnScroll = (entries) => {
        entries.forEach(entry => {
            return (
                !entry.isIntersecting ? null : setIsVisible(true)
            )
        })
    }

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: .75
    }

    useEffect(() => {
        const observer = new IntersectionObserver(animateOnScroll, options)
        const content = textContent.current
        if (content) observer.observe(content)

        return () => {
            if (content) observer.unobserve(content)
        }
    })

    return (
        <div className='pt-[1.9rem] bg-slate-50'>
            <div className='featured-products-container'>
                <div
                    className={isVisible ? `flex items-start justify-between px-16 text-white opacity-100 translate-y-0
                    transition-all ease-out duration-500` : `flex items-start justify-between px-16 text-white opacity-0
                    translate-y-12 transition-all ease-out duration-500`}
                    ref={textContent}
                >
                    <div className='grid place-items-center'>
                        <h2 className='pt-1 font-AirBnbCerealBold text-center uppercase text-[2.42rem] leading-[2.45rem] tracking-wide'>
                            <span className='text-[2.9rem]'>
                                Vehículos
                            </span>
                            <br />
                            destacados
                        </h2>
                    </div>
                    <div className='w-5/12'>
                        <p className='font-semibold text-[.88rem] leading-[1.15rem]'>
                            Conecta con la excelencia sobre ruedas. Encuentra el vehículo perfecto para satisfacer tus 
                            necesidades y superar tus expectativas. Siente la adrenalina correr por dentro mientras 
                            disfrutas de la comodidad de nuestros vehículos.
                        </p>
                    </div>
                </div>
                <div className='grid grid-cols-4 px-16 gap-20'>
                    <FeaturedProductsCards
                        productCardsData={productCardsData}
                        showCards={true}
                        showForm={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts;
