// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

//Local image file
import img1 from '../../../assets/c1.jpg'
import img2 from '../../../assets/c2.jpg'
import img3 from '../../../assets/c3.jpg'
import img4 from '../../../assets/c4.jpg'
import img5 from '../../../assets/c5.jpg'
import img6 from '../../../assets/c6.jpg'

const roomData = [
    {
        id: 1,
        image: img1,
        title: 'Book Your Ideal Meeting Room with Ease.',
        descriptions: 'Efficient, hassle-free room booking for all your meeting needs.',
    },
    {
        id: 2,
        image: img2,
        title: 'Book Your Ideal Meeting Room with Ease.',
        descriptions: 'Efficient, hassle-free room booking for all your meeting needs.',
    },
    {
        id: 3,
        image: img3,
        title: 'Book Your Ideal Meeting Room with Ease.',
        descriptions: 'Efficient, hassle-free room booking for all your meeting needs.',
    },
    {
        id: 4,
        image: img4,
        title: 'Book Your Ideal Meeting Room with Ease.',
        descriptions: 'Efficient, hassle-free room booking for all your meeting needs.',
    },
    {
        id: 5,
        image: img5,
        title: 'Book Your Ideal Meeting Room with Ease.',
        descriptions: 'Efficient, hassle-free room booking for all your meeting needs.',
    },
    {
        id: 6,
        image: img6,
        title: 'Book Your Ideal Meeting Room with Ease.',
        descriptions: 'Efficient, hassle-free room booking for all your meeting needs.',
    },
];


const Carousel = () => {
    return (
        <div>
            <Swiper
                slidesPerView={1}
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
                    roomData.map((room) => (
                        <SwiperSlide key={room.id}>
                            <div
                                style={{
                                    backgroundImage: `url(${room.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '500px',
                                    position: 'relative',
                                }}
                            >
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for readability
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: '#fff',
                                    }}
                                >
                                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
                                        {room.title}
                                    </h1>
                                    <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
                                        {room.descriptions}
                                    </p>
                                    <Link
                                        to="/meeting-rooms"
                                        style={{
                                            padding: '10px 20px',
                                            backgroundColor: '#ff6200',
                                            color: '#fff',
                                            fontSize: '1rem',
                                            borderRadius: '5px',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Carousel;