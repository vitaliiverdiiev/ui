import { ComponentProps, ReactElement } from 'react';

export type ButtonProps = ComponentProps<'button'>;

export const Button = ({ ...props }: ButtonProps): ReactElement => {
  return <button className='text-red-500' {...props} />;
};
