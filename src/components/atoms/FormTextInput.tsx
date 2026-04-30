import TextField from '@mui/material/TextField'
import { type Control, Controller, type FieldValues, type Path } from 'react-hook-form'

export interface FormTextInputProps<T extends FieldValues = FieldValues> {
  name: keyof T
  control: Control<T>
  label?: string
  type?: string
  // Other TextField props can be added here as needed
}

/**
 * Atom: FormTextInput
 *
 * Use React Hook Form's Controller to wrap MUI's TextField componnet
 */
export const FormTextInput = <T extends FieldValues>({
  name,
  control,
  label,
  type = 'text',
}: FormTextInputProps<T>) => {
  return (
    <Controller
      name={name as Path<T>}
      control={control}
      render={({ field }) => <TextField {...field} label={label} type={type} fullWidth />}
    />
  )
}
