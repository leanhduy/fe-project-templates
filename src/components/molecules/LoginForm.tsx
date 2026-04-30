import styled from '@emotion/styled'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

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

/**
 * Molecule: LoginForm
 *
 */
const LoginForm = ({ className }: LoginFormProps) => {
  const [login, { isLoading }] = useLoginMutation()

  const {
    control,
    handleSubmit,
    // formState: { errors },
  } = useForm<LoginInput>()

  const onSubmit: SubmitHandler<LoginInput> = async (data) => {
    // Print the form data to the console
    const doLogin = async () => {
      const res = await login(data)
      if (res.error) {
        const message = getErrorMessage(res.error)
        toast.error(message)
      } else {
        toast.success(`Welcome Back, ${res.data.name}!`)
      }
    }

    await doLogin()
  }

  return (
    <form
      onSubmit={void handleSubmit(onSubmit)} // Q&A: Is this the HOF pattern? Why do we need to wrap onSubmit with handleSubmit?
      className={className}
    >
      <div className={'form-input'}>
        <label htmlFor="username">Username</label>
        <FormTextInput name="username" control={control} />
      </div>
      <div className={'form-input'}>
        <label htmlFor="password">Password</label>
        <FormTextInput name="password" control={control} />
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

  label {
    min-width: 80px;
  }
  input {
    flex: 1;
  }
`

export default StyledLoginForm
