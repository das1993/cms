import { ReactElement } from "react";
import { FormControl, FormLabel } from "react-bootstrap";

type InputProps = {
  label?: string;
  type?: string;
  icon?: () => ReactElement;
};

const Input = ({ label, type, icon }: InputProps) => {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <FormControl type={type}></FormControl>
      <span className="login--border"></span>
      {icon && icon()}
    </>
  );
};

export default Input;
