import { Typography } from 'antd';
import OurStory from './OurStory';
import OurTeamMember from './OurTeamMember';

const { Title, Paragraph } = Typography;

const About = () => {
    return (
        <div
            style={{
                maxWidth: "1280px",
                margin: '100px auto'
            }}
        >
            <div style={{ textAlign: 'center' }}>
                <Title style={{ fontSize: '36px' }}>Welcome to Our Company</Title>
                <Paragraph style={{ fontSize: '20px' }}>
                    We are passionate about delivering the best services.
                </Paragraph>
            </div>
            <div>
                <Title
                    style={{
                        textAlign: 'center',
                        marginBottom: '24px',
                        animation: 'fadeIn 1s ease-in'
                    }}
                >
                    Our Mission
                </Title>
                <Paragraph
                    style={{
                        textAlign: 'justify',
                        margin: '10px auto',
                        fontSize: '18px',
                        animation: 'fadeInUp 1.2s ease-in',

                    }}
                >
                    The mission of a Meeting Room Booking System is to streamline the scheduling and management of meeting spaces, fostering a more efficient and collaborative work environment. By offering a centralized platform, it eliminates double bookings, reduces scheduling conflicts, and ensures real-time visibility of room availability. The system aims to optimize resource utilization by providing insights into room usage, helping organizations better allocate their spaces. With a user-friendly interface, employees can easily book rooms with the right amenities, whether from a desktop or mobile device, saving time and enhancing productivity. Integration with popular calendar systems ensures seamless scheduling, while features like smart bookings and filters make finding the perfect room quick and effortless. Additionally, the system promotes environmental sustainability by integrating with smart building technologies to reduce energy waste in unused rooms. Ultimately, the system enhances both operational efficiency and workplace collaboration, enabling teams to focus on their goals.
                </Paragraph>
            </div>
            <OurTeamMember />
            <OurStory />
        </div >
    );
};

export default About;
