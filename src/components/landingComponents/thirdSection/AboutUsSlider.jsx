import {
    useState,
    useEffect
} from 'react';

const AboutUsSlider = ({ aboutSliderImgsData }) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedImg, setSelectedImg] = useState(aboutSliderImgsData[0])

    useEffect(() => {
        const slideImg = setInterval(() => {
            selectNewImg(selectedIndex, aboutSliderImgsData)
        }, 4500)
        return () => clearInterval(slideImg)
    })
    
    const selectNewImg = (selectedIndex, aboutSliderImgsData) => {
        const condition = selectedIndex < (aboutSliderImgsData.length - 1)
        const nextIndex = condition ? selectedIndex + 1 : (selectedIndex = 0)
        setSelectedImg(aboutSliderImgsData[nextIndex])
        setSelectedIndex(nextIndex)
    }

    return (
        <div className='about-us-slider-container'>
            <div
                style={{ backgroundImage: `url(${require(`../../../assets/${selectedImg}`)})` }}
                className='about-us-slider'
            />
            <h2 className='about-us-h2'>
                Creamos experiencias<br />junto a vos
            </h2>
        </div>
    )
}

export default AboutUsSlider;
