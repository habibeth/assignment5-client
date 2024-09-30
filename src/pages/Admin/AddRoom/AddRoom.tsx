import { Button, Col, Flex, Form, Input } from "antd";
import MRForm from "../../../components/Form/MRForm";
import MRInput from "../../../components/Form/MRInput";
import MRSelect from "../../../components/Form/MRSelect";
import { Controller, FieldValues } from "react-hook-form";
import { meetingRoomAmenities } from "../../../constant/amenities";
import { useCreateRoomMutation } from "../../../redux/feature/Admin/roomManagement.api";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

const AddRoom = () => {
    const navigate = useNavigate()
    const [createRoom] = useCreateRoomMutation()
    const amenitiesOptions = meetingRoomAmenities?.map(item => ({
        value: item,
        label: item
    }))

    const defaultValues = {
        name: "Conference Room 10",
        roomNo: 501,
        floorNo: 5,
        capacity: 39,
        pricePerSlot: 365,
        amenities: ["Whiteboard"],
        isDeleted: false
    }


    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Loading Progress!")
        try {
            const roomData = {
                ...data,
                roomNo: Number(data.roomNo),
                floorNo: Number(data.floorNo),
                capacity: Number(data.capacity),
                pricePerSlot: Number(data.pricePerSlot),
            }
            const formData = new FormData();
            formData.append('data', JSON.stringify(roomData));
            formData.append('file', data?.image);

            const res = await createRoom(formData);
            if (res.data.success) {
                toast.success(res.data.message, { id: toastId });
                navigate('/admin/allRoomsManagement')
            }
        } catch (error) {
            toast.error("Something went to Wrong", { id: toastId })
        }
    }


    return (
        <Flex justify="center" align="center" style={{ marginBottom: '100px' }}>
            <Col span={6}>
                <div style={{ textAlign: 'center', margin: '50px 0' }}>
                    <h2>Add Room</h2>
                </div>
                <MRForm onSubmit={onSubmit} defaultValues={defaultValues}>
                    <MRInput type="text" name="name" label={"Room Name: "} />
                    <MRInput type="text" name="roomNo" label={"Room Number: "} />
                    <MRInput type="text" name="floorNo" label={"Floor No: "} />
                    <MRInput type="text" name="capacity" label={"Room Capacity: "} />
                    <MRInput type="text" name="pricePerSlot" label={"Price Per Slots: "} />
                    <MRSelect mode="multiple" options={amenitiesOptions} name="amenities" label="Amenities" />

                    <Controller
                        name="image"
                        render={({ field: { onChange, value, ...field } }) => (
                            <Form.Item label="Picture">
                                <Input
                                    type="file"
                                    value={value?.fileName}
                                    {...field}
                                    onChange={(e) => onChange(e.target.files?.[0])}
                                />
                            </Form.Item>
                        )}
                    />
                    <Button htmlType="submit" type="primary" block>Add Room</Button>
                </MRForm>
            </Col>
        </Flex>
    );
};

export default AddRoom;