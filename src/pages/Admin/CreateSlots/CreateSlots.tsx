import { Button, Col, Flex } from "antd";
import MRForm from "../../../components/Form/MRForm";
import MRSelect from "../../../components/Form/MRSelect";
import { FieldValues } from "react-hook-form";
import { useGetAllRoomsQuery } from "../../../redux/feature/Admin/roomManagement.api";
import MRDatePicker from "../../../components/Form/MRDatePicker";
import MRTimePicker from "../../../components/Form/MRTimePicker";
import moment from "moment";
import { toast } from "sonner";
import { useCreateSlotsMutation } from "../../../redux/feature/Admin/slotsManagement.api";
import { useNavigate } from "react-router-dom";

const CreateSlots = () => {
    const [createSlots] = useCreateSlotsMutation();
    const { data: getAllRooms, isLoading, isFetching } = useGetAllRoomsQuery(undefined);
    const navigate = useNavigate();

    const roomsOption: any = getAllRooms?.data?.map((item: any) => ({
        value: item._id,
        label: `${item.name} ${item.roomNo}`
    }))

    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Loading Progress!")


        try {
            const slotsData = {
                ...data,
                date: moment(new Date(data.date)).format('YYYY-MM-DD'),
                startTime: moment(new Date(data.startTime)).format('HH:mm'),
                endTime: moment(new Date(data.endTime)).format('HH:mm'),
            }

            const res = await createSlots(slotsData).unwrap();
            if (res.success) {
                toast.success(res.message, { id: toastId });
                navigate('/admin/getAllSlots')
            }
        } catch (error: any) {
            toast.error(error?.data.message, { id: toastId })
        }
    }

    if (isLoading || isFetching) {
        return <div>Loading ....</div>
    }
    return (
        <Flex justify="center" align="center" style={{ marginBottom: '100px' }}>
            <Col span={6}>
                <div style={{ textAlign: 'center', margin: '50px 0' }}>
                    <h2>Create Slots</h2>
                </div>
                <MRForm onSubmit={onSubmit}>
                    <MRSelect options={roomsOption} name="room" label="Room Name" />
                    <MRDatePicker name="date" label="Slots Date" />
                    <MRTimePicker name="startTime" label="Start Time" />
                    <MRTimePicker name="endTime" label="End Time" />
                    <Button htmlType="submit" type="primary" block>Create Room Slots</Button>
                </MRForm>
            </Col>
        </Flex>
    );
};

export default CreateSlots;