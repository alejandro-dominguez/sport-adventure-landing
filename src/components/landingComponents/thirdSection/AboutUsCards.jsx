import {
    BsFillAwardFill,
    BsBarChartFill,
    BsXDiamondFill
} from 'react-icons/bs';
import { scrollToElement } from '../../../utilities';

const AboutUsCards = ({ data }) => {
    const scrollAndDisplayTab = (e) => {
        const targetElement = e.target
        console.log(targetElement)
    }
    
    return (
        <button
            type='button' 
            className='about-us-cards'
            onClick={(e) => scrollAndDisplayTab(e)}
        >
            {
                data.id === 'about-us-1' ?
                    <BsFillAwardFill className='about-us-icon' />
                : data.id === 'about-us-2' ?
                    <BsBarChartFill className='about-us-icon' />
                :  
                    <BsXDiamondFill className='about-us-icon' />
            }
            <h4 className='about-us-h4'>
                {data.title1}<br />{data.title2}
            </h4>
            <p className='about-us-text'>
                {data.text}
            </p>
        </button>
    )
}

export default AboutUsCards;
