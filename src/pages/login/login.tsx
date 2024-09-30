import { Button, Col, Flex } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import MRInput from "../../components/Form/MRInput";
import MRForm from "../../components/Form/MRForm";
import { useAppDispatch } from "../../redux/hook";
import { useLoginMutation } from "../../redux/feature/auth/authApi";
import { verifyToken } from "../../utlis/verifyToken";
import { setUser, TUser } from "../../redux/feature/auth/authSlice";
import { toast } from "sonner";


const Login = () => {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const [login] = useLoginMutation();
    const defaultValues = {
        email: "habibstk97@gmail.com",
        password: "123456"
    }

    const onSubmit = async (data: FieldValues) => {
        const toastId = toast.loading("Loading Progress!")
        try {
            const userInfo = {
                email: data.email,
                password: data.password
            }
            const res = await login(userInfo);
            const token = res.data.accessToken
            const user = verifyToken(token) as TUser
            dispatch(setUser({ user: user, token: token }))
            toast.success("User Login Successfully!", { id: toastId })

            if (user.role) {
                return navigate(`/`)
            }

        } catch (error) {
            toast.error("Something went to Wrong", { id: toastId })
        }
    }
    return (
        <Flex justify="center" align="center" style={{ marginTop: '100px' }}>
            <Col span={6}>
                <div style={{ textAlign: 'center' }}>
                    <h2>Login With Meet Mate</h2>
                    <p style={{ margin: "20px 0" }}>Welcome Back! Let&lsquo;s Get Started</p>
                </div>
                <MRForm onSubmit={onSubmit} defaultValues={defaultValues}>
                    <MRInput type="text" name="email" label={"Email: "} />
                    <MRInput type="password" name="password" label={"Password: "} />
                    <Button htmlType="submit" type="primary" block>Login</Button>
                    <p style={{ margin: '20px 0' }}>Don&lsquo;t have account ? Please <Link to={"/register"}>Register</Link></p>
                </MRForm>
            </Col>
        </Flex>
    );
};

export default Login;