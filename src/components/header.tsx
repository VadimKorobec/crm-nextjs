import React from 'react';

export interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return <h1>{children}</h1>;
}
