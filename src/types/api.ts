// NOTE: API-specific request/response types

/**
 * Common request headers type
 */
export interface RequestHeaders {
  'Content-Type': 'application/json' | 'multipart/form-data'
  Authorization?: string
  'Accept-Language'?: string
  [key: string]: string | undefined
}

/**
 * Pagination query parameters
 * Use as params for list endpoints
 */
export interface PaginationParams {
  page: number
  pageSize: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}

/**
 * Login request
 */
export interface LoginRequest {
  email: string
  password: string
}

/**
 * Login response with token
 */
export interface LoginResponse {
  token: string
  refreshToken?: string
  user: {
    id: string
    email: string
    name: string
  }
}
