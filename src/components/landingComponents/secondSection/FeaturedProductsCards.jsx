import { useState } from 'react';
import {
    BsInfoCircleFill,
    BsXCircleFill,
    BsFillHandIndexThumbFill
} from 'react-icons/bs';
import { FeaturedProductsForm } from '.';
import { shortenText } from '../../../utilities';

const FeaturedProductsCards = ({
    productCardsData,
    showCards,
    showForm
}) => {
    const [cardFormData, setCardFormData] = useState(null)
    const [formDisplay, setFormDisplay] = useState(false)
    
    const cardsAndFormDisplay = (data, showCards, showForm) => {
        const cardTitleContainer = document.getElementById(`${data.id}-title-container`)
        const cardImgContainer = document.getElementById(`${data.id}-img`)
        const cardContent = document.getElementById(`${data.id}-content`)
        const cardCloseBtn = document.getElementById(`${data.name}-close-btn`)
        
        if (showForm) {
            cardImgContainer.classList.remove('hide')
            cardContent.classList.remove('show')
            cardCloseBtn.classList.remove('show')
            cardTitleContainer.style.display = 'flex'
            setCardFormData(data)
            setFormDisplay(true)
            setTimeout(() => {
                cardTitleContainer.classList.remove('hide')
            }, 255)
        } else if (showCards) {
            cardImgContainer.classList.add('hide')
            cardContent.classList.add('show')
            cardCloseBtn.classList.add('show')
            cardTitleContainer.classList.add('hide')
            setTimeout(() => {
                cardTitleContainer.style.display = 'none'
            }, 255)
        } else {
            cardImgContainer.classList.remove('hide')
            cardContent.classList.remove('show')
            cardCloseBtn.classList.remove('show')
            cardTitleContainer.style.display = 'flex'
            setTimeout(() => {
                cardTitleContainer.classList.remove('hide')
            }, 1000)
        }
    }
            
    return (
        <>
        {productCardsData.map(data => {
            return (
                <div
                    className='relative aspect-[3/4.03]'
                    key={data.id}
                >
                    <button
                        type='button'
                        className='product-card-title-container'
                        id={`${data.id}-title-container`}
                        onClick={() => cardsAndFormDisplay(data, showCards, !showForm)}
                    >
                        <div className='flex absolute top-0 justify-center items-end'>
                            <h3 className='product-card-title'>
                                {shortenText(data.name, 13)}
                            </h3>
                            <BsInfoCircleFill className='product-card-icon' />
                        </div>
                        <div className='product-card-hover-btn mb-10'>
                            <BsFillHandIndexThumbFill className='product-card-hover-icon' />
                        </div>
                    </button>
                    <div
                        style={{ backgroundImage: `url(${require(`../../../assets/${data.src}`)})` }}
                        className='product-card-img'
                        id={`${data.id}-img`}
                    />
                    <button
                        type='button'
                        className='product-card-close-container'
                        id={`${data.name}-close-btn`}
                        onClick={() => cardsAndFormDisplay(data, !showCards, !showForm)}
                    >
                        <BsXCircleFill className='product-card-close' />
                    </button>
                    <div
                        className='product-card-content-container'
                        id={`${data.id}-content`}
                    > 
                        <div className='product-card-content'> 
                            <div className='product-card-brand'>
                                <div className='w-24'>
                                    <img
                                        className='product-card-content-img'
                                        src={`${require(`../../../assets/logo-${data.brand}.svg`)}`}
                                        alt={data.brand}
                                    />
                                </div>
                            </div>
                            <p className='product-card-text'>
                                {shortenText(data.desc, 156)}
                            </p>
                            <button
                                className='product-card-btn-container'
                                type='button'
                                onClick={() => cardsAndFormDisplay(data, !showCards, showForm)}
                            >
                                <div className='product-card-btn'>
                                    <span className='product-card-btn-span'> 
                                        Información
                                    </span> 
                                </div> 
                            </button>
                        </div>
                    </div>
                </div>
            )})
        }
        <FeaturedProductsForm
            cardFormData={cardFormData}
            setCardFormData={setCardFormData}
            formDisplay={formDisplay}
            setFormDisplay={setFormDisplay}
        />
        </>
    )
}

export default FeaturedProductsCards;
