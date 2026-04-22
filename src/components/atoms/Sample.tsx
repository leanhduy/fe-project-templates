import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Button } from '@/components/atoms/Button.tsx'
import { increment, reset, selectSample } from '@/features/sample/sampleSlice'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { useGetAllTodosQuery } from '@/services/sampleApi.ts'

interface SampleProps {
  className?: string
}

const Sample = ({ className }: SampleProps) => {
  const dispatch = useAppDispatch()
  const sample = useAppSelector(selectSample)
  const { data: todos, isLoading: todosLoading } = useGetAllTodosQuery(undefined)

  return (
    <>
      <Box className={className}>
        <Box className="card-container">
          <Typography variant="h3">Counter: {sample.counter}</Typography>
          <div className={'actions'}>
            <Button variant="contained" onClick={() => dispatch(increment())}>
              Increment
            </Button>
            <Button variant="outlined" onClick={() => dispatch(reset())}>
              Reset
            </Button>
          </div>
        </Box>
        <Box className="card-container">
          {todosLoading && <Typography variant="h3">Fetching Todos...</Typography>}
          {todos && <Typography variant="h3">Todos Count: {todos.length}</Typography>}
        </Box>
      </Box>
    </>
  )
}

const StyledSample = styled(Sample)`
  padding: 1rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  .card-container {
    padding: 1rem;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    border: 1px solid blue;
    width: 100%;
  }

  .actions {
    display: flex;
    gap: 1rem;
  }
`

export default StyledSample
