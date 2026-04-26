// NOTE: Type guard functions for runtime type checking

import type { ApiError } from '@/types/common.ts'
import type { User } from '@/types/models.ts'

/**
 * Type guard for ApiError
 */
export function isApiError(error: unknown): error is ApiError {
  return typeof error === 'object' && error !== null && 'code' in error && 'message' in error
}

/**
 * NOTE: EXAMPLE - Type guard for User
 */
export function isUser(obj: unknown): obj is User {
  return typeof obj === 'object' && obj !== null && 'id' in obj && 'email' in obj && 'name' in obj
}

/**
 * NOTE: EXAMPLE - Type guard for User array
 */
export function isUserArray(obj: unknown): obj is User[] {
  return Array.isArray(obj) && obj.every((item) => isUser(item))
}
