export interface IFormFieldFile {
  type: "FORM_FIELD_FILE"
  id: string
  label: string
  attributes: Record<string, any>
}
function FormFieldFile(props: IFormFieldFile) {
  return (
    <div className="my-2 flex flex-col">
      <label className="text-sm font-medium" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className="input mt-1 w-64"
        type="file"
        placeholder="Enter a value"
        name={props.id}
        id={props.id}
        {...props.attributes}
      />
    </div>
  )
}

export default FormFieldFile
