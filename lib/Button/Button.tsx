import type { ReactNode } from 'react'

interface IButtonProps {
  children: ReactNode
}

export const Button = ({ children }: IButtonProps) => {
  return <button className='bg-red-800'>Click: {children}</button>
}
