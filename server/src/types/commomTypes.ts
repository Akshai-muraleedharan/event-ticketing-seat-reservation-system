export type zodRequestSchema = {
    body?: unknown,
    query?: Record<string, string>,
    params?: Record<string, string>
}