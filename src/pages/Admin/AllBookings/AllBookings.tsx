import { Button, Table } from "antd";
import { toast } from "sonner";
import { useDeleteBookingMutation, useGetAllBookingsQuery, useUpdateBookingMutation } from "../../../redux/feature/User/bookingManagement.api";
import Swal from "sweetalert2";

const AllBookings = () => {
    const [updateBookings] = useUpdateBookingMutation();
    const [deleteBooking] = useDeleteBookingMutation()
    const { data: getAllBookings, isLoading, isFetching } = useGetAllBookingsQuery(undefined);

    const bookingsData = getAllBookings?.data?.map(({ _id, user, date, slots, room, totalAmount, isConfirmed }: any) => ({
        key: _id,
        name: user.name,
        phone: user.phone,
        date,
        roomName: room.name,
        roomNo: room.roomNo,
        slots: slots.map((slot: any) => `${slot.startTime} - ${slot.endTime}`).join(', '),
        totalAmount,
        isConfirmed,
    })) || [];


    const handleUnconfirmed = async (id: string) => {
        const toastId = toast.loading("Loading Progress!");
        const bookingData = {
            id: id,
            data: {
                isConfirmed: 'unconfirmed'
            }
        }
        const res = await updateBookings(bookingData);
        if (res.data.success) {
            toast.success(res.data.message, { id: toastId })
        }
        else {
            toast.error(res.data.message, { id: toastId })
        }
    }

    const handleConfirmed = async (id: string) => {
        const toastId = toast.loading("Loading Progress!");
        const bookingData = {
            id: id,
            data: {
                isConfirmed: 'confirmed'
            }
        }
        const res = await updateBookings(bookingData);
        if (res.data.success) {
            toast.success(res.data.message, { id: toastId })
        }
        else {
            toast.error(res.data.message, { id: toastId })
        }
    }

    const handleRejectBooking = async (id: string) => {
        const toastId = toast.loading("Loading Progress!");
        const bookingData = {
            id: id,
            data: {
                isConfirmed: 'rejected'
            }
        }
        const res = await updateBookings(bookingData);
        if (res.data.success) {
            toast.success(res.data.message, { id: toastId })
        }
        else {
            toast.error(res.data.message, { id: toastId })
        }
    }

    const handleDeleteBooking = (id: string) => {
        Swal.fire({
            title: "Are you sure to Delete this Booking?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await deleteBooking(id)

                if (res.data.success) {
                    Swal.fire({
                        title: "Deleted!",
                        text: "Booking is Deleted Successfully!",
                        icon: "success"
                    });
                }

            }
        });
    }


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
                                <p style={{ color: 'red' }}>{item.isConfirmed}</p>
                        }
                    </div>
                )
            }
        },
        {
            title: 'Action',
            key: 'x',
            render: (item: any) => {
                return (
                    <div className="">
                        {
                            item.isConfirmed === 'confirmed' ?
                                <Button onClick={() => handleUnconfirmed(item.key)} type="primary" danger>Unconfirmed</Button>
                                :
                                <Button onClick={() => handleConfirmed(item.key)} type="primary">Confirmed</Button>
                        }
                    </div>
                )
            }
        },
        {
            title: 'Action',
            key: 'x',
            render: (item: any) => {
                return (
                    <div className="">
                        <Button onClick={() => handleRejectBooking(item.key)} type="primary" danger>Reject</Button>
                    </div>
                )
            }
        },
        {
            title: 'Action',
            key: 'x',
            render: (item: any) => {
                return (
                    <div className="">
                        <Button onClick={() => handleDeleteBooking(item.key)} type="primary" danger>Delete</Button>
                    </div>
                )
            }
        },
    ];



    if (isLoading) {
        return <p>Loading!!!</p>
    }

    return (
        <div style={{ width: '1280px', margin: 'auto' }}>
            <Table loading={isFetching} columns={columns} dataSource={bookingsData} pagination={false} />
        </div>
    );
};

export default AllBookings;