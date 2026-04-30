/**
 * NOTE: The sample login API for RTK Query
 */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { LoginInput } from '@/components/molecules/LoginForm'
import type { User } from '@/types'

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (build) => ({
    login: build.mutation<User, LoginInput>({
      query: (credentials) => {
        return {
          url: 'api/v1/login',
          method: 'POST',
          body: { ...credentials },
        }
      },
    }),
  }),
})

// Export hooks for usage
export const {
  useLoginMutation,
  // other endpoints will generate more hooks here
} = userApi
