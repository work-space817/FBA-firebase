
import { IUser } from "../../components/auth/login/types"

export interface IAuthUser{
    isAuth: boolean 
    user?: IUser
}
// export interface IHeaderTitle{
//     title: string
//     description: string
// }

export enum AuthUserActionType{
    LOGIN_USER = "AUTH_LOGIN_USER",
    LOGOUT_USER = "AUTH_LOGOUT_USER"
}

// export enum HeaderTitleActionType{
//     OVERVIEW = "TITLE_OVERVIEW",
//     //
//     //
//     SETTINGS = "TITLE_SETTINGS"
// }