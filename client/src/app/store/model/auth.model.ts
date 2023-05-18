
export interface AuthInterfaceModel {
    id: number | null,
    email: string | null,
    userFirstName: string | null,
    userSecondName: string | null,
    token: string | null,
    isAuth: boolean,
}

export class AuthUpdate {
    static readonly type = "[Auth]: Auth update";
    constructor(public payload: AuthInterfaceModel) { }
}