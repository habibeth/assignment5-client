import { Button, Col, Pagination, Row, Select, Typography } from "antd";
import { TRoom } from "../../types";
import MeetingRoom from "../MeetingRoom/MeetingRoom";
import { useGetAllRoomsQuery } from "../../redux/feature/Admin/roomManagement.api";
import { useEffect, useState } from "react";
import Search from "antd/es/input/Search";

const { Title } = Typography;
const { Option } = Select;

const MeetingRooms = () => {
    const [page, setPage] = useState(1);
    const [priceOrder, setPriceOrder] = useState<"" | "asc" | "desc" | undefined>('');

    const { data: getAllRooms, isLoading, isFetching } = useGetAllRoomsQuery([
        { name: 'limit', value: 9 },
        { name: 'page', value: page },
        { name: 'sort', value: 'createdAt' },
        { name: 'priceOrder', value: priceOrder },
    ]);

    const metaData = getAllRooms?.meta

    const [filteredData, setFilteredData] = useState<TRoom[] | undefined>(getAllRooms?.data);
    useEffect(() => {
        setFilteredData(getAllRooms?.data);
    }, [getAllRooms?.data]);

    const onSearch = (value: string) => {
        const filtered = getAllRooms?.data!.filter(item =>
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.roomNo.toString().includes(value) ||
            item.capacity.toString().includes(value) ||
            item.pricePerSlot.toString().includes(value) ||
            item.amenities.some(amenity => amenity.toLowerCase().includes(value.toLowerCase()))
        );
        setFilteredData(filtered);
    };


    const handlePriceOrderChange = (value: 'asc' | 'desc' | '' | undefined) => {
        setPriceOrder(value);
    };

    const resetSorting = () => {
        setPriceOrder('');
    };


    if (isLoading || isFetching) {
        return <div>Loading!!!</div>
    }

    return (
        <div style={{ maxWidth: '1280px', margin: '80px auto' }}>
            <Title
                style={{
                    textAlign: 'center',
                    marginBottom: '24px',
                    animation: 'fadeIn 1s ease-in'
                }}
            >
                All Rooms
            </Title>
            <div style={{ overflow: 'hidden' }}>
                <Row gutter={16} style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <Col span={24} md={12}>
                        <Search
                            placeholder="Search by name"
                            onSearch={onSearch}
                            style={{ marginBottom: 20 }}
                        />
                    </Col>
                </Row>
                <div style={{ margin: '20px 0' }}>
                    <span style={{ marginRight: 10 }}>Sort by Price:</span>
                    <Select
                        value={priceOrder}
                        onChange={handlePriceOrderChange}
                        style={{ width: 200, marginRight: 10 }}
                        placeholder="Sort by Price"
                    >
                        <Option value="asc">Price: Low to High</Option>
                        <Option value="desc">Price: High to Low</Option>
                    </Select>
                    <Button onClick={resetSorting}>Reset Sorting</Button>
                </div>
                <Row gutter={16}>
                    {
                        Array.isArray(getAllRooms?.data) && filteredData?.map((room: TRoom) => <MeetingRoom key={room._id} room={room} />)
                    }
                </Row>
                <Pagination
                    style={{ marginBottom: "50px" }}
                    align="end"
                    current={page}
                    onChange={(value) => setPage(value)}
                    pageSize={metaData?.limit}
                    total={metaData?.total}
                />
            </div>
        </div>
    );
};

export default MeetingRooms;