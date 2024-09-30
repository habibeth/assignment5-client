import { Button, Col, Flex } from "antd";
import MRForm from "../../../components/Form/MRForm";
import MRInput from "../../../components/Form/MRInput";
import MRSelect from "../../../components/Form/MRSelect";
import { FieldValues } from "react-hook-form";
import { meetingRoomAmenities } from "../../../constant/amenities";
import { useGetSingleRoomQuery, useUpdateRoomMutation } from "../../../redux/feature/Admin/roomManagement.api";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router-dom";

const UpdateRoom = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [updateRoom] = useUpdateRoomMutation()
    const { data: getSingleRoom, isLoading, isFetching } = useGetSingleRoomQuery(id);

    const amenitiesOptions = meetingRoomAmenities?.map(item => ({
        value: item,
        label: item
    }))

    const deletedOptions: any = [
        {
            value: true,
            label: 'True'
        },
        {
            value: false,
            label: 'False'
        },
    ]

    const defaultValues = {
        name: getSingleRoom?.data.name,
        roomNo: getSingleRoom?.data.roomNo,
        floorNo: getSingleRoom?.data.floorNo,
        capacity: getSingleRoom?.data.capacity,
        pricePerSlot: getSingleRoom?.data.pricePerSlot,
        amenities: getSingleRoom?.data.amenities,
        isDeleted: getSingleRoom?.data.isDeleted,
    }


    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Loading Progress!")
        try {
            const roomData = {
                id: id,
                data: {
                    ...data,
                    roomNo: Number(data.roomNo),
                    floorNo: Number(data.floorNo),
                    capacity: Number(data.capacity),
                    pricePerSlot: Number(data.pricePerSlot),
                }
            }

            const res = await updateRoom(roomData);
            if (res.data.success) {
                toast.success(res.data.message, { id: toastId });
                navigate('/allRoomsManagement')
            }
        } catch (error) {
            toast.error("Something went to Wrong", { id: toastId })
        }
    }

    if (isLoading || isFetching) {
        return <div>Loading....</div>
    }


    return (
        <Flex justify="center" align="center" style={{ marginBottom: '100px' }}>
            <Col span={6}>
                <div style={{ textAlign: 'center', margin: '50px 0' }}>
                    <h2>Update Room</h2>
                </div>
                <MRForm onSubmit={onSubmit} defaultValues={defaultValues}>
                    <MRInput type="text" name="name" label={"Room Name: "} />
                    <MRInput type="text" name="roomNo" label={"Room Number: "} />
                    <MRInput type="text" name="floorNo" label={"Floor No: "} />
                    <MRInput type="text" name="capacity" label={"Room Capacity: "} />
                    <MRInput type="text" name="pricePerSlot" label={"Price Per Slots: "} />
                    <MRSelect mode="multiple" options={amenitiesOptions} name="amenities" label="Amenities" />
                    <MRSelect options={deletedOptions} name="isDeleted" label="Product Deleted!" />
                    <Button htmlType="submit" type="primary" block>Update Room</Button>
                </MRForm>
            </Col>
        </Flex>
    );
};

export default UpdateRoom;