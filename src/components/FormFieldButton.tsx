import { useState } from "react"
import { Link } from "react-router-dom"
import { Dialog, DialogContent, DialogTrigger } from "./Dialog"
import FormViewer, { IForm } from "./FormViewer"

export interface IFormFieldButton {
  type: "FORM_FIELD_BUTTON"
  id: string
  label: string
  attributes: Record<string, any>
  modal?: IForm
  link?: string
}
function FormFieldButton(props: IFormFieldButton) {
  const [open, setOpen] = useState(false)
  const Button = () => (
    <div className="my-2">
      <button className="btn btn-primary shrink" type="button">
        {props.label}
      </button>
    </div>
  )
  if (props.modal != null && props.modal !== undefined) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button />
        </DialogTrigger>
        <DialogContent>
          <div className="modal modal-open">
            <div className="modal-box">
              <FormViewer {...props.modal} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }
  if (props.link !== null && props.link !== undefined) {
    return (
      <Link to={`/form/${props.link}`}>
        <Button />
      </Link>
    )
  }
  return <Button />
}

export default FormFieldButton
