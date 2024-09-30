// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';
const { Title } = Typography;

import user from '../../../assets/user.png'
import { Typography } from 'antd';

type TReview = {
    _id: number;
    name: string;
    image: string;
    review: string;
}



const CustomerReviews = () => {
    const customerReviews: TReview[] = [
        {
            "_id": 1,
            "name": "Tom Cruise",
            "image": user,
            "review": "Fantastic service and top-quality products. I highly recommend this to everyone."
        },
        {
            "_id": 2,
            "name": "Scarlett Johansson",
            "image": user,
            "review": "This was an exceptional experience. Everything was smooth and efficient!"
        },
        {
            "_id": 3,
            "name": "Robert Downey Jr.",
            "image": user,
            "review": "Amazing service! The customer support is very responsive, and the quality is unmatched."
        },
        {
            "_id": 4,
            "name": "Jennifer Lawrence",
            "image": user,
            "review": "I am thoroughly impressed with the booking process and the quality of the products."
        },
        {
            "_id": 5,
            "name": "Chris Hemsworth",
            "image": user,
            "review": "Couldn't be happier! The whole process was quick and easy, and the room was perfect."
        },
        {
            "_id": 6,
            "name": "Emma Watson",
            "image": user,
            "review": "Wonderful experience! The booking was hassle-free, and the room exceeded my expectations."
        },
        {
            "_id": 7,
            "name": "Leonardo DiCaprio",
            "image": user,
            "review": "Excellent service. Fast, reliable, and everything was done perfectly."
        },
        {
            "_id": 8,
            "name": "Natalie Portman",
            "image": user,
            "review": "Very professional! The staff was extremely helpful, and the room was pristine."
        },
        {
            "_id": 9,
            "name": "Ryan Reynolds",
            "image": user,
            "review": "Top-notch service! Will definitely use this service again. Highly recommend!"
        },
        {
            "_id": 10,
            "name": "Anne Hathaway",
            "image": user,
            "review": "Everything was perfect, from booking to the final experience. Highly recommend!"
        }
    ]

    return (
        <div style={{ backgroundColor: '#f0f2f5', margin: '100px 0' }}>
            <Title
                style={{
                    textAlign: 'center',
                    marginBottom: '24px',
                    animation: 'fadeIn 1s ease-in'
                }}
            >
                Customer Reviews
            </Title>
            <Swiper
                breakpoints={{
                    640: {
                        // width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 2,
                    },
                }}
                // slidesPerView={6}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {
                    customerReviews.map((review: TReview) => (
                        <SwiperSlide key={review._id}>
                            <div style={{ background: 'white', padding: '60px', borderRadius: '10px' }}>
                                <div style={{ display: 'flex', justifyContent: 'center', boxShadow: 'initial' }}>
                                    <img src={review.image} style={{ height: '200px', borderRadius: '200px', width: '200px' }} alt="brand" />
                                </div>
                                <h2 style={{ textAlign: 'center', margin: '10px 0', fontSize: '24px' }}>{review.name}</h2>
                                <p style={{ textAlign: 'center', fontSize: '18px' }}>{review.review}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default CustomerReviews;
