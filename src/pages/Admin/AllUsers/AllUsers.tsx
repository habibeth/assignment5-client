import { Button, Table } from "antd";
import { toast } from "sonner";
import { useDeleteUserMutation, useGetAllUsersQuery, useUpdateUserMutation } from "../../../redux/feature/Admin/userManagement.api";

const AllUsers = () => {
    const [deleteUser] = useDeleteUserMutation();
    const [updateUser] = useUpdateUserMutation()
    const { data: getAllUsers, isLoading, isFetching } = useGetAllUsersQuery(undefined);

    const roomData = getAllUsers?.data?.map(({ _id, name, email, phone, role, address, isDeleted }: any) => ({
        key: _id,
        name,
        email,
        phone,
        role,
        address,
        isDeleted
    })) || [];


    const handleMakeAdmin = async (id: string) => {
        const toastId = toast.loading("Loading Progress!");
        const userData = {
            id: id,
            data: {
                role: 'admin'
            }
        }
        const res = await updateUser(userData);
        if (res.data.success) {
            toast.success(res.data.message, { id: toastId })
        }
        else {
            toast.error(res.data.message, { id: toastId })
        }
    }

    const handleMakeUser = async (id: string) => {
        const toastId = toast.loading("Loading Progress!");
        const userData = {
            id: id,
            data: {
                role: 'user'
            }
        }
        const res = await updateUser(userData);
        if (res.data.success) {
            toast.success(res.data.message, { id: toastId })
        }
        else {
            toast.error(res.data.message, { id: toastId })
        }
    }

    const handleActiveUser = async (id: string) => {
        const toastId = toast.loading("Loading Progress!")
        const userData = {
            id: id,
            data: {
                isDeleted: false
            }
        }
        const res = await updateUser(userData);
        if (res.data.success) {
            toast.success(res.data.message, { id: toastId })
        }
        else {
            toast.error(res.data.message, { id: toastId })
        }
    }


    const handleDeleteUser = async (id: string) => {
        const toastId = toast.loading("Loading Progress!")
        const res = await deleteUser(id);
        if (res.data.success) {
            toast.success(res.data.message, { id: toastId })
        }
        else {
            toast.error(res.data.message, { id: toastId })
        }
    }



    const columns = [
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email Address',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'User Role',
            dataIndex: 'role',
            key: 'role',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'x',
            render: (item: any) => {
                return (
                    <div className="">
                        {
                            item.role === 'user' ?
                                <Button onClick={() => handleMakeAdmin(item.key)} type="primary">Make as Admin</Button>
                                :
                                <Button onClick={() => handleMakeUser(item.key)} type="primary">Make as User</Button>
                        }
                    </div>
                )
            }
        },
        {
            title: 'Action',
            key: 'x',
            render: (item: any) => {
                return <div className="">
                    {
                        item.isDeleted ?
                            <Button onClick={() => handleActiveUser(item.key)} type="primary">Active User</Button>
                            :
                            <Button onClick={() => handleDeleteUser(item.key)} type="primary" danger>Delete User</Button>
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

export default AllUsers;