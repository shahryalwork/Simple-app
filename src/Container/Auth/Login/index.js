import { Form, Input, Button, Row, Col ,Spin} from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "./../../../redux/actions/authAction";
import { useDispatch, useSelector } from "react-redux";

const Login = ({}) => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const error = useSelector((state) => state.authReducer.loginError);
  const isLoading = useSelector((state) => state.authReducer.isLoading);

  const dispatch = useDispatch();

  // use for routing
  const navigate = useNavigate();

  // here is login Funtionality
  const login = () => {
    dispatch(signIn(state));
    // console.log(">>>>",signIn);
  };

  // dynamic state change handler
  onchange = (e) =>
    e.target.name && setState({ ...state, [e.target.name]: e.target.value });

  return (
    <Row className="auth-container">
      <Col span={10} className="auth-col">
        <h2>Login Form</h2>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
        >
          <Form.Item
            label="username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input name="username" type="text" onChange={onchange} />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
            onChange={onchange}
          >
            <Input.Password name="password" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            {isLoading?<Spin/>:<Button type="primary" htmlType="submit" onClick={login}>
              Submit
            </Button>}
          </Form.Item>
          {error ? <div className="error-style">{error}</div> : ""}
        </Form>
      </Col>
    </Row>
  );
};
export default Login;
