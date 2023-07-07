import { FeaturedProducts } from '.';

const SecondSection = ({ productCardsData }) => {
    return (
        <div id='featured-products-section'>
            <FeaturedProducts productCardsData={productCardsData} />
        </div>
    )
}

export default SecondSection;
