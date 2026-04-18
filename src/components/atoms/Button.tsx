import MuiButton from '@mui/material/Button'
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button'

export type ButtonProps = MuiButtonProps

/**
 * Atom: Button
 *
 * Thin wrapper around MUI Button. Use this component throughout the app
 * so that global style changes only need to happen in one place
 * (or in `src/theme/overrides.ts` → MuiButton).
 *
 * @example
 *   <Button variant="contained">Save</Button>
 *   <Button variant="outlined" color="secondary">Cancel</Button>
 */
export function Button({ children, ...props }: ButtonProps) {
  return <MuiButton {...props}>{children}</MuiButton>
}
