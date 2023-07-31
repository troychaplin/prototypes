import React from 'react'
import { globalStyles } from '../../utils/globalClasses'

export interface ColumnContentProps {
  children: React.ReactNode
}

export const ColumnContent = ({ children }: ColumnContentProps) => {
  return <div className={`wmd-spacing ${globalStyles.prose}`}>{children}</div>
}

ColumnContent.displayName = 'Column.Content'
