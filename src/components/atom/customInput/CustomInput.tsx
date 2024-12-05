import { Input, InputProps } from 'antd';

const CustomInput = ({ ...rest }: InputProps) => {
  if (rest.type === 'password') {
    return <Input.Password {...rest} />;
  }
  return <Input {...rest} />;
};

export default CustomInput