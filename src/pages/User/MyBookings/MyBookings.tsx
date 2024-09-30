import { Table } from "antd";
import { useGetMyBookingsQuery } from "../../../redux/feature/User/bookingManagement.api";
import { useAppSelector } from "../../../redux/hook";
import { useCurrentToken } from "../../../redux/feature/auth/authSlice";
import { verifyToken } from "../../../utlis/verifyToken";

const MyBookings = () => {
    const { data: getMyBookings, isLoading, isFetching } = useGetMyBookingsQuery(undefined);

    const token = useAppSelector(useCurrentToken);

    let user: any;
    if (token) {
        user = verifyToken(token);
    }

    const bookingsData = getMyBookings?.data?.map(({ _id, slots, date, room, totalAmount, isConfirmed }: any) => ({
        key: _id,
        name: user?.name,
        phone: user?.phone,
        date: date,
        roomName: room.name,
        roomNo: room.roomNo,
        slots: slots.map((slot: any) => `${slot.startTime} - ${slot.endTime}`).join(', '),
        totalAmount,
        isConfirmed,
    })) || [];


    const columns = [
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'User Phone Number',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Slots',
            dataIndex: 'slots',
            key: 'slots',
        },
        {
            title: 'Room Name',
            dataIndex: 'roomName',
            key: 'roomName',
        },
        {
            title: 'Room No',
            dataIndex: 'roomNo',
            key: 'roomNo',
        },
        {
            title: 'Total Amount',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
        },
        {
            title: 'Status',
            key: 'x',
            render: (item: any) => {
                return (
                    <div className="">
                        {
                            item.isConfirmed === 'confirmed' ?
                                <p style={{ color: 'green' }}>Confirmed</p>
                                :
                                <p style={{ color: 'red' }}>Pending</p>
                        }
                    </div>
                )
            }
        },
    ];



    if (isLoading) {
        return <p>Loading!!!</p>
    }

    return (
        <div style={{ width: '1280px', margin: '100px auto' }}>
            <Table loading={isFetching} columns={columns} dataSource={bookingsData} pagination={false} />
        </div>
    );
};

export default MyBookings;