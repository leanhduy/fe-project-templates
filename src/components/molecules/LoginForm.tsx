import styled from '@emotion/styled'
import { type SubmitEvent } from 'react'

import { Button } from '@/components/atoms'
import { useLoginMutation } from '@/services/userApi.ts'
// import TextField from '@mui/material/TextField'
interface LoginFormProps {
  className?: string
}

/**
 * Molecule: LoginForm
 *
 */
const LoginForm = ({ className }: LoginFormProps) => {
  const [login] = useLoginMutation()

  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    await login({ username: 'admin', password: 'admin' })
  }

  return (
    <form
      onSubmit={(e) => {
        void handleSubmit(e)
      }}
      className={className}
    >
      {/*<TextField label="username" type="username" fullWidth required />*/}
      {/*<TextField label="Password" type="password" fullWidth required />*/}
      <Button type="submit" variant="contained" fullWidth>
        Login
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
`

export default StyledLoginForm
