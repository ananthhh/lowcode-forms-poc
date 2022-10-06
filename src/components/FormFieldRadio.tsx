export interface IFormFieldRadio {
  type: "FORM_FIELD_RADIO"
  id: string
  label: string
  attributes: Record<string, any>
  values: Array<{ value: string; label: string }>
}
function FormFieldRadio(props: IFormFieldRadio) {
  return (
    <div className="my-2 mt-4 flex flex-col space-y-2">
      <label className="text-sm font-medium" htmlFor={props.id}>
        {props.label}
      </label>
      {props.values.map((f) => (
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            className="radio"
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

export default FormFieldRadio
