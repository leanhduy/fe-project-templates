import styled from '@emotion/styled'
import { zodResolver } from '@hookform/resolvers/zod'
import Typography from '@mui/material/Typography'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button, FormTextInput } from '@/components/atoms'
import { useLoginMutation } from '@/services/userApi.ts'
import { getErrorMessage } from '@/utils/errorHandling.ts'

// Types / Interfaces
interface LoginFormProps {
  className?: string
}

export interface LoginInput {
  username: string
  password: string
}

// Define the schema
const schema = z.object({
  username: z.string().min(3, 'Username must be at least 3 characters'),
  password: z.string().min(3, 'Password must be at least 3 characters'),
})

type LoginFormSchema = z.infer<typeof schema>

/**
 * Molecule: LoginForm
 *
 */
const LoginForm = ({ className }: LoginFormProps) => {
  const [login, { isLoading }] = useLoginMutation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<LoginFormSchema> = (data) => {
    const res = login(data) // This retuns a Promise

    // Handle the promise
    res
      .then((data) => {
        if (data.error) {
          toast.error(getErrorMessage(data.error))
        } else {
          toast.success('Login successful!')
        }
      })
      .catch((error: unknown) => {
        toast.error(getErrorMessage(error))
      })
  }

  return (
    <form
      onSubmit={(e) => {
        void handleSubmit(onSubmit)(e)
      }}
      className={className}
    >
      <div className={'form-input'}>
        <label htmlFor="username">Username</label>
        <FormTextInput name="username" control={control} />
        <Typography color="error" className="error">
          {errors.username?.message}
        </Typography>
      </div>
      <div className={'form-input'}>
        <label htmlFor="password">Password</label>
        <FormTextInput name="password" control={control} />
        <Typography color="error" className="error">
          {errors.password?.message}
        </Typography>
      </div>

      <Button type="submit" variant="contained" fullWidth disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  )
}

const StyledLoginForm = styled(LoginForm)`
  border: 1px solid #d9d9d9;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 24px;

  .form-input {
    min-height: 32px;
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .error {
  }

  label {
    min-width: 80px;
  }
`

export default StyledLoginForm
