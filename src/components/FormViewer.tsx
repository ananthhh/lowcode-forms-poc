import FormGroup, { IFormGroup } from "./FormGroup"
import FormField, { IFormField } from "./FormField"
import { FormContext } from "./FormContext"
import { useContext, useRef } from "react"
import { useActor } from "@xstate/react"
import * as R from "remeda"

export interface IForm {
  id: string
  title: string
  breadcrumbs?: Array<{ link: string; title: string }>
  components: Array<IFormGroup | IFormField>
  submit: string
}
function FormViewer(props: IForm) {
  //  const tabIds = schema.tabs.map(t => t.id);
  //  const [currentTab, setCurrentTab] = useState(tabIds[0]);
  //  const [errors, setErrors] = useState<TErrors>({});

  // const onSubmit = (event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();

  //   // @ts-ignore
  //   const formData = new FormData(event.target);
  //   const data: Record<string, string | string[]> = {};
  //   for (const pair of formData.entries()) {
  //     if (data[pair[0]]) {
  //       data[pair[0]] = [data[pair[0]] as string, pair[1] as string]
  //       break;
  //     }
  //     data[pair[0]] = pair[1] as string;
  //   }
  //   console.log(data);
  //   setErrors(validate(data, validation));
  // }
  const { formService } = useContext(FormContext)
  const [state] = useActor(formService)
  const { send } = formService
  const formRef = useRef<HTMLFormElement>(null)

  const isFormInvaild = JSON.stringify(state?.value)?.includes("invalid")

  const onFormInput = () => {
    if (formRef.current === null) return
    const formData = new FormData(formRef.current)
    const data: Record<string, string | string[]> = {}
    for (const [key, value] of formData.entries()) {
      if (R.isDefined(data[key])) {
        data[key] = [data[key] as string, value as string]
        break
      }
      data[key] = value as string
    }
    send("input", { formData: data })
  }
  return (
    <form
      className="m-6 flex flex-col"
      onBlur={onFormInput}
      onChange={onFormInput}
      ref={formRef}
    >
      {R.isDefined(props.breadcrumbs) ? (
        <div className="breadcrumbs max-w-xs text-sm">
          <ul>
            {props.breadcrumbs.map((b) => (
              <li>{b.title}</li>
            ))}
            <li>{props.title}</li>
          </ul>
        </div>
      ) : (
        <h1 className="text-lg font-medium leading-6">{props.title}</h1>
      )}
      <div className="divider" />
      {props.components.map((c) =>
        c.type === "FORM_FIELD" ? <FormField {...c} /> : <FormGroup {...c} />
      )}
      <div className="flex justify-end space-x-2">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isFormInvaild}
        >
          {props.submit}
        </button>
      </div>
    </form>
  )
}

export default FormViewer
