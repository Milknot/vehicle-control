export interface ApiResponse {
    message: string
    staus?: number
    data?: any | null
    errors?: Array<any> | null
}
