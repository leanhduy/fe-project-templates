import styled from '@emotion/styled'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'

import { Button } from '@/components/atoms/Button.tsx'
import { fetchTodos, increment, reset, selectSample } from '@/features/sample/sampleSlice.ts'
import { useAppDispatch, useAppSelector } from '@/hooks'

interface SampleProps {
  className?: string
}

const Sample = ({ className }: SampleProps) => {
  const dispatch = useAppDispatch()
  const sample = useAppSelector(selectSample)

  // Demonstrate fetching todos on component mount
  useEffect(() => {
    // Note: Explicitly mark the promise as ignored
    void dispatch(fetchTodos())
  }, [dispatch])

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
          <Typography variant="h3">Todos Count: {sample.todos.length}</Typography>
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
