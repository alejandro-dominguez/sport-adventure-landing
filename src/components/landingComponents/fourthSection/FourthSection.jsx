import { Services } from '.';

const FourthSection = ({
    servicesData,
    tabI,
    setTabI
}) => {
    return (
        <Services
            servicesData={servicesData}
            tabI={tabI}
            setTabI={setTabI}
        />
    )
}

export default FourthSection;
