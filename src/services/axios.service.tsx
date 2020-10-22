import axios from 'axios';
import { IErrorResponse } from '../interfaces/error-response.interface';

const headers = {
    "Content-Type":  "application/json",
    "Accept-Language": "pt-br",
    "client-id": process.env.NEXT_PUBLIC_clientId,
    //"Tracker-Id": process.env.NEXT_PUBLIC_trackerId
}

const baseUrl = process.env.NEXT_PUBLIC_baseUrl;

export async function post<T>(url: string, data: any): Promise<T> {

    try {
        const response = await axios.post<T>(`${baseUrl}${url}`, { ...data }, { headers });
        return response.data;
    }
    catch (error) {
        const errorResponse: IErrorResponse = error.response.data;
        if(errorResponse.message) {
            throw new Error(errorResponse.message)
        }
        else {
            throw new Error('Não foi possível realizar essa ação. Tente mais tarde')
        }
    }
};