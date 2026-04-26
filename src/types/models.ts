// NOTE: Domain models (entities)
import type { ApiError } from '@/types'

// NOTE: Below are 3 examples for the sample application domain (users and posts). In a real app, you would have more entities and more complex relationships. The key is to keep these models focused on the core data structure without including UI-specific fields or logic.
/**
 * User entity
 * Core user data model
 */
export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  createdAt: string
  updatedAt: string
}

/**
 * Auth state in Redux
 * Used in auth slice for state management
 */
export interface AuthState {
  user: User | null
  token: string | null
  refreshToken: string | null
  isAuthenticated: boolean
  isLoading: boolean
  error: ApiError | null
}

/**
 * Post entity
 */
export interface Post {
  id: string
  title: string
  content: string
  author: User
  createdAt: string
  updatedAt: string
}
