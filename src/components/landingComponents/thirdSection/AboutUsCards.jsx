import {
    BsFillAwardFill,
    BsBarChartFill,
    BsXDiamondFill
} from 'react-icons/bs';
import { scrollToElement } from '../../../utilities';

const AboutUsCards = ({
    aboutCardsData,
    setTabI,
    tabI
}) => {
    const displayTabs = (e) => {
        const elI = Number(e.target.id.slice(-1))
        if (tabI !== elI) {
            setTabI(elI)
        } scrollToElement('services-section')
    }

    return (
        <>
        {aboutCardsData.map(data => {
            return (
                <button
                    key={`${data.id}`}
                    id={`${data.id}`}
                    type='button'
                    className='about-us-cards'
                    onClick={(e) => displayTabs(e)}
                >
                    {
                        data.id === `about-us-1` ?
                            <BsFillAwardFill className='about-us-icon' />
                        : data.id === `about-us-2` ?
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
        })}
        </>
    )
}

export default AboutUsCards;
