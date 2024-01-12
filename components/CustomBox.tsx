import React from 'react'
import { twMerge } from 'tailwind-merge';

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const CustomBox = ({ children, className }: BoxProps) => {
  return (
    <div className={twMerge(`bg-neutral-900 rounded-sm h-fit w-full`, className)}>
      {children}
    </div>
  )
}

export default CustomBox