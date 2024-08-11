import type { ReactNode } from 'react'

interface IButtonProps {
  children: ReactNode
}

export const Button = ({ children }: IButtonProps) => {
  return <button>Click: {children}</button>
}
