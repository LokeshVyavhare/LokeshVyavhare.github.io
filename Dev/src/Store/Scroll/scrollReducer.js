import { addRef, scroll } from "./action.types"

const iniState = {

}
export const scrollReducer = (state=iniState, {type, payload}) => {
    switch(type){
        case addRef:{
        const {key, ref} = payload;
        state[key] = ref
        console.log(state, key, ref)
            return ({
                ...state,
            })
        }

        case scroll:{
            state[payload].current.scrollIntoView({
                     behavior: "smooth"
                 })
            return state;
        }
        default:{
            return state;
        }
    }
    
}