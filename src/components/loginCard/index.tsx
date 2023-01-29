import { Form, FormGroup } from "react-bootstrap";
import Input from "components/form/input";
import { FaUser, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginButton from "./loginButton";

const LoginCard = () => {
  return (
    <Form>
      <h1>Login</h1>

      <FormGroup className="login--form-group mb-4">
        <Input
          type="email"
          label="Email"
          icon={() => <FaUser className="login--icon" />}
        />
      </FormGroup>

      <FormGroup className="login--form-group">
        <Input
          type="password"
          label="Password"
          icon={() => <FaLock className="login--icon" />}
        />
      </FormGroup>

      <div className="login--forgot-password pt-2 mb-5">
        <Link to="#">Forgot password?</Link>
      </div>
      <LoginButton />
    </Form>
  );
};

export default LoginCard;
