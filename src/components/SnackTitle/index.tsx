import { ReactNode } from "react";
import { Title } from "./styles";

interface SnackTitleProps {
  children: ReactNode
}

const SnackTitle = ({children}: SnackTitleProps) => {
  return (
    <Title>{children}</Title>
  )
}

export default SnackTitle;
