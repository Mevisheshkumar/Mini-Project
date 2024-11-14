import { createContext } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextPrvider = (props) => {


    const onSent = async (prompt) => {
        await run(prompt)
    }

    onSent("what is 2+2")

    const contextValue = {

    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextPrvider