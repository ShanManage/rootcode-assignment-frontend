
import { Button, ButtonProps } from 'antd'
import { ButtonType } from 'antd/es/button';

export interface CustomButtonProps extends Omit<ButtonProps, 'type'> {
  type: ButtonType | 'secondary'
}

const CustomButton = ({children, type, ...rest}: CustomButtonProps) => {
  return <Button {...rest} type={type !== 'secondary' ? type : 'default'}>{children}</Button>
}

export default CustomButton;