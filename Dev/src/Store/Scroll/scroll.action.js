import { addRef, scroll } from "./action.types"


export const AddRef = ({key, ref}) => {
    return ({type:addRef, payload:{key, ref}})
}

export const ScrollTo = (ref) => {
    return ({type:scroll, payload:ref})
}