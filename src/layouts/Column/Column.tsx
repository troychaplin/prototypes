import React from 'react'
import { ColumnContent } from './ColumnContent'
import { gridColumns } from '../../utils/propClasses'

export interface ColumnProps {
  children: React.ReactNode
  cols?: '2' | '3' | '4' | '1/3' | '2/3'
}

const styles = {
  base: `grid gap-8 md:gap-12`,
}

export const ColumnWrapper = ({ children, cols = '2' }: ColumnProps) => {
  return <div className={`wmd-column ${styles.base} ${gridColumns[cols]}`}>{children}</div>
}

export const Column = Object.assign(ColumnWrapper, {
  Content: ColumnContent,
})
