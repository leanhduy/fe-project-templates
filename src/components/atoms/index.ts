/**
 * Use barrel file to export all components in the atoms folder
 * This allows us to import components from a single file instead of multiple files
 * For example, we can import Button and Input from 'components/atoms' instead of 'components/atoms/Button' and 'components/atoms/Input'
 */
export { Button } from './Button'
export type { ButtonProps } from './Button'

export { Input } from './Input'
export type { InputProps } from './Input'

export { Card } from './Card'
export type { CardProps } from './Card'
