import { Row, Col } from 'antd';
import { useGetSingleRoomQuery } from '../../redux/feature/Admin/roomManagement.api';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/hook';
import { useCurrentToken } from '../../redux/feature/auth/authSlice';
import { verifyToken } from '../../utlis/verifyToken';

const RoomDetails = () => {
    const token = useAppSelector(useCurrentToken);

    let user: any;
    if (token) {
        user = verifyToken(token);
    }

    const { id } = useParams()
    const { data: getSingleRoom, isLoading, isFetching } = useGetSingleRoomQuery(id)

    const amenities = getSingleRoom?.data.amenities.map((amenitie: any) => `${amenitie}`).join(', ')

    if (isLoading || isFetching) {
        return <div>Loading!!!</div>
    }



    return (
        <div style={{ margin: "50px 100px" }}>
            <Row gutter={16}>
                <Col xs={24} md={12}>
                    <img
                        src={getSingleRoom?.data.image}
                        alt="Sample"
                        style={{ width: '100%', height: '400px', borderRadius: '10px' }}
                    />
                </Col>
                <Col xs={24} md={12}>
                    <div style={{ padding: '16px', height: "400px", display: 'flex', alignItems: 'center' }}>
                        <div className="">
                            <p style={{ fontSize: "24px", marginBottom: '15px' }}><strong>Room Name:</strong> {getSingleRoom?.data.name}</p>
                            <p style={{ fontSize: "24px", marginBottom: '15px' }}><strong>Room No:</strong> {getSingleRoom?.data.roomNo}</p>
                            <p style={{ fontSize: "24px", marginBottom: '15px' }}><strong>Floor No:</strong> {getSingleRoom?.data.floorNo}</p>
                            <p style={{ fontSize: "24px", marginBottom: '15px' }}><strong>Room Capacity:</strong> {getSingleRoom?.data.capacity}</p>
                            <p style={{ fontSize: "24px", marginBottom: '15px' }}><strong>Price Per Slots:</strong> ${getSingleRoom?.data.pricePerSlot}</p>
                            <p style={{ fontSize: "24px", marginBottom: '15px' }}><strong>Amenities:</strong>{amenities}</p>
                            <div
                                style={{ marginTop: "25px" }}
                            >
                                <Link
                                    to={user?.role ? `/bookingRoom/${id}` : '/login'}
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
                    </div>
                </Col>
            </Row>

        </div >
    );
};


export default RoomDetails;
