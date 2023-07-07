import { BsFillAwardFill, BsBarChartFill, BsXDiamondFill } from 'react-icons/bs';

const AboutUsCards = ({ data }) => {
    return (
        <div className='about-us-cards'>
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
        </div>
    )
}

export default AboutUsCards;
