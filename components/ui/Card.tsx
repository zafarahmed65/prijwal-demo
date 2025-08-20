import * as React from 'react';
import clsx from 'clsx';

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-gray-200 bg-white shadow-sm',
        'transition-shadow hover:shadow-md',
        className
      )}
      {...props}
    />
  );
}
export default Card;
