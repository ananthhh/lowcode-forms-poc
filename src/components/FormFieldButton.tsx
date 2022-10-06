import { IFormGroup } from "./FormGroup"

export interface IFormFieldButton {
  type: "FORM_FIELD_BUTTON"
  id: string
  label: string
  attributes: Record<string, any>
  modal?: IFormGroup
  link?: string
}
function FormFieldButton(props: IFormFieldButton) {
  return (
    <div className="my-2">
      <button className="btn btn-primary shrink">{props.label}</button>
    </div>
  )
}

export default FormFieldButton
