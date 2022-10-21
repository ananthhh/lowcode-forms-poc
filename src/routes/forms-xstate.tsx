/**
 * 1 input field with validation
 * 1 radio button
 * 1 textarea show or hide based on radio answer
 * Submit allowed only when input is valid, radio is not empty and textarea based on radio
 * Display fields in red with appropriate error message
 * Show popup where it displays all error message and a way to focus the fields
 * All logic should be handled with Xstate
 * UI should be rendered with builder.io component
 * BONUS - A date field and a calculated age field
 */

import { FormContextProvider } from "../components/FormContext"
import FormViewer, { IForm } from "../components/FormViewer"

const docRecieved: IForm = {
  id: "form-doc-received",
  title: "FUR Case - Review Document Received",
  submit: "Next",
  components: [
    {
      type: "FORM_GROUP",
      id: "details",
      title: "Details",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_INPUT",
            id: "case_number",
            label: "Case Number",
            attributes: { disabled: true, defaultValue: "FUR40002211" },
          },
        },
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_INPUT",
            id: "date",
            label: "Date",
            attributes: {},
          },
        },
      ],
    },
    {
      type: "FORM_GROUP",
      id: "documents",
      title: "Core Documents",
      components: [
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_RADIO",
            id: "has_documents_received",
            label: "Case Agreement",
            attributes: {},
            values: [
              {
                label: "Received",
                value: "yes",
              },
              {
                label: "Not Received",
                value: "no",
              },
            ],
          },
        },
        {
          type: "FORM_FIELD",
          field: {
            type: "FORM_FIELD_TEXTAREA",
            id: "reason",
            label: "Reason",
            attributes: {},
          },
        },
      ],
    },
  ],
}

function FormsXstateRoute() {
  return (
    <FormContextProvider>
      <FormViewer {...docRecieved} />
    </FormContextProvider>
  )
}

export default FormsXstateRoute
