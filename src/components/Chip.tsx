/* eslint-disable @typescript-eslint/no-empty-object-type */
import { ComponentProps, FC } from 'react';

export interface ChipProps extends ComponentProps<'div'> {}

export const Chip: FC<ChipProps> = ({ children, ...props }) => {
  return (
    <div className="border border-white text-white rounded-full py-1 px-4 max-mobile:text-[15px]" {...props}>
      {children}
    </div>
  );
};
