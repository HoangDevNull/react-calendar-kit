import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const buttonVariants = tv({
  base: 'ring-offset-background focus-visible:ring-ring inline-flex scale-100 items-center justify-center gap-2 whitespace-nowrap rounded-md text-base font-semibold transition-all duration-200  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      default:
        'bg-primary gradient-border-DEFAULT gradient-border-gradient-primary-btn text-foreground shadow-primary-button  hover:brightness-75',
      secondary:
        'border-primary shadow-secondary-button bg-gradient-secondary-btn text-foreground border hover:brightness-75',
      destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline: 'border-input bg-background hover:bg-accent hover:text-accent-foreground border',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      default: 'h-12 px-4 py-2',
      sm: 'h-9 px-3',
      lg: 'h-[50px] px-8',
      icon: 'h-10 w-10',
    },
    rounded: {
      default: 'rounded-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'lg',
    rounded: 'default',
  },
});

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, rounded, variant, size, ...props }, ref) => {
    return <button className={cn(buttonVariants({ variant, size, rounded, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
