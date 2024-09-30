import { Row, Typography } from "antd";
import { TRoom } from "../../../types";
import FeaturedRoom from "../FeaturedRoom/FeaturedRoom";
import { useGetAllRoomsQuery } from "../../../redux/feature/Admin/roomManagement.api";

const { Title } = Typography;

const FeaturedRooms = () => {
    const { data: getAllRooms, isLoading, isFetching } = useGetAllRoomsQuery(undefined);

    if (isLoading || isFetching) {
        return <div>Loading!!!</div>
    }

    return (
        <div style={{ marginTop: "80px" }}>
            <Title
                style={{
                    textAlign: 'center',
                    marginBottom: '24px',
                    animation: 'fadeIn 1s ease-in'
                }}
            >
                Featured Products
            </Title>
            <div style={{ overflow: 'hidden' }}>
                <Row gutter={16}>
                    {
                        getAllRooms?.data!.slice(0, 6).map((room: TRoom) => <FeaturedRoom key={room._id} room={room} />)
                    }
                </Row>
            </div>
        </div>
    );
};

export default FeaturedRooms;