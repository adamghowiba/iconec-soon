import { ComponentProps } from 'react';
import { cn } from 'tailwind-variants';

export function Input({ className, type, ...props }: ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'ring-1 ring-[rgba(255,255,255,0.2)] h-13 rounded-full text-white px-4 py-3.75 placeholder:text-[rgba(255,255,255,0.4)] w-full outline-none',
        'focus-visible:ring-1 hover:bg-neutral-500/5 focus-visible:ring-white/60 focus-within:bg-neutral-500/5 transition-all duration-200 ease-out',
        className
      )}
      {...props}
    />
  );
}
