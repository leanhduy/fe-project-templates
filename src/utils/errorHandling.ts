// src/utils/errorHandling.ts
import type { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import type { SerializedError } from 'vitest'

/**
 * Type guard to check if error is FetchBaseQueryError
 * FetchBaseQueryError has status and data properties
 */
export function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === 'object' && error !== null && 'status' in error && 'data' in error
}

/**
 * Type guard to check if error is SerializedError
 * SerializedError has message property
 */
export function isSerializedError(error: unknown): error is SerializedError {
  return typeof error === 'object' && error !== null && 'message' in error
}

/**
 * Helper to get error message from any error type
 */
export function getErrorMessage(error: unknown): string {
  if (isFetchBaseQueryError(error)) {
    // API error response (4xx, 5xx)
    if (typeof error.data === 'object' && error.data !== null && 'message' in error.data) {
      return (error.data as { message: string }).message
    }
    return `Error ${String(error.status)}`
  }

  if (isSerializedError(error)) {
    // JavaScript error
    return error.message || 'Unknown error'
  }

  return 'Unknown error occurred'
}
