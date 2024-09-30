import { Button, Col, Flex } from "antd";
import MRForm from "../../../components/Form/MRForm";
import MRSelect from "../../../components/Form/MRSelect";
import { FieldValues } from "react-hook-form";
import MRDatePicker from "../../../components/Form/MRDatePicker";
import { useGetAllSlotsQuery } from "../../../redux/feature/Admin/slotsManagement.api";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../redux/hook";
import { useCurrentToken } from "../../../redux/feature/auth/authSlice";
import { verifyToken } from "../../../utlis/verifyToken";
import moment from "moment";
import { toast } from "sonner";
import { useCreateBookingMutation } from "../../../redux/feature/User/bookingManagement.api";

const CreateBookingRoom = () => {
    const { id: roomId } = useParams()
    const token = useAppSelector(useCurrentToken);

    let user: any;
    if (token) {
        user = verifyToken(token);
    }

    const [createBooking] = useCreateBookingMutation()
    const { data: getAllSlots, isLoading, isFetching } = useGetAllSlotsQuery([{ name: 'room', value: roomId }]);
    const navigate = useNavigate();

    console.log(getAllSlots)

    const slotsOption: any = getAllSlots?.data?.map((item: any) => ({
        value: item._id,
        label: `${item.startTime} - ${item.endTime} - Date: ${moment(new Date(item.date)).format('YYYY-MM-DD')}`
    }))


    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Loading Progress!")


        try {
            const bookingData = {
                ...data,
                date: moment(new Date(data.date)).format('YYYY-MM-DD'),
                user: user?.id,
                room: roomId
            }


            const res = await createBooking(bookingData);
            if (res.data.success) {
                toast.success(res.data.message, { id: toastId });
                navigate('/bookingConfirmation', { state: bookingData });
            }
        } catch (error) {
            toast.error("Something went to Wrong", { id: toastId })
        }
    }
    const slotsData = getAllSlots?.data ?? [];

    if (isLoading || isFetching) {
        return <div>Loading ....</div>
    }
    return (
        <Flex justify="center" align="center" style={{ marginTop: '100px', marginBottom: '100px' }}>
            <Col span={6}>
                <div style={{ textAlign: 'center', margin: '50px 0' }}>
                    <h2>Create Booking Room</h2>
                </div>
                <MRForm onSubmit={onSubmit}>
                    <MRDatePicker name="date" label="Slots Date" />
                    {
                        slotsData.length > 0 ?
                            (<MRSelect
                                mode="multiple"
                                name="slots"
                                label={"Slots Time"}
                                options={slotsOption}
                            />)
                            :
                            (<MRSelect
                                disabled
                                mode="multiple"
                                name="slots"
                                label={"Slots Time"}
                                options={slotsOption}
                            />)
                    }
                    <Button htmlType="submit" type="primary" block>Booking Room</Button>
                </MRForm>
            </Col>
        </Flex>
    );
};

export default CreateBookingRoom;