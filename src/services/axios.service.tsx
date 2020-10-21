import axios from 'axios';
import { IErrorResponse } from '../interfaces/error-response.interface';

const headers = {
    "Content-Type":  "application/json",
    "Accept-Language": "pt-br",
    "client-id": process.env.clientId,
    "Tracker-Id": process.env.trackerId
}

const baseUrl = process.env.baseUrl;

export async function post<T>(url: string, data: any): Promise<T> {

    try {
        const response = await axios.post<T>(`${baseUrl}${url}`, { ...data }, { headers });
        return response[0] as T;
      
    }
    catch (error) {
        const errorResponse: IErrorResponse[] = error;
        if(errorResponse[0] && errorResponse[0].error) {
            throw new Error(errorResponse[0].error.item)
        }
        else {
            throw new Error('Não foi possível realizar essa ação. Tente mais tarde')
        }
    }
};

export async function get<T>(url: string, data: any): Promise<T> {

    try {
        const response = await axios.get<T>(`${baseUrl}${url}/${data}`, { headers });
        return response[0] as T;
      
    }
    catch (error) {
        const errorResponse: IErrorResponse[] = error;
        if(errorResponse[0] && errorResponse[0].error) {
            throw new Error(errorResponse[0].error.item)
        }
        else {
            throw new Error('Não foi possível realizar essa ação. Tente mais tarde')
        }
    }
};