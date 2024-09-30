import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import { useDeleteRoomMutation, useGetAllRoomsQuery } from "../../../redux/feature/Admin/roomManagement.api";
import { toast } from "sonner";

const AllRoomsManagement = () => {
    const [deleteRoom] = useDeleteRoomMutation()
    const { data: getAllRooms, isLoading, isFetching } = useGetAllRoomsQuery(undefined);

    const roomData = getAllRooms?.data?.map(({ _id, name, roomNo, floorNo, capacity, pricePerSlot, amenities, isDeleted }: any) => ({
        key: _id,
        name,
        roomNo,
        floorNo,
        capacity,
        pricePerSlot,
        amenities: `${amenities},`,
        isDeleted
    })) || [];


    const handleDeleteProduct = async (id: string) => {
        console.log(id)
        const toastId = toast.loading("Loading Progress!")
        const res = await deleteRoom(id);
        if (res.data.success) {
            toast.success(res.data.message, { id: toastId })
        }
        else {
            toast.error(res.data.message, { id: toastId })
        }
    }



    const columns = [
        {
            title: 'Room Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Room No',
            dataIndex: 'roomNo',
            key: 'roomNo',
        },
        {
            title: 'Floor No',
            dataIndex: 'floorNo',
            key: 'floorNo',
        },
        {
            title: 'Capacity',
            dataIndex: 'capacity',
            key: 'capacity',
        },
        {
            title: 'Price Per Slot',
            dataIndex: 'pricePerSlot',
            key: 'pricePerSlot',
        },
        {
            title: 'Amenities',
            dataIndex: 'amenities',
            key: 'amenities',
        },
        {
            title: 'Action',
            key: 'x',
            render: (item: any) => {
                return (
                    <Link to={`/admin/updateRoom/${item.key}`}>
                        <div className="">
                            <Button type="primary">Update</Button>
                        </div>
                    </Link>
                )
            }
        },
        {
            title: 'Action',
            key: 'x',
            render: (item: any) => {
                return <div className="">
                    {
                        item.isDeleted ? <p style={{ color: 'red' }}>Room is Deleted</p> : <Button onClick={() => handleDeleteProduct(item.key)} type="primary" danger>Delete</Button>
                    }

                </div>
            }
        },
    ];



    if (isLoading) {
        return <p>Loading!!!</p>
    }

    return (
        <div style={{ width: '1280px', margin: 'auto' }}>
            <Table loading={isFetching} columns={columns} dataSource={roomData} pagination={false} />
        </div>
    );
};

export default AllRoomsManagement;