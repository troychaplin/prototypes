import React from 'react'
export interface MainProps {
  children: React.ReactNode
}

export const Main = ({ children }: MainProps) => {
  return <main className="relative wmd-main">{children}</main>
}
