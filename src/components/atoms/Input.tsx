import TextField from '@mui/material/TextField'
import type { TextFieldProps } from '@mui/material/TextField'

// Extend with project-specific props here
export type InputProps = TextFieldProps

/**
 * Atom: Input
 *
 * Thin wrapper around MUI TextField. Defaults to outlined variant.
 * Global style overrides live in `src/theme/overrides.ts` → MuiOutlinedInput.
 *
 * @example
 *   <Input label="Email" type="email" fullWidth />
 */
export function Input({ variant = 'outlined', ...props }: InputProps) {
  return <TextField variant={variant} {...props} />
}
