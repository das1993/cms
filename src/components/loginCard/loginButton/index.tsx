import Button from "components/form/button";

const LoginButton = () => {
  return (
    <div className="login-button d-flex flex-wrap justify-content-center">
      <div className="login-button--wrapper">
        <div className="login-button--background" />
        <Button label="Login" type="submit" />
      </div>
    </div>
  );
};

export default LoginButton;
