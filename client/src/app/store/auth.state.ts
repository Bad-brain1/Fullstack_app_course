import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AuthInterfaceModel, AuthUpdate } from "./model/auth.model";

@State<AuthInterfaceModel>({
    name:'AuthState',
    defaults:{
        id:null,
        email:null,
        userFirstName:null,
        userSecondName:null,
        token:null,
        isAuth:false,
    }
})
@Injectable()
export class AuthState{
    @Selector()
    static getAuthObject(state: AuthInterfaceModel){
        return state;
    }
    @Selector()
    static getIsAuth(state: AuthInterfaceModel):boolean{
        return state.isAuth;
    }
    @Selector()
    static getAuthUserId(state:AuthInterfaceModel){
        return state.id
    }
    @Action(AuthUpdate)
    updateAuthModel(ctx:StateContext<AuthInterfaceModel>, action: AuthUpdate){
        ctx.patchState({
            id:action.payload.id,
            email: action.payload.email,
            userFirstName: action.payload.userFirstName,
            userSecondName: action.payload.userSecondName,
            token:action.payload.token,
            isAuth:action.payload.isAuth,
        })
    }
}

