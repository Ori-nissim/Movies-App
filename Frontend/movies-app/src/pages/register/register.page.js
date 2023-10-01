import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function RegisterPage() {

    return (
      
            <Form action="http://localhost:5000/api/auth/register" method="post"
                style={{
                    marginLeft: "10%",
                    marginTop: "5%",
                    width: "40%",
                }}>
                <h3>Create New Account</h3>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" type="text" placeholder="Enter User Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>


            </Form>

    );
}