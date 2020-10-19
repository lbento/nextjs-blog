import Signup from "../pages/signup";

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