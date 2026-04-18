import MuiCard from '@mui/material/Card'
import type { CardProps as MuiCardProps } from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import type { ReactNode } from 'react'

export interface CardProps extends MuiCardProps {
  children: ReactNode
  /** Remove inner padding (default: false) */
  noPadding?: boolean
}

/**
 * Atom: Card
 *
 * Thin wrapper around MUI Card with a CardContent wrapper for convenience.
 * Global style overrides live in `src/theme/overrides.ts` → MuiCard.
 *
 * @example
 *   <Card><Typography>Hello</Typography></Card>
 *   <Card noPadding><img src="cover.jpg" /></Card>
 */
export function Card({ children, noPadding = false, ...props }: CardProps) {
  return (
    <MuiCard {...props}>{noPadding ? children : <CardContent>{children}</CardContent>}</MuiCard>
  )
}
