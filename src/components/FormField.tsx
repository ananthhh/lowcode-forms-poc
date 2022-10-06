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
}

function FormField(props: IFormField) {
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
  }
}

export default FormField
