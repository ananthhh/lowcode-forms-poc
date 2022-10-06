export interface IFormFieldCheckbox {
  type: "FORM_FIELD_CHECKBOX"
  id: string
  label: string
  attributes: Record<string, any>
  values: Array<{ value: string; label: string }>
}
function FormFieldCheckbox(props: IFormFieldCheckbox) {
  return (
    <div className="my-2 mt-4 flex flex-col space-y-2">
      <label className="text-sm font-medium" htmlFor={props.id}>
        {props.label}
      </label>
      {props.values.map((f) => (
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            className="checkbox"
            name={props.id}
            id={props.id + f.value}
            value={f.value}
            {...props.attributes}
          />
          <label
            className="ml-3 text-sm font-medium"
            htmlFor={props.id + f.value}
          >
            {f.label}
          </label>
        </div>
      ))}
    </div>
  )
}

export default FormFieldCheckbox
