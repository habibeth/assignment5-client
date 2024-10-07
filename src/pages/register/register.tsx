/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex, Form, Input } from "antd";
import { Controller, FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import MRForm from "../../components/Form/MRForm";
import MRInput from "../../components/Form/MRInput";
import { toast } from "sonner";
import { useCreateUserMutation } from "../../redux/feature/auth/authApi";



const Register = () => {
    const navigate = useNavigate()
    const [createUser] = useCreateUserMutation();


    const onSubmit = async (data: FieldValues) => {
        // console.log(data)
        const toastId = toast.loading("Loading Progress!")
        try {
            const userData = {
                ...data
            }


            const formData = new FormData();
            formData.append('data', JSON.stringify(userData));
            formData.append('file', data?.profileImage);

            const res = await createUser(formData).unwrap();

            if (res.success) {
                toast.success(res.message, { id: toastId })
                navigate('/login');
            }
        } catch (error: any) {
            toast.error(error?.data.message, { id: toastId })
        }
    }
    return (
        <Flex justify="center" align="center" style={{ marginTop: '100px', marginBottom: '100px' }}>
            <Col span={6}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Register With Meet Mate</h2>
                    <p style={{ margin: "20px 0" }}>Welcome Our Meet Mate! Let&lsquo;s Register Now</p>
                </div>
                <MRForm onSubmit={onSubmit} >
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