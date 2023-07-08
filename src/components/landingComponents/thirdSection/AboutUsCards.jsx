import {
    BsFillAwardFill,
    BsBarChartFill,
    BsXDiamondFill
} from 'react-icons/bs';
import { scrollToElement } from '../../../utilities';

const AboutUsCards = ({
    data,
    setTabIndex,
    tabIndex
}) => {

    const displayTabs = (e) => {
        const elementId = e.target.id
        setTabIndex(elementId.slice(-1))
    }
    
    return (
        <button
            id={`${data.id}`}
            type='button'
            className='about-us-cards'
            onClick={(e) => displayTabs(e)}
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
                {data.title1}
                <br />
                {data.title2}
            </h4>
            <p className='about-us-text'>
                {data.text}
            </p>
        </button>
    )
}

export default AboutUsCards;
