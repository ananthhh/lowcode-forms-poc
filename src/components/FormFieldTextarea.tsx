export interface IFormFieldTextarea {
  type: "FORM_FIELD_TEXTAREA"
  id: string
  label: string
  attributes: Record<string, any>
}
function FormFieldTextarea(props: IFormFieldTextarea) {
  return (
    <div className="my-2 flex flex-col">
      <label className="text-sm font-medium" htmlFor={props.id}>
        {props.label}
      </label>
      <textarea
        className="textarea mt-1 w-64"
        placeholder="Enter a value"
        name={props.id}
        id={props.id}
        {...props.attributes}
      />
    </div>
  )
}

export default FormFieldTextarea
