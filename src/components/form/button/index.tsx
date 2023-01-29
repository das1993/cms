import { Button as BootrapButton } from "react-bootstrap";
type ButtonProps = {
  label: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
};

const Button = ({ label, type, className }: ButtonProps) => {
  return (
    <>
      <BootrapButton type={type} className={className}>
        {label}
      </BootrapButton>
    </>
  );
};

export default Button;
