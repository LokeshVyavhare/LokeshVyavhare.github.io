import { useState } from 'react'
import './Ham.css'

export const Ham = ({toggle, children}) => {

    const [state, setState] = useState(false);

    return <div className={state?"active":''} onClick={()=>{
        toggle();
        setState(!state);
        console.log(state)
    }}>
        <div  className="ham">
        <div className="hamStick ham1"></div>
        <div className="hamStick ham2"></div>
        <div className="hamStick ham3"></div>
        </div>
        <div>
            {children}
        </div>
    </div>
}