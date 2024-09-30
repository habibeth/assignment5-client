import { Button, Table } from "antd";
import { useDeleteSlotsMutation, useGetAllSlotsQuery, useUpdateSlotsMutation } from "../../../redux/feature/Admin/slotsManagement.api";
import moment from "moment";
import { toast } from "sonner";

const AllSlots = () => {
    const [updateSlots] = useUpdateSlotsMutation()
    const [deleteSlots] = useDeleteSlotsMutation()
    const { data: getAllSlots, isLoading, isFetching } = useGetAllSlotsQuery(undefined);

    const slotsData = getAllSlots?.data?.map(({ _id, room, date, startTime, endTime, isDeleted }: any) => ({
        key: _id,
        name: room?.name,
        roomNo: room?.roomNo,
        capacity: room?.capacity,
        price: room?.pricePerSlot,
        date: moment(new Date(date)).format('YYYY-MM-DD'),
        startTime,
        endTime,
        isDeleted
    })) || [];


    const handleDeleteSlots = async (id: string) => {
        const toastId = toast.loading("Loading Progress!")
        const res = await deleteSlots(id);
        if (res.data.success) {
            toast.success(res.data.message, { id: toastId })
        }
        else {
            toast.error(res.data.message, { id: toastId })
        }
    }


    const handleActiveSlots = async (id: string) => {
        const toastId = toast.loading("Loading Progress!")
        const res = await updateSlots(id);
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
            title: 'Room Capacity',
            dataIndex: 'capacity',
            key: 'capacity',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Start Time',
            dataIndex: 'startTime',
            key: 'startTime',
        },
        {
            title: 'End Time',
            dataIndex: 'endTime',
            key: 'endTime',
        },
        {
            title: 'Action',
            key: 'x',
            render: (item: any) => {
                return <div className="">
                    {
                        item.isDeleted ?
                            <Button onClick={() => handleActiveSlots(item.key)} type="primary">Active</Button>
                            :
                            <Button onClick={() => handleDeleteSlots(item.key)} type="primary" danger>Delete</Button>
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
            <Table loading={isFetching} columns={columns} dataSource={slotsData} pagination={false} />
        </div>
    );
};

export default AllSlots;