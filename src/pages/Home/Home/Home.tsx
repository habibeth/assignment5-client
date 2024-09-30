import Carousel from "../Carousel/Carousel";
import CustomerReviews from "../CustomerReviews/CustomerReviews";
import FeaturedRooms from "../FeaturedRooms/FeaturedRooms";
import HowItWorks from "../HowItWorks/HowItWorks";
import ServiceAdvertisement from "../ServiceAdvertisement/ServiceAdvertisement";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Carousel />
            <ServiceAdvertisement />
            <div
                style={{
                    maxWidth: "1280px",
                    margin: 'auto'
                }}
            >
                <FeaturedRooms />
                <WhyChooseUs />
                <HowItWorks />
                <CustomerReviews />
            </div>
        </div>
    );
};

export default Home;