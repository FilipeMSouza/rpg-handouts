'use client';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactElement } from 'react';
import { cloneElement } from 'react';

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export const ActiveLink = ({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) => {
  const asPath = usePathname();

  const className = asPath === rest.href ? activeClassName : '';

  return (
    <Link {...rest} prefetch>
      {cloneElement(children, {
        className,
      })}
    </Link>
  );
};
