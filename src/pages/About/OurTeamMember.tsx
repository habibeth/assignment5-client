import Title from 'antd/es/typography/Title';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper/modules';
import { teamMembers } from '../../constant/teamMember';
import { Link } from 'react-router-dom';
import { FacebookFilled, LinkedinFilled, TwitterOutlined } from '@ant-design/icons';

import './Team.css'



const OurTeamMember = () => {
    return (
        <div style={{ margin: '100px 0' }}>
            <Title
                style={{
                    textAlign: 'center',
                    marginBottom: '24px',
                    animation: 'fadeIn 1s ease-in'
                }}
            >
                Our Team Member
            </Title>
            <Swiper
                breakpoints={{
                    640: {
                        // width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        // width: 768,
                        slidesPerView: 4,
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
                    teamMembers.map((member) => (
                        <SwiperSlide key={member._id}>
                            <div className="container">
                                <img src={member.images} alt="Avatar" className="image" style={{ height: '300px' }} />
                                <div className="overlay">
                                    <div className="user-info">
                                        <h2>{member.name}</h2>
                                        <p>{member.designation}</p>
                                    </div>
                                    <div className="social-media">
                                        <Link to={member.facebookUrl}>
                                            <FacebookFilled style={{ color: '#fff', marginRight: '5px' }} />
                                        </Link>
                                        <Link to={member.linkedinUrl}>
                                            <LinkedinFilled style={{ color: '#fff', marginRight: '5px' }} />
                                        </Link>
                                        <Link to={member.twitterUrl}>
                                            <TwitterOutlined style={{ color: '#fff' }} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default OurTeamMember;