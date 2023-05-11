// Permissions

const METHODS = ["GET", "POST", "PUT", "PATCH", "DELETE"]

export const DEFAULT = [
    "financials.POST" // create new financal request
]

// how to separate reading all users from own user?
export const USERS_READ = [
    "users.GET"
]

export const USERS_WRITE = [
    "users.POST",
    'users.PUT',
    "users.PATCH",
    "users.DELETE"
]

export const POSITIONS_READ = [
    "positions.GET"
]

export const POSITIONS_WRITE = [
    "positions.POST",
    'positions.PUT',
    "positions.PATCH",
    "positions.DELETE"
]

export const FINANCIALS_READ = [
    "financials.GET"
]

export const ADMIN = []