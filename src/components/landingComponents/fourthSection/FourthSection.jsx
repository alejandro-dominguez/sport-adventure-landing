import { Services } from '.';

const FourthSection = ({
    servicesData,
    tabIndex,
    setTabIndex
}) => {
    return (
        <Services
            servicesData={servicesData}
            tabIndex={tabIndex}
            setTabIndex={setTabIndex}
        />
    )
}

export default FourthSection;
