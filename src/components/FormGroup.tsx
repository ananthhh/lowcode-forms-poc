import FormField, { IFormField } from "./FormField"

export interface IFormGroup {
  type: "FORM_GROUP"
  id: string
  title: string
  components: IFormField[]
}

function FormGroup(props: IFormGroup) {
  const { components, title, id } = props
  return (
    <div
      id={id}
      className="collapse collapse-open collapse-plus rounded-box mb-4 border border-base-300 bg-base-200"
    >
      <h2 className="collapse-title text-xl font-medium">{title}</h2>
      <div className="collapse-content bg-base-100">
        {components.map((c) => (
          <FormField {...c} />
        ))}
      </div>
    </div>
  )
}

export default FormGroup
