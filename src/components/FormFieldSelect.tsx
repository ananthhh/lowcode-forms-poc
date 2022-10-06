export interface IFormFieldSelect {
  type: "FORM_FIELD_SELECT"
  id: string
  label: string
  attributes: Record<string, any>
  values: Array<{ value: string; label: string }>
}
function FormFieldSelect(props: IFormFieldSelect) {
  return (
    <div className="my-2 flex flex-col">
      <label className="text-sm font-medium" htmlFor={props.id}>
        {props.label}
      </label>
      <select
        className="select w-64"
        name={props.id}
        id={props.id}
        {...props.attributes}
      >
        {props.values.map((f) => (
          <option value={f.value}>{f.label}</option>
        ))}
      </select>
    </div>
  )
}

export default FormFieldSelect
