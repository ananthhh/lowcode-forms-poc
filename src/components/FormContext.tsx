import { createContext, PropsWithChildren } from "react"
import { useInterpret } from "@xstate/react"

import { InterpreterFrom } from "xstate"
import { formMachine } from "./formMachine"

export const FormContext = createContext({
  formService: {} as InterpreterFrom<typeof formMachine>,
})

export const FormContextProvider = (props: PropsWithChildren) => {
  const formService = useInterpret(formMachine)

  return (
    <FormContext.Provider value={{ formService }}>
      {props.children}
    </FormContext.Provider>
  )
}
