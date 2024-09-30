import { Timeline, Typography } from "antd";

const { Title } = Typography;

const OurStory = () => {
    return (
        <div>
            <Title
                style={{
                    textAlign: 'center',
                    marginBottom: '24px',
                    animation: 'fadeIn 1s ease-in'
                }}
            >
                Our Story
            </Title>
            <div>
                <Timeline
                    items={[
                        {
                            children: "2010 - Founded with a vision to revolutionize the way businesses collaborate and communicate through efficient meeting space management."
                        },
                        {
                            children: "2012 - Launched our first version of the Meeting Room Booking System, introducing basic scheduling features and room availability tracking."
                        },
                        {
                            children: "2014 - Expanded the system with mobile support, allowing users to book rooms on the go and enhancing accessibility."
                        },
                        {
                            children: "2016 - Integrated with major calendar systems like Google Calendar and Outlook, streamlining the booking process for organizations worldwide."
                        },
                        {
                            children: "2018 - Introduced advanced analytics and reporting features to help companies optimize room utilization and resource management."
                        },
                        {
                            children: "2019 - Added smart room features, including automated lighting and temperature control, contributing to energy-saving and sustainability efforts."
                        },
                        {
                            children: "2020 - Launched multi-location support, enabling global companies to manage meeting rooms across different office locations with ease."
                        },
                        {
                            children: "2021 - Introduced AI-powered recommendations for optimal meeting times and rooms based on usage patterns and preferences."
                        },
                        {
                            children: "2022 - Added real-time video conferencing integration, allowing teams to connect seamlessly across remote and hybrid environments."
                        },
                        {
                            children: "2023 - Reached over 10,000 active users, becoming a trusted meeting space management solution for businesses worldwide."
                        },
                        {
                            children: "2024 - Continued innovation with new features such as voice-assisted booking and predictive analytics for future space planning."
                        }
                    ]}
                />
            </div>
        </div>
    );
};

export default OurStory;