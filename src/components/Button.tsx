import { ComponentProps, FC } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'px-8 transition-colors rounded-[999px] cursor-pointer',
  variants: {
    variant: {
      primary: 'bg-white text-black w-fit hover:bg-white/90',
      outline: "ring-1 ring-white text-white hover:bg-neutral-500/5"
    },
    size: {
      large: 'h-14',
    },
  },
  defaultVariants: {
    size: 'large',
  }
});

export interface ButtonProps extends VariantProps<typeof buttonVariants>, ComponentProps<'button'> {}

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={buttonVariants({
        className: className,
        variant: props.variant,
        size: props.size,
      })}
      {...props}
    >
      {children}
    </button>
  );
};
