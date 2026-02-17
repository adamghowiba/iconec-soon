import { ComponentProps, FC } from 'react';
import { cn } from 'tailwind-variants';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface XIconProps extends ComponentProps<'svg'> {}

export const XIcon: FC<XIconProps> = ({ className, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn('text-white', className)}
      {...props}
    >
      <g clipPath="url(#clip0_31_504)">
        <path
          d="M15.625 4.375L4.375 15.625"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.625 15.625L4.375 4.375"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_31_504">
          <rect width="20" height="20" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};
