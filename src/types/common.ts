// ============================================================================
// src/types/common.ts
// ============================================================================
// Truly common types used across the application

/**
 * Note: Generic async operation state
 * Use this for Redux slices when managing async operations
 */
export type AsyncState<T, E = Error> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: E }

/**
 * Note: Standard API error response
 * Use this when defining RTK Query error types
 */
export interface ApiError {
  code: string
  message: string
  details?: Record<string, unknown>
}

/**
 * Note: Paginated response for list endpoints
 * Use with RTK Query for list operations (getUsers, getPosts, etc.)
 */
export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  pageSize: number
}

/**
 * Note: Lazy-evaluated value
 * Use when a value can be computed at runtime
 */
export type Lazy<T> = T | (() => T)

/**
 * Type-safe event handler
 * Use for callbacks, event emitters
 */
export type EventHandler<T = void> = (data?: T) => void

/**
 * Note: API response wrapper
 * Use as return type for API calls
 */
export interface ApiResponse<T> {
  data: T
  status: number
  message?: string
}
