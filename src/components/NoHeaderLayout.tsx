import React from 'react'
import type { ReactNode } from 'react'
import Footer from './Footer'
type LayoutProps = {
  children: ReactNode
}

const NoHeaderLayout = ({ children }: LayoutProps) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  )
}

export default NoHeaderLayout
