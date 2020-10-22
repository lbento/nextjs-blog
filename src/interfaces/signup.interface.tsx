export interface ISignup {
    email: string | string[],
    password: string | string[],
    name: string,
    gender: number,
    birthday: string,
    nationality: string,
    phone: string,
    identity: {
        type: number,
        number: string
    }
}
export interface IValidateEmail {
    email: string;
    password: string
}

export interface IEmailNoExists {
    is_email_registered: boolean
    message: string
}