import FormGroup, { IFormGroup } from "./FormGroup"
import FormField, { IFormField } from "./FormField"

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

  return (
    <form className="m-6 flex flex-col">
      {props.breadcrumbs !== null && props.breadcrumbs !== undefined ? (
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
        <button type="submit" className="btn btn-primary">
          {props.submit}
        </button>
      </div>
    </form>
  )
}

export default FormViewer
