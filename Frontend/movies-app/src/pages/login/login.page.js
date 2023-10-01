import { useRef, useContext, useState } from "react";
import { AuthContext } from "../../contexts/auth.context";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';

export default function LoginPage() {

    const { setUser } = useContext(AuthContext);
    const [alertData, setAlertData] = useState({
        key: undefined,
        variant: undefined,
        text: undefined
    });
    const [isShowAlert, setShowAlert] = useState(false);
    const email = useRef(null);
    const password = useRef(null);

    const submitHandler = async (event) => {

        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email.current.value, password: password.current.value }),
            });

            console.log("🚀 ~ file: login.page.js:33 ~ submitHandler ~ response.status:", response.status)
            if (response.status === 200) {
                const data = await response.json();
                let username = data.user.username;
                setUser(username);
                setAlertData({
                    key: 'success',
                    variant: 'success',
                    text: 'Login successfully!',
                });
            }
            else {
                setAlertData({
                    key: 'danger',
                    variant: 'danger',
                    text: 'Wrong email or password.. Try again',
                });
            }

            console.log("🚀 ~ file: login.page.js:46 ~ submitHandler ~ alertData|:", alertData)
            setShowAlert(true);

            setTimeout(() => {
                setShowAlert(false);
            }, 2000);

        } catch (error) {
            console.error(error);
        }


    };

    return (
        <Form onSubmit={submitHandler}
            style={{
                marginLeft: "10%",
                marginTop: "5%",
                width: "40%",
            }}>
                <h3>Login to Your Account</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control ref={email} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control ref={password} type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Login
            </Button>
            {isShowAlert &&
                <Alert style={{ marginTop: '20px' }}
                    key={alertData.key}
                    variant={alertData.variant}>
                    {alertData.text}
                </Alert>}
        </Form>

    );
}
