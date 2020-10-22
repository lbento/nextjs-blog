export interface IErrorResponse {
    message: string,
    success?: boolean,
    error: {
        tracker_id: string,
        type: string
    }
}