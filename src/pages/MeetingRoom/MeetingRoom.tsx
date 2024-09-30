import { Card, Col } from "antd";
import Meta from "antd/es/card/Meta";
import { Link } from "react-router-dom";
import { TRoom } from "../../types";

const MeetingRoom = ({ room }: { room: TRoom }) => {
    const { _id, name, capacity, pricePerSlot, image } = room;
    return (
        <Col xs={24} sm={12} md={8} style={{ marginBottom: '20px' }}>
            <Card
                hoverable
                cover={
                    <img
                        alt="Product"
                        src={image}
                        style={{ objectFit: 'cover', height: '300px' }}
                    />
                }
            >
                <Meta title={name} />
                <div style={{ margin: '10px 0' }}>
                    <p>Capacity: {capacity}</p>
                    <p style={{ margin: '10px 0' }}>Price: ${pricePerSlot}</p>
                </div>
                <div
                    style={{ marginTop: "25px" }}
                >
                    <Link
                        to={`/meeting-room/${_id}`}
                        style={{
                            padding: '10px 20px',
                            backgroundColor: '#ff6200',
                            color: '#fff',
                            fontSize: '1rem',
                            borderRadius: '5px',
                            textDecoration: 'none',
                        }}
                    >
                        See Details
                    </Link>
                </div>
            </Card>
        </Col>
    );
};

export default MeetingRoom;