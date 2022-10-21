import { useFormField } from "./FormField"

export interface IFormFieldInput {
  type: "FORM_FIELD_INPUT"
  id: string
  label: string
  attributes: Record<string, any>
}
function FormFieldInput(props: IFormFieldInput) {
  const { isInvalid } = useFormField(props.id)
  return (
    <div className="my-2 flex flex-col">
      <label className="text-sm font-medium" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className={`input mt-1 w-64 ${isInvalid ? "border-error" : ""}`}
        type="text"
        placeholder="Enter a value"
        name={props.id}
        id={props.id}
        {...props.attributes}
      />
    </div>
  )
}

export default FormFieldInput
