import { ComponentProps, FC } from 'react';

export interface XIconProps extends ComponentProps<'svg'> {}

export const XIcon: FC<XIconProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <g clip-path="url(#clip0_31_504)">
        <path
          d="M15.625 4.375L4.375 15.625"
          stroke="white"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.625 15.625L4.375 4.375"
          stroke="white"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_31_504">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
