import React from 'react'
import { globalSpace, globalStyles } from '../../utils/globalClasses'

export interface SectionProps {
  children?: React.ReactNode
  maxWidth?: '5xl' | '7xl' | 'full'
  hasProse?: boolean
}

export const Section = ({
  children,
  maxWidth = '5xl',
  hasProse,
}: SectionProps) => {
  const addProse = hasProse ? globalStyles.prose : ''

  return (
    <section
      className={`wmd-section wmd-section-${maxWidth} ${globalSpace.padding} ${addProse}`}
    >
      {children}
    </section>
  )
}
