import { useActor } from "@xstate/react"
import { useContext } from "react"
import { FormContext } from "./FormContext"
import FormFieldButton, { IFormFieldButton } from "./FormFieldButton"
import FormFieldCheckbox, { IFormFieldCheckbox } from "./FormFieldCheckbox"
import FormFieldFile, { IFormFieldFile } from "./FormFieldFile"
import FormFieldInput, { IFormFieldInput } from "./FormFieldInput"
import FormFieldRadio, { IFormFieldRadio } from "./FormFieldRadio"
import FormFieldSelect, { IFormFieldSelect } from "./FormFieldSelect"
import FormFieldTextarea, { IFormFieldTextarea } from "./FormFieldTextarea"

export interface IFormField {
  type: "FORM_FIELD"
  field:
    | IFormFieldRadio
    | IFormFieldInput
    | IFormFieldCheckbox
    | IFormFieldSelect
    | IFormFieldFile
    | IFormFieldTextarea
    | IFormFieldButton
}

export function useFormField(fieldId: string) {
  const formContext = useContext(FormContext)
  const [state] = useActor(formContext.formService)

  const shouldHide = state?.matches(fieldId + ".hidden")
  const isInvalid = state?.matches(fieldId + ".visible.invalid")

  return { shouldHide, isInvalid }
}

function FormField(props: IFormField) {
  const { shouldHide } = useFormField(props.field.id)
  if (shouldHide) return null
  switch (props.field.type) {
    case "FORM_FIELD_RADIO":
      return <FormFieldRadio {...props.field} />
    case "FORM_FIELD_INPUT":
      return <FormFieldInput {...props.field} />
    case "FORM_FIELD_CHECKBOX":
      return <FormFieldCheckbox {...props.field} />
    case "FORM_FIELD_SELECT":
      return <FormFieldSelect {...props.field} />
    case "FORM_FIELD_FILE":
      return <FormFieldFile {...props.field} />
    case "FORM_FIELD_TEXTAREA":
      return <FormFieldTextarea {...props.field} />
    case "FORM_FIELD_BUTTON":
      return <FormFieldButton {...props.field} />
  }
}

export default FormField
