export interface IError {
    type: string,
    msg: string,
    id: number
}

export interface IErrorsState {
    errors: IError[]
}