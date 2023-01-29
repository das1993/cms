import { ReactNode } from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";

interface LayoutPropsType {
  children: ReactNode;
}
const Layout = ({ children }: LayoutPropsType) => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <div className="layout">
        <div className="layout--container">{children}</div>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
