import { Button, Col, Flex, Form, Input } from "antd";
import { Controller, FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import MRForm from "../../components/Form/MRForm";
import MRInput from "../../components/Form/MRInput";
import { toast } from "sonner";
import { useCreateUserMutation } from "../../redux/feature/auth/authApi";



const Register = () => {
    const [createUser] = useCreateUserMutation();

    const defaultValues = {
        name: "Ahsan Habib",
        email: "habibstk97@gmail.com",
        password: "123456",
        phone: "1234567890",
        address: "123 Main Street, City, Country"
    }

    const onSubmit = async (data: FieldValues) => {
        // console.log(data)
        const toastId = toast.loading("Loading Progress!")
        try {
            const userData = {
                ...data
            }

            console.log(data)

            const formData = new FormData();
            formData.append('data', JSON.stringify(userData));
            formData.append('file', data?.profileImage);

            const res = await createUser(formData);

            if (res.data.success) {
                toast.success(res.data.message, { id: toastId })
            }
        } catch (error) {
            toast.error("Something went to Wrong", { id: toastId })
        }
    }
    return (
        <Flex justify="center" align="center" style={{ marginTop: '100px', marginBottom: '100px' }}>
            <Col span={6}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Register With Meet Mate</h2>
                    <p style={{ margin: "20px 0" }}>Welcome Our Meet Mate! Let&lsquo;s Register Now</p>
                </div>
                <MRForm onSubmit={onSubmit} defaultValues={defaultValues}>
                    <MRInput type="text" name="name" label={"Name: "} />
                    <MRInput type="text" name="email" label={"Email: "} />
                    <MRInput type="password" name="password" label={"Password: "} />
                    <MRInput type="text" name="phone" label={"Phone: "} />
                    <MRInput type="text" name="address" label={"Address: "} />
                    <Controller
                        name="profileImage"
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
                    <Button htmlType="submit" type="primary" block>Register</Button>
                    <p style={{ margin: '20px 0' }}>Already have an account ? Please <Link to={"/login"}>Login</Link></p>
                </MRForm>
            </Col>
        </Flex>
    );
};

export default Register;