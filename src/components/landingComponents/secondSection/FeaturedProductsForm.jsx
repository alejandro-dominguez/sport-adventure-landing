import { useState } from 'react';
import { BsXCircleFill } from 'react-icons/bs';
import {
    scrollToElement,
    shortenText
} from '../../../utilities';
import logo from '../../../assets/logo-sport-W-wide.svg';

const FeaturedProductsForm = ({
    cardFormData,
    setCardFormData,
    formDisplay,
    setFormDisplay
}) => {
    const [productFormData, setProductFormData] = useState({
        fullName : '',
        email : '',
        message : ''
    })
    
    const getFormData = (e) => {
        setProductFormData(
            {...productFormData, [e.target.name] : e.target.value}
        )
    }

    const closeForm = () => {
        setFormDisplay(false)
        setProductFormData({
            fullName : '',
            email : '',
            message : ''
        })
        if (cardFormData) {
            setTimeout(() => {
                setCardFormData(null)
            }, 350)
        } else {
            return null
        }
    }
    
    const submitProductForm = (e) => {
        e.preventDefault()
        alert(Object.values(productFormData))
        setFormDisplay(false)
        e.target.reset()
        if (cardFormData) {
            setTimeout(() => {
                scrollToElement('header-section')
                setCardFormData(null)
            }, 325)
        } else {
            return null
        }
    }

    return (
        <div className={formDisplay ? 'product-form-container show' : 'product-form-container'}>
            <form
                className={formDisplay ? 'product-form-data-container show inset-0' : 'product-form-data-container'}
                autoComplete='on'
                onSubmit={(e) => submitProductForm(e)}
                tabIndex='-1'
            >
                <div className='flex flex-col w-full h-full justify-between'>
                    <p className='block text-[1.2rem] font-medium tracking-wide'>
                        ¡Comunícate con nosotros!
                    </p>
                    <div className='grid gap-[.76rem]'>
                        <label
                            htmlFor='product-form-name'
                            className='hidden'
                        />
                        <input
                            id='product-form-name'
                            name='fullName'
                            className='product-form-input'
                            placeholder='Nombre completo:'
                            type='text'
                            required
                            tabIndex='-1'
                            autoComplete='on'
                            onChange={(e) => getFormData(e)}
                        />
                        <label
                            htmlFor='product-form-email'
                            className='hidden'
                        />
                        <input
                            id='product-form-email'
                            name='email'
                            className='product-form-input'
                            placeholder='Correo electrónico:'
                            type='email'
                            required
                            tabIndex='-1'
                            autoComplete='on'
                            onChange={(e) => getFormData(e)}
                        />
                        <label
                            htmlFor='product-form-message'
                            className='hidden'
                        />
                        <textarea
                            id='product-form-message'
                            name='message'
                            className='product-form-input'
                            placeholder='Mensaje:'
                            cols='30'
                            rows='4'
                            tabIndex='-1'
                            onChange={(e) => getFormData(e)}
                        />
                    </div>
                    <button
                        className='product-form-submit' 
                        type='submit'
                        tabIndex='-1'
                    >
                        <span className='product-form-span'>
                            Enviar
                        </span>
                    </button>
                </div>
                <div className='flex flex-col w-full h-full justify-between'>
                    {cardFormData !== null ?
                    <>
                    <h4 className='product-form-h4'>
                        {shortenText(cardFormData.name, 16)}
                    </h4>
                    <p className='text-[.98rem] leading-[1.46] tracking-wide -mt-16 -mr-5'>
                        {shortenText(cardFormData.desc, 290)}
                    </p>
                    </>
                    : null}
                    <div className='w-52 self-end mb-[.2rem] -mr-5'>
                        <img
                            src={logo}
                            alt='Logo Sport Adventure'
                            className='block w-full'
                        />
                    </div>
                </div>
                <div className='relative flex flex-col h-full w-full items-end justify-between'>
                    <button
                        type='button'
                        className={formDisplay ? 'product-form-close-container show' : 'product-form-close-container'} 
                        onClick={() => closeForm()}
                        tabIndex='-1'
                    >
                        <BsXCircleFill className='product-form-close-btn' />
                    </button>
                    {cardFormData ?
                        <div className='product-form-img-container'>
                            <div className='product-form-img-box'>
                                <img
                                    className='product-form-img'
                                    src={`${require(`../../../assets/logo-${cardFormData.brand}.svg`)}`}
                                    alt={cardFormData.brand}
                                />
                            </div>
                        </div>
                    : null}
                </div>
            </form>
        </div>
    )
}

export default FeaturedProductsForm;
