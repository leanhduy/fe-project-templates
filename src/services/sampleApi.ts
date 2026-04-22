/**
 * NOTE: The sample API for RTK Query
 * Used as a reference when adding RTK Query to a specific model / feature
 * See docs/03-rtk-query-setup.md for setup details and naming conventions.
 */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { Todo } from '@/features/sample/sampleSlice.ts'

export const sampleApi = createApi({
  reducerPath: 'sampleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/todos' }),
  endpoints: (build) => ({
    getAllTodos: build.query<Todo[], undefined>({
      query: () => '',
    }),
  }),
})

// Export hooks for usage
export const {
  useGetAllTodosQuery,
  // other endpoints will generate more hooks here
} = sampleApi
