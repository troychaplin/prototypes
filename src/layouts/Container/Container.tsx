import React from 'react'
import { globalSpace, globalStyles } from '../../utils/globalClasses'

export interface ContainerProps {
  children?: React.ReactNode
  hasProse?: boolean
  hasGrey?: boolean
  maxWidth?: '5xl' | '7xl' | 'full'
}

export const Container = ({
  children,
  hasProse = false,
  maxWidth = '5xl',
  hasGrey
}: ContainerProps) => {
  const addProse = hasProse ? globalStyles.prose : ''
  const bgStyles = hasGrey ? `bg-gray-100 rounded-xl ${globalSpace.paddingY} ${globalSpace.paddingX}` : 'bg-white'

  return (
    <>
      <div
        className={`wmd-container wmd-container-${maxWidth} wmd-spacing ${addProse} ${bgStyles}`}
      >
        {children}
      </div>
    </>
  )
}
