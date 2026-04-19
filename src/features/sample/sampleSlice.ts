/**
 * NOTE: The sample slice is a simple example of how to use Redux Toolkit to create a slice of state for a counter and a list of todos, with following purposes:
 *  - counter: extracting state from store and dispatching actions to update the state
 *  - todos: handle async data fetching and state management for a list of todos, from mock API service (https://jsonplaceholder.typicode.com/todos)
 */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import type { RootState } from '@/store'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface SampleState {
  counter: number
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  error: string | null
  todos: Todo[]
}

export const initialSampleState: SampleState = {
  counter: 0,
  loading: 'idle',
  error: null,
  todos: [],
}

// Async thunk for API call
export const fetchTodos = createAsyncThunk('sample/fetchTodos', async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  // Cast json() to the expected Todo[] type
  return (await response.json()) as Todo[]
})

export const sampleSlice = createSlice({
  name: 'sample',
  initialState: initialSampleState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    reset: (state) => {
      state.counter = 0
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = 'pending'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = 'succeeded'
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = 'failed'
        state.error = action.error.message ?? 'Failed to fetch todos'
      })
  },
})

export const { increment, reset } = sampleSlice.actions

export const selectSample = (state: RootState) => ({
  counter: state.sample.counter,
  todos: state.sample.todos,
})

export default sampleSlice.reducer
