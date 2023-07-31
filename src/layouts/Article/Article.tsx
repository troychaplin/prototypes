import React from 'react'
import { globalStyles } from '../../utils/globalClasses'

export interface ArticleProps {
  children?: React.ReactNode
}

export const Article = ({ children }: ArticleProps) => {
  return <article className={`wmd-spacing ${globalStyles.prose}`}>{children}</article>
}
